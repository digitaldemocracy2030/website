// import { publicStorage } from "../../_cms.ts";

// export default async function* () {
//   for await (const item of publicStorage.directory("news/")) {
//     const data = await publicStorage.get(item.path).readData();
//     console.log(`Generating topic draft page for: ${item.name}`, item, data);
//     yield {
//       url: `/${item.name}.html`,
//       layout: "post.vto",
//       ...data,
//     };
//   }
// }
