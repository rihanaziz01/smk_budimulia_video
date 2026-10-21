import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

// Highlighter Pen Sweep Effect
interface HighlighterProps {
  children: React.ReactNode;
  delayFrames?: number;
  color?: string;
  textColor?: string;
}

export const HighlighterText: React.FC<HighlighterProps> = ({
  children,
  delayFrames = 10,
  color = "#bef264", // Lime green signature
  textColor = "#0f172a",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const adjustedFrame = Math.max(0, frame - delayFrames);
  const sweepSpring = spring({
    frame: adjustedFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  const widthPercent = interpolate(sweepSpring, [0, 1], [0, 100]);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        padding: "0 8px",
        margin: "0 2px",
        zIndex: 1,
        color: textColor,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "8%",
          bottom: "4%",
          left: 0,
          width: `${widthPercent}%`,
          backgroundColor: color,
          borderRadius: 6,
          zIndex: -1,
          transform: "rotate(-0.5deg)",
        }}
      />
      {children}
    </span>
  );
};

// Spinning Technical Asterisk / Burst Icon
interface AsteriskBurstProps {
  size?: number;
  color?: string;
  speed?: number;
}

export const AsteriskBurst: React.FC<AsteriskBurstProps> = ({
  size = 48,
  color = "#0f172a",
  speed = 0.5,
}) => {
  const frame = useCurrentFrame();
  const rotation = frame * speed;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
      }}
    >
      <g stroke={color} strokeWidth="10" strokeLinecap="round">
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="10" y1="50" x2="90" y2="50" />
        <line x1="22" y1="22" x2="78" y2="78" />
        <line x1="22" y1="78" x2="78" y2="22" />
        <line x1="15" y1="35" x2="85" y2="65" />
        <line x1="15" y1="65" x2="85" y2="35" />
      </g>
    </svg>
  );
};

// Connected Progress Dots (like in ref frame 04 & 08)
export const ConnectedProgressDots: React.FC<{ activeIndex?: number; count?: number; color?: string }> = ({
  activeIndex = 2,
  count = 5,
  color = "#bef264",
}) => {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      {Array.from({ length: count }).map((_, i) => (
        <React.Fragment key={i}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: i <= activeIndex ? color : "rgba(15, 23, 42, 0.2)",
              border: "1.5px solid #0f172a",
            }}
          />
          {i < count - 1 && (
            <div
              style={{
                width: 14,
                height: 2,
                backgroundColor: i < activeIndex ? "#0f172a" : "rgba(15, 23, 42, 0.2)",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
