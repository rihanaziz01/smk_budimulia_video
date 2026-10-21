import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { SCENES_DATA, VISI_TEXT } from "../data/videoData";

export const Scene02_Visi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[1];

  const headerSpring = spring({ frame, fps, config: { damping: 14, stiffness: 130 } });
  const cardSpring = spring({ frame: Math.max(0, frame - 10), fps, config: { damping: 14, stiffness: 120 } });

  const pillars = [
    { num: "01", name: "IPTEK", sub: "Unggulan", bg: "#0f172a", text: "#ffffff" },
    { num: "02", name: "Akhlak", sub: "Mulia", bg: "#ffffff", text: "#0f172a" },
    { num: "03", name: "Terampil", sub: "& Mandiri", bg: "#ffffff", text: "#0f172a" },
    { num: "04", name: "Entrepreneur", sub: "Berjiwa Usaha", bg: "#ffffff", text: "#0f172a" },
    { num: "05", name: "Kompetitif", sub: "Siap Bersaing", bg: "#ffffff", text: "#0f172a" },
  ];

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="02" sceneTitle="VISI SEKOLAH" />

      <div
        style={{
          position: "absolute",
          top: 90,
          left: 120,
          right: 120,
          bottom: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        {/* Header */}
        <div
          style={{
            opacity: interpolate(headerSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(headerSpring, [0, 1], [-20, 0])}px)`,
            marginBottom: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div className="mono-tag">
              <span className="mono-tag-dot" />
              <span>VISI STRATEGIS · 2026</span>
            </div>
            <AsteriskBurst size={20} color="#ea580c" />
          </div>

          <h2
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: -1,
            }}
          >
            Mencetak SDM Unggulan di Bidang{" "}
            <HighlighterText delayFrames={15} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 60 }}>
                IPTEK & Berkarakter.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* Vision Full Text Card */}
        <div
          style={{
            opacity: interpolate(cardSpring, [0, 1], [0, 1]),
            transform: `translateY(${interpolate(cardSpring, [0, 1], [25, 0])}px)`,
            background: "#ffffff",
            border: "2px solid rgba(15, 23, 42, 0.12)",
            borderRadius: 24,
            padding: "32px 40px",
            boxShadow: "0 14px 34px rgba(15, 23, 42, 0.06)",
            marginBottom: 32,
          }}
        >
          <p
            style={{
              fontSize: 26,
              fontWeight: 600,
              color: "#334155",
              lineHeight: 1.5,
            }}
          >
            "{VISI_TEXT}"
          </p>
        </div>

        {/* 5 Connected Formula Squircle Cards (Like in ref frame 08) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
        >
          {pillars.map((p, idx) => {
            const pSpring = spring({
              frame: Math.max(0, frame - 18 - idx * 5),
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={p.num}
                style={{
                  opacity: interpolate(pSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(pSpring, [0, 1], [30, 0])}px)`,
                  background: p.bg,
                  color: p.text,
                  border: "2px solid rgba(15, 23, 42, 0.15)",
                  borderRadius: 20,
                  padding: "20px 24px",
                  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 140,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    opacity: 0.6,
                    fontWeight: 700,
                  }}
                >
                  <span>PILAR</span>
                  <span>{p.num}</span>
                </div>
                <div>
                  <div style={{ fontSize: 24, fontWeight: 800, lineHeight: 1.15 }}>
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      opacity: 0.75,
                      fontWeight: 600,
                      marginTop: 4,
                    }}
                  >
                    {p.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />
    </div>
  );
};
