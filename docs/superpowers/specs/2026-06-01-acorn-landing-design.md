# Acorn 소개 웹페이지 — 설계 (spec)

- 작성일: 2026-06-01
- 저장소: `acron-web` (신규, 빈 repo)
- 레퍼런스 제품: Acorn (`~/Documents/Personal/acorn`) — Tauri 데스크톱 앱, 병렬 AI 코딩 에이전트 세션

## 1. 목적 · 타깃

- **1차 목적**: macOS 다운로드 유도 + GitHub ⭐ 유도. 기술 스택 · 아키텍처 강조(개발자 어필).
- **타깃**: 개발자(오픈소스 기여 가능층) + 도구 사용자.

## 2. 비주얼 방향 (확정)

- **레퍼런스 구조**: `openai.com/ko-KR/codex` — 중앙 히어로, 거대 미디엄-웨이트 fluid 타입, 알약 CTA, 하단 제품 윈도우, 에어리 모노크롬. (실측 토큰 분석 완료)
- **테마**: Acorn 대표 테마(`acorn-light`/`acorn-dark`) 실측 토큰 사용. **accent = 그린** `oklch(… 0.16 145)`. ink/white 베이스. (앰버는 status/warning 보조색만)
- **라이트 베이스 먼저.** 다크(`acorn-dark` #1f2326)는 토큰 스왑으로 추후 토글 — 지금 범위 밖.
- **히어로**: 실제 앱 아이콘(`src-tauri/icons`) + 회색 반투명 **부유 원**(저강도, 텍스트 뒤, 느린 드리프트). 소프트 글로우 없음.
- **CTA**: 1차 = ink 솔리드 알약(`border-radius:40px`), 2차 = ghost(옅은 회색). 그린은 링크 · 상태 dot accent 로만.
- **폰트**: OpenAI Sans 대체 **Geist**(또는 Inter) — display weight 500 + 음수 자간(`-.01~-.03em`). 코드/터미널 = **JetBrains Mono**(또는 SF Mono).

## 3. 스택 · 배포

- **Astro + Tailwind v4**, 정적 출력.
- **GitHub Pages** + Actions 빌드·배포.
- **i18n**: Astro 라우팅 KO/EN, 기본 `ko`, 우측 상단 토글. 텍스트는 `ko`/`en` 딕셔너리로 분리(컴포넌트에 하드코딩 금지).
- 성능 예산: 랜딩 JS < 150kb(gzip), CSS < 30kb.

## 4. 페이지 (IA)

- `/` 랜딩 (원페이지 스크롤)
- `/install` 설치 · 다운로드 가이드 (설치 스크립트 / 수동 DMG / 소스 빌드)
- `/features` 전체 기능 상세
- 외부 링크: GitHub repo · Releases · `docs/*`

## 5. 섹션 — 모듈식, 순서는 구현 후 확정

> **중요**: 섹션 순서는 이 spec 에 고정하지 않는다. 사용자가 **구현된 실물을 보고** 라이브에서 결정한다.

- 각 섹션은 **독립 Astro 컴포넌트**. 순서는 **단일 `sections` 배열**(예: `src/config/landing.ts`) 하나로 제어 → 재배열 = 배열 한 줄 수정.
- **고정**: Nav(상단), Footer(하단).
- **순서 미정 후보 블록**: `Hero` · `ProductWindow`(workspace 스크린샷) · `ValueCards`(3-up: 다중 Pane / 격리 worktree / Control session) · `FeatureRows`(스크린샷 교차 에디토리얼) · `TechStack`(Tauri+React 19+Rust, worktree 격리 다이어그램, 모노 코드 블록) · `InstallQuickstart`(복사 버튼 코드 블록) · `CTA`.
- 각 블록은 자기 완결(자체 i18n 키, 자체 패딩 토큰) → 순서 바꿔도 안 깨짐.

## 6. 디자인 토큰 (Acorn 실측 매핑)

| 토큰 | 라이트 | 비고 |
| --- | --- | --- |
| `--bg` | `#ffffff` | |
| `--surface` | `#f5f6f7` | 카드/패널 |
| `--sidebar` | `#f0f1f3` | |
| `--ink` | `#1a1d20` | 본문/헤드라인 |
| `--muted` | `#5b6168` | `oklch(45% 0.01 250)` 근사 |
| `--border` | `#d8dade` | |
| `--accent` | `oklch(50% 0.16 145)` | 그린, 링크/포커스 |
| `--accent-hover` | `oklch(45% 0.16 145)` | |
| `--terminal-bg` / `--terminal-fg` | `#1f2326` / `#ededed` | 제품 윈도우/코드 |
| `--status-run` | `#5cc98a` | 작업중 dot |
| `--status-wait` | `#e0a458` | 입력대기 dot |
| `--danger` | `oklch(55% 0.22 25)` | |

- radius: CTA pill `40px`, card `12–14px`.
- type: h1 `clamp(2rem→3.5rem)` / w500 / `-.03em`, body `17px` / line `1.65` / `-.01em`, code mono.
- 다크 토큰(추후): `acorn-dark` — `--bg #1f2326` · `--ink #ededed` · `--accent oklch(72% 0.16 145)` · `--border #2f3338`.

## 7. 컴포넌트

- 레이아웃: `Nav`, `LangToggle`, `Footer`
- 블록: `Hero`, `ProductWindow`, `ValueCards`, `FeatureRow`, `TechStack`/`ArchDiagram`, `CodeBlock`(복사), `CTASection`
- ui: `Button`/`Pill`, `Section`
- 순서 제어: `src/config/landing.ts` 의 `sections` 배열

## 8. 에셋

- Acorn repo → `public/` 복사: 앱 아이콘(`src-tauri/icons/icon.png` 또는 128/256), `assets/screenshots/workspace.png` · `pr-modal.png` · `control-session.gif`.
- 이미지 explicit width/height, hero 미디어만 eager+fetchpriority, 나머지 lazy. AVIF/WebP 우선 + 폴백.

## 9. 성능 · 접근성

- 정적 빌드, 폰트 서브셋 + `font-display:swap`, preload 임계 1웨이트만.
- 모션은 compositor 친화(transform/opacity)만. `prefers-reduced-motion` 시 부유 원 · 스크롤 reveal 정지.
- 시맨틱 HTML(header/nav/main/section/footer), 키보드 내비, 대비 확인.

## 10. 비범위 (YAGNI)

- 다크 토글(추후), 블로그/문서 자체 호스팅(외부 링크로 대체), 검색, 분석/추적, 폼.

## 부록 — OpenAI Codex 실측 토큰 (참고)

- 폰트 `OpenAI Sans`(단일 산세), 코드 SF Mono. 색: 순수 모노크롬(white/black + black-alpha 농도). 컬러는 코드 신택스에만.
- 타입: 큰 fluid `clamp()`, display weight **500**, 음수 자간. 본문 17px/1.65.
- CTA: 알약 `border-radius:40px`, 14px/500, 1차 검정 솔리드 · 2차 `rgba(0,0,0,.04)`.
