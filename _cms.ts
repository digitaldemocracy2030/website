import { JointStorage } from "./lume-ext/joint_storage.ts";

import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { da } from "npm:date-fns@4.1.0/locale";

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

const publicStorage = GitHub.create(
  "digitaldemocracy2030/website",
  Deno.env.get("GITHUB_TOKEN")!,
);
const draftStorage = GitHub.create(
  "digitaldemocracy2030/website-drafts",
  Deno.env.get("GITHUB_TOKEN")!,
);

const jointStorage = new JointStorage({
  draft: draftStorage,
  public: publicStorage,
});

cms.storage("gh", jointStorage);

const dateToZoned = (date = new Date()) =>
  date.toTemporalInstant().toZonedDateTimeISO("Asia/Tokyo");

cms.collection({
  name: "topics_posts",
  store: "gh:topics/*.md",
  documentName: (data) => {
    const date = dateToZoned(data.published as Date).toPlainDate();
    return `${date}-${data.title}.md`;
  },
  fields: [
    {
      name: "draft",
      type: "checkbox",
      value: true,
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
