import React from "react";
import { useCurrentFrame } from "remotion";

interface TechnicalViewportFrameProps {
  sceneCode: string;
  sceneTitle: string;
}

export const TechnicalViewportFrame: React.FC<TechnicalViewportFrameProps> = ({
  sceneCode,
  sceneTitle,
}) => {
  const frame = useCurrentFrame();

  // Calculate live SMPTE timecode (HH:MM:SS:FF) at 30 fps
  const totalSeconds = Math.floor(frame / 30);
  const frames = frame % 30;
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(minutes / 60);

  const timecode = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;

  return (
    <div
      style={{
        position: "absolute",
        top: 28,
        bottom: 28,
        left: 36,
        right: 36,
        pointerEvents: "none",
        zIndex: 100,
        fontFamily: "var(--font-mono)",
        color: "rgba(15, 23, 42, 0.65)",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: 1.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top Bar with Corner Brackets */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Top-Left: Corner Bracket + Project Title */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M1 21V1H21" stroke="#0f172a" strokeWidth="2.5" />
          </svg>
          <div style={{ textTransform: "uppercase" }}>
            <span style={{ color: "#0e57a6", fontWeight: 700 }}>SMK BUDI MULIA</span>
            <span style={{ margin: "0 8px", opacity: 0.4 }}>/</span>
            <span>MOTION REEL '26</span>
          </div>
        </div>

        {/* Top-Right: Rec Dot + Timecode + Corner Bracket */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: frame % 30 < 15 ? "#ef4444" : "#94a3b8",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#0f172a" }}>TC {timecode}</span>
          </div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M21 21V1H1" stroke="#0f172a" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* Bottom Bar with Corner Brackets, Ruler, and Metadata */}
      <div>
        {/* Ruler Line */}
        <div
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "rgba(15, 23, 42, 0.15)",
            position: "relative",
            marginBottom: 10,
          }}
        >
          {/* Center Tick Mark */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: -4,
              width: 1,
              height: 9,
              backgroundColor: "rgba(15, 23, 42, 0.4)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: -2,
              width: 1,
              height: 5,
              backgroundColor: "rgba(15, 23, 42, 0.25)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "75%",
              top: -2,
              width: 1,
              height: 5,
              backgroundColor: "rgba(15, 23, 42, 0.25)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Bottom-Left: Corner Bracket + Scene Indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M1 1V21H21" stroke="#0f172a" strokeWidth="2.5" />
            </svg>
            <div style={{ textTransform: "uppercase" }}>
              <span style={{ color: "#ea580c", fontWeight: 700 }}>{sceneCode}</span>
              <span style={{ margin: "0 8px", opacity: 0.4 }}>—</span>
              <span>{sceneTitle}</span>
            </div>
          </div>

          {/* Bottom-Right: Resolution, FPS + Corner Bracket */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span>1920 × 1080</span>
              <span style={{ opacity: 0.3 }}>·</span>
              <span>30 FPS</span>
              {/* Audio meter dots */}
              <div style={{ display: "flex", gap: 3, marginLeft: 6 }}>
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 1,
                      backgroundColor:
                        (frame + i * 5) % 15 > 6 ? "#ea580c" : "rgba(15, 23, 42, 0.2)",
                    }}
                  />
                ))}
              </div>
            </div>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M21 1V21H1" stroke="#0f172a" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
