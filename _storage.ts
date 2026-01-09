// import { JointStorage } from "./lume-ext/joint_storage.ts";
import GitHub from "lume/cms/storage/github.ts";
// const publicStorage = GitHub.create(
//   "digitaldemocracy2030/website/src",
//   Deno.env.get("GITHUB_TOKEN")!,
// );
export const privateRepoStorage = GitHub.create(
  "digitaldemocracy2030/website_topics",
  Deno.env.get("GITHUB_TOKEN")!,
);

// const jointStorage = new JointStorage({
//   draft: draftStorage,
//   public: publicStorage,
// });
