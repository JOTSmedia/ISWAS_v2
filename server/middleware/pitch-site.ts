/**
 * Serve the original ISWAS pitch documents. Assets stay in public/.
 * HTML is bundled with ?raw so the deployed function does not read disk.
 */
import indexHtml from "../../pitch/index.html?raw";
import needHtml from "../../pitch/need/index.html?raw";
import starsHtml from "../../pitch/stars/index.html?raw";
import formHtml from "../../pitch/form/index.html?raw";
import comparisonHtml from "../../pitch/comparison/index.html?raw";
import contactHtml from "../../pitch/contact/index.html?raw";

const pages: Record<string, string> = {
  "/": indexHtml,
  "/need": needHtml,
  "/stars": starsHtml,
  "/form": formHtml,
  "/comparison": comparisonHtml,
  "/contact": contactHtml,
};

function pageFor(pathname: string): string | null {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return pages[path] ?? null;
}

export default function pitchSiteMiddleware(
  event: { url: URL; req: { method?: string } },
  next: () => unknown,
): unknown {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();
  const html = pageFor(event.url.pathname);
  if (!html) return next();
  return new Response(method === "HEAD" ? null : html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-cache",
    },
  });
}
