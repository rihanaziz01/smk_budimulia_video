import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { KenBurnsFrame } from "../components/KenBurnsFrame";
import { AsteriskBurst, ConnectedProgressDots, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { INDUSTRY_CLASSES, SCENES_DATA } from "../data/videoData";

export const Scene06_Industri: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[5];

  // 3 sub-parts: 0-199 (TKJ), 200-399 (RPL), 400-599 (Akuntansi)
  const activeIndex = Math.min(2, Math.floor(frame / 200));
  const subFrame = frame % 200;
  const currentClass = INDUSTRY_CLASSES[activeIndex];

  const headerSpring = spring({ frame: Math.min(frame, 60), fps, config: { damping: 14 } });
  const contentSpring = spring({ frame: subFrame, fps, config: { damping: 14, stiffness: 130 } });

  const opacity = interpolate(contentSpring, [0, 1], [0, 1]);
  const translateY = interpolate(contentSpring, [0, 1], [30, 0]);

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="06" sceneTitle={`KELAS INDUSTRI // ${currentClass.partner.toUpperCase()}`} />

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
            marginBottom: 24,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <div className="mono-tag">
                <span className="mono-tag-dot" />
                <span>LINK & MATCH INDUSTRI · 3 KELAS RESMI</span>
              </div>
              <AsteriskBurst size={20} color="#ea580c" />
            </div>

            <h2
              style={{
                fontSize: 46,
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.15,
                letterSpacing: -1,
              }}
            >
              Belajar Langsung,{" "}
              <HighlighterText delayFrames={10} color="#bef264">
                <span className="serif-italic" style={{ fontSize: 54 }}>
                  bersama dunia kerja.
                </span>
              </HighlighterText>
            </h2>
          </div>

          {/* Stepper Tags */}
          <div style={{ display: "flex", gap: 10 }}>
            {INDUSTRY_CLASSES.map((cls, idx) => (
              <div
                key={cls.id}
                style={{
                  fontFamily: "var(--font-mono)",
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  border: "2px solid #0f172a",
                  background: activeIndex === idx ? "#0f172a" : "#ffffff",
                  color: activeIndex === idx ? "#bef264" : "#0f172a",
                  transition: "all 0.3s ease",
                }}
              >
                {cls.name}
              </div>
            ))}
          </div>
        </div>

        {/* 3D Tilted Bento Layout (Exactly like ref frame 04) */}
        <div
          style={{
            opacity,
            transform: `translateY(${translateY}px) perspective(1200px) rotateX(4deg) rotateY(-3deg)`,
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          {/* Left: Dark Technical Console Card */}
          <div
            className="bento-card bento-card-dark"
            style={{
              padding: "36px 40px",
              minHeight: 440,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: 1.5,
                  color: "#bef264",
                }}
              >
                <span>KELAS INDUSTRI #{String(activeIndex + 1).padStart(2, "0")}</span>
                <span>PARTNERSHIP RESMI</span>
              </div>

              <h3
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                {currentClass.name}
              </h3>

              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#bef264",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 16 }}>Mitra:</span>
                <span>{currentClass.partner}</span>
              </div>

              {/* Technical Code / Spec Box */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: 14,
                  padding: "18px 22px",
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                  color: "#e2e8f0",
                  lineHeight: 1.6,
                }}
              >
                <div style={{ color: "#94a3b8" }}>// Kurikulum berbasis kebutuhan industri</div>
                <div style={{ color: "#bef264" }}>const kompetensi = standarisasi(industri);</div>
                <div>await magang.langsung(&#123; mitra: "{currentClass.partner}" &#125;);</div>
                <div style={{ color: "#38bdf8" }}>return sertifikasi_profesi;</div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#94a3b8" }}>
                BASELINE: PRAKTIK NYATA & PROYEK RIIL
              </div>
              <ConnectedProgressDots activeIndex={activeIndex} count={3} color="#bef264" />
            </div>
          </div>

          {/* Right: Activity Photo Card with Squircle Frame */}
          <div
            className="bento-card"
            style={{
              padding: 20,
              height: 440,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "100%", height: 320, borderRadius: 16, overflow: "hidden" }}>
              <KenBurnsFrame
                src={currentClass.activityPhoto}
                alt={currentClass.name}
                durationInFrames={200}
                zoomScale={1.08}
                borderRadius={16}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px 8px",
              }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}>
                  Dokumentasi Praktik Siswa
                </div>
                <div style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>
                  Kelas {currentClass.name} x {currentClass.partner}
                </div>
              </div>
              <div className="mono-tag" style={{ background: "#bef264", color: "#0f172a", border: "none" }}>
                <span>TERSERTIFIKASI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />
    </div>
  );
};
