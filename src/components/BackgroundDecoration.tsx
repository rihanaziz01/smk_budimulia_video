import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const BackgroundDecoration: React.FC = () => {
  const frame = useCurrentFrame();

  const float1 = interpolate(Math.sin(frame * 0.02), [-1, 1], [-15, 15]);
  const float2 = interpolate(Math.cos(frame * 0.015), [-1, 1], [-10, 10]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: 0,
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Top Left Organic Glow Arc */}
      <div
        style={{
          position: "absolute",
          top: -160 + float1,
          left: -120 + float2,
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14, 87, 166, 0.09) 0%, rgba(14, 87, 166, 0) 70%)",
        }}
      />

      {/* Bottom Right Orange Accent Arc */}
      <div
        style={{
          position: "absolute",
          bottom: -180 - float2,
          right: -100 - float1,
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234, 88, 12, 0.07) 0%, rgba(234, 88, 12, 0) 70%)",
        }}
      />

      {/* Subtle modern geometric corner accent */}
      <svg
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "320px",
          height: "320px",
          opacity: 0.06,
        }}
        viewBox="0 0 100 100"
      >
        <path d="M0 100 L100 100 A100 100 0 0 0 0 0 Z" fill="#0e57a6" />
      </svg>
    </div>
  );
};
