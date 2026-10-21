import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { GUIDANCE_SERVICES, SCENES_DATA } from "../data/videoData";

export const Scene11_Bimbingan: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[10];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });
  const flowSpring = spring({ frame: Math.max(0, frame - 25), fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="11" sceneTitle="BIMBINGAN & KARIR" />

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
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div className="mono-tag">
              <span className="mono-tag-dot" />
              <span>PENDAMPINGAN KARIR · 5 LAYANAN</span>
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
            Bimbingan Diberikan,{" "}
            <HighlighterText delayFrames={10} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                sesuai masa depan siswa.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* 5 Guidance Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            marginBottom: 28,
            maxWidth: 1680,
          }}
        >
          {GUIDANCE_SERVICES.map((g, idx) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - 10 - idx * 5),
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={g.id}
                className="bento-card"
                style={{
                  opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [25, 0])}px)`,
                  padding: "24px 22px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 180,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#ea580c",
                      marginBottom: 8,
                    }}
                  >
                    0{idx + 1} // LAYANAN
                  </div>
                  <h3
                    style={{
                      fontSize: 21,
                      fontWeight: 800,
                      color: "#0f172a",
                      lineHeight: 1.25,
                      marginBottom: 6,
                    }}
                  >
                    {g.title}
                  </h3>
                </div>
                <div style={{ fontSize: 14, color: "#64748b", fontWeight: 500 }}>
                  {g.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Flow: Siswa -> Bimbingan -> Bekerja / Kuliah / Wirausaha */}
        <div
          style={{
            opacity: interpolate(flowSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(flowSpring, [0, 1], [0.95, 1])})`,
            background: "#0f172a",
            color: "#ffffff",
            padding: "26px 40px",
            borderRadius: 24,
            boxShadow: "0 14px 36px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1680,
          }}
        >
          {/* Step 1: Siswa */}
          <div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#ffffff" }}>
              Siswa SMK Budi Mulia
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#94a3b8", marginTop: 2 }}>
              INPUT: POTENSI DIRI
            </div>
          </div>

          {/* Arrow */}
          <span style={{ fontSize: 32, fontWeight: 800, color: "#bef264" }}>→</span>

          {/* Step 2: Bimbingan */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1.5px solid #bef264",
              padding: "14px 28px",
              borderRadius: 16,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: "#bef264" }}>
              Bimbingan Terarah
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#cbd5e1", marginTop: 2 }}>
              TKA, UJIKOM, KARIR
            </div>
          </div>

          {/* Arrow */}
          <span style={{ fontSize: 32, fontWeight: 800, color: "#bef264" }}>→</span>

          {/* Step 3: Outcomes (BMW) */}
          <div style={{ display: "flex", gap: 14 }}>
            <div
              style={{
                background: "#059669",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: 14,
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              Bekerja
            </div>
            <div
              style={{
                background: "#2563eb",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: 14,
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              Melanjutkan
            </div>
            <div
              style={{
                background: "#d97706",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: 14,
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              Wirausaha
            </div>
          </div>
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />
    </div>
  );
};
