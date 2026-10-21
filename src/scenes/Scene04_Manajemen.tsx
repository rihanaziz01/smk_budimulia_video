import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { MANAGEMENT_TEAM, SCENES_DATA } from "../data/videoData";

export const Scene04_Manajemen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[3];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });
  const kepsek = MANAGEMENT_TEAM[0];
  const wakaseks = MANAGEMENT_TEAM.slice(1, 4);
  const kaprogs = MANAGEMENT_TEAM.slice(4, 7);

  const kepsekSpring = spring({ frame: Math.max(0, frame - 8), fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="04" sceneTitle="TIM MANAJEMEN" />

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
              <span>LEADERSHIP & MANAGEMENT · 2026</span>
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
            Kepemimpinan Berdedikasi,{" "}
            <HighlighterText delayFrames={12} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                terpercaya.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: 36,
            alignItems: "center",
          }}
        >
          {/* Left: Principal Card */}
          <div
            style={{
              opacity: interpolate(kepsekSpring, [0, 1], [0, 1]),
              transform: `scale(${interpolate(kepsekSpring, [0, 1], [0.92, 1])})`,
              background: "#ffffff",
              border: "2px solid rgba(15, 23, 42, 0.15)",
              borderRadius: 24,
              padding: 20,
              boxShadow: "0 14px 34px rgba(15, 23, 42, 0.08)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 320,
                borderRadius: 18,
                overflow: "hidden",
                border: "2px solid rgba(15, 23, 42, 0.1)",
                marginBottom: 16,
              }}
            >
              <Img
                src={staticFile(kepsek.image)}
                alt={kepsek.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "0 6px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#ea580c",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                {kepsek.role} · {kepsek.period}
              </div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", lineHeight: 1.2 }}>
                {kepsek.name}
              </div>
            </div>
          </div>

          {/* Right: Wakasek & Kaprog Bento Grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* 3 Wakasek */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0e57a6",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                ● Wakil Kepala Sekolah
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                {wakaseks.map((w, idx) => {
                  const itemSpring = spring({
                    frame: Math.max(0, frame - 15 - idx * 5),
                    fps,
                    config: { damping: 14 },
                  });
                  return (
                    <div
                      key={w.id}
                      style={{
                        opacity: interpolate(itemSpring, [0, 1], [0, 1]),
                        transform: `translateY(${interpolate(itemSpring, [0, 1], [20, 0])}px)`,
                        background: "#ffffff",
                        border: "2px solid rgba(15, 23, 42, 0.12)",
                        borderRadius: 18,
                        padding: "16px 18px",
                        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.05)",
                      }}
                    >
                      <div style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>
                        {w.name}
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#ea580c" }}>
                        {w.role}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3 Kaprog */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#ea580c",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                ● Kepala Program Keahlian
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                {kaprogs.map((k, idx) => {
                  const itemSpring = spring({
                    frame: Math.max(0, frame - 25 - idx * 5),
                    fps,
                    config: { damping: 14 },
                  });
                  return (
                    <div
                      key={k.id}
                      style={{
                        opacity: interpolate(itemSpring, [0, 1], [0, 1]),
                        transform: `translateY(${interpolate(itemSpring, [0, 1], [20, 0])}px)`,
                        background: "#0f172a",
                        color: "#ffffff",
                        border: "2px solid #0f172a",
                        borderRadius: 18,
                        padding: "16px 18px",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.18)",
                      }}
                    >
                      <div style={{ fontSize: 17, fontWeight: 800, color: "#ffffff", marginBottom: 4 }}>
                        {k.name}
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#bef264" }}>
                        {k.role}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />
    </div>
  );
};
