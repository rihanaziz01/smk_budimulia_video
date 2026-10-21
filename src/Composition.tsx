import React from "react";
import { Audio, interpolate, Series, staticFile, useCurrentFrame } from "remotion";
import { WatermarkLogo } from "./components/WatermarkLogo";
import { SCENES_DATA, VIDEO_CONFIG } from "./data/videoData";
import { Scene01_Opening } from "./scenes/Scene01_Opening";
import { Scene02_Visi } from "./scenes/Scene02_Visi";
import { Scene03_Misi } from "./scenes/Scene03_Misi";
import { Scene04_Manajemen } from "./scenes/Scene04_Manajemen";
import { Scene05_Guru } from "./scenes/Scene05_Guru";
import { Scene06_Industri } from "./scenes/Scene06_Industri";
import { Scene07_Rutinitas } from "./scenes/Scene07_Rutinitas";
import { Scene08_Eskul } from "./scenes/Scene08_Eskul";
import { Scene09_Prestasi } from "./scenes/Scene09_Prestasi";
import { Scene10_Persiapan } from "./scenes/Scene10_Persiapan";
import { Scene11_Bimbingan } from "./scenes/Scene11_Bimbingan";
import { Scene12_KegiatanGuru } from "./scenes/Scene12_KegiatanGuru";
import { Scene13_Closing } from "./scenes/Scene13_Closing";
import "./styles/global.css";

export const SmkBudiMuliaVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const totalFrames = VIDEO_CONFIG.totalDurationFrames;

  // Background Music Volume Envelope: Fade in 0-30f, steady at 0.12, fade out last 60f
  const bgmVolume = interpolate(
    frame,
    [0, 30, totalFrames - 60, totalFrames],
    [0, VIDEO_CONFIG.audio.bgmVolume, VIDEO_CONFIG.audio.bgmVolume, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        position: "relative",
        backgroundColor: "#f8fafc",
        overflow: "hidden",
      }}
    >
      {/* Background Music (Continuous throughout the 120s video) */}
      <Audio
        src={staticFile(VIDEO_CONFIG.audio.bgmFile)}
        volume={bgmVolume}
      />

      {/* Persistent School Watermark in Top Right */}
      <WatermarkLogo />

      {/* 13 Sequenced Scenes with their corresponding Narrations */}
      <Series>
        {/* 1. Opening (0:00 - 0:08 | 240 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[0].durationInFrames}>
          <Scene01_Opening />
          <Audio src={staticFile(SCENES_DATA[0].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 2. Visi (0:08 - 0:16 | 240 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[1].durationInFrames}>
          <Scene02_Visi />
          <Audio src={staticFile(SCENES_DATA[1].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 3. Misi (0:16 - 0:24 | 240 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[2].durationInFrames}>
          <Scene03_Misi />
          <Audio src={staticFile(SCENES_DATA[2].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 4. Tim Manajemen (0:24 - 0:32 | 240 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[3].durationInFrames}>
          <Scene04_Manajemen />
          <Audio src={staticFile(SCENES_DATA[3].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 5. Guru (0:32 - 0:36 | 120 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[4].durationInFrames}>
          <Scene05_Guru />
          <Audio src={staticFile(SCENES_DATA[4].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 6. Kelas Industri (0:36 - 0:56 | 600 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[5].durationInFrames}>
          <Scene06_Industri />
          <Audio src={staticFile(SCENES_DATA[5].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 7. Rutinitas (0:56 - 1:10 | 420 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[6].durationInFrames}>
          <Scene07_Rutinitas />
          <Audio src={staticFile(SCENES_DATA[6].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 8. Eskul dan Olahraga (1:10 - 1:19 | 270 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[7].durationInFrames}>
          <Scene08_Eskul />
          <Audio src={staticFile(SCENES_DATA[7].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 9. Prestasi dan Lomba (1:19 - 1:27 | 240 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[8].durationInFrames}>
          <Scene09_Prestasi />
          <Audio src={staticFile(SCENES_DATA[8].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 10. Persiapan Akademik & Kompetensi (1:27 - 1:35 | 240 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[9].durationInFrames}>
          <Scene10_Persiapan />
          <Audio src={staticFile(SCENES_DATA[9].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 11. Bimbingan Sekolah (1:35 - 1:45 | 300 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[10].durationInFrames}>
          <Scene11_Bimbingan />
          <Audio src={staticFile(SCENES_DATA[10].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 12. Kegiatan Guru (1:45 - 1:52 | 210 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[11].durationInFrames}>
          <Scene12_KegiatanGuru />
          <Audio src={staticFile(SCENES_DATA[11].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>

        {/* 13. Closing (1:52 - 2:00 | 240 frames) */}
        <Series.Sequence durationInFrames={SCENES_DATA[12].durationInFrames}>
          <Scene13_Closing />
          <Audio src={staticFile(SCENES_DATA[12].audioFile)} volume={VIDEO_CONFIG.audio.narrationVolume} />
        </Series.Sequence>
      </Series>
    </div>
  );
};
