import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { KenBurnsFrame } from "../components/KenBurnsFrame";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { EXTRACURRICULARS, SCENES_DATA } from "../data/videoData";

export const Scene08_Eskul: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[7];

  const headerSpring = spring({ frame, fps, config: { damping: 14 } });
  const leftSpring = spring({ frame: Math.max(0, frame - 8), fps, config: { damping: 14 } });
  const rightSpring = spring({ frame: Math.max(0, frame - 16), fps, config: { damping: 14 } });

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="08" sceneTitle="ESKUL & OLAHRAGA" />

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
              <span>MINAT & BAKAT · PENGEMBANGAN DIRI</span>
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
            Bakat Siswa Tumbuh,{" "}
            <HighlighterText delayFrames={10} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 56 }}>
                sehat & kompak.
              </span>
            </HighlighterText>
          </h2>
        </div>

        {/* 2-Column Bento Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 32,
            alignItems: "center",
          }}
        >
          {/* Left: 4 Photos Grid */}
          <div
            style={{
              opacity: interpolate(leftSpring, [0, 1], [0, 1]),
              transform: `scale(${interpolate(leftSpring, [0, 1], [0.95, 1])})`,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              height: 440,
            }}
          >
            <div style={{ height: 210 }}>
              <KenBurnsFrame
                src="assets/extracurricular/eskul_pramuka.png"
                alt="Pramuka"
                durationInFrames={scene.durationInFrames}
                zoomScale={1.06}
                borderRadius={18}
              />
            </div>
            <div style={{ height: 210 }}>
              <KenBurnsFrame
                src="assets/extracurricular/eskul_paskibra.png"
                alt="Paskibra"
                durationInFrames={scene.durationInFrames}
                zoomScale={1.05}
                borderRadius={18}
              />
            </div>
            <div style={{ height: 210 }}>
              <KenBurnsFrame
                src="assets/extracurricular/eskul_pmr.png"
                alt="PMR"
                durationInFrames={scene.durationInFrames}
                zoomScale={1.07}
                borderRadius={18}
              />
            </div>
            <div style={{ height: 210 }}>
              <KenBurnsFrame
                src="assets/extracurricular/eskul_olahraga.png"
                alt="Olahraga & Senam"
                durationInFrames={scene.durationInFrames}
                zoomScale={1.06}
                borderRadius={18}
              />
            </div>
          </div>

          {/* Right: Badges & Value Card */}
          <div
            style={{
              opacity: interpolate(rightSpring, [0, 1], [0, 1]),
              transform: `translateX(${interpolate(rightSpring, [0, 1], [25, 0])}px)`,
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              className="bento-card"
              style={{
                padding: "32px 36px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0e57a6",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                ● Ragam Ekstrakurikuler Pilihan
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {EXTRACURRICULARS.map((e, idx) => (
                  <div
                    key={e.name}
                    style={{
                      background: idx % 2 === 0 ? "#0f172a" : "#ffffff",
                      color: idx % 2 === 0 ? "#bef264" : "#0f172a",
                      border: "2px solid #0f172a",
                      padding: "10px 20px",
                      borderRadius: 14,
                      fontSize: 18,
                      fontWeight: 800,
                    }}
                  >
                    {e.name}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bento-card bento-card-dark"
              style={{
                padding: "26px 34px",
              }}
            >
              <div style={{ fontSize: 20, fontWeight: 800, color: "#bef264", marginBottom: 6 }}>
                Olahraga & Senam Sehat
              </div>
              <p style={{ fontSize: 16, color: "#cbd5e1", lineHeight: 1.45 }}>
                Menjaga kebugaran jasmani, sportivitas, dan mempererat kekompakan seluruh warga sekolah.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />
    </div>
  );
};
