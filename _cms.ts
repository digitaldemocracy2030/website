import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import Kv from "lume/cms/storage/kv.ts";

const kv = await Deno.openKv();
export const kvStorage = new Kv({ kv });

const cms = lumeCMS({
  site: {
    name: "デジタル民主主義2030",
    description: "デジタル民主主義2030プロジェクトポータルサイトのCMS",
    url: "https://dd2030.org",
    body: `
    <p>ここでブログのコンテンツを編集できます</p>
    `,
  },
});

cms.storage(
  "src",
  GitHub("kuboon/dd2030-website", Deno.env.get("GITHUB_TOKEN")!),
);

cms.storage("kv", kvStorage);
cms.upload("news_files", "src:news/files");

cms.collection({
  name: "news",
  store: "kv:news",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "text",
    },
  ],
});

cms.document({
  name: "landing-page",
  store: "src:index.yml",
  fields: [
    {
      name: "hero",
      type: "object",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "content",
          type: "markdown",
        },
      ],
    },
  ],
});
cms.collection({
  name: "news-posts",
  store: "src:news/*.md",
  documentName: (data) => {
    const date = new Date(data.published as number).toTemporalInstant()
      .toZonedDateTimeISO("Asia/Tokyo").toPlainDate();
    return `${date}-${data.title}.md`;
  },
  fields: [
    {
      name: "title",
      type: "text",
      value: new Date().toTimeString().slice(0, 5),
    },
    {
      name: "published",
      type: "datetime",
      value: new Date(),
    },
    {
      name: "content",
      type: "markdown",
      upload: "news_files",
    },
  ],
});
export default cms;
