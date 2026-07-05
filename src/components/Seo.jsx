import { useEffect } from 'react'

const SITE = 'https://prepzo.space'
const DEFAULT_IMAGE = '/og_image.png'

/**
 * Dependency-free per-route <head> manager for this Vite SPA.
 * Sets title, description, canonical, robots, Open Graph, Twitter tags and
 * page-scoped JSON-LD. Page-scoped JSON-LD is tagged data-seo="page" and
 * removed on unmount so routes never leak each other's structured data.
 */
function upsertMeta(attr, key, content) {
  if (content == null) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  keywords,
  type = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  jsonLd,
}) {
  const url = SITE + path
  const img = image.startsWith('http') ? image : SITE + image

  useEffect(() => {
    if (title) document.title = title
    upsertMeta('name', 'title', title)
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', robots)
    if (keywords) upsertMeta('name', 'keywords', keywords)

    upsertLink('canonical', url)

    // Open Graph
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:image', img)

    // Twitter
    upsertMeta('property', 'twitter:card', 'summary_large_image')
    upsertMeta('property', 'twitter:title', title)
    upsertMeta('property', 'twitter:description', description)
    upsertMeta('property', 'twitter:url', url)
    upsertMeta('property', 'twitter:image', img)

    // Page-scoped JSON-LD
    const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []
    const nodes = blocks.map((block) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-seo', 'page')
      s.text = JSON.stringify(block)
      document.head.appendChild(s)
      return s
    })

    return () => nodes.forEach((n) => n.remove())
  }, [title, description, url, img, keywords, type, robots, jsonLd])

  return null
}

/** Helper: build a BreadcrumbList JSON-LD from [{name, path}] crumbs. */
export function breadcrumbLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE + c.path,
    })),
  }
}
