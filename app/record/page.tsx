"use client";

import Image from "next/image";

const records = [
  {
    date: "2025.06",
    tag: "SEARCH",
    title: "关键词研究的基础方法论",
    summary: "从搜索意图出发，建立关键词分层体系。不只是找词，而是理解用户背后的真实需求。",
  },
  {
    date: "2025.04",
    tag: "AI",
    title: "用 AI 重构内容工作流",
    summary: "从选题到发布，AI 正在改变内容生产的每个环节。分享我在实践中沉淀的一套 workflow。",
  },
  {
    date: "2025.02",
    tag: "WEBSITE",
    title: "独立站点架构设计笔记",
    summary: "一个轻量级个人站点的技术选型与架构思考。追求极致性能的同时保持可维护性。",
  },
  {
    date: "2024.12",
    tag: "CONTENT",
    title: "内容资产的长期价值",
    summary: "不追热点、不刷流量。每一条内容都是一次系统性的表达，长期积累才有复利效应。",
  },
  {
    date: "2024.10",
    tag: "SEARCH",
    title: "搜索引擎优化实战记录",
    summary: "从 0 到 1 的 SEO 实战记录，涵盖技术优化、内容策略与外链建设的完整流程。",
  },
];

export default function RecordPage() {
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

      <section style={{ position: "relative", width: "100%", overflow: "hidden", minHeight: "900px" }}>
        {/* Grid overlay */}
        <div className="grid-overlay" style={{ opacity: 0.74 }} />

        {/* Section number */}
        <span style={{ position: "absolute", right: -18, bottom: -120, fontSize: 500, fontWeight: 900, color: "var(--color-ink)", opacity: 0.045, lineHeight: 1, pointerEvents: "none", userSelect: "none", zIndex: 1 }}>
          02
        </span>

        {/* Side vertical text */}
        <div style={{ position: "absolute", left: 30, top: 142, zIndex: 10, writingMode: "vertical-rl", transform: "rotate(180deg)", color: "var(--color-ink)", opacity: 0.34, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.6, pointerEvents: "none", userSelect: "none" }}>
          record / search growth archive
        </div>

        {/* Left decorative portrait */}
        <div style={{ position: "absolute", left: 92, top: 142, width: 380, height: 520, zIndex: 5, opacity: 0.5 }}>
          <Image
            src="/images/portrait-atmosphere.jpg"
            alt=""
            width={380}
            height={520}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(1.1) contrast(0.9)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, var(--color-paper) 0%, transparent 15%, transparent 85%, var(--color-paper) 100%)" }} />
        </div>

        {/* Title */}
        <div style={{ position: "absolute", left: 540, top: 142, zIndex: 10 }}>
          <div className="text-label" style={{ marginBottom: 16 }}>RECORD / 记录</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 86, lineHeight: 0.94, fontWeight: 830, color: "var(--color-ink)", marginBottom: 24 }}>
            搜索增长
            <br />
            档案
          </h2>
          <p className="text-copy" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 400, opacity: 0.62, marginBottom: 40 }}>
            每一次探索都值得被记录。从搜索到内容，从工具到系统——这里是我在实践中沉淀下来的经验和笔记。
          </p>
        </div>

        {/* Records list */}
        <div style={{ position: "absolute", left: 540, top: 490, right: 92, zIndex: 10 }}>
          {records.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                padding: "20px 0",
                borderTop: i === 0 ? "1px solid var(--color-line)" : "1px solid var(--color-line)",
                cursor: "pointer",
                transition: "opacity .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              <span style={{ fontSize: 11, color: "var(--color-muted)", minWidth: 70, letterSpacing: "0.04em", marginTop: 4 }}>{r.date}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--color-gold)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{r.tag}</span>
                </div>
                <strong style={{ display: "block", fontSize: 18, fontWeight: 700, fontFamily: "var(--font-serif)", marginBottom: 6 }}>{r.title}</strong>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--color-ink)", opacity: 0.52 }}>{r.summary}</p>
              </div>
              <span style={{ fontSize: 18, color: "var(--color-clay)", opacity: 0.3, marginTop: 4 }}>&rarr;</span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ position: "absolute", left: 92, bottom: 64, zIndex: 10, display: "flex", gap: 28, alignItems: "center" }}>
          <span style={{ fontSize: 11, opacity: 0.34, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            moran 002 · public archive
          </span>
          <span style={{ width: 1, height: 14, background: "var(--color-line)" }} />
          <a href="/" className="link-underline" style={{ fontSize: 12 }}>返回首页</a>
        </div>
      </section>
    </main>
  );
}
