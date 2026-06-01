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
    icon: "🔔",
    title: { ko: "알림 센터", en: "Activity center" },
    body: {
      ko: "세션별 알림(입력 대기·완료·실패)을 Activity 탭과 상태 표시줄에서 모아 보기. 네이티브 알림은 이벤트별로 토글.",
      en: "Collect per-session alerts (waiting · done · failed) in the Activity tab and status bar — toggle native notifications per event.",
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
    title: { ko: "한눈에 보이는 워크스페이스", en: "The whole workspace at a glance" },
    body: {
      ko: "분할 Pane, 사이드바 라이브 상태(유휴 · 입력 대기 · 작업 중), 우측 패널 Code · GitHub · Agents까지 한 화면에.",
      en: "Split panes, live sidebar status (idle · waiting · working), and the Code · GitHub · Agents right panel — all on one screen.",
    },
    image: "screenshots/workspace.png",
    alt: { ko: "Acorn 메인 워크스페이스", en: "Acorn main workspace" },
  },
  {
    title: { ko: "PR을 앱에서 바로", en: "Pull requests, right here" },
    body: {
      ko: "PR 리스트·상세 모달에서 체크·변경 사항·머지 옵션을 확인하고, 머지 메시지는 AI로 자동 생성.",
      en: "Check status, diffs, and merge options from the PR list and detail modal — and let AI draft the merge message.",
    },
    image: "screenshots/pr-modal.png",
    alt: { ko: "Acorn PR 상세 모달", en: "Acorn PR detail modal" },
  },
  {
    title: { ko: "에이전트가 에이전트를 조종", en: "Agents driving agents" },
    body: {
      ko: "컨트롤 세션으로 다른 세션을 원격 제어 — ⌘⌥⇧T 또는 커맨드 팔레트에서 시작.",
      en: "Remote-control other sessions from a control session — start it with ⌘⌥⇧T or the command palette.",
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
      ko: "간편하게 worktree 분리된 새 세션에서 같은 저장소를 충돌 없이 병렬 작업. 작업 후 worktree 정리도 간편하게.",
      en: "Spin up a worktree-separated session to work the same repo in parallel, conflict-free — and clean worktrees up just as easily when you're done.",
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
