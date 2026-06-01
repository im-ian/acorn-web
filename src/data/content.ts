import type { Lang } from "~/i18n/ui";

export type Localized = Record<Lang, string>;
export const t = (v: Localized, lang: Lang) => v[lang];

export interface ValueItem {
  icon: string;
  title: Localized;
  body: Localized;
}

export const values: ValueItem[] = [
  {
    icon: "🪟",
    title: { ko: "다중 Pane 워크스페이스", en: "Multi-pane workspace" },
    body: {
      ko: "가로/세로 분할과 자유로운 크기 조절. Pane 간 세션 드래그-드롭, 탭 이동·복제, 보이는 세션에 동시 입력하는 multi-input 모드.",
      en: "Split horizontally or vertically and resize freely. Drag sessions between panes, move and clone tabs, and broadcast input to every visible session.",
    },
  },
  {
    icon: "🌳",
    title: { ko: "격리된 git worktree", en: "Isolated git worktrees" },
    body: {
      ko: "세션마다 별도 worktree로 같은 저장소를 안전하게 동시 작업. 종료 시 worktree 정리 옵션까지.",
      en: "Each session runs in its own worktree, so you work the same repo in parallel without stepping on yourself. Clean worktrees up on exit.",
    },
  },
  {
    icon: "🛰️",
    title: { ko: "Control session", en: "Control sessions" },
    body: {
      ko: "한 세션의 AI가 같은 프로젝트의 다른 세션을 직접 조작 — 입력 전송, 화면 읽기, 새 세션 생성·선택·종료.",
      en: "Let the AI in one session drive other sessions of the same project — send input, read the screen, and create, select, or close sessions.",
    },
  },
];

export interface FeatureItem {
  title: Localized;
  body: Localized;
  image: string;
  alt: Localized;
}

export const features: FeatureItem[] = [
  {
    title: { ko: "한눈에 보는 워크스페이스", en: "The whole workspace at a glance" },
    body: {
      ko: "사이드바 라이브 상태(유휴 / 입력 대기 / 작업 중), 분할 Pane, 우측 패널의 Code · GitHub · Agents 탭을 한 화면에서.",
      en: "Live sidebar status (idle / waiting / working), split panes, and a right panel with Code, GitHub, and Agents tabs — all in one view.",
    },
    image: "screenshots/workspace.png",
    alt: { ko: "Acorn 메인 워크스페이스", en: "Acorn main workspace" },
  },
  {
    title: { ko: "PR을 앱에서 바로", en: "Pull requests, right here" },
    body: {
      ko: "PR 리스트와 상세 모달 — 체크 상태, 변경 사항, 머지 옵션, 본문 task 토글, AI 머지 메시지 자동 생성까지.",
      en: "PR list and detail modal — check status, diffs, merge options, body task toggles, and AI-generated merge messages.",
    },
    image: "screenshots/pr-modal.png",
    alt: { ko: "Acorn PR 상세 모달", en: "Acorn PR detail modal" },
  },
  {
    title: { ko: "에이전트가 에이전트를 조종", en: "Agents driving agents" },
    body: {
      ko: "Control session으로 한 세션이 다른 세션을 조작하는 모습. ⌘⌥⇧T 또는 커맨드 팔레트에서 시작.",
      en: "Watch one session operate another through a control session. Start it with ⌘⌥⇧T or the command palette.",
    },
    image: "screenshots/control-session.gif",
    alt: { ko: "Acorn Control session 데모", en: "Acorn control session demo" },
  },
];

export interface TechPoint {
  k: Localized;
  v: Localized;
}

export const techPoints: TechPoint[] = [
  {
    k: { ko: "Tauri 2 · Rust 코어", en: "Tauri 2 · Rust core" },
    v: {
      ko: "무거운 런타임 없이, Rust 코어와 네이티브 PTY 셸로 가볍고 빠르게.",
      en: "No heavy runtime — a Rust core and native PTY shells keep it light and fast.",
    },
  },
  {
    k: { ko: "Control session", en: "Control sessions" },
    v: {
      ko: "컨트롤 세션으로 같은 프로젝트의 세션들을 중앙 제어 — 원격으로 생성·조작·읽기·종료.",
      en: "Centrally control the project's sessions through a control session — create, drive, read, and close them remotely.",
    },
  },
  {
    k: { ko: "간편한 작업 공간 분리", en: "Easy workspace separation" },
    v: {
      ko: "세션을 새 worktree로 fork 해 같은 저장소를 충돌 없이 병렬로 작업.",
      en: "Fork a session into a fresh worktree to work the same repo in parallel, conflict-free.",
    },
  },
  {
    k: { ko: "Background sessions", en: "Background sessions" },
    v: {
      ko: "백그라운드 daemon이 PTY 세션을 관리해, 앱을 종료·재시작해도 다시 열면 화면 그대로.",
      en: "A background daemon keeps PTY sessions alive — quit, relaunch, and reopen right where you left off.",
    },
  },
];
