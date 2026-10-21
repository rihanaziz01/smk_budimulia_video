import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { SCENES_DATA } from "../data/videoData";

export const Scene10_Persiapan: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[9];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });

  const pillars = [
    {
      code: "TKA",
      title: "Persiapan TKA",
      desc: "Pendampingan intensif persiapan TKA siswa secara terstruktur dan terukur.",
      tag: "AKADEMIK",
      dark: true,
    },
    {
      code: "BMW",
      title: "Konsep BMW",
      desc: "Peta jalan karir terarah: Bekerja, Melanjutkan studi, atau Berwirausaha mandiri.",
      tag: "KARIR SISWA",
      dark: false,
    },
    {
      code: "UJIKOM",
      title: "Uji Kompetensi",
      desc: "Standarisasi dan sertifikasi keahlian berlisensi industri resmi.",
      tag: "SERTIFIKASI",
      dark: false,
    },
  ];

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="10" sceneTitle="PERSIAPAN AKADEMIK" />

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
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <div className="mono-tag">
              <span className="mono-tag-dot" />
              <span>STANDARISASI & KELULUSAN · 3 PILAR</span>
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
            Mempersiapkan Siswa,{" "}
            <HighlighterText delayFrames={10} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                siap bersaing.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* 3 Pillars Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 1680,
          }}
        >
          {pillars.map((p, idx) => {
            const cardSpring = spring({
              frame: Math.max(0, frame - 10 - idx * 8),
              fps,
              config: { damping: 14, stiffness: 130 },
            });

            return (
              <div
                key={p.code}
                className={p.dark ? "bento-card bento-card-dark" : "bento-card"}
                style={{
                  opacity: interpolate(cardSpring, [0, 1], [0, 1]),
                  transform: `translateY(${interpolate(cardSpring, [0, 1], [30, 0])}px)`,
                  padding: "40px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 380,
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
                      color: p.dark ? "#bef264" : "#ea580c",
                      marginBottom: 18,
                    }}
                  >
                    <span>PILAR 0{idx + 1}</span>
                    <span>{p.tag}</span>
                  </div>

                  <div
                    style={{
                      fontSize: 48,
                      fontWeight: 800,
                      color: p.dark ? "#ffffff" : "#0f172a",
                      lineHeight: 1.1,
                      marginBottom: 8,
                      letterSpacing: -1,
                    }}
                  >
                    {p.code}
                  </div>

                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: p.dark ? "#bef264" : "#0e57a6",
                      marginBottom: 16,
                    }}
                  >
                    {p.title}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: p.dark ? "#cbd5e1" : "#57534e",
                    lineHeight: 1.5,
                  }}
                >
                  {p.desc}
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
