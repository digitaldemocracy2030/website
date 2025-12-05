import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";

const cms = lumeCMS({
  site: {
    name: "デジタル民主主義2030",
    description: "デジタル民主主義2030プロジェクトポータルサイトのCMS",
    url: "https://dd2030.org",
    body: `
    <p>ここで「お知らせ」のコンテンツを編集できます。 save すると github プルリクエストが作成されます。</p>
    `,
  },
});

cms.storage(
  "gh",
  GitHub.create("digitaldemocracy2030/website/src", Deno.env.get("GITHUB_TOKEN")!),
);

cms.upload("news_files", "src:news/files");

cms.collection({
  name: "news-posts",
  store: "gh:news/*.md",
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
      type: "date",
      value: new Date(),
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "content",
      type: "markdown",
      upload: "news_files",
    },
  ],
});

export default cms;
