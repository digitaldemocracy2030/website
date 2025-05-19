export default function imageLoader({ src, _width, _quality }: { src: string; _width: number; _quality?: number }) {
  if (src.startsWith('http') || (process.env.NEXT_PUBLIC_PR_NUMBER && src.startsWith(`/pr-preview/pr-${process.env.NEXT_PUBLIC_PR_NUMBER}`))) {
    return src
  }
  
  const basePath = process.env.NEXT_PUBLIC_PR_NUMBER ? `/pr-preview/pr-${process.env.NEXT_PUBLIC_PR_NUMBER}` : ''
  return `${basePath}${src}`
}
