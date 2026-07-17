"use client";

import Image from "next/image";

const projects = [
  {
    step: "01",
    title: "搜索基建",
    desc: "建立关键词研究框架，从搜索意图出发构建内容策略。持续追踪排名变化，用数据驱动决策。",
  },
  {
    step: "02",
    title: "内容引擎",
    desc: "构建系统化的内容生产流程。从选题到发布，结合 AI 工具提升效率，保持内容的持续输出。",
  },
  {
    step: "03",
    title: "站点平台",
    desc: "搭建独立站作为数字基础设施。追求极致的性能与体验，让每个页面都成为获客入口。",
  },
  {
    step: "04",
    title: "数据闭环",
    desc: "打通搜索、内容、站点的数据链路。建立可量化的指标体系，让每一次优化都有据可依。",
  },
];

export default function BuildPage() {
  return (
    <main style={{ background: "var(--color-paper)", color: "var(--color-ink)", minHeight: "100vh" }}>
      {/* Navigation bar */}
      <nav className="nav-bar" style={{ position: "absolute", left: 54, right: 54, top: 36, zIndex: 30 }}>
        <span className="nav-brand">moran</span>
        <div className="nav-links">
          <a href="/">home</a>
          <a href="/about">about</a>
          <a href="/record">record</a>
          <a href="/build">build</a>
          <a href="/contact">contact</a>
        </div>
      </nav>

      {/* Hero area — split paper/dark */}
      <section style={{ position: "relative", width: "100%", overflow: "hidden", minHeight: "900px", background: "linear-gradient(90deg, #f2eee6 0% 58%, #15120f 58%)" }}>
        {/* Grid overlay */}
        <div className="grid-overlay" style={{ opacity: 0.74 }} />

        {/* Section number */}
        <span style={{ position: "absolute", right: -18, bottom: -120, fontSize: 500, fontWeight: 900, color: "var(--color-ink)", opacity: 0.045, lineHeight: 1, pointerEvents: "none", userSelect: "none", zIndex: 1 }}>
          03
        </span>

        {/* Side vertical text */}
        <div style={{ position: "absolute", left: 30, top: 142, zIndex: 10, writingMode: "vertical-rl", transform: "rotate(180deg)", color: "var(--color-ink)", opacity: 0.34, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.6, pointerEvents: "none", userSelect: "none" }}>
          build / system infrastructure
        </div>

        {/* Left content */}
        <div style={{ position: "absolute", left: 92, top: 142, zIndex: 10, maxWidth: 500 }}>
          <div className="text-label" style={{ marginBottom: 16 }}>BUILD / 建设项目</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 86, lineHeight: 0.94, fontWeight: 830, color: "var(--color-ink)", marginBottom: 24 }}>
            层层递进的
            <br />
            构建计划
          </h2>
          <p className="text-copy" style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.68, marginBottom: 40 }}>
            不是零散的项目，而是一个完整的构建体系。每个阶段都建立在上一阶段的基础之上，逐步形成可运转的数字系统。
          </p>
        </div>

        {/* Project cards - right side on dark background */}
        <div style={{ position: "absolute", left: 580, top: 142, right: 92, zIndex: 10 }}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 24,
                alignItems: "flex-start",
                padding: "24px 0",
                borderBottom: i < projects.length - 1 ? "1px solid rgba(242,238,230,.12)" : "none",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-gold)", letterSpacing: "0.06em", minWidth: 28, marginTop: 2 }}>
                {p.step}
              </span>
              <div>
                <strong style={{ display: "block", fontSize: 22, fontWeight: 700, fontFamily: "var(--font-serif)", color: "var(--color-paper)", marginBottom: 8 }}>
                  {p.title}
                </strong>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(242,238,230,.58)", maxWidth: 420 }}>
                  {p.desc}
                </p>
              </div>
              <span style={{ marginLeft: "auto", fontSize: 16, color: "rgba(200,151,88,.3)", marginTop: 4 }}>&rarr;</span>
            </div>
          ))}
        </div>

        {/* Dark area texture accent */}
        <div style={{ position: "absolute", right: 0, bottom: 0, width: 342, height: 342, zIndex: 2, pointerEvents: "none" }}>
          <Image
            src="/images/portrait-texture.jpg"
            alt=""
            width={342}
            height={342}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.12, maskImage: "linear-gradient(135deg, transparent 0%, #000 50%)", WebkitMaskImage: "linear-gradient(135deg, transparent 0%, #000 50%)" }}
          />
        </div>

        {/* Bottom note */}
        <div style={{ position: "absolute", left: 92, bottom: 64, zIndex: 10, display: "flex", gap: 28, alignItems: "center" }}>
          <span style={{ fontSize: 11, opacity: 0.34, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            moran 003 · build in public
          </span>
          <span style={{ width: 1, height: 14, background: "var(--color-line)" }} />
          <a href="/" className="link-underline" style={{ fontSize: 12 }}>返回首页</a>
        </div>
      </section>
    </main>
  );
}
