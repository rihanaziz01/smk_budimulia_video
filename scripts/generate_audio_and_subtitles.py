import asyncio
import os
import json
from pathlib import Path
import edge_tts

# Audio settings
VOICE = "id-ID-GadisNeural"
OUTPUT_DIR = Path("public/assets/audio")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# 13 Scenes exact narration and timings
SCENES = [
    {
        "id": "scene01",
        "title": "Opening",
        "start_sec": 0,
        "duration_sec": 8,
        "text": "Selamat datang di SMK Budi Mulia Karawang. Mencetak generasi unggul, kreatif, dan berkarakter untuk masa depan gemilang."
    },
    {
        "id": "scene02",
        "title": "A1. Visi",
        "start_sec": 8,
        "duration_sec": 8,
        "text": "Visi kami: mewujudkan sekolah unggulan IPTEK yang mencetak lulusan berakhlak mulia, terampil, mandiri, kompetitif, berjiwa entrepreneur, dan religius."
    },
    {
        "id": "scene03",
        "title": "A2. Misi",
        "start_sec": 16,
        "duration_sec": 8,
        "text": "Delapan misi kami menguatkan karakter, mengembangkan keterampilan, meningkatkan mutu guru, dan menghadirkan lingkungan belajar yang sehat dan nyaman."
    },
    {
        "id": "scene04",
        "title": "A3. Tim Manajemen",
        "start_sec": 24,
        "duration_sec": 8,
        "text": "Sekolah kami dipimpin Ibu Teti Tresnawati, bersama para wakil kepala sekolah dan kepala program keahlian yang berdedikasi."
    },
    {
        "id": "scene05",
        "title": "A4. Perkenalan Guru",
        "start_sec": 32,
        "duration_sec": 4,
        "text": "Didukung guru-guru profesional di bidangnya."
    },
    {
        "id": "scene06",
        "title": "B. Kelas Industri",
        "start_sec": 36,
        "duration_sec": 20,
        "text": "Melalui Kelas Industri, siswa belajar langsung bersama dunia kerja. Teknik Komputer Jaringan bermitra dengan BNET, Rekayasa Perangkat Lunak dengan Gamelab Indonesia, dan Akuntansi dengan PT. Hunu Osias Padmada Eara. Siswa mendapat pengalaman nyata sesuai kebutuhan industri."
    },
    {
        "id": "scene07",
        "title": "C. Kegiatan Rutin",
        "start_sec": 56,
        "duration_sec": 14,
        "text": "Setiap hari diawali dengan apel dan pembiasaan pagi, menyambut siswa dengan hangat, dilanjutkan kegiatan belajar mengajar, dan ditutup dengan bersih-bersih bersama, menanamkan disiplin dan kebersamaan."
    },
    {
        "id": "scene08",
        "title": "D. Eskul dan Olahraga",
        "start_sec": 70,
        "duration_sec": 9,
        "text": "Bakat siswa tumbuh lewat beragam ekstrakurikuler, olahraga, dan senam yang menyehatkan serta membangun kekompakan."
    },
    {
        "id": "scene09",
        "title": "E. Prestasi dan Lomba",
        "start_sec": 79,
        "duration_sec": 8,
        "text": "Siswa juga terus berprestasi dan mengharumkan nama sekolah di berbagai lomba. Kami bangga atas setiap capaiannya."
    },
    {
        "id": "scene10",
        "title": "F. Persiapan Akademik dan Kompetensi",
        "start_sec": 87,
        "duration_sec": 8,
        "text": "Kami mempersiapkan siswa menghadapi TKA, menerapkan konsep BMW, serta Uji Kompetensi agar siap bersaing."
    },
    {
        "id": "scene11",
        "title": "G. Bimbingan Sekolah",
        "start_sec": 95,
        "duration_sec": 10,
        "text": "Bimbingan diberikan untuk TKA dan Ujikom, serta untuk bekerja, melanjutkan studi, maupun berwirausaha, sesuai pilihan masa depan setiap siswa."
    },
    {
        "id": "scene12",
        "title": "H. Kegiatan Guru",
        "start_sec": 105,
        "duration_sec": 7,
        "text": "Guru pun terus belajar melalui pelatihan, rapat, dan Komunitas Belajar demi mutu pendidikan."
    },
    {
        "id": "scene13",
        "title": "Closing",
        "start_sec": 112,
        "duration_sec": 8,
        "text": "Bersama SMK Budi Mulia Karawang, wujudkan masa depan gemilang. Terima kasih."
    }
]

def format_time_srt(seconds_float):
    hours = int(seconds_float // 3600)
    minutes = int((seconds_float % 3600) // 60)
    seconds = int(seconds_float % 60)
    millis = int(round((seconds_float - int(seconds_float)) * 1000))
    return f"{hours:02d}:{minutes:02d}:{seconds:02d},{millis:03d}"

async def generate_scene_audio(scene):
    out_file = OUTPUT_DIR / f"{scene['id']}.mp3"
    print(f"Generating audio for {scene['id']} ({scene['title']})...")
    
    # Slight rate adjustment if needed for pacing
    rate = "+3%" if scene["id"] in ["scene05", "scene06", "scene10"] else "+0%"
    communicate = edge_tts.Communicate(scene["text"], VOICE, rate=rate)
    await communicate.save(str(out_file))
    print(f"Saved {out_file} (size: {out_file.stat().st_size} bytes)")

def generate_srt(scenes, srt_path):
    print(f"Generating SRT subtitle file at {srt_path}...")
    lines = []
    for idx, scene in enumerate(scenes, 1):
        start_t = scene["start_sec"]
        end_t = scene["start_sec"] + scene["duration_sec"]
        lines.append(str(idx))
        lines.append(f"{format_time_srt(start_t)} --> {format_time_srt(end_t)}")
        lines.append(scene["text"])
        lines.append("")
    with open(srt_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print("SRT file written successfully.")

async def main():
    print("Starting Voiceover generation with Edge TTS...")
    for scene in SCENES:
        await generate_scene_audio(scene)
    
    # Generate Subtitle File (.srt)
    srt_file = Path("public/subtitles.srt")
    generate_srt(SCENES, srt_file)
    
    # Also save metadata json for Remotion scenes to consume
    meta_file = Path("src/data/narrationMeta.json")
    meta_file.parent.mkdir(parents=True, exist_ok=True)
    with open(meta_file, "w", encoding="utf-8") as f:
        json.dump(SCENES, f, indent=2, ensure_ascii=False)
    print(f"Saved metadata to {meta_file}")

if __name__ == "__main__":
    asyncio.run(main())
