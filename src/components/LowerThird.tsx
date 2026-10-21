import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface LowerThirdProps {
  name: string;
  role: string;
  period?: string;
  delayFrames?: number;
}

export const LowerThird: React.FC<LowerThirdProps> = ({
  name,
  role,
  period,
  delayFrames = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delayFrames);
  const entrance = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 18, stiffness: 120 },
  });

  const opacity = interpolate(entrance, [0, 1], [0, 1]);
  const translateX = interpolate(entrance, [0, 1], [-40, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translateX}px)`,
        background: "rgba(255, 255, 255, 0.96)",
        backdropFilter: "blur(8px)",
        padding: "16px 28px",
        borderRadius: "16px",
        borderLeft: "6px solid #ea580c",
        borderTop: "1px solid rgba(226, 232, 240, 0.8)",
        borderRight: "1px solid rgba(226, 232, 240, 0.8)",
        borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
        display: "inline-flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div
        style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#0f172a",
          lineHeight: 1.2,
        }}
      >
        {name}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#0e57a6",
          }}
        >
          {role}
        </span>
        {period && (
          <span
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#64748b",
              background: "#f1f5f9",
              padding: "2px 10px",
              borderRadius: "8px",
            }}
          >
            {period}
          </span>
        )}
      </div>
    </div>
  );
};
