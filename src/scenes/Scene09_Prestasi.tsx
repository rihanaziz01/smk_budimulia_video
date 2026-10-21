import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { ACHIEVEMENTS, SCENES_DATA } from "../data/videoData";

export const Scene09_Prestasi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[8];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="09" sceneTitle="PRESTASI & PENGHARGAAN" />

      <div
        style={{
          position: "absolute",
          top: 80,
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 28,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div className="mono-tag">
                <span className="mono-tag-dot" />
                <span>PENGHARGAAN & JUARA · DATA DUMMY</span>
              </div>
              <AsteriskBurst size={20} color="#ea580c" />
            </div>

            <h2
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.15,
                letterSpacing: -1,
              }}
            >
              Terus Berprestasi,{" "}
              <HighlighterText delayFrames={10} color="#bef264">
                <span className="serif-italic" style={{ fontSize: 56 }}>
                  membanggakan.
                </span>
              </HighlighterText>
            </h2>
          </div>

          <div className="mono-tag" style={{ background: "#fef08a", color: "#854d0e", border: "none" }}>
            <span>[DUMMY PRESTASI]</span>
          </div>
        </div>

        {/* 3 Prestasi Bento Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 1680,
          }}
        >
          {ACHIEVEMENTS.map((item, idx) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - 10 - idx * 8),
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={item.id}
                className="bento-card"
                style={{
                  opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [30, 0])}px)`,
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 360,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#ea580c",
                      marginBottom: 16,
                    }}
                  >
                    <span>AWARD 0{idx + 1}</span>
                    <span>TAHUN {item.year}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#0f172a",
                      lineHeight: 1.25,
                      marginBottom: 10,
                    }}
                  >
                    {item.title}
                  </h3>

                  <div style={{ fontSize: 18, fontWeight: 600, color: "#64748b" }}>
                    {item.level}
                  </div>
                </div>

                <div
                  style={{
                    background: "#0f172a",
                    color: "#ffffff",
                    padding: "18px 24px",
                    borderRadius: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 22, fontWeight: 800, color: "#bef264" }}>
                    {item.award}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#94a3b8" }}>
                    OFFICIAL
                  </span>
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
