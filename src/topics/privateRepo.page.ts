import { privateRepoStorage, type Status } from "../../_storage.ts";
const topics = privateRepoStorage.directory("topics/**/*");
export default async function* () {
  for await (const item of topics) {
    if (item.path.endsWith(".md")) {
      const data = await privateRepoStorage.get(item.path).readData();
      const status = data.status as Status | undefined;
      if (status === "draft") continue;
      const unlisted = status === "unlisted";

      const name = item.name.replace(/\.md$/, ".html");
      yield {
        url: `/topics/${name}`,
        templateEngine: ["md"],
        unlisted,
        ...data,
      };
      continue;
    }
    const file: File = await privateRepoStorage.get(item.path).readFile();
    yield {
      url: `/topics/${item.name}`,
      layout: false,
      content: await file.arrayBuffer().then((buf) => new Uint8Array(buf)),
    };
  }
}
