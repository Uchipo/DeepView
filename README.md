# DeepView

---

## 📌 프로젝트 목표

- 면접 대비를 위한 훈련 제공
- **일정 관리, 퀴즈 생성, 노트 정리** 기능 통합
- AI 기반 질문 생성 및 피드백                                
- PDF 리포트 출력 기능
- Google OAuth를 통한 간편 회원가입

---

## 🧑‍💻 기능 분담 및 일정

| 담당자 | 담당 기능 | 영역 |
|--------|-----------|------|
| 김민석, 김지성 | 로그인/회원가입 | 프론트 + 백엔드 |
| 김동민 | 메인 페이지 (기초 구현, 이후 백엔드 포함) | 프론트 |
| 이효성 | 일정 관리 | 프론트 + 백엔드 |
| 김지성 | 노트 | 프론트 + 백엔드 |
| 김예진 | 퀴즈 (생성, 풀이) | 프론트 + 백엔드 |

### 일정

- ✅ **중간 점검**: 5/15 (목) - 구두 점검
- ✅ **개발 마감**: 5/20 (화)
- 🔄 **기능 연결/통합 및 마이페이지**: 5/20 이후

---

## ✨ 주요 기능

- Google OAuth 기반 로그인/회원가입
- 개인 대시보드 (최근 활동, 노트, 일정 등 요약)
- 면접 일정 관리 (알림 포함)
- 퀴즈 생성 및 풀이 (AI 연동)
- 노트 CRUD 및 PDF 변환 기능
- AI 면접 질문 생성 및 리포트 출력
- 결제 연동을 통한 보드 확장

---

## 🧩 기능 요구사항

### 1. 로그인 / 회원가입

**프론트엔드**
로그인  
  - 이메일(형식 확인) / 비밀번호(8자 이상, 영문·숫자·특수문자 조합) 
  - 로그인 버튼 
  - Google OAuth 버튼  
  - 아이디/비번 찾기 링크
회원가입
  - 이름(필수) / 이메일(인증) / 휴대폰(인증) / 비밀번호 / 비밀번호 확인 / 개인정보 처리방침 동의 체크박스  
  - 회원가입 버튼

**백엔드**
로그인  
  - 아이디/비번 입력칸 - 유효성 검사(이메일형식, 비밀번호 8개이상 영문, 숫자, 특수기호 포함)
  - 토큰 발급 및 관리
회원가입
  - 이름, 이메일, 휴대폰번호, 비밀번호 db에 넣기
  • 이메일 인증 구현
  • 휴대폰 인증 구현
  • 비밀번호 관리
아이디/비번 찾기
  - 휴대폰 인증 확인 구현
  • 이메일 확인 구현

---

### 2. 대시보드

**프론트엔드**
헤더
  - 사이트 이름, 날짜, 회원표시 또는 로그인
바디
  - 일정, 노트, 면접연습을 5개정도? 미리보기처럼 올려주기
풋터
  - 커넥트

**백엔드**
- 로그인 여부 판단
- 활동 요약 데이터 제공

---

### 3. 노트 관리

**프론트엔드**
헤더
  - 사이트 이름, 날짜, 회원표시 또는 로그인
바디
  - 노트만 볼 수 있는 공간으로 노션의 갤러리 처럼 구현
  - 갤러리의 요소들은 노트의 제목, 미리보기, 날짜, 태그등등을 표시해야함
  - 각 요소는 삭제, 수정, 내보내기(txt공유), pdf로 출력 기능을 넣기를 희망함

**백엔드**
- 노트 목록 보내기
- 노트 수정, 삭제 가능하게 하기
- 노트 내보내기 구현
- 노트 pdf로 만들기 구현

---

### 4. 일정 관리

**프론트엔드**
- DnD 캘린더 또는 일정 입력 기능
- 날짜 클릭 시 모달에서 일정 추가
- 알림 설정 가능

**백엔드**
- 일정 저장/수정/삭제
- 자동 D-Day 감소 (스케줄러)
- 알림 큐(Bull) 활용 예정

---

### 5. 퀴즈 생성 및 풀이

**프론트엔드**
- 퀴즈 생성 폼
- 퀴즈 풀이 인터페이스

**백엔드**
- 객관식 문제 생성
- AI 연동으로 질문 생성
- 문제 목록/정답 처리 API

---

## 🗃️ 데이터베이스 스키마

| 테이블 | PK | 주요 속성 | FK |
|--------|----|-----------|----|
| **User** | user_id | email, password, name, platform, OAuth, created_at | - |
| **Board** | board_id | title, description, created_at | user_id → User.user_id |
| **Note** | note_id | title, content, created_at | board_id → Board.board_id |
| **Schedule** | schedule_id | interview_datetime, title, created_at | user_id → User.user_id |
| **Quiz** | list_id | title, source_type, created_at | user_id → User.user_id |
| **Interview** | question_id | Q, A, content | list_id → Quiz.list_id |
| **PDFFile** | pdf_id | file_url, generated_at | list_id, user_id |
| **JobPosting** | posting_id | title, description, url, created_at | company_id |

---

## ⚙️ 기술 스택

### ✅ 프론트엔드
- **React** (≥ 19)
- **TypeScript**
- **Redux**: 상태 관리

### ✅ 백엔드
- **Node.js** (≥ 16)
- **TypeScript**
- **Express.js** (NestJS 가능)
- **JWT 인증**

### ✅ 데이터베이스
- **MariaDB**

### ✅ AI 연동
- **OpenAI API (ChatGPT)**
- 인터페이스 및 흐름은 추후 구체화 예정

### ✅ PDF 변환
- **Puppeteer** 또는 **PDFKit**

### ✅ 결제 시스템
- **Stripe API**

### ✅ 캐시 및 큐
- **Redis**
- **Bull**
- **node-cron**

### ✅ CI/CD & 인프라
- **GitHub Actions**
- **Docker**
- **AWS ECS** 또는 **GCP Cloud Run**

### ✅ 로깅 및 모니터링
- **Winston**
- **ELK Stack** (Elasticsearch, Logstash, Kibana)
- **Prometheus + Grafana**

---

## ✅ 브랜치 네이밍 규칙

형식: `타입/기능명`

> 예시:
> - `feat/login-api`
> - `fix/note-save-error`
> - `chore/update-readme`

---

## ✅ PR(Pull Request) 규칙

- **PR 제목**: 작업한 브랜치와 유사하게 작성  
  예시: `feat: 노트 삭제 기능 추가`
- **내용**: 작업한 내용 간단 요약
- **머지 조건**: `comment(approve)`가 **1개 이상 달리면 머지 가능**

---
## 📦 커밋 타입 정리

| 타입 | 설명 |
|------|------|
| `feat` | 새로운 기능에 대한 커밋 |
| `fix` | 버그 수정 |
| `build` | 빌드 관련 파일 수정, 모듈 설치/삭제 |
| `chore` | 기타 자잘한 수정 |
| `ci` | CI 설정 관련 커밋 |
| `docs` | 문서 수정 |
| `style` | 코드 스타일, 포맷 수정 |
| `test` | 테스트 코드 관련 수정 |
| `perf` | 성능 개선 커밋 |

---

## ✅ TODO 체크리스트

- [ ] 로그인/회원가입 구현
- [ ] 대시보드 구현
- [ ] 노트 CRUD
- [ ] 일정 생성 + 알림
- [ ] 퀴즈 생성/풀이
- [ ] 통합 테스트 및 마이페이지

---
