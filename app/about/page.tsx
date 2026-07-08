"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main style={{ background: "var(--color-paper)", color: "var(--color-ink)", minHeight: "100vh" }}>
      {/* Navigation bar */}
      <nav className="nav-bar" style={{ position: "absolute", left: 54, right: 54, top: 36, zIndex: 30 }}>
        <span className="nav-brand">moran</span>
        <div className="nav-links">
          <a href="/">home</a>
          <a href="/about">about</a>
        </div>
      </nav>

      <section className="relative w-full overflow-hidden" style={{ minHeight: 900 }}>
        {/* Grid overlay */}
        <div className="grid-overlay" style={{ opacity: 0.74 }} />

        {/* Section number */}
        <span
          style={{
            position: "absolute",
            right: -18,
            bottom: -120,
            fontSize: 500,
            fontWeight: 900,
            color: "var(--color-ink)",
            opacity: 0.045,
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 1,
          }}
        >
          00
        </span>

        {/* Side text */}
        <div
          style={{
            position: "absolute",
            left: 30,
            top: 142,
            zIndex: 10,
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            color: "var(--color-ink)",
            opacity: 0.34,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1.6,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          about / this is a test page
        </div>

        {/* Left portrait */}
        <div style={{ position: "absolute", left: 92, top: 142, zIndex: 5, width: 480, height: 640 }}>
          <Image
            src="/images/portrait-main.jpg"
            alt=""
            width={480}
            height={640}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "saturate(.86) contrast(1.04)",
            }}
          />
        </div>

        {/* Right content */}
        <div style={{ position: "absolute", left: 660, top: 160, zIndex: 10, maxWidth: 580 }}>
          <div className="text-label" style={{ marginBottom: 20 }}>
            ABOUT / 关于
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 86,
              lineHeight: 0.94,
              fontWeight: 830,
              color: "var(--color-ink)",
              marginBottom: 32,
            }}
          >
            一个普通人的
            <br />
            长期路线图
          </h2>
          <div className="text-copy" style={{ fontSize: 15, lineHeight: 1.8, opacity: 0.72, marginBottom: 28 }}>
            <p style={{ marginBottom: 16 }}>
              这里是关于页面的测试内容。蓦然是一个正在构建中的个人品牌，专注于搜索技术、AI 应用和网站建设的长期积累。
              这不是一份完美的简历，而是一个持续更新的工作台。
            </p>
            <p style={{ marginBottom: 16 }}>
              从 2023 年开始，我决定把所有的学习和实践过程公开记录下来。无论是技术探索、产品思考，还是日常 workflow 的优化，
              都希望能为同样在这条路上的人提供一些参考。
            </p>
            <p>
              这个站点本身就是我的实践成果之一 —— 手动搭建、持续迭代，不追求一次性完美，而是享受逐步完善的乐趣。
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 48,
              borderTop: "1px solid var(--color-line)",
              paddingTop: 24,
              marginTop: 12,
            }}
          >
            {[
              { label: "持续时间", value: "2 年+" },
              { label: "公开记录", value: "86 篇" },
              { label: "技术方向", value: "3 个" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "var(--color-clay)", lineHeight: 1.2 }}>
                  {item.value}
                </div>
                <div style={{ fontSize: 12, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 4 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          style={{
            position: "absolute",
            left: 92,
            bottom: 64,
            zIndex: 10,
            display: "flex",
            gap: 28,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 11, opacity: 0.34, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            moran 001 · test page
          </span>
          <span style={{ width: 1, height: 14, background: "var(--color-line)" }} />
          <a href="/" className="link-underline" style={{ fontSize: 12 }}>
            返回首页
          </a>
        </div>
      </section>
    </main>
  );
}
