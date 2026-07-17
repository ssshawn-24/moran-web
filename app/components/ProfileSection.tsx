"use client";

import Image from "next/image";

export default function ProfileSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "900px",
        background:
          "linear-gradient(90deg, #11100e 0 46%, var(--color-paper) 46%)",
      }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Nav bar */}
      <nav className="nav-bar">
        <span className="nav-brand">蓦然 moran</span>
        <div className="nav-links" style={{ color: "var(--color-paper)" }}>
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
          zIndex: 10,
        }}
      >
        PROFILE &mdash; NOT A PERFECT RESUME
      </div>

      {/* Portrait */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "88px",
          width: "645px",
          height: "720px",
          overflow: "hidden",
          zIndex: 5,
        }}
      >
        <Image
          src="/images/portrait-main.jpg"
          alt="Portrait"
          fill
          style={{
            objectFit: "cover",
            boxShadow: "0 8px 60px rgba(0,0,0,.35)",
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        />

        {/* Scan overlay */}
        <div
          className="scan-overlay"
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(242,238,230,.2)",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              background: "transparent",
              boxShadow:
                "0 130px 0 rgba(242,238,230,.06), 0 268px 0 rgba(242,238,230,.06), 0 406px 0 rgba(242,238,230,.06), 0 544px 0 rgba(242,238,230,.06)",
            }}
          />
        </div>
      </div>

      {/* Right content area */}
      <div
        style={{
          position: "absolute",
          right: "110px",
          top: "160px",
          maxWidth: "480px",
          zIndex: 10,
        }}
      >
        <span className="text-label">Profile</span>
        <h2
          style={{
            fontSize: "86px",
            lineHeight: 0.94,
            fontWeight: 830,
            fontFamily: "var(--font-serif)",
            marginTop: "16px",
            color: "var(--color-ink)",
          }}
        >
          不是一张完美简历
        </h2>

        <p
          className="text-copy"
          style={{
            marginTop: "36px",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--color-ink)",
            opacity: 0.72,
          }}
        >
          这不是一份标准简历，而是一个创作者的系统性档案。搜索增长、内容搭建、网站构建——每一步都围绕"被人找到"这个核心命题展开。
        </p>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--color-ink)",
            opacity: 0.48,
          }}
        >
          做过的事情不少，但真正重要的是背后的逻辑。
        </p>

        {/* Facts grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--color-line)",
            marginTop: "56px",
            paddingTop: "24px",
          }}
        >
          {[
            { title: "真实", desc: "不编造，不包装" },
            { title: "务实", desc: "可验证的结果" },
            { title: "长期", desc: "持续在做的" },
            { title: "清晰", desc: "表达有逻辑" },
          ].map((item) => (
            <div key={item.title}>
              <strong
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--color-clay)",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                {item.title}
              </strong>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--color-ink)",
                  opacity: 0.56,
                }}
              >
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Code text bottom-left */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          bottom: "48px",
          zIndex: 10,
          color: "var(--color-paper)",
          fontSize: "12px",
          lineHeight: 2,
          letterSpacing: "0.04em",
          fontFamily: "monospace",
          opacity: 0.5,
        }}
      >
        <div>moran 001</div>
        <div>search growth</div>
        <div>web building</div>
        <div>quiet system</div>
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
          color: "var(--color-ink)",
          opacity: 0.04,
          lineHeight: 1,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        02
      </div>
    </section>
  );
}
