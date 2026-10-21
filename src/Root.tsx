import React from "react";
import { Composition } from "remotion";
import { SmkBudiMuliaVideo } from "./Composition";
import { VIDEO_CONFIG } from "./data/videoData";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SmkBudiMuliaProfil"
        component={SmkBudiMuliaVideo}
        durationInFrames={VIDEO_CONFIG.totalDurationFrames}
        fps={VIDEO_CONFIG.fps}
        width={VIDEO_CONFIG.width}
        height={VIDEO_CONFIG.height}
        defaultProps={{}}
      />
    </>
  );
};
