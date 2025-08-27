import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * SEO component sets the document title and updates common meta tags dynamically.
 *
 * Props:
 * - title: string - Page title (will be suffixed with site name).
 * - description: string - Page description for meta and social.
 * - path: string - Path for canonical URL (e.g., '/about').
 * - openGraph: object - Optional extra OG tags (e.g., { image, type, url }).
 * - twitter: object - Optional extra Twitter card tags (e.g., { image, card }).
 *
 * Usage:
 * <SEO title="Home" description="Welcome" path="/" />
 */
export default function SEO({
  title = 'Quantum Hire',
  description = 'Quantum Hire connects businesses with top freshers and interns through training, internships, performance bonuses, and placement support.',
  path = '/',
  openGraph = {},
  twitter = {},
}) {
  useEffect(() => {
    const siteName = 'Quantum Hire';
    const fullTitle = title.includes(siteName) ? title : `${title} — ${siteName}`;
    document.title = fullTitle;

    const ensureMeta = (attrName, attrValue, content) => {
      let meta = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      if (content != null) meta.setAttribute('content', content);
      return meta;
    };

    // Description
    ensureMeta('name', 'description', description);
    ensureMeta('name', 'title', fullTitle);

    // Canonical
    const siteUrl = process.env.REACT_APP_SITE_URL || window.location.origin;
    const canonicalHref = `${siteUrl}${path || ''}`.replace(/(?<!:)\/{2,}/g, '/');
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalHref);

    // Open Graph
    ensureMeta('property', 'og:type', openGraph.type || 'website');
    ensureMeta('property', 'og:url', openGraph.url || canonicalHref);
    ensureMeta('property', 'og:title', fullTitle);
    ensureMeta('property', 'og:description', description);
    if (openGraph.image) ensureMeta('property', 'og:image', openGraph.image);

    // Twitter
    ensureMeta('name', 'twitter:card', twitter.card || 'summary_large_image');
    ensureMeta('name', 'twitter:url', canonicalHref);
    ensureMeta('name', 'twitter:title', fullTitle);
    ensureMeta('name', 'twitter:description', description);
    if (twitter.image) ensureMeta('name', 'twitter:image', twitter.image);
  }, [title, description, path, openGraph, twitter]);

  return null;
}
