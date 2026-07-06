import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "蓦然 moran — 创作者档案",
  description:
    "探索搜索、AI 与 Web 构建的创作者档案。蓦然 moran 是一个专注于信息架构、智能体验与前沿 Web 技术的创作空间。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="antialiased" style={{ fontSmooth: "always" }}>
      <body>{children}</body>
    </html>
  );
}
