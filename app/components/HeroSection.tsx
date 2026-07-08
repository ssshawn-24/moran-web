"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: 900,
        background: "radial-gradient(ellipse at 74% 42%, rgba(200,151,88,.14), transparent 34%), linear-gradient(115deg, #f5f1e9 0%, #e7e0d5 55%, #b9b0a5 100%)",
      }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" style={{ opacity: 0.74, maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)" }} />

      {/* Section number "01" */}
      <span style={{ position: "absolute", right: -18, bottom: -120, fontSize: 500, fontWeight: 900, color: "var(--color-ink)", opacity: 0.045, lineHeight: 1, pointerEvents: "none", userSelect: "none", zIndex: 1 }}>01</span>

      {/* Portrait image */}
      <Image
        src="/images/portrait-large.jpg"
        alt=""
        width={1060}
        height={1140}
        style={{
          position: "absolute",
          right: -22,
          top: -120,
          zIndex: 5,
          objectFit: "cover",
          objectPosition: "center top",
          opacity: 0.88,
          pointerEvents: "none",
          filter: "saturate(.86) contrast(1.04)",
          maskImage: "linear-gradient(90deg,transparent 0%,#000 38%,#000 100%)",
          WebkitMaskImage: "linear-gradient(90deg,transparent 0%,#000 38%,#000 100%)",
        }}
      />

      {/* Hero veil overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", background: "linear-gradient(90deg, rgba(242,238,230,.98) 0%, rgba(242,238,230,.86) 39%, rgba(242,238,230,.12) 73%),linear-gradient(180deg, rgba(17,16,14,.02), rgba(17,16,14,.18))" }} />

      {/* Navigation bar */}
      <nav className="nav-bar" style={{ position: "absolute", left: 54, right: 54, top: 36, zIndex: 30 }}>
        <span className="nav-brand">moran</span>
        <div className="nav-links">
          <a href="/about">about</a>
          <a href="/record">record</a>
          <a href="/build">build</a>
          <a href="/contact">contact</a>
        </div>
      </nav>

      {/* Side vertical text */}
      <div style={{ position: "absolute", left: 30, top: 142, zIndex: 10, writingMode: "vertical-rl", transform: "rotate(180deg)", color: "var(--color-ink)", opacity: 0.34, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.6, pointerEvents: "none", userSelect: "none" }}>
        creator archive / search / ai / web
      </div>

      {/* Title block */}
      <div style={{ position: "absolute", left: 92, top: 130, zIndex: 10 }}>
        <div className="text-label" style={{ marginBottom: 14 }}>MORAN / CREATOR RECORD</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 172, lineHeight: 0.85, fontWeight: 500, color: "var(--color-ink)", textWrap: "balance", wordBreak: "keep-all", overflowWrap: "break-word" }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.68em", fontWeight: 840 }}>蓦然</span> moran
        </h1>
      </div>

      {/* Sub block */}
      <div style={{ position: "absolute", left: 98, top: 578, zIndex: 10, maxWidth: 560 }}>
        <strong style={{ display: "block", color: "var(--color-clay)", fontSize: 13, fontWeight: 840, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 18 }}>蓦然 · build in public</strong>
        <p style={{ color: "var(--color-ink)", fontSize: 29, lineHeight: 1.45, fontWeight: 520, maxWidth: 520 }}>我在把搜索、AI 与网站建设，慢慢做成自己的长期能力。</p>
      </div>

      {/* Actions */}
      <div style={{ position: "absolute", left: 98, top: 720, zIndex: 10, display: "flex", alignItems: "center", gap: 36 }}>
        <button className="btn-primary" style={{ color: "var(--color-ink)", borderColor: "var(--color-ink)" }}>阅读记录</button>
        <a href="#about" className="link-underline" style={{ color: "var(--color-ink)" }}>认识我</a>
      </div>

      {/* Caption */}
      <div style={{ position: "absolute", right: 86, bottom: 82, width: 314, textAlign: "right", zIndex: 10 }}>
        <p style={{ color: "var(--color-ink)", opacity: 0.56, fontSize: 13, lineHeight: 1.7 }}>这里不是一张精致名片，更像一个正在打开的工作台。</p>
      </div>

      {/* Paper texture overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none", opacity: 0.1, mixBlendMode: "overlay", background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.8) 0%, transparent 60%)" }} />
    </section>
  );
}
