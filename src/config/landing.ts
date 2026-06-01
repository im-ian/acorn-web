/**
 * Landing section order.
 *
 * Each entry maps to a section component rendered by `Landing.astro`.
 * To reorder the page, just reorder this array — sections are self-contained.
 * `nav` and `footer` are fixed (top / bottom) and live outside this list.
 *
 * Final order is intentionally left to be decided live against the running build.
 */
export type SectionKey =
  | "hero"
  | "window"
  | "values"
  | "features"
  | "tech"
  | "install"
  | "cta";

export const sectionOrder: SectionKey[] = [
  "hero",
  "window",
  "values",
  "features",
  "tech",
  "install",
  "cta",
];
