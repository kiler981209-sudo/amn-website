import "./globals.css";

export const metadata = {
  title: "AMN — AI Mining Network",
  description: "AI 연산을 새로운 채굴로 정의하는 분산형 AI 컴퓨팅 네트워크"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
