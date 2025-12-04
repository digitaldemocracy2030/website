export function Markdown({ content }: { content: string }) {
  // Process the content to add classes to images
  const processedContent = content.replace(
    /<img src="([^"]+)" alt="([^"]+)"/g,
    '<img src="$1" alt="$2" class="w-40 h-40 object-cover rounded-lg mb-4"',
  )

  // Add spacing between board members
  const spacedContent = processedContent.replace(
    /(## 運営メンバー\n\n)([\s\S]*?)(?=\n\n##|$)/g,
    (match, header, content) => {
      const members = content.split(/\n\n+/).filter(Boolean)
      const spacedMembers = members
        .map((member: string) => `<div class="mb-16">${member}</div>`)
        .join('')
      return `${header}${spacedMembers}`
    },
  )

  return (
    <div
      className="content markdown-body"
      dangerouslySetInnerHTML={{
        __html: spacedContent,
      }}
    />
  )
}
