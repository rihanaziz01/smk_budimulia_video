import React from "react";
import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface KenBurnsFrameProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  durationInFrames: number;
  zoomScale?: number;
  style?: React.CSSProperties;
}

export const KenBurnsFrame: React.FC<KenBurnsFrameProps> = ({
  src,
  alt,
  width = "100%",
  height = "100%",
  borderRadius = 20,
  durationInFrames,
  zoomScale = 1.07,
  style = {},
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, durationInFrames], [1.0, zoomScale], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)",
        border: "3px solid #ffffff",
        backgroundColor: "#f1f5f9",
        ...style,
      }}
    >
      <Img
        src={staticFile(src)}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};
