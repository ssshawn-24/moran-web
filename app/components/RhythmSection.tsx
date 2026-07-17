"use client";

import Image from "next/image";

const imageFrames = [
  { src: "/images/portrait-face.jpg", alt: "Face", offset: 0 },
  { src: "/images/portrait-texture.jpg", alt: "Texture", offset: 42 },
  { src: "/images/portrait-mountain.jpg", alt: "Mountain", offset: 84 },
];

const timelineItems = [
  { num: "01", title: "观察" },
  { num: "02", title: "拆解" },
  { num: "03", title: "搭建" },
  { num: "04", title: "记录" },
  { num: "05", title: "迭代" },
];

export default function RhythmSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse at 76% 22%, rgba(200,151,88,.16), transparent 26%), #efebe3",
      }}
    >
      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Nav bar */}
      <nav className="nav-bar">
        <span className="nav-brand">蓦然 moran</span>
        <div className="nav-links">
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
          color: "var(--color-ink)",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          fontWeight: 400,
          whiteSpace: "nowrap",
          opacity: 0.35,
          zIndex: 10,
        }}
      >
        RHYTHM &mdash; A CREATIVE CYCLE
      </div>

      {/* Section number - small, top-left */}
      <div
        style={{
          position: "absolute",
          top: "54px",
          left: "92px",
          fontSize: "12px",
          fontWeight: 700,
          fontFamily: "var(--font-serif)",
          color: "var(--color-clay)",
          letterSpacing: "0.06em",
          zIndex: 10,
        }}
      >
        05
      </div>

      {/* Section label + title */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "120px",
          maxWidth: "480px",
          zIndex: 10,
        }}
      >
        <span className="text-label">Rhythm</span>
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
          创作节奏
        </h2>
        <p
          className="text-copy"
          style={{
            marginTop: "28px",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--color-ink)",
            opacity: 0.68,
            maxWidth: "360px",
          }}
        >
          创作不是灵感爆发，而是一种可循环的节奏。观察、拆解、搭建、记录、迭代——五个步骤构成完整的创作闭环。
        </p>
      </div>

      {/* Image strip */}
      <div
        style={{
          position: "absolute",
          right: "92px",
          top: "108px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 170px)",
          gap: "18px",
          zIndex: 10,
        }}
      >
        {imageFrames.map((frame, i) => (
          <div
            key={i}
            style={{
              width: "170px",
              height: "230px",
              overflow: "hidden",
              marginTop: `${frame.offset}px`,
              position: "relative",
              border: "1px solid var(--color-line)",
            }}
          >
            <Image
              src={frame.src}
              alt={frame.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Spec text */}
      <div
        style={{
          position: "absolute",
          right: "94px",
          top: "408px",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--color-ink)",
          opacity: 0.42,
          zIndex: 10,
        }}
      >
        Portrait Collection &mdash; Texture / Face / Mountain
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          right: "92px",
          bottom: "124px",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          borderTop: "1px solid var(--color-line)",
          paddingTop: "0",
          zIndex: 10,
        }}
      >
        {timelineItems.map((item) => (
          <div key={item.num}>
            <b
              style={{
                fontSize: "12px",
                color: "var(--color-clay)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                display: "block",
              }}
            >
              {item.num}
            </b>
            <strong
              style={{
                display: "block",
                fontSize: "36px",
                fontWeight: 700,
                fontFamily: "var(--font-serif)",
                marginTop: "82px",
                color: "var(--color-ink)",
              }}
            >
              {item.title}
            </strong>
          </div>
        ))}
      </div>

      {/* Section number - large, background */}
      <div
        style={{
          position: "absolute",
          right: "-18px",
          bottom: "-120px",
          fontSize: "500px",
          fontWeight: 800,
          fontFamily: "var(--font-serif)",
          color: "var(--color-ink)",
          opacity: 0.045,
          lineHeight: 1,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        05
      </div>
    </section>
  );
}
