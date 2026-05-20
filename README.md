# AMN Vercel Website — Google Sheets 사전등록 연동 버전

이 버전은 랜딩페이지 사전등록 폼을 Google Sheets에 저장하도록 만든 버전입니다.

## 포함 파일
- `app/page.jsx`: 랜딩페이지
- `app/api/waitlist/route.js`: Vercel API Route
- `app/globals.css`: 스타일
- `google_apps_script.js`: Google Sheets Apps Script 코드
- `package.json`: Next.js 실행 설정

## 1. GitHub 업로드
기존 저장소 파일을 전부 삭제한 뒤, 이 ZIP 안의 파일만 업로드하세요.

필수 구조:

```text
app/
  layout.jsx
  page.jsx
  globals.css
  api/
    waitlist/
      route.js
package.json
README.md
google_apps_script.js
```

## 2. Google Sheets 설정

1. Google Sheets 새 문서 생성
2. 첫 행에 아래 컬럼 입력

```text
등록일시 | 이메일 | 역할 | 유입경로 | 생성시간
```

3. 상단 메뉴 `확장 프로그램` → `Apps Script`
4. `google_apps_script.js` 내용을 붙여넣기
5. 저장
6. `배포` → `새 배포`
7. 유형 선택: `웹 앱`
8. 실행 사용자: `나`
9. 액세스 권한: `모든 사용자`
10. 배포 후 생성되는 Web App URL 복사

## 3. Vercel 환경변수 설정

Vercel 프로젝트 → Settings → Environment Variables

```text
Name: GOOGLE_SCRIPT_URL
Value: Google Apps Script Web App URL
Environment: Production
```

저장 후 Redeploy 하세요.

## 4. 테스트

사이트에서 이메일을 입력하고 사전등록을 누르면 Google Sheets에 행이 추가됩니다.
