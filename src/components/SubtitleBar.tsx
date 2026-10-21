import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface SubtitleBarProps {
  text: string;
}

export const SubtitleBar: React.FC<SubtitleBarProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 20 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateY = interpolate(entrance, [0, 1], [15, 0]);

  if (!text) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 56,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 95,
        pointerEvents: "none",
        padding: "0 100px",
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          background: "rgba(15, 23, 42, 0.92)",
          backdropFilter: "blur(8px)",
          color: "#ffffff",
          padding: "12px 36px",
          borderRadius: 999,
          fontSize: 22,
          fontWeight: 600,
          lineHeight: 1.4,
          textAlign: "center",
          maxWidth: 1400,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          letterSpacing: 0.2,
        }}
      >
        {text}
      </div>
    </div>
  );
};
