import { Entry } from "../../_storage.ts";

export default function topics({ comp, search }: any) {
  const entries_: Entry[] = search.pages("type=topics", "publish_on=desc");
  const entries = entries_.filter((entry) => entry.status === "公開");
  return (
    <ul class="prose">
      {entries.map((entry) => (
        <li class="my-4">
          <h2>
            <a href={entry.url}>{entry.title}</a>
          </h2>
          {comp.topicHeader({ entry })}
          <p class="mt-2">{entry.description}</p>
        </li>
      ))}
    </ul>
  );
}
