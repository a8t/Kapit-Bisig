import { format, isFuture } from "date-fns"

export function cn(...args) {
  return args.filter(Boolean).join(" ")
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(publishedAt)
}

export function getBlogUrl(publishedAt, slug) {
  return `/blog/${format(publishedAt, "YYYY/MM")}/${slug.current || slug}/`
}

export function toPlainText(blocks) {
  if (!blocks) {
    return ""
  }
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map(child => child.text).join("")
    })
    .join("\n\n")
}
