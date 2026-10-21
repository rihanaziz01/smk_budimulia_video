import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { SCENES_DATA, VIDEO_CONFIG } from "../data/videoData";

export const Scene13_Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[12];

  const contentSpring = spring({ frame, fps, config: { damping: 14, stiffness: 130 } });

  const fadeOutOpacity = interpolate(
    frame,
    [scene.durationInFrames - 30, scene.durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div className="video-container">
      <div className="tech-grid-bg" />
      <TechnicalViewportFrame sceneCode="13" sceneTitle="PENUTUP // CONTACT" />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 10,
          padding: "0 120px",
        }}
      >
        <div
          style={{
            opacity: interpolate(contentSpring, [0, 1], [0, 1]),
            transform: `scale(${interpolate(contentSpring, [0, 1], [0.92, 1])})`,
            maxWidth: 1300,
          }}
        >
          {/* Top Tag & Asterisk */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 20,
            }}
          >
            <div className="mono-tag">
              <span className="mono-tag-dot" />
              <span>OFFICIAL REGISTRATION · 2026/2027</span>
            </div>
            <AsteriskBurst size={28} color="#ea580c" speed={1.5} />
          </div>

          {/* School Emblem Badge */}
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                background: "#0f172a",
                border: "4px solid #ea580c",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 16px 36px rgba(15, 23, 42, 0.18)",
                margin: "0 auto",
              }}
            >
              <span style={{ color: "#ffffff", fontSize: 40, fontWeight: 800, letterSpacing: 2 }}>
                BM
              </span>
            </div>
          </div>

          <h2
            style={{
              fontSize: 54,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.15,
              marginBottom: 16,
              letterSpacing: -1,
            }}
          >
            Bersama SMK Budi Mulia Karawang
          </h2>

          <div
            style={{
              fontSize: 36,
              color: "#334155",
              marginBottom: 36,
            }}
          >
            <HighlighterText delayFrames={12} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 50, fontWeight: 700 }}>
                Wujudkan masa depan gemilang.
              </span>
            </HighlighterText>
          </div>

          {/* Contact Information Bento Card */}
          <div
            className="bento-card"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              padding: "26px 38px",
              textAlign: "left",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                ● WhatsApp Resmi
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", marginTop: 4 }}>
                {VIDEO_CONFIG.school.contact.whatsapp}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                ● Website Resmi
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#0e57a6", marginTop: 4 }}>
                {VIDEO_CONFIG.school.contact.website}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                ● Instagram
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#ea580c", marginTop: 4 }}>
                {VIDEO_CONFIG.school.contact.instagram}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />

      {/* Fade out to white screen at the end */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#ffffff",
          opacity: fadeOutOpacity,
          pointerEvents: "none",
          zIndex: 999,
        }}
      />
    </div>
  );
};
