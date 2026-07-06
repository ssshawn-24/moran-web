"use client";

import Image from "next/image";

const channels = [
  { label: "微信", value: "moran_creator" },
  { label: "公众号", value: "蓦然moran" },
  { label: "邮箱", value: "hello@moran.cc" },
];

export default function ContactSection() {
  return (
    <section
      className="section-dark"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "900px",
        background:
          "linear-gradient(90deg, rgba(5,5,5,.97), rgba(5,5,5,.9) 43%, rgba(5,5,5,.3) 82%), url('/images/portrait-large.jpg') right center / auto 1060px no-repeat, var(--color-black)",
        color: "var(--color-paper)",
      }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Nav bar */}
      <nav className="nav-bar">
        <span className="nav-brand" style={{ color: "var(--color-paper)" }}>
          蓦然 moran
        </span>
        <div className="nav-links" style={{ color: "var(--color-paper)", opacity: 0.6 }}>
          <a href="#">Profile</a>
          <a href="#">Focus</a>
          <a href="#">Build</a>
          <a href="#">Rhythm</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Side vertical text - left edge */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center",
          color: "var(--color-paper)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontWeight: 400,
          whiteSpace: "nowrap",
          opacity: 0.4,
          zIndex: 10,
        }}
      >
        CONTACT &mdash; LET&apos;S TALK FIRST
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "180px",
          zIndex: 10,
        }}
      >
        <span className="text-label">Contact</span>
        <h2
          style={{
            fontSize: "86px",
            lineHeight: 0.94,
            fontWeight: 830,
            fontFamily: "var(--font-serif)",
            marginTop: "16px",
            color: "var(--color-paper)",
          }}
        >
          先交换判断
        </h2>
        <p
          className="text-copy"
          style={{
            marginTop: "28px",
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: "400px",
            opacity: 0.6,
          }}
        >
          不急着开始，先聊聊。交换判断比交换名片更重要。如果你觉得我们在同一频道上，再谈具体的事。
        </p>
      </div>

      {/* Channels */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          bottom: "118px",
          display: "flex",
          gap: "34px",
          zIndex: 10,
        }}
      >
        {channels.map((ch) => (
          <div key={ch.label}>
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-paper)",
                opacity: 0.42,
                display: "block",
                marginBottom: "6px",
              }}
            >
              {ch.label}
            </span>
            <span
              className="link-underline"
              style={{
                fontSize: "15px",
                fontWeight: 780,
                color: "var(--color-paper)",
                borderBottom: "1px solid rgba(242,238,230,.25)",
                paddingBottom: "4px",
                cursor: "pointer",
              }}
            >
              {ch.value}
            </span>
          </div>
        ))}
      </div>

      {/* Note bottom-right */}
      <div
        style={{
          position: "absolute",
          right: "104px",
          bottom: "86px",
          textAlign: "right",
          fontSize: "13px",
          lineHeight: 1.7,
          color: "var(--color-paper)",
          opacity: 0.42,
          zIndex: 10,
          maxWidth: "320px",
        }}
      >
        不接广告投放、不做短期项目
        <br />
        只做长期价值的事情
        <br />
        <span style={{ opacity: 0.7 }}>
          回复可能不快，但会认真看每一条
        </span>
      </div>

      {/* Section number */}
      <div
        style={{
          position: "absolute",
          right: "-18px",
          bottom: "-120px",
          fontSize: "500px",
          fontWeight: 800,
          fontFamily: "var(--font-serif)",
          color: "var(--color-paper)",
          opacity: 0.04,
          lineHeight: 1,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        06
      </div>
    </section>
  );
}
