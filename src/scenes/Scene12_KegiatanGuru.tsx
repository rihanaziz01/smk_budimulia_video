import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { KenBurnsFrame } from "../components/KenBurnsFrame";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { SCENES_DATA, TEACHER_ACTIVITIES } from "../data/videoData";

export const Scene12_KegiatanGuru: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[11];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="12" sceneTitle="MUTU PENDIDIK" />

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
            marginBottom: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div className="mono-tag">
              <span className="mono-tag-dot" />
              <span>KOMPETENSI GURU · 3 KEGIATAN UTAMA</span>
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
            Guru Terus Belajar,{" "}
            <HighlighterText delayFrames={10} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                demi mutu pendidikan.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* 3 Activities Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 1680,
          }}
        >
          {TEACHER_ACTIVITIES.map((act, idx) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - 10 - idx * 8),
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={act.id}
                className="bento-card"
                style={{
                  opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [30, 0])}px)`,
                  padding: 22,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ width: "100%", height: 230, borderRadius: 16, overflow: "hidden" }}>
                  <KenBurnsFrame
                    src={act.image}
                    alt={act.title}
                    durationInFrames={scene.durationInFrames}
                    zoomScale={1.06}
                    borderRadius={16}
                  />
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#ea580c",
                      marginBottom: 6,
                    }}
                  >
                    PROGRAM 0{idx + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: "#0f172a",
                      lineHeight: 1.25,
                      marginBottom: 6,
                    }}
                  >
                    {act.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#64748b",
                      lineHeight: 1.45,
                    }}
                  >
                    {act.desc}
                  </p>
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
