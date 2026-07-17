"use client";

import Image from "next/image";

const focusCards = [
  {
    label: "SEARCH",
    title: "搜索",
    desc: "从关键词到排名，找到被发现的路径",
    style: { left: "10px", top: "24px", transform: "rotate(-2deg)" },
  },
  {
    label: "CONTENT",
    title: "内容",
    desc: "每一条内容都是一次系统性的表达",
    style: { right: "28px", top: "86px", transform: "rotate(2deg)" },
  },
  {
    label: "WEBSITE",
    title: "网站",
    desc: "搭建属于自己的数字基础设施",
    style: { left: "96px", bottom: "124px", transform: "rotate(0.7deg)" },
  },
  {
    label: "AI",
    title: "AI",
    desc: "用智能工具放大每一步的效率",
    style: { right: "78px", bottom: "44px", transform: "rotate(-1deg)" },
  },
];

export default function FocusSection() {
  return (
    <section
      className="section-dark"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "900px",
        background:
          "linear-gradient(90deg, rgba(5,5,5,.94), rgba(5,5,5,.78) 56%, rgba(5,5,5,.42)), url('/images/portrait-atmosphere.jpg') right center / auto 1040px no-repeat, var(--color-black)",
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
        FOCUS &mdash; FOUR PILLARS OF GROWTH
      </div>

      {/* Section label */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "120px",
          zIndex: 10,
        }}
      >
        <span className="text-label">Focus</span>
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
          四个核心
        </h2>
        <p
          className="text-copy"
          style={{
            marginTop: "24px",
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: "340px",
            opacity: 0.6,
          }}
        >
          所有工作围绕四个方向展开。搜索带来发现，内容建立信任，网站承载系统，AI放大效率。
        </p>
      </div>

      {/* Focus cards container */}
      <div
        style={{
          position: "absolute",
          right: "88px",
          top: "118px",
          width: "724px",
          height: "604px",
          zIndex: 10,
        }}
      >
        {focusCards.map((card, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "342px",
              height: "214px",
              padding: "26px",
              background: "rgba(242,238,230,.93)",
              border: "1px solid rgba(242,238,230,.3)",
              boxShadow: "0 4px 24px rgba(0,0,0,.18)",
              ...card.style,
            }}
          >
            <b
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-clay)",
                fontWeight: 600,
              }}
            >
              {card.label}
            </b>
            <strong
              style={{
                display: "block",
                fontSize: "32px",
                fontWeight: 700,
                fontFamily: "var(--font-serif)",
                marginTop: "54px",
                color: "var(--color-ink)",
              }}
            >
              {card.title}
            </strong>
            <p
              style={{
                marginTop: "12px",
                fontSize: "13px",
                lineHeight: 1.6,
                color: "var(--color-ink)",
                opacity: 0.64,
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "82px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "92px",
          gap: "48px",
          borderTop: "1px solid rgba(242,238,230,.1)",
          zIndex: 10,
        }}
      >
        {["观察", "判断", "尝试", "复盘", "下一步"].map((item) => (
          <span
            key={item}
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-paper)",
              opacity: 0.5,
            }}
          >
            {item}
          </span>
        ))}
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
        03
      </div>
    </section>
  );
}
