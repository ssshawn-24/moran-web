import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "蓦然 Tech | 用 AI 驱动内容增长",
    template: "%s | 蓦然 Tech",
  },
  description: "从推广到增长，分享 AI 时代的内容优化、SEO、GEO 实战方法。帮助正在转型的增长人员，用 Web 开发和 SEO 实现高效增长。",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://moran-growth.site",
  },
  openGraph: {
    title: "蓦然 Tech | 用 AI 驱动内容增长",
    description: "从推广到增长，分享 AI 时代的内容优化、SEO、GEO 实战方法。",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="antialiased" style={{ fontSmooth: "always" }}>
      <head>
        {/* GA4 代码 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-你的MeasurementID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-你的MeasurementID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
