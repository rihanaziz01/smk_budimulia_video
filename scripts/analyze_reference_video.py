import os
import cv2
from pathlib import Path

video_path = os.path.expanduser("~/Downloads/WhatsApp Video 2026-10-21 at 11.17.23.mp4")
out_dir = Path("out/reference_frames")
out_dir.mkdir(parents=True, exist_ok=True)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
duration = total_frames / fps if fps > 0 else 0

print(f"Video Path: {video_path}")
print(f"Resolution: {width}x{height}")
print(f"FPS: {fps}")
print(f"Total Frames: {total_frames}")
print(f"Duration: {duration:.2f} seconds")

# Extract 10 evenly spaced frames
for i in range(12):
    target_frame = int(total_frames * (i / 12.0))
    cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
    ret, frame = cap.read()
    if ret:
        frame_name = out_dir / f"ref_frame_{i:02d}_{target_frame}.jpg"
        cv2.imwrite(str(frame_name), frame)
        sec = target_frame / fps
        print(f"Extracted {frame_name} at {sec:.2f}s (frame {target_frame})")

cap.release()
