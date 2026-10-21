import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { MISI_LIST, SCENES_DATA } from "../data/videoData";

export const Scene03_Misi: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[2];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="03" sceneTitle="MISI STRATEGIS" />

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
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <div className="mono-tag">
              <span className="mono-tag-dot" />
              <span>ROADMAP STRATEGIS · 8 MISI</span>
            </div>
            <AsteriskBurst size={20} color="#0e57a6" />
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
            Delapan Misi,{" "}
            <HighlighterText delayFrames={12} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                fondasi masa depan.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* 8 Bento Squircle Cards (4x2 Grid) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
            maxWidth: 1680,
          }}
        >
          {MISI_LIST.map((misi, idx) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - 10 - idx * 4),
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={misi.id}
                style={{
                  opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [25, 0])}px)`,
                  background: idx === 0 ? "#0f172a" : "#ffffff",
                  color: idx === 0 ? "#ffffff" : "#0f172a",
                  border: idx === 0 ? "2px solid #0f172a" : "2px solid rgba(15, 23, 42, 0.12)",
                  borderRadius: 20,
                  padding: "22px 24px",
                  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 175,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 700,
                      opacity: 0.65,
                      marginBottom: 10,
                    }}
                  >
                    <span>MISI #{String(misi.id).padStart(2, "0")}</span>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: idx % 2 === 0 ? "#bef264" : "#ea580c",
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: 21,
                      fontWeight: 800,
                      lineHeight: 1.25,
                      marginBottom: 6,
                    }}
                  >
                    {misi.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    opacity: 0.8,
                    lineHeight: 1.4,
                  }}
                >
                  {misi.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />
    </div>
  );
};
