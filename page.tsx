import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMN — AI Mining Network",
  description: "AI 연산을 새로운 채굴로 정의하는 분산형 AI 컴퓨팅 네트워크",
  openGraph: {
    title: "AMN — AI Mining Network",
    description: "유휴 GPU 자원을 실제 AI 연산에 연결하는 Useful AI Mining 플랫폼",
    type: "website",
    locale: "ko_KR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
