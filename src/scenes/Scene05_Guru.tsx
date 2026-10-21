import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { SCENES_DATA, TEACHERS_LIST } from "../data/videoData";

export const Scene05_Guru: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[4];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="05" sceneTitle="TENAGA PENDIDIK" />

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
              <span>FACULTY & TEACHERS · DUMMY DATA</span>
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
            Didukung Guru Profesional,{" "}
            <HighlighterText delayFrames={10} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                ahli di bidangnya.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* 8 Bento Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            maxWidth: 1680,
          }}
        >
          {TEACHERS_LIST.map((teacher, idx) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - 5 - idx * 3),
              fps,
              config: { damping: 14, stiffness: 140 },
            });

            return (
              <div
                key={teacher.id}
                style={{
                  opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [20, 0])}px)`,
                  background: "#ffffff",
                  border: "2px solid rgba(15, 23, 42, 0.12)",
                  borderRadius: 18,
                  padding: "16px 20px",
                  boxShadow: "0 6px 18px rgba(15, 23, 42, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: idx % 2 === 0 ? "#0f172a" : "#ea580c",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 18,
                    flexShrink: 0,
                  }}
                >
                  {teacher.name.charAt(1) || "G"}
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}>
                    {teacher.name}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#64748b", marginTop: 2 }}>
                    {teacher.subject}
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
