import asyncio
import edge_tts
import mutagen.mp3
from pathlib import Path

VOICE = "id-ID-GadisNeural"

# Target durations in seconds for each scene:
# 1: 8s
# 2: 8s
# 3: 8s
# 4: 8s
# 5: 4s
# 6: 20s
# 7: 14s
# 8: 9s
# 9: 8s
# 10: 8s
# 11: 10s
# 12: 7s
# 13: 8s

TARGETS = {
    "scene01": (8.0, 7.2),
    "scene02": (8.0, 7.3),
    "scene03": (8.0, 7.3),
    "scene04": (8.0, 7.3),
    "scene05": (4.0, 3.6),
    "scene06": (20.0, 19.0),
    "scene07": (14.0, 13.0),
    "scene08": (9.0, 8.2),
    "scene09": (8.0, 7.3),
    "scene10": (8.0, 7.3),
    "scene11": (10.0, 9.2),
    "scene12": (7.0, 6.3),
    "scene13": (8.0, 7.2),
}

SCENES = [
    {
        "id": "scene01",
        "text": "Selamat datang di SMK Budi Mulia Karawang. Mencetak generasi unggul, kreatif, dan berkarakter untuk masa depan gemilang."
    },
    {
        "id": "scene02",
        "text": "Visi kami: mewujudkan sekolah unggulan IPTEK yang mencetak lulusan berakhlak mulia, terampil, mandiri, kompetitif, berjiwa entrepreneur, dan religius."
    },
    {
        "id": "scene03",
        "text": "Delapan misi kami menguatkan karakter, mengembangkan keterampilan, meningkatkan mutu guru, dan menghadirkan lingkungan belajar yang sehat dan nyaman."
    },
    {
        "id": "scene04",
        "text": "Sekolah kami dipimpin Ibu Teti Tresnawati, bersama para wakil kepala sekolah dan kepala program keahlian yang berdedikasi."
    },
    {
        "id": "scene05",
        "text": "Didukung guru-guru profesional di bidangnya."
    },
    {
        "id": "scene06",
        "text": "Melalui Kelas Industri, siswa belajar langsung bersama dunia kerja. Teknik Komputer Jaringan bermitra dengan BNET, Rekayasa Perangkat Lunak dengan Gamelab Indonesia, dan Akuntansi dengan PT. Hunu Osias Padmada Eara. Siswa mendapat pengalaman nyata sesuai kebutuhan industri."
    },
    {
        "id": "scene07",
        "text": "Setiap hari diawali dengan apel dan pembiasaan pagi, menyambut siswa dengan hangat, dilanjutkan kegiatan belajar mengajar, dan ditutup dengan bersih-bersih bersama, menanamkan disiplin dan kebersamaan."
    },
    {
        "id": "scene08",
        "text": "Bakat siswa tumbuh lewat beragam ekstrakurikuler, olahraga, dan senam yang menyehatkan serta membangun kekompakan."
    },
    {
        "id": "scene09",
        "text": "Siswa juga terus berprestasi dan mengharumkan nama sekolah di berbagai lomba. Kami bangga atas setiap capaiannya."
    },
    {
        "id": "scene10",
        "text": "Kami mempersiapkan siswa menghadapi TKA, menerapkan konsep BMW, serta Uji Kompetensi agar siap bersaing."
    },
    {
        "id": "scene11",
        "text": "Bimbingan diberikan untuk TKA dan Ujikom, serta untuk bekerja, melanjutkan studi, maupun berwirausaha, sesuai pilihan masa depan setiap siswa."
    },
    {
        "id": "scene12",
        "text": "Guru pun terus belajar melalui pelatihan, rapat, dan Komunitas Belajar demi mutu pendidikan."
    },
    {
        "id": "scene13",
        "text": "Bersama SMK Budi Mulia Karawang, wujudkan masa depan gemilang. Terima kasih."
    }
]

async def optimize_audio():
    OUTPUT_DIR = Path("public/assets/audio")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    results = []
    
    for s in SCENES:
        sid = s["id"]
        total_time, max_target = TARGETS[sid]
        
        # Binary search / step search for rate from +0% up to +60%
        # Start by testing rates
        best_rate = "+0%"
        best_dur = 999.0
        
        # Test rates in increments
        for test_rate_int in range(0, 65, 5):
            rate_str = f"+{test_rate_int}%"
            test_file = OUTPUT_DIR / f"{sid}_temp.mp3"
            comm = edge_tts.Communicate(s["text"], VOICE, rate=rate_str)
            await comm.save(str(test_file))
            dur = mutagen.mp3.MP3(test_file).info.length
            test_file.unlink(missing_ok=True)
            
            if dur <= max_target:
                best_rate = rate_str
                best_dur = dur
                break
            else:
                best_rate = rate_str
                best_dur = dur
        
        # Final save with best_rate
        final_file = OUTPUT_DIR / f"{sid}.mp3"
        comm = edge_tts.Communicate(s["text"], VOICE, rate=best_rate)
        await comm.save(str(final_file))
        actual_dur = mutagen.mp3.MP3(final_file).info.length
        
        results.append({
            "id": sid,
            "target": total_time,
            "actual_audio": round(actual_dur, 2),
            "rate": best_rate,
            "fits": actual_dur <= total_time
        })
        print(f"[{sid}] Target: {total_time}s | Audio: {actual_dur:.2f}s | Rate: {best_rate} | Fits: {actual_dur <= total_time}")

    print("\nSummary:")
    total_audio = sum(r["actual_audio"] for r in results)
    print(f"Total audio time: {total_audio:.2f}s (Budget: 120s)")

if __name__ == "__main__":
    asyncio.run(optimize_audio())
