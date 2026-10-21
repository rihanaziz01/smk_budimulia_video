import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

BASE_DIR = Path("public/assets")

# Directories
DIRS = {
    "branding": BASE_DIR / "branding",
    "management": BASE_DIR / "management",
    "teachers": BASE_DIR / "teachers",
    "industry": BASE_DIR / "industry",
    "routine": BASE_DIR / "routine",
    "extracurricular": BASE_DIR / "extracurricular",
    "achievements": BASE_DIR / "achievements",
    "guidance": BASE_DIR / "guidance",
    "teachers_activity": BASE_DIR / "teachers_activity",
}

for d in DIRS.values():
    d.mkdir(parents=True, exist_ok=True)

def create_badge_placeholder(path, title, subtitle, width=800, height=600, bg_color=(241, 245, 249), border_color=(14, 87, 166), tag="PLACEHOLDER"):
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Rounded background
    r = 24
    draw.rounded_rectangle([(0, 0), (width, height)], radius=r, fill=bg_color, outline=border_color, width=4)
    
    # Subtle inner card
    draw.rounded_rectangle([(40, 40), (width-40, height-40)], radius=16, fill=(255, 255, 255, 240), outline=(226, 232, 240), width=2)
    
    # Tag badge
    draw.rounded_rectangle([(width//2 - 120, 70), (width//2 + 120, 115)], radius=12, fill=border_color)
    draw.text((width//2, 92), tag, fill=(255, 255, 255), anchor="mm")
    
    # Title
    draw.text((width//2, height//2 - 20), title, fill=(15, 23, 42), anchor="mm")
    # Subtitle
    draw.text((width//2, height//2 + 40), subtitle, fill=(100, 116, 139), anchor="mm")
    # Instruction hint
    draw.text((width//2, height - 80), "(Ganti dengan aset foto resmi)", fill=(148, 163, 184), anchor="mm")
    
    img.save(path)
    print(f"Created placeholder: {path}")

def create_logo_placeholder(path):
    width, height = 400, 120
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Emblem circle
    draw.ellipse([(10, 10), (100, 100)], fill=(14, 87, 166), outline=(234, 88, 12), width=4)
    draw.text((55, 55), "BM", fill=(255, 255, 255), anchor="mm")
    
    # School text
    draw.text((120, 42), "SMK BUDI MULIA", fill=(14, 87, 166), anchor="lm")
    draw.text((120, 74), "KARAWANG", fill=(234, 88, 12), anchor="lm")
    
    img.save(path)
    print(f"Created logo: {path}")

def main():
    # 1. Logo
    create_logo_placeholder(DIRS["branding"] / "logo.png")
    
    # 2. Tim Manajemen
    management_list = [
        ("kepsek_teti.png", "Teti Tresnawati, M.Pd", "Kepala Sekolah (Periode 2022-2030)"),
        ("wakasek_kesiswaan_doni.png", "Doni Wijaya, SH.", "Wakil Kepala Sekolah Kesiswaan"),
        ("wakasek_humas_ridho.png", "Ridho Robbi, S.Kom", "Wakil Kepala Sekolah Humas"),
        ("wakasek_kurikulum_wulan.png", "Wulan Endarwati, S.Pd", "Wakil Kepala Sekolah Kurikulum"),
        ("kaprog_akuntansi_dina.png", "Dina Qoyimah, S.Pd, Gr.", "Kepala Program Akuntansi"),
        ("kaprog_tkj_latif.png", "Latif Abdul Salam, S.Tr.Kom", "Kepala Program Teknik Komputer Jaringan"),
        ("kaprog_rpl_tommy.png", "Tommy Ferdian Hadimarta, S.Kom, Gr.", "Kepala Program Rekayasa Perangkat Lunak & Gim"),
    ]
    for fn, name, role in management_list:
        create_badge_placeholder(DIRS["management"] / fn, name, role, width=600, height=750, tag="FOTO RESMI MANAJEMEN")

    # 3. Guru (Dummy Data 8 guru)
    teachers_list = [
        ("guru_01.png", "Ahmad Fauzi, S.Pd", "Guru Matematika"),
        ("guru_02.png", "Siti Nurhaliza, S.Pd", "Guru Bahasa Indonesia"),
        ("guru_03.png", "Budi Santoso, M.Kom", "Guru Produktif TKJ"),
        ("guru_04.png", "Rina Marlina, S.Kom", "Guru Produktif RPL"),
        ("guru_05.png", "Hendra Gunawan, S.E", "Guru Akuntansi"),
        ("guru_06.png", "Dewi Lestari, S.Pd", "Guru Bahasa Inggris"),
        ("guru_07.png", "Agus Setiawan, S.Pd", "Guru Pendidikan Jasmani"),
        ("guru_08.png", "Nurul Hidayah, S.Ag", "Guru Pendidikan Agama"),
    ]
    for fn, name, subj in teachers_list:
        create_badge_placeholder(DIRS["teachers"] / fn, name, subj, width=500, height=650, tag="DATA DUMMY GURU")

    # 4. Kelas Industri & Mitra
    industry_list = [
        ("mitra_bnet.png", "BNET", "Mitra Kelas Industri TKJ", (238, 242, 255), (14, 87, 166)),
        ("mitra_gamelab.png", "Gamelab Indonesia", "Mitra Kelas Industri RPL", (255, 247, 237), (234, 88, 12)),
        ("mitra_hunu_osias.png", "PT. Hunu Osias Padmada Eara", "Mitra Kelas Industri Akuntansi", (240, 253, 244), (16, 185, 129)),
        ("foto_industri_tkj.png", "Praktik Lapangan Jaringan", "Kelas Industri TKJ x BNET", (248, 250, 252), (14, 87, 166)),
        ("foto_industri_rpl.png", "Pengembangan Software & Gim", "Kelas Industri RPL x Gamelab", (248, 250, 252), (234, 88, 12)),
        ("foto_industri_akuntansi.png", "Simulasi Finansial Digital", "Kelas Industri Akuntansi x Hunu Osias", (248, 250, 252), (16, 185, 129)),
    ]
    for fn, title, sub, bg, border in industry_list:
        create_badge_placeholder(DIRS["industry"] / fn, title, sub, width=800, height=500, bg_color=bg, border_color=border, tag="MITRA INDUSTRI")

    # 5. Rutinitas Sekolah
    routine_list = [
        ("01_apel.png", "Apel Pagi", "Membangun kedisiplinan dan semangat pagi"),
        ("02_pembiasaan.png", "Pembiasaan Pagi", "Karakter religius dan literasi harian"),
        ("03_sambut_siswa.png", "Menyambut Siswa", "Senyum, salam, dan sapa ramah para guru"),
        ("04_kbm.png", "KBM Interaktif", "Pembelajaran teori dan praktik kejuruan"),
        ("05_bersih_bersih.png", "Bersih-Bersih Bersama", "Menjaga lingkungan belajar nyaman dan asri"),
    ]
    for fn, title, desc in routine_list:
        create_badge_placeholder(DIRS["routine"] / fn, title, desc, width=700, height=500, tag="DOKUMENTASI RUTIN")

    # 6. Eskul & Olahraga
    eskul_list = [
        ("eskul_pramuka.png", "Pramuka Budi Mulia", "Kepanduan, kemandirian, dan kepemimpinan"),
        ("eskul_paskibra.png", "Paskibraka Sekolah", "Disiplin tinggi dan jiwa nasionalisme"),
        ("eskul_pmr.png", "Palang Merah Remaja", "Kemanusiaan dan kepedulian sosial"),
        ("eskul_olahraga.png", "Olahraga & Senam Pagi", "Kebugaran jasmani dan sportivitas siswa"),
    ]
    for fn, title, desc in eskul_list:
        create_badge_placeholder(DIRS["extracurricular"] / fn, title, desc, width=700, height=500, tag="ESKUL & OLAHRAGA")

    # 7. Prestasi & Lomba (DUMMY PRESTASI)
    achievements_list = [
        ("prestasi_lks.png", "LKS Tingkat Kabupaten", "Juara 1 - Bidang IT Network Systems (2024)"),
        ("prestasi_it.png", "Olimpiade Pemrograman", "Juara 2 - Tingkat Provinsi Jawa Barat (2024)"),
        ("prestasi_seni.png", "Festival Seni & Budaya", "Juara 1 - Tingkat Kabupaten Karawang (2024)"),
    ]
    for fn, title, desc in achievements_list:
        create_badge_placeholder(DIRS["achievements"] / fn, title, desc, width=700, height=500, bg_color=(254, 252, 232), border_color=(202, 138, 4), tag="DUMMY PRESTASI")

    # 8. Bimbingan Sekolah
    guidance_list = [
        ("bimbingan_tka_ujikom.png", "Bimbingan TKA & Ujikom", "Pendampingan intensif sertifikasi dan ujian"),
        ("alur_karir.png", "Alur Karir BMW", "Bekerja, Melanjutkan Studi, atau Wirausaha"),
    ]
    for fn, title, desc in guidance_list:
        create_badge_placeholder(DIRS["guidance"] / fn, title, desc, width=700, height=500, tag="BIMBINGAN SEKOLAH")

    # 9. Kegiatan Guru
    teacher_act_list = [
        ("guru_pelatihan.png", "Pelatihan Guru Berkelanjutan", "Upgrade kompetensi pedagogik dan teknologi"),
        ("guru_rapat.png", "Rapat Kerja & Evaluasi", "Penyusunan kurikulum dan evaluasi mutu"),
        ("guru_kombel.png", "Komunitas Belajar (Kombel)", "Sharing best practice antar pendidik"),
    ]
    for fn, title, desc in teacher_act_list:
        create_badge_placeholder(DIRS["teachers_activity"] / fn, title, desc, width=700, height=500, tag="MUTU PENDIDIK")

if __name__ == "__main__":
    main()
