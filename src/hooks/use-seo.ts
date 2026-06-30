import { useEffect } from "react";

interface SeoOptions {
  title: string;
  description?: string;
  /** Absolute canonical URL. Defaults to the site origin + current path. */
  canonical?: string;
}

const SITE_URL = "https://tabernasaloia.com";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight per-route head management for this client-rendered SPA.
 * Sets the document title, meta description, canonical link and the matching
 * Open Graph tags whenever a page mounts, restoring the title on unmount.
 *
 * Note: this runs on the client. Crawlers that execute JS (e.g. Googlebot)
 * pick it up; for guaranteed crawler coverage of social tags, add a build-time
 * prerender step (see README).
 */
export function useSeo({ title, description, canonical }: SeoOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    setMeta("property", "og:title", title);

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }

    const url = canonical ?? `${SITE_URL}${window.location.pathname}`;
    setLink("canonical", url);
    setMeta("property", "og:url", url);

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonical]);
}
