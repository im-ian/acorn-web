import type { Lang } from "~/i18n/ui";
import { defaultLang } from "~/i18n/ui";

/** External links shared across the site. */
export const links = {
  repo: "https://github.com/im-ian/acorn",
  releasesLatest: "https://github.com/im-ian/acorn/releases/latest",
  installScript:
    "https://raw.githubusercontent.com/im-ian/acorn/main/scripts/install-macos.sh",
  controlDocs: "https://github.com/im-ian/acorn/blob/main/docs/CONTROL_SESSIONS.md",
  author: "https://github.com/im-ian",
} as const;

export const installCommand =
  "curl -fsSL https://raw.githubusercontent.com/im-ian/acorn/main/scripts/install-macos.sh | bash";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Resolve a path inside `public/` against the configured base path. */
export function asset(path: string): string {
  return `${BASE}/${path.replace(/^\//, "")}`;
}

/** Build an internal href for a given locale and route. */
export function localeHref(lang: Lang, route = ""): string {
  const clean = route.replace(/^\//, "");
  const prefix = lang === defaultLang ? "" : `${lang}/`;
  const full = `${prefix}${clean}`.replace(/\/$/, "");
  return asset(full) || `${BASE}/`;
}

/** Swap the locale on the current pathname (for the language toggle). */
export function switchLocalePath(currentPath: string, target: Lang): string {
  let p = currentPath;
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length);
  p = p.replace(/^\/(en|ko)(?=\/|$)/, "");
  return localeHref(target, p);
}
