import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { KenBurnsFrame } from "../components/KenBurnsFrame";
import { AsteriskBurst, HighlighterText } from "../components/MotionGraphicElements";
import { SubtitleBar } from "../components/SubtitleBar";
import { TechnicalViewportFrame } from "../components/TechnicalViewportFrame";
import { SCENES_DATA } from "../data/videoData";

export const Scene01_Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = SCENES_DATA[0];

  const logoSpring = spring({ frame, fps, config: { damping: 12, stiffness: 140 } });
  const textSpring = spring({ frame: Math.max(0, frame - 10), fps, config: { damping: 14, stiffness: 120 } });
  const cardSpring = spring({ frame: Math.max(0, frame - 18), fps, config: { damping: 16 } });

  const logoScale = interpolate(logoSpring, [0, 1], [0.5, 1]);
  const textTranslateY = interpolate(textSpring, [0, 1], [40, 0]);
  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);

  return (
    <div className="video-container">
      {/* Technical Grid Texture */}
      <div className="tech-grid-bg" />

      {/* Camera Viewfinder HUD Frame */}
      <TechnicalViewportFrame sceneCode="01" sceneTitle="OPENING" />

      {/* Floating 3D Tilted Background Cards */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: interpolate(cardSpring, [0, 1], [0, 0.4]),
          transform: "perspective(1200px) rotateX(10deg) rotateY(-8deg)",
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "absolute", top: 100, left: 80, width: 340, height: 230 }}>
          <KenBurnsFrame
            src="assets/routine/01_apel.png"
            alt="Apel"
            durationInFrames={scene.durationInFrames}
            zoomScale={1.06}
            style={{ border: "2px solid rgba(15, 23, 42, 0.15)" }}
          />
        </div>
        <div style={{ position: "absolute", bottom: 120, right: 100, width: 380, height: 250 }}>
          <KenBurnsFrame
            src="assets/industry/foto_industri_tkj.png"
            alt="Industri"
            durationInFrames={scene.durationInFrames}
            zoomScale={1.06}
            style={{ border: "2px solid rgba(15, 23, 42, 0.15)" }}
          />
        </div>
      </div>

      {/* Center Hero Kinetic Typography */}
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
          padding: "0 100px",
        }}
      >
        {/* Top Tag & Asterisk */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 20,
            opacity: textOpacity,
          }}
        >
          <div className="mono-tag">
            <span className="mono-tag-dot" />
            <span>OFFICIAL MOTION PROFILE '26</span>
          </div>
          <AsteriskBurst size={28} color="#ea580c" speed={1.2} />
        </div>

        {/* School Emblem Badge with Snap Pop */}
        <div
          style={{
            transform: `scale(${logoScale})`,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#0f172a",
              border: "4px solid #ea580c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 16px 36px rgba(15, 23, 42, 0.2)",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: 2,
              }}
            >
              BM
            </span>
          </div>
        </div>

        {/* Kinetic Title & Slogan */}
        <div
          style={{
            transform: `translateY(${textTranslateY}px)`,
            opacity: textOpacity,
            maxWidth: 1300,
          }}
        >
          <h1
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: -1.5,
              marginBottom: 16,
            }}
          >
            SMK BUDI MULIA <span style={{ color: "#0e57a6" }}>KARAWANG</span>
          </h1>

          <div
            style={{
              fontSize: 34,
              color: "#334155",
              lineHeight: 1.4,
            }}
          >
            <span>Mencetak generasi unggul, </span>
            <span className="serif-italic" style={{ fontSize: 44, color: "#0e57a6" }}>
              kreatif,
            </span>
            <span> dan </span>
            <HighlighterText delayFrames={20} color="#bef264">
              <span className="serif-italic" style={{ fontSize: 44, fontWeight: 700 }}>
                berkarakter.
              </span>
            </HighlighterText>
          </div>
        </div>
      </div>

      <SubtitleBar text={scene.narrationText} />
    </div>
  );
};
