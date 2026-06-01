export const languages = {
  ko: "한국어",
  en: "English",
} as const;

export const defaultLang = "ko";
export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    "nav.features": "기능",
    "nav.install": "설치",
    "nav.docs": "문서",
    "nav.download": "macOS 다운로드",

    "hero.title": "Acorn",
    "hero.slogan": "코딩 에이전트들과 편의 기능들을 한곳에.",
    "hero.better": "더 나은",
    "hero.words": "생산성,효율성,편의성,집중력,멀티태스킹,가시성,몰입력",
    "hero.tagline":
      "병렬 AI 코딩 에이전트 세션을 한 창에서 — 분할 Pane, 세션별 격리 git worktree, 네이티브 PTY 터미널.",
    "hero.cta.download": "macOS 버전 다운로드",
    "hero.cta.github": "GitHub에서 보기",
    "hero.meta": "Apple Silicon · Intel",
    "hero.meta.script": "설치 스크립트",
    "hero.meta.or": "또는",
    "hero.meta.dmg": "수동 DMG",

    "window.caption": "메인 워크스페이스 — 사이드바 + 분할 Pane + 우측 패널",

    "value.title": "AI와 사람의 협업을 수월하게",
    "value.lead":
      "AI는 강력하고 유용한 도구지만, 결정과 책임은 사람의 몫.\nAcorn은 이 둘을 유연하게 이어주도록 설계됐습니다.",

    "features.title": "한 창에 필요한 모든 것",

    "tech.eyebrow": "아키텍처",
    "tech.title": "네이티브로 빠르게, 격리로 안전하게",
    "tech.lead":
      "Tauri 2 · React 19 · Rust 로 만든 데스크톱 앱. 세션마다 별도 git worktree 로 같은 저장소를 안전하게 동시 작업합니다.",

    "install.eyebrow": "설치",
    "install.title": "한 줄로 시작",
    "install.lead": "최신 릴리스 DMG를 받아 설치하고 quarantine 속성을 제거합니다.",
    "install.copy": "복사",
    "install.copied": "복사됨",
    "install.manual": "수동 DMG · 소스 빌드 가이드",

    "cta.title": "지금 병렬로 일하세요",
    "cta.lead": "다운로드는 무료. 이슈 · PR 환영.",
    "cta.download": "macOS 다운로드",
    "cta.star": "GitHub에 ⭐",

    "footer.tagline": "병렬 AI 코딩 에이전트 세션을 한 창에서.",
    "footer.made": "제작",
    "footer.rights": "issues / PRs welcome",

    "lang.label": "언어",
  },
  en: {
    "nav.features": "Features",
    "nav.install": "Install",
    "nav.docs": "Docs",
    "nav.download": "Download for macOS",

    "hero.title": "Acorn",
    "hero.slogan": "Coding agents and conveniences, all in one place.",
    "hero.better": "Better",
    "hero.words": "productivity,efficiency,convenience,focus,multitasking,visibility,flow",
    "hero.tagline":
      "Parallel AI coding agent sessions in one window — split panes, isolated git worktrees, native PTY terminals.",
    "hero.cta.download": "Download for macOS",
    "hero.cta.github": "View on GitHub",
    "hero.meta": "Apple Silicon · Intel",
    "hero.meta.script": "install script",
    "hero.meta.or": "or",
    "hero.meta.dmg": "manual DMG",

    "window.caption": "Main workspace — sidebar + split panes + right panel",

    "value.title": "Smoother human–AI collaboration",
    "value.lead":
      "AI is a powerful, useful tool — but decisions and accountability stay with people.\nAcorn is designed to connect the two flexibly.",

    "features.title": "Everything in one window",

    "tech.eyebrow": "Architecture",
    "tech.title": "Native speed, isolated safety",
    "tech.lead":
      "A desktop app built with Tauri 2 · React 19 · Rust. Each session gets its own git worktree so you work the same repo in parallel, safely.",

    "install.eyebrow": "Install",
    "install.title": "Start in one line",
    "install.lead": "Pull the latest release DMG, install it, and strip the quarantine attribute.",
    "install.copy": "Copy",
    "install.copied": "Copied",
    "install.manual": "Manual DMG · build from source",

    "cta.title": "Work in parallel today",
    "cta.lead": "Free to download. Issues and PRs welcome.",
    "cta.download": "Download for macOS",
    "cta.star": "Star on GitHub",

    "footer.tagline": "Parallel AI coding agent sessions in one window.",
    "footer.made": "Made by",
    "footer.rights": "issues / PRs welcome",

    "lang.label": "Language",
  },
} as const;

export type UIKey = keyof (typeof ui)["ko"];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg in languages) return seg as Lang;
  return defaultLang;
}
