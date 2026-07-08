"use client";

import Image from "next/image";

const channels = [
  { label: "微信", value: "moran_creator", desc: "日常沟通首选" },
  { label: "公众号", value: "蓦然moran", desc: "文章和思考首发" },
  { label: "邮箱", value: "hello@moran.cc", desc: "适合正式交流" },
  { label: "Twitter", value: "@moran_build", desc: "碎片更新和链接" },
];

const faqs = [
  { q: "合作前需要准备什么？", a: "先看看彼此的方向是否一致。我会认真看每一条消息，但回复可能不快。" },
  { q: "接哪些类型的项目？", a: "只做长期价值的事。不接广告投放、不接短期项目、不做纯执行。" },
  { q: "为什么叫「蓦然」？", a: "蓦然回首，那人却在灯火阑珊处。长期主义的浪漫。" },
];

export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--color-black)", color: "var(--color-paper)" }}>
      {/* Navigation bar */}
      <nav className="nav-bar" style={{ position: "absolute", left: 54, right: 54, top: 36, zIndex: 30 }}>
        <span className="nav-brand" style={{ color: "var(--color-paper)" }}>moran</span>
        <div className="nav-links" style={{ color: "var(--color-paper)", opacity: 0.6 }}>
          <a href="/" style={{ color: "var(--color-paper)" }}>home</a>
          <a href="/about" style={{ color: "var(--color-paper)" }}>about</a>
          <a href="/record" style={{ color: "var(--color-paper)" }}>record</a>
          <a href="/build" style={{ color: "var(--color-paper)" }}>build</a>
          <a href="/contact" style={{ color: "var(--color-paper)" }}>contact</a>
        </div>
      </nav>

      <section style={{ position: "relative", width: "100%", overflow: "hidden", minHeight: "900px", background: "linear-gradient(90deg, rgba(5,5,5,.97), rgba(5,5,5,.88) 43%, rgba(5,5,5,.28) 82%), url('/images/portrait-large.jpg') right center / auto 1060px no-repeat, var(--color-black)" }}>
        {/* Grid overlay */}
        <div className="grid-overlay" />

        {/* Section number */}
        <span style={{ position: "absolute", right: -18, bottom: -120, fontSize: 500, fontWeight: 900, color: "var(--color-paper)", opacity: 0.04, lineHeight: 1, pointerEvents: "none", userSelect: "none", zIndex: 1 }}>04</span>

        {/* Side vertical text */}
        <div style={{ position: "absolute", left: 30, top: 142, zIndex: 10, writingMode: "vertical-rl", transform: "rotate(180deg)", color: "var(--color-paper)", opacity: 0.34, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.6, pointerEvents: "none", userSelect: "none" }}>
          contact / let&apos;s talk first
        </div>

        {/* Title */}
        <div style={{ position: "absolute", left: 92, top: 142, zIndex: 10 }}>
          <div className="text-label" style={{ marginBottom: 16, color: "var(--color-gold)" }}>CONTACT / 联系</div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 86, lineHeight: 0.94, fontWeight: 830, color: "var(--color-paper)", marginBottom: 24 }}>
            先交换
            <br />
            判断
          </h2>
          <p className="text-copy" style={{ fontSize: 15, lineHeight: 1.7, maxWidth: 380, opacity: 0.6, marginBottom: 48 }}>
            不急着开始，先聊聊。交换判断比交换名片更重要。如果你觉得我们在同一频道上，再谈具体的事。
          </p>
        </div>

        {/* Channels */}
        <div style={{ position: "absolute", left: 92, bottom: 180, display: "flex", gap: 40, zIndex: 10 }}>
          {channels.map((ch) => (
            <div key={ch.label}>
              <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.38, display: "block", marginBottom: 8 }}>{ch.label}</span>
              <span style={{ fontSize: 18, fontWeight: 780, color: "var(--color-paper)", display: "block", marginBottom: 4 }}>{ch.value}</span>
              <span style={{ fontSize: 12, opacity: 0.38 }}>{ch.desc}</span>
            </div>
          ))}
        </div>

        {/* FAQ mini section */}
        <div style={{ position: "absolute", right: 92, bottom: 86, zIndex: 10, maxWidth: 400, textAlign: "right" }}>
          <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.3, display: "block", marginBottom: 16 }}>常见说明</span>
          {faqs.map((f, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <strong style={{ fontSize: 13, fontWeight: 700, display: "block", marginBottom: 2, opacity: 0.72 }}>{f.q}</strong>
              <p style={{ fontSize: 12, lineHeight: 1.6, opacity: 0.35 }}>{f.a}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ position: "absolute", left: 92, bottom: 64, zIndex: 10, display: "flex", gap: 28, alignItems: "center" }}>
          <span style={{ fontSize: 11, opacity: 0.3, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            moran 004 · long-term only
          </span>
          <span style={{ width: 1, height: 14, background: "rgba(242,238,230,.15)" }} />
          <a href="/" className="link-underline" style={{ fontSize: 12, color: "var(--color-paper)" }}>返回首页</a>
        </div>
      </section>
    </main>
  );
}
