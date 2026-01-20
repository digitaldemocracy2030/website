import { privateRepoStorage } from "./_storage.ts";

import lumeCMS from "lume/cms/mod.ts";
import type Site from "lume/core/site.ts";
import type { CMSContent } from "lume/cms/types.ts";

const cms = lumeCMS({
  site: {
    name: "デジタル民主主義2030",
    description: "デジタル民主主義2030プロジェクトポータルサイトのCMS",
    url: "https://dd2030.org",
    body: `
    <p>ここで「お知らせ」のコンテンツを編集できます。 draft は private repository へ保存されます。</p>
    `,
  },
});
const cmsPassword = Deno.env.get("CMS_PASSWORD");
if (!cmsPassword) {
  throw new Error("CMS_PASSWORD is not set in environment variables");
}

cms.auth({ dd2030: cmsPassword });

cms.storage("gh", privateRepoStorage);

function dateToZoned(dateStr?: string | Date) {
  if (typeof dateStr === "string") {
    return Temporal.PlainDate.from(dateStr).toZonedDateTime("Asia/Tokyo");
  } else if (dateStr instanceof Date || dateStr === undefined) {
    return (dateStr || new Date()).toTemporalInstant().toZonedDateTimeISO(
      "Asia/Tokyo",
    );
  }
  throw new Error("Invalid date");
}

cms.collection({
  name: "topics_posts",
  store: "gh:topics/*.md",
  previewUrl: (path: string, cms: CMSContent, hasChanged: boolean) => {
    const site: Site = cms.data.site;
    const outputPath = path.replace(/\.md$/, ".html");
    const srcPath = "/topics/drafts.page.ts";
    if (hasChanged) {
      console.log("updating");
      site.update(new Set([srcPath]));
      console.log("updated");
    }
    return site.url(outputPath);
  },
  documentName: (data) => {
    return `${data.publish_on}-${data.title}.md`;
  },
  fields: [
    {
      name: "draft",
      type: "checkbox",
      value: true,
    },
    {
      name: "tags",
      type: "list",
    },
    {
      name: "title",
      type: "text",
      value: `${dateToZoned().toPlainDate()}のお知らせ`,
    },
    {
      name: "publish_on",
      type: "date",
      value: dateToZoned().toPlainDate().toString(),
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "content",
      type: "markdown",
      upload: "topics_files",
    },
  ],
});
cms.upload("topics_files", "gh:topics/files");

export default cms;
