import { merge } from "lume/core/utils/object.ts";
import { Page } from "lume/core/file.ts";
import { log } from "lume/core/utils/log.ts";
import sharp, { create } from "lume/deps/sharp.ts";

import type Site from "lume/core/site.ts";
import type Cache from "lume/core/cache.ts";

export interface ManifestOptions {
  /**
   * The input file to generate the icons
   * Accepted formats are SVG, PNG, JPG, GIF, BMP, TIFF, WEBP
   */
  input?: string | Record<number, string>;

  /**
   * The output path for the manifest.json file
   */
  output?: string;

  /**
   * The manifest configuration
   */
  name?: string;
  short_name?: string;
  theme_color?: string;
  background_color?: string;
  display?: "standalone" | "fullscreen" | "minimal-ui" | "browser";
  start_url?: string;
  scope?: string;

  /**
   * The icons to generate
   * By default it follows the recommendations from:
   * https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
   */
  icons?: ManifestIcon[];
}

export interface ManifestIcon {
  size: number;
  format?: "png" | "webp";
  purpose?: "any" | "maskable" | "any maskable";
}

export const defaults: ManifestOptions = {
  input: "/favicon.svg",
  output: "/manifest.json",
  name: undefined,
  short_name: undefined,
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
  start_url: undefined,
  scope: undefined,
  icons: [
    { size: 192, format: "png", purpose: "any" },
    { size: 512, format: "png", purpose: "any" },
  ],
};

interface ManifestIconEntry {
  src: string;
  sizes: string;
  type: string;
  purpose?: string;
}

interface Manifest {
  name?: string;
  short_name?: string;
  theme_color?: string;
  background_color?: string;
  display?: string;
  start_url?: string;
  scope?: string;
  icons: ManifestIconEntry[];
}

/**
 * A plugin to generate a web app manifest and icons from an SVG or PNG file
 * @see https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs
 */
export function manifest(userOptions?: ManifestOptions) {
  const options = merge(defaults, userOptions);
  // Use 512 as default size since that's the largest icon we generate
  const input = typeof options.input === "string"
    ? { 512: options.input }
    : options.input;

  return (site: Site) => {
    async function getContent(
      file: string,
    ): Promise<Uint8Array | string | undefined> {
      const content = file.endsWith(".svg")
        ? await site.getContent(file, false)
        : await site.getContent(file, true);

      if (!content) {
        log.warn(`[manifest plugin] Input file not found: ${file}`);
      }

      return content;
    }

    site.process(async function processManifestImages(_, pages) {
      const contents: Record<number, Uint8Array | string> = {};

      for (const [size, file] of Object.entries(input)) {
        const fileContent = await getContent(file);

        if (fileContent) {
          contents[Number(size)] = fileContent;
        }
      }

      if (!Object.keys(contents).length) {
        return;
      }

      const { cache } = site;
      const manifestIcons: ManifestIconEntry[] = [];

      for (const icon of options.icons!) {
        const content = getBestContent(contents, [icon.size]);
        if (!content) {
          continue;
        }
        const format = icon.format || "png";
        const url = `/icon-${icon.size}x${icon.size}.${format}`;

        // Generate the icon image
        pages.push(
          Page.create({
            url,
            content: await buildIcon(
              content,
              format as keyof sharp.FormatEnum,
              icon.size,
              cache,
            ),
          }),
        );

        // Add to manifest icons array
        const iconEntry: ManifestIconEntry = {
          src: url,
          sizes: `${icon.size}x${icon.size}`,
          type: `image/${format}`,
        };
        if (icon.purpose) {
          iconEntry.purpose = icon.purpose;
        }
        manifestIcons.push(iconEntry);
      }

      // Generate the manifest.json file
      const manifestContent: Manifest = {
        icons: manifestIcons,
      };

      if (options.name) {
        manifestContent.name = options.name;
      }
      if (options.short_name) {
        manifestContent.short_name = options.short_name;
      }
      if (options.theme_color) {
        manifestContent.theme_color = options.theme_color;
      }
      if (options.background_color) {
        manifestContent.background_color = options.background_color;
      }
      if (options.display) {
        manifestContent.display = options.display;
      }
      if (options.start_url) {
        manifestContent.start_url = options.start_url;
      } else {
        manifestContent.start_url = site.options.location.pathname;
      }
      if (options.scope) {
        manifestContent.scope = options.scope;
      }

      pages.push(
        Page.create({
          url: options.output,
          content: JSON.stringify(manifestContent, null, 2),
        }),
      );
    });

    // Add the manifest link to HTML pages
    site.process([".html"], function processManifestPages(pages) {
      for (const page of pages) {
        const { document } = page;

        // Add manifest link
        const link = document.createElement("link");
        link.setAttribute("rel", "manifest");
        link.setAttribute("href", site.url(options.output!));
        document.head.appendChild(link);
        document.head.appendChild(document.createTextNode("\n"));

        // Add theme-color meta tag if specified
        if (options.theme_color) {
          const meta = document.createElement("meta");
          meta.setAttribute("name", "theme-color");
          meta.setAttribute("content", options.theme_color);
          document.head.appendChild(meta);
          document.head.appendChild(document.createTextNode("\n"));
        }
      }
    });
  };
}

async function buildIcon(
  content: Uint8Array | string,
  format: keyof sharp.FormatEnum,
  size: number,
  cache?: Cache,
): Promise<Uint8Array> {
  if (cache) {
    const result = await cache.getBytes([content, format, size, "manifest"]);

    if (result) {
      return result;
    }
  }

  const svgOptions = {
    fitTo: { mode: "width", value: size },
  } as const;

  const image = await create(content, undefined, svgOptions)
    .resize(size, size)
    .toFormat(format)
    .toBuffer();

  if (cache) {
    cache.set([content, format, size, "manifest"], image);
  }

  return image;
}

function getBestContent(
  content: Record<number, Uint8Array | string>,
  sizes: number[],
): Uint8Array | string | undefined {
  const availableSizes = Object.keys(content).map(Number);
  if (availableSizes.length === 0) {
    return undefined;
  }

  const size = Math.min(...sizes);

  // Find the closest size available
  let bestSize = availableSizes[0];
  for (const s of availableSizes) {
    if (s <= size && s > bestSize) {
      bestSize = s;
    }
  }

  return content[bestSize];
}

export default manifest;
