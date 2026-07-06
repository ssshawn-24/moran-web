"use client";

import Image from "next/image";

export default function BuildSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "900px",
        background: "linear-gradient(90deg, #f2eee6 0% 66%, #15120f 66%)",
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
        BUILD &mdash; FROM SEARCH TO SYSTEM
      </div>

      {/* Left content area */}
      <div
        style={{
          position: "absolute",
          left: "92px",
          top: "120px",
          maxWidth: "420px",
          zIndex: 10,
        }}
      >
        <span className="text-label">Build</span>
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
          搭建系统
        </h2>
        <p
          className="text-copy"
          style={{
            marginTop: "28px",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "var(--color-ink)",
            opacity: 0.68,
          }}
        >
          不是零散的项目，而是一个层层递进的构建过程。从搜索到内容，从内容到网站，从网站到系统——每一步都在为下一步打基础。
        </p>
      </div>

      {/* Build map */}
      <div
        style={{
          position: "absolute",
          left: "642px",
          top: "116px",
          width: "650px",
          height: "588px",
          background: "rgba(242,238,230,.79)",
          border: "1px solid var(--color-line)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 10,
        }}
      >
        {/* SVG Map */}
        <svg
          viewBox="0 0 650 588"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          fill="none"
        >
          {/* Main path */}
          <path
            d="M 80 120 C 180 80, 280 200, 320 260 S 420 380, 500 340 S 560 420, 540 500"
            stroke="#895742"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Secondary path */}
          <path
            d="M 120 180 C 220 160, 340 240, 380 300 S 480 440, 520 480"
            stroke="#11100E"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.2"
          />
          {/* Circle markers */}
          <circle cx="80" cy="120" r="6" fill="#895742" />
          <circle cx="320" cy="260" r="6" fill="#895742" />
          <circle cx="540" cy="500" r="6" fill="#895742" />
        </svg>

        {/* Build items */}
        <div
          style={{
            position: "absolute",
            left: "56px",
            top: "96px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "var(--color-clay)",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            01
          </span>
          <strong
            style={{
              display: "block",
              fontSize: "34px",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
              marginTop: "8px",
              color: "var(--color-ink)",
            }}
          >
            搜索发现
          </strong>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              marginTop: "8px",
              color: "var(--color-ink)",
              opacity: 0.58,
            }}
          >
            关键词研究与内容布局
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            left: "296px",
            top: "236px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "var(--color-clay)",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            02
          </span>
          <strong
            style={{
              display: "block",
              fontSize: "34px",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
              marginTop: "8px",
              color: "var(--color-ink)",
            }}
          >
            内容体系
          </strong>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              marginTop: "8px",
              color: "var(--color-ink)",
              opacity: 0.58,
            }}
          >
            系统化的内容生产与分发
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            right: "56px",
            bottom: "48px",
            textAlign: "right",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "var(--color-clay)",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            03
          </span>
          <strong
            style={{
              display: "block",
              fontSize: "34px",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
              marginTop: "8px",
              color: "var(--color-ink)",
            }}
          >
            网站系统
          </strong>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.6,
              marginTop: "8px",
              color: "var(--color-ink)",
              opacity: 0.58,
            }}
          >
            独立站点与数字基础设施
          </p>
        </div>
      </div>

      {/* Build slice - right dark area with image */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "520px",
          overflow: "hidden",
          zIndex: 5,
        }}
      >
        <Image
          src="/images/portrait-texture.jpg"
          alt="Texture"
          fill
          style={{
            objectFit: "cover",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 30%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 30%)",
          }}
        />
        {/* Dark gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(21,18,15,.9), transparent)",
            zIndex: 2,
          }}
        />
      </div>

      {/* Caption bottom-right */}
      <div
        style={{
          position: "absolute",
          right: "104px",
          bottom: "48px",
          fontSize: "12px",
          lineHeight: 1.6,
          color: "rgba(242,238,230,.72)",
          textAlign: "right",
          zIndex: 20,
        }}
      >
        从零搭建，层层递进
        <br />
        每一步都是下一步的基础
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
          opacity: 0.045,
          lineHeight: 1,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        04
      </div>
    </section>
  );
}
