// import { JointStorage } from "./lume-ext/joint_storage.ts";

import lumeCMS from "lume/cms/mod.ts";
import Site from "lume/core/site.ts";
import { privateRepoStorage } from "./_storage.ts";

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

const dateToZoned = (date = new Date()) =>
  date.toTemporalInstant().toZonedDateTimeISO("Asia/Tokyo");

cms.collection({
  name: "topics_posts",
  store: "gh:topics/*.md",
  previewUrl: (path: string, cms: any, hasChanged: boolean) => {
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
      name: "tags",
      type: "list",
    },
    {
      name: "title",
      type: "text",
      value: `${dateToZoned().toPlainDate()}のお知らせ`,
    },
    {
      name: "publish_at",
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
