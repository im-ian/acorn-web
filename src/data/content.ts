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
    icon: "▦",
    title: { ko: "Pane + Kanban 워크스페이스", en: "Pane + Kanban workspace" },
    body: {
      ko: "분할 Pane에서 병렬 작업하고 Kanban에서 Idle부터 Done까지 흐름을 확인. 세션별 worktree와 작업 요약으로 변경 범위까지 한눈에.",
      en: "Work in split panes, then track every session from Idle to Done in Kanban. Isolated worktrees and work summaries keep each change visible.",
    },
  },
  {
    icon: "🔔",
    title: { ko: "네이티브 Chat runtime", en: "Native chat runtime" },
    body: {
      ko: "Claude, Codex, Antigravity와 스트리밍으로 대화하고 파일을 첨부. 메시지 수정, 응답 재생성, 원하는 시점에서 worktree fork까지.",
      en: "Stream chats with Claude, Codex, and Antigravity, attach files, edit or regenerate turns, and fork from any point into another worktree.",
    },
  },
  {
    icon: "🐙",
    title: { ko: "화면 전환 없는 GitHub", en: "GitHub without switching" },
    body: {
      ko: "PR · Actions · 체크 · diff 를 우측 패널에서 화면 전환 필요 없이 바로. 머지 메시지는 AI로 자동 생성.",
      en: "PRs, Actions, checks, and diffs right in the side panel — no jumping to the browser. Merge messages drafted by AI.",
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
    title: { ko: "한눈에 보이는 작업 흐름", en: "The whole workflow at a glance" },
    body: {
      ko: "분할 Pane과 Kanban, 사이드바 라이브 상태, 우측 Code · GitHub · Agents 패널, 세션별 작업 요약까지 한 앱에.",
      en: "Split panes, Kanban, live sidebar status, the Code · GitHub · Agents panel, and per-session work summaries in one app.",
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
      ko: "컨트롤 세션으로 다른 세션을 원격 제어 — ⌘⌥⇧T, 프로젝트 Bot 아이콘, 커맨드 팔레트에서 시작.",
      en: "Remote-control other sessions from a control session — start with ⌘⌥⇧T, the project Bot icon, or the command palette.",
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
    k: { ko: "Kanban · Work summary", en: "Kanban · Work summaries" },
    v: {
      ko: "세션 상태와 diff, PR을 lifecycle로 묶어 보고 변경 파일·라인·대화·토큰을 작업 요약으로 집계.",
      en: "Turn session state, diffs, and PRs into a lifecycle board, then summarize changed files, lines, conversations, and tokens.",
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
