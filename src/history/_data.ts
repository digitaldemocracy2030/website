export const layout = "page.vto";
export const content_class = "prose";

const projects = {
  digest: "要約",
  idobata: "いどばた",
  "kouchou-ai": "広聴AI",
  website: "Webサイト",
  polimoney: "Polimoney",
  slack: "Slack",
} as const;
type Entry = { subject: typeof projects[keyof typeof projects]; url: string };
type WeekEntry = { week: number; date: Date; entries: Entry[] };

function buildWeeks() {
  const weeks = [] as WeekEntry[];
  const historyRoot = import.meta.resolve("./").replace("file://", "");
  for (const weekEntry of Deno.readDirSync(historyRoot)) {
    if (!weekEntry.isDirectory) continue;
    const entries = [] as Entry[];
    for (
      const fileEntry of Deno.readDirSync(`${historyRoot}/${weekEntry.name}`)
    ) {
      if (!fileEntry.isFile) continue;
      const key = fileEntry.name.replace(".md", "") as keyof typeof projects;
      const subject = projects[key];
      if (!subject) {
        throw new Error(
          `Unknown project in file: ${weekEntry.name}/${fileEntry.name}`,
        );
      }
      entries.push({
        subject,
        url: `/history/${weekEntry.name}/${key}`,
      });
    }
    const { number, date } = parseWeek(weekEntry.name);
    weeks.push({
      week: number,
      date,
      entries,
    });
  }
  return weeks.sort((a, b) => b.week - a.week);
}
export const weeks = buildWeeks();

// "week1_20250319" -> { number: 1, date: Date }
function parseWeek(week: string) {
  const match = week.match(/^week(\d+)_(\d{4})(\d{2})(\d{2})$/);
  if (!match) throw new Error(`Invalid week format: ${week}`);
  const [, numberStr, yearStr, monthStr, dayStr] = match;
  return {
    number: parseInt(numberStr, 10),
    date: new Date(
      parseInt(yearStr, 10),
      parseInt(monthStr, 10) - 1,
      parseInt(dayStr, 10),
    ),
  };
}
