import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const src = 'c:/project/smk-budi-mulia-video/out/smk_budi_mulia_profil.mp4';
const dst = 'C:/Users/aziz1/.gemini/antigravity-ide/brain/f718c305-8627-420d-83ff-16aca5936727/smk_budi_mulia_profil.mp4';
const ffmpeg = 'c:/project/smk-budi-mulia-video/node_modules/@remotion/compositor-win32-x64-msvc/ffmpeg.exe';

fs.copyFileSync(src, dst);
console.log('Copied to artifacts:', fs.statSync(dst).size, 'bytes');

try {
  execSync(`"${ffmpeg}" -i "${src}"`, { stdio: 'pipe' });
} catch (e: any) {
  const stderr = e.stderr?.toString() || '';
  const durationMatch = stderr.match(/Duration: (\d{2}:\d{2}:\d{2}\.\d{2})/);
  console.log('Video Duration:', durationMatch ? durationMatch[1] : 'unknown');
  console.log(stderr.split('\n').filter((l: string) => l.includes('Stream #') || l.includes('Duration')).join('\n'));
}

// Extract snapshots at 2s, 15s, 35s, 50s, 85s, 115s
const outDir = 'c:/project/smk-budi-mulia-video/out/snapshots';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const times = [
  { t: '00:00:02', name: 'snap_01_opening.jpg' },
  { t: '00:00:15', name: 'snap_02_visi.jpg' },
  { t: '00:00:35', name: 'snap_04_jurusan.jpg' },
  { t: '00:00:52', name: 'snap_06_industri.jpg' },
  { t: '00:01:25', name: 'snap_09_prestasi.jpg' },
  { t: '00:01:55', name: 'snap_13_closing.jpg' },
];

for (const snap of times) {
  const outPath = path.join(outDir, snap.name);
  execSync(`"${ffmpeg}" -ss ${snap.t} -i "${src}" -vframes 1 -q:v 2 "${outPath}" -y`, { stdio: 'ignore' });
  console.log('Generated snapshot:', snap.name);
}
