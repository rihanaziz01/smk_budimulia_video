# Video Motion Graphic Profil SMK Budi Mulia Karawang

Video motion graphic profil sekolah modern, formal-profesional, berdurasi tepat 2 menit (120 detik / 3.600 frame pada 30 fps), dirancang khusus untuk ditayangkan pada pertemuan Zoom bersama wali siswa. Dibuat menggunakan Remotion + React + TypeScript + Edge Neural TTS.

---

## 1. Berkas Output Siap Pakai

1. **Video Final MP4 (Full HD 1080p, 30 fps, H.264 + AAC):**
   - Path: `out/smk_budi_mulia_profil.mp4`
   - Durasi: Tepat 120,00 detik (2 menit)
   - Ukuran: ~16,8 MB (sangat aman untuk streaming Zoom tanpa buffering)
2. **Berkas Subtitle Mandiri (.srt):**
   - Path: `public/subtitles.srt`
   - Sinkronisasi: 13 scene dari 00:00:00 hingga 00:02:00
3. **Berkas Narasi Suara AI (Per Scene):**
   - Path: `public/assets/audio/scene01.mp3` s.d. `scene13.mp3`
   - Suara: `id-ID-GadisNeural` (Edge Neural TTS - Bahasa Indonesia wanita natural dan ramah)
4. **Musik Latar (BGM):**
   - Path: `public/assets/audio/bgm.ogg`
   - Judul: *Bathed in the Light* oleh Kevin MacLeod
   - Lisensi: Creative Commons Attribution 3.0 (CC BY 3.0)
   - Sumber: Incompetech / Free Music Archive / Wikimedia Commons

---

## 2. Struktur Proyek

```
smk-budi-mulia-video/
├── src/
│   ├── Composition.tsx               # Master sequence 13 scene + narasi + BGM
│   ├── Root.tsx                      # Registrasi komposisi Remotion (1920x1080, 30fps)
│   ├── data/
│   │   └── videoData.ts              # PUSAT DATA: teks, naskah, nama tim, kontak
│   ├── styles/
│   │   └── global.css                # Variabel warna (#0e57a6, #ea580c), safe area Zoom
│   ├── components/
│   │   ├── WatermarkLogo.tsx         # Watermark pojok kanan atas persisten
│   │   ├── SubtitleBar.tsx           # Baris subtitle kontras tinggi di bagian bawah
│   │   ├── LowerThird.tsx            # Badge nama & jabatan tokoh
│   │   ├── KenBurnsFrame.tsx         # Frame foto rounded dengan zoom perlahan
│   │   └── BackgroundDecoration.tsx  # Ornamen warna sekolah halus
│   └── scenes/
│       ├── Scene01_Opening.tsx       # 0:00 - 0:08 (Opening & Slogan)
│       ├── Scene02_Visi.tsx          # 0:08 - 0:16 (Visi Sekolah)
│       ├── Scene03_Misi.tsx          # 0:16 - 0:24 (8 Misi Strategis)
│       ├── Scene04_Manajemen.tsx     # 0:24 - 0:32 (Kepsek, Wakasek, Kaprog)
│       ├── Scene05_Guru.tsx          # 0:32 - 0:36 (Galeri Guru)
│       ├── Scene06_Industri.tsx      # 0:36 - 0:56 (Kelas Industri: TKJ, RPL, Akuntansi)
│       ├── Scene07_Rutinitas.tsx     # 0:56 - 1:10 (Timeline Sehari di Sekolah)
│       ├── Scene08_Eskul.tsx         # 1:10 - 1:19 (Eskul & Olahraga)
│       ├── Scene09_Prestasi.tsx      # 1:19 - 1:27 (Prestasi & Lomba)
│       ├── Scene10_Persiapan.tsx     # 1:27 - 1:35 (TKA, BMW, Ujikom)
│       ├── Scene11_Bimbingan.tsx     # 1:35 - 1:45 (5 Bimbingan & Alur Karir)
│       ├── Scene12_KegiatanGuru.tsx  # 1:45 - 1:52 (Pelatihan, Rapat, Kombel)
│       └── Scene13_Closing.tsx       # 1:52 - 2:00 (Closing, Kontak, Fade Out)
├── public/
│   ├── subtitles.srt                 # Subtitle SRT
│   └── assets/                       # Folder aset gambar & audio per kategori
│       ├── branding/                 # logo.png
│       ├── audio/                    # scene01-13.mp3, bgm.ogg
│       ├── management/               # Foto Kepsek, Wakasek, Kaprog
│       ├── teachers/                 # Foto guru (data dummy)
│       ├── industry/                 # Logo mitra BNET, Gamelab, Hunu Osias
│       ├── routine/                  # 5 foto kegiatan rutin
│       ├── extracurricular/          # Foto eskul & olahraga
│       ├── achievements/             # Foto prestasi
│       ├── guidance/                 # Ilustrasi bimbingan
│       └── teachers_activity/        # Foto pelatihan guru & kombel
└── out/
    └── smk_budi_mulia_profil.mp4     # Hasil render final
```

---

## 3. Cara Mengganti Foto / Aset Placeholder

Semua placeholder diberi tanda jelas dan dapat langsung diganti dengan foto asli berformat PNG atau JPG tanpa mengubah kode animasi:

1. **Logo Sekolah (Watermark):**
   - Taruh file PNG transparan logo resmi di: `public/assets/branding/logo.png`.
2. **Foto Tim Manajemen:**
   - Kepala Sekolah: `public/assets/management/kepsek_teti.png`
   - Wakasek Kesiswaan: `public/assets/management/wakasek_kesiswaan_doni.png`
   - Wakasek Humas: `public/assets/management/wakasek_humas_ridho.png`
   - Wakasek Kurikulum: `public/assets/management/wakasek_kurikulum_wulan.png`
   - Kaprog Akuntansi: `public/assets/management/kaprog_akuntansi_dina.png`
   - Kaprog TKJ: `public/assets/management/kaprog_tkj_latif.png`
   - Kaprog RPL: `public/assets/management/kaprog_rpl_tommy.png`
3. **Foto Kegiatan Industri:**
   - TKJ x BNET: `public/assets/industry/foto_industri_tkj.png`
   - RPL x Gamelab: `public/assets/industry/foto_industri_rpl.png`
   - Akuntansi x Hunu Osias: `public/assets/industry/foto_industri_akuntansi.png`
4. **Foto Kegiatan Rutin (5 Titik Timeline):**
   - `public/assets/routine/01_apel.png`
   - `public/assets/routine/02_pembiasaan.png`
   - `public/assets/routine/03_sambut_siswa.png`
   - `public/assets/routine/04_kbm.png`
   - `public/assets/routine/05_bersih_bersih.png`
5. **Mengubah Data Teks atau Kontak:**
   - Cukup edit berkas `src/data/videoData.ts`. Semua teks, nomor WhatsApp, akun Instagram, dan website terpusat di sana.

---

## 4. Cara Menjalankan Pratinjau dan Merender Ulang

### A. Pratinjau Interaktif (Remotion Studio)
Untuk melihat video secara langsung di browser dengan kontrol frame demi frame:
```bash
npm run dev
```
Buka browser pada alamat `http://localhost:3000`.

### B. Render Ulang ke File MP4
Untuk menghasilkan file video MP4 baru setelah mengganti foto atau teks:
```bash
npx remotion render SmkBudiMuliaProfil out/smk_budi_mulia_profil.mp4 --overwrite
```

### C. Membuat Ulang Narasi Audio (Bila Naskah Berubah)
Jika Anda mengubah naskah narasi di masa mendatang:
```bash
python scripts/generate_audio_and_subtitles.py
python scripts/optimize_audio_rates.py
```

---

## 5. Sumber dan Lisensi Aset

1. **Suara Narasi (TTS):**
   - Microsoft Edge Neural TTS (`id-ID-GadisNeural`)
   - Naskah persis sesuai naskah arahan resmi SMK Budi Mulia Karawang.
2. **Musik Latar (BGM):**
   - Track: *Bathed in the Light*
   - Komposer: Kevin MacLeod (incompetech.com)
   - Lisensi: Creative Commons: By Attribution 3.0 (http://creativecommons.org/licenses/by/3.0/)
   - Volume: Disetel lembut (-18dB) di bawah suara narasi agar vokal terdengar jelas bagi wali siswa.
