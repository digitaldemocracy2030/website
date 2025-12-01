export default async function Page() {
  // 静的エクスポートに対応していないため、ファイルリストは表示しない
  const slackFiles: string[] = []
  const githubFiles: Record<string, string[]> = {}

  return (
    <section className="mx-auto max-w-xl">
      <h2 className="text-3xl">活動記録</h2>
      <section>
        <h3 className="text-2xl mt-8 mb-4">Slack活動記録</h3>
        {slackFiles.length > 0 ? (
          <p>Slackの活動記録は静的エクスポートに対応していないため削除されました。</p>
        ) : (
          <p>Slack活動記録はまだありません。</p>
        )}
      </section>
      <section>
        <h3 className="text-2xl mt-8 mb-4">GitHub活動記録</h3>
        {Object.keys(githubFiles).length > 0 ? (
          <p>GitHubの活動記録は静的エクスポートに対応していないため削除されました。</p>
        ) : (
          <p>GitHub活動記録はまだありません。</p>
        )}
      </section>
    </section>
  )
}
