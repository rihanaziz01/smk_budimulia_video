import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const WatermarkLogo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 20 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [-15, 0]);

  return (
    <div
      className="watermark-container"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "rgba(255, 255, 255, 0.95)",
        padding: "10px 22px",
        borderRadius: 16,
        boxShadow: "0 6px 20px rgba(15, 23, 42, 0.08)",
        border: "1.5px solid rgba(203, 213, 225, 0.9)",
      }}
    >
      {/* Crisp Vector Emblem */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #0e57a6 0%, #083a72 100%)",
          border: "2.5px solid #ea580c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: 800,
          fontSize: 16,
          letterSpacing: 1,
          boxShadow: "0 3px 8px rgba(14, 87, 166, 0.25)",
        }}
      >
        BM
      </div>

      {/* School Name Text */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "#0e57a6",
            letterSpacing: 0.5,
            lineHeight: 1.15,
          }}
        >
          SMK BUDI MULIA
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#ea580c",
            letterSpacing: 1.2,
          }}
        >
          KARAWANG
        </span>
      </div>
    </div>
  );
};
