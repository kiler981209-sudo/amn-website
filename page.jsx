export const metadata = {
  title: "AMN — AI Mining Network",
  description: "AI 연산을 새로운 채굴로. 유휴 GPU와 AI 사용자를 연결하는 분산형 AI 컴퓨팅 네트워크.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
