import os
from pathlib import Path

# Simple MP3 frame duration estimation or reading file
def get_mp3_duration_rough(file_path):
    size = os.path.getsize(file_path)
    # Edge TTS generates 48kbps or 64kbps MP3
    # Let's inspect header or use a reliable byte inspection
    with open(file_path, "rb") as f:
        data = f.read(1024)
        # Look for sync word 0xFFE or 0xFFF
        # Or estimate from 48kbps = 6000 bytes/sec, 64kbps = 8000 bytes/sec
    return size

for p in sorted(Path("public/assets/audio").glob("*.mp3")):
    sz = os.path.getsize(p)
    # Typical edge-tts MP3 is 48kbps = 6000 bytes/sec
    est_sec = sz / 6000.0
    print(f"{p.name}: {sz} bytes (~{est_sec:.2f}s)")
