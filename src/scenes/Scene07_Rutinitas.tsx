import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { KenBurnsFrame } from "../components/KenBurnsFrame";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { ROUTINE_ITEMS, SCENES_DATA } from "../data/videoData";

export const Scene07_Rutinitas: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[6];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="07" sceneTitle="RUTINITAS SEKOLAH" />

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
              <span>TIMELINE HARIAN · 5 KEGIATAN RUTIN</span>
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
            Sehari di Sekolah,{" "}
            <HighlighterText delayFrames={10} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                disiplin & kebersamaan.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* 5 Step Squircle Cards (Like ref frame 08) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            maxWidth: 1680,
          }}
        >
          {ROUTINE_ITEMS.map((item, idx) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - 10 - idx * 8),
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={item.id}
                style={{
                  opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [25, 0])}px)`,
                  background: "#ffffff",
                  border: "2px solid rgba(15, 23, 42, 0.12)",
                  borderRadius: 22,
                  padding: 16,
                  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {/* Photo frame */}
                <div style={{ width: "100%", height: 165, borderRadius: 14, overflow: "hidden" }}>
                  <KenBurnsFrame
                    src={item.image}
                    alt={item.title}
                    durationInFrames={scene.durationInFrames}
                    zoomScale={1.06}
                    borderRadius={14}
                  />
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#ea580c",
                      marginBottom: 6,
                    }}
                  >
                    <span>STEP 0{item.step}</span>
                    <span>→</span>
                  </div>

                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#0f172a",
                      lineHeight: 1.25,
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#64748b",
                      lineHeight: 1.35,
                    }}
                  >
                    {item.desc}
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
