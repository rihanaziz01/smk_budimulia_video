export interface ManagementMember {
  id: string;
  name: string;
  role: string;
  period?: string;
  image: string;
}

export interface TeacherMember {
  id: string;
  name: string;
  subject: string;
  image: string;
  isDummy: boolean;
}

export interface IndustryClass {
  id: string;
  name: string;
  partner: string;
  color: string;
  partnerLogo: string;
  activityPhoto: string;
}

export interface RoutineItem {
  id: string;
  step: number;
  title: string;
  desc: string;
  image: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  level: string;
  award: string;
  year: string;
  image: string;
  isDummy: boolean;
}

export interface SceneMeta {
  id: string;
  title: string;
  startFrame: number;
  durationInFrames: number;
  narrationText: string;
  audioFile: string;
}

export const VIDEO_CONFIG = {
  fps: 30,
  width: 1920,
  height: 1080,
  totalDurationSeconds: 120,
  totalDurationFrames: 3600,
  colors: {
    primaryBlue: "#0e57a6",
    primaryBlueDark: "#083a72",
    primaryBlueLight: "#e0edfa",
    accentOrange: "#ea580c",
    accentOrangeLight: "#ffedd5",
    accentOrangeDark: "#9a3412",
    bgLight: "#f8fafc",
    bgWhite: "#ffffff",
    textDark: "#0f172a",
    textMuted: "#475569",
    borderLight: "#cbd5e1",
  },
  school: {
    name: "SMK Budi Mulia Karawang",
    shortName: "SMK Budi Mulia",
    location: "Karawang",
    slogan: "Mencetak Generasi Unggul, Kreatif, dan Berkarakter untuk Masa Depan Gemilang.",
    logoWatermark: "assets/branding/logo.png",
    contact: {
      address: "Jl. Budi Mulia, Karawang, Jawa Barat",
      whatsapp: "0812-xxxx-xxxx [DUMMY]",
      website: "smkbudimuliakarawang.sch.id [DUMMY]",
      instagram: "@smkbudimuliakarawang [DUMMY]",
    },
  },
  audio: {
    bgmFile: "assets/audio/bgm.ogg",
    bgmVolume: 0.12, // Low volume under narration
    narrationVolume: 1.0,
  },
};

export const SCENES_DATA: SceneMeta[] = [
  {
    id: "scene01",
    title: "Opening",
    startFrame: 0,
    durationInFrames: 240, // 8s
    narrationText: "Selamat datang di SMK Budi Mulia Karawang. Mencetak generasi unggul, kreatif, dan berkarakter untuk masa depan gemilang.",
    audioFile: "assets/audio/scene01.mp3",
  },
  {
    id: "scene02",
    title: "A1. Visi",
    startFrame: 240,
    durationInFrames: 240, // 8s
    narrationText: "Visi kami: mewujudkan sekolah unggulan IPTEK yang mencetak lulusan berakhlak mulia, terampil, mandiri, kompetitif, berjiwa entrepreneur, dan religius.",
    audioFile: "assets/audio/scene02.mp3",
  },
  {
    id: "scene03",
    title: "A2. Misi",
    startFrame: 480,
    durationInFrames: 240, // 8s
    narrationText: "Delapan misi kami menguatkan karakter, mengembangkan keterampilan, meningkatkan mutu guru, dan menghadirkan lingkungan belajar yang sehat dan nyaman.",
    audioFile: "assets/audio/scene03.mp3",
  },
  {
    id: "scene04",
    title: "A3. Tim Manajemen",
    startFrame: 720,
    durationInFrames: 240, // 8s
    narrationText: "Sekolah kami dipimpin Ibu Teti Tresnawati, bersama para wakil kepala sekolah dan kepala program keahlian yang berdedikasi.",
    audioFile: "assets/audio/scene04.mp3",
  },
  {
    id: "scene05",
    title: "A4. Perkenalan Guru",
    startFrame: 960,
    durationInFrames: 120, // 4s
    narrationText: "Didukung guru-guru profesional di bidangnya.",
    audioFile: "assets/audio/scene05.mp3",
  },
  {
    id: "scene06",
    title: "B. Kelas Industri",
    startFrame: 1080,
    durationInFrames: 600, // 20s
    narrationText: "Melalui Kelas Industri, siswa belajar langsung bersama dunia kerja. Teknik Komputer Jaringan bermitra dengan BNET, Rekayasa Perangkat Lunak dengan Gamelab Indonesia, dan Akuntansi dengan PT. Hunu Osias Padmada Eara. Siswa mendapat pengalaman nyata sesuai kebutuhan industri.",
    audioFile: "assets/audio/scene06.mp3",
  },
  {
    id: "scene07",
    title: "C. Kegiatan Rutin",
    startFrame: 1680,
    durationInFrames: 420, // 14s
    narrationText: "Setiap hari diawali dengan apel dan pembiasaan pagi, menyambut siswa dengan hangat, dilanjutkan kegiatan belajar mengajar, dan ditutup dengan bersih-bersih bersama, menanamkan disiplin dan kebersamaan.",
    audioFile: "assets/audio/scene07.mp3",
  },
  {
    id: "scene08",
    title: "D. Eskul dan Olahraga",
    startFrame: 2100,
    durationInFrames: 270, // 9s
    narrationText: "Bakat siswa tumbuh lewat beragam ekstrakurikuler, olahraga, dan senam yang menyehatkan serta membangun kekompakan.",
    audioFile: "assets/audio/scene08.mp3",
  },
  {
    id: "scene09",
    title: "E. Prestasi dan Lomba",
    startFrame: 2370,
    durationInFrames: 240, // 8s
    narrationText: "Siswa juga terus berprestasi dan mengharumkan nama sekolah di berbagai lomba. Kami bangga atas setiap capaiannya.",
    audioFile: "assets/audio/scene09.mp3",
  },
  {
    id: "scene10",
    title: "F. Persiapan Akademik dan Kompetensi",
    startFrame: 2610,
    durationInFrames: 240, // 8s
    narrationText: "Kami mempersiapkan siswa menghadapi TKA, menerapkan konsep BMW, serta Uji Kompetensi agar siap bersaing.",
    audioFile: "assets/audio/scene10.mp3",
  },
  {
    id: "scene11",
    title: "G. Bimbingan Sekolah",
    startFrame: 2850,
    durationInFrames: 300, // 10s
    narrationText: "Bimbingan diberikan untuk TKA dan Ujikom, serta untuk bekerja, melanjutkan studi, maupun berwirausaha, sesuai pilihan masa depan setiap siswa.",
    audioFile: "assets/audio/scene11.mp3",
  },
  {
    id: "scene12",
    title: "H. Kegiatan Guru",
    startFrame: 3150,
    durationInFrames: 210, // 7s
    narrationText: "Guru pun terus belajar melalui pelatihan, rapat, dan Komunitas Belajar demi mutu pendidikan.",
    audioFile: "assets/audio/scene12.mp3",
  },
  {
    id: "scene13",
    title: "Closing",
    startFrame: 3360,
    durationInFrames: 240, // 8s
    narrationText: "Bersama SMK Budi Mulia Karawang, wujudkan masa depan gemilang. Terima kasih.",
    audioFile: "assets/audio/scene13.mp3",
  },
];

// Content Data
export const VISI_TEXT = "Terwujudnya sekolah unggulan di bidang IPTEK untuk mencetak SDM yang berakhlak mulia, terampil, mandiri, berjiwa enterpreneur, kompetitif, berwawasan lingkungan dan religius";

export const MISI_LIST = [
  { id: 1, title: "Karakter TIK & Religi", desc: "Pendidikan karakter berbasis TIK, pembiasaan, dan keagamaan" },
  { id: 2, title: "Pendidikan Konsep BMW", desc: "Pendidikan profesional konsep Bekerja, Melanjutkan, Wirausaha" },
  { id: 3, title: "Peningkatan Mutu Guru", desc: "Peningkatan kemampuan guru dan tenaga kependidikan" },
  { id: 4, title: "Sarana & Prasarana", desc: "Pengembangan sarana dan prasarana modern" },
  { id: 5, title: "Pelatihan SDM Terampil", desc: "Pelatihan untuk SDM terampil, kreatif, dan inovatif" },
  { id: 6, title: "Kerja Sama Kemitraan", desc: "Kerja sama dengan seluruh pemangku kepentingan" },
  { id: 7, title: "Jiwa Entrepreneur", desc: "Penanaman jiwa entrepreneur sejak dini" },
  { id: 8, title: "Lingkungan Belajar", desc: "Lingkungan belajar yang sehat, bersih, dan nyaman" },
];

export const MANAGEMENT_TEAM: ManagementMember[] = [
  {
    id: "kepsek",
    name: "Teti Tresnawati, M.Pd",
    role: "Kepala Sekolah",
    period: "Periode 2022-2030",
    image: "assets/management/kepsek_teti.png",
  },
  {
    id: "wakasek_kesiswaan",
    name: "Doni Wijaya, SH.",
    role: "Wakil Kepala Sekolah Kesiswaan",
    image: "assets/management/wakasek_kesiswaan_doni.png",
  },
  {
    id: "wakasek_humas",
    name: "Ridho Robbi, S.Kom",
    role: "Wakil Kepala Sekolah Humas",
    image: "assets/management/wakasek_humas_ridho.png",
  },
  {
    id: "wakasek_kurikulum",
    name: "Wulan Endarwati, S.Pd",
    role: "Wakil Kepala Sekolah Kurikulum",
    image: "assets/management/wakasek_kurikulum_wulan.png",
  },
  {
    id: "kaprog_akuntansi",
    name: "Dina Qoyimah, S.Pd, Gr.",
    role: "Kepala Program Akuntansi",
    image: "assets/management/kaprog_akuntansi_dina.png",
  },
  {
    id: "kaprog_tkj",
    name: "Latif Abdul Salam, S.Tr.Kom",
    role: "Kepala Program Teknik Komputer Jaringan",
    image: "assets/management/kaprog_tkj_latif.png",
  },
  {
    id: "kaprog_rpl",
    name: "Tommy Ferdian Hadimarta, S.Kom, Gr.",
    role: "Kepala Program Rekayasa Perangkat Lunak & Gim",
    image: "assets/management/kaprog_rpl_tommy.png",
  },
];

export const TEACHERS_LIST: TeacherMember[] = [
  { id: "g1", name: "[Nama Guru 1]", subject: "Matematika", image: "assets/teachers/guru_01.png", isDummy: true },
  { id: "g2", name: "[Nama Guru 2]", subject: "Bahasa Indonesia", image: "assets/teachers/guru_02.png", isDummy: true },
  { id: "g3", name: "[Nama Guru 3]", subject: "Produktif TKJ", image: "assets/teachers/guru_03.png", isDummy: true },
  { id: "g4", name: "[Nama Guru 4]", subject: "Produktif RPL", image: "assets/teachers/guru_04.png", isDummy: true },
  { id: "g5", name: "[Nama Guru 5]", subject: "Produktif Akuntansi", image: "assets/teachers/guru_05.png", isDummy: true },
  { id: "g6", name: "[Nama Guru 6]", subject: "Bahasa Inggris", image: "assets/teachers/guru_06.png", isDummy: true },
  { id: "g7", name: "[Nama Guru 7]", subject: "Pendidikan Jasmani", image: "assets/teachers/guru_07.png", isDummy: true },
  { id: "g8", name: "[Nama Guru 8]", subject: "Pendidikan Agama", image: "assets/teachers/guru_08.png", isDummy: true },
];

export const INDUSTRY_CLASSES: IndustryClass[] = [
  {
    id: "tkj",
    name: "Teknik Komputer Jaringan",
    partner: "BNET",
    color: "#0e57a6",
    partnerLogo: "assets/industry/mitra_bnet.png",
    activityPhoto: "assets/industry/foto_industri_tkj.png",
  },
  {
    id: "rpl",
    name: "Rekayasa Perangkat Lunak",
    partner: "Gamelab Indonesia",
    color: "#ea580c",
    partnerLogo: "assets/industry/mitra_gamelab.png",
    activityPhoto: "assets/industry/foto_industri_rpl.png",
  },
  {
    id: "akuntansi",
    name: "Akuntansi",
    partner: "PT. Hunu Osias Padmada Eara",
    color: "#059669",
    partnerLogo: "assets/industry/mitra_hunu_osias.png",
    activityPhoto: "assets/industry/foto_industri_akuntansi.png",
  },
];

export const ROUTINE_ITEMS: RoutineItem[] = [
  { id: "r1", step: 1, title: "Apel Pagi", desc: "Membangun kedisiplinan dan kesiapan belajar", image: "assets/routine/01_apel.png" },
  { id: "r2", step: 2, title: "Pembiasaan Pagi", desc: "Karakter religius, doa bersama, dan literasi", image: "assets/routine/02_pembiasaan.png" },
  { id: "r3", step: 3, title: "Menyambut Siswa", desc: "Senyum, sapa, dan salam hangat di gerbang sekolah", image: "assets/routine/03_sambut_siswa.png" },
  { id: "r4", step: 4, title: "KBM Interaktif", desc: "Pembelajaran teori dan praktik kejuruan mendalam", image: "assets/routine/04_kbm.png" },
  { id: "r5", step: 5, title: "Bersih-Bersih Bersama", desc: "Menjaga lingkungan belajar yang bersih, asri, dan nyaman", image: "assets/routine/05_bersih_bersih.png" },
];

export const EXTRACURRICULARS = [
  { name: "Pramuka", icon: "flag" },
  { name: "Paskibra", icon: "shield" },
  { name: "PMR", icon: "heart" },
  { name: "Rohis", icon: "book" },
  { name: "Futsal", icon: "target" },
  { name: "Basket", icon: "circle" },
  { name: "Senam Sehat", icon: "activity" },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { id: "ac1", title: "[Nama Lomba 1]", level: "Tingkat Kabupaten", award: "Juara 1", year: "2024", image: "assets/achievements/prestasi_lks.png", isDummy: true },
  { id: "ac2", title: "[Nama Lomba 2]", level: "Tingkat Provinsi", award: "Juara 2", year: "2024", image: "assets/achievements/prestasi_it.png", isDummy: true },
  { id: "ac3", title: "[Nama Lomba 3]", level: "Tingkat Kabupaten", award: "Juara 1", year: "2024", image: "assets/achievements/prestasi_seni.png", isDummy: true },
];

export const ACADEMIC_PREPARATION = [
  { id: "tka", title: "Persiapan TKA", subtitle: "Tes Kemampuan Akademik", desc: "Pendampingan intensif persiapan TKA siswa secara terstruktur dan terukur." },
  { id: "bmw", title: "Konsep BMW", subtitle: "Bekerja, Melanjutkan, Wirausaha", desc: "Peta jalan karir fleksibel sesuai minat: langsung bekerja, kuliah, atau wirausaha." },
  { id: "ujikom", title: "Uji Kompetensi (Ujikom)", subtitle: "Sertifikasi Profesi Kejuruan", desc: "Standarisasi keahlian berlisensi industri resmi memastikan kesiapan bersaing global." },
];

export const GUIDANCE_SERVICES = [
  { id: "g_tka", title: "Bimbingan TKA", desc: "Penguatan materi akademik" },
  { id: "g_ujikom", title: "Bimbingan Ujikom", desc: "Pemantapan praktik keahlian" },
  { id: "g_kerja", title: "Bimbingan Bekerja", desc: "Kesiapan mental & CV industri" },
  { id: "g_kuliah", title: "Bimbingan Melanjutkan", desc: "Konsultasi kampus & beasiswa" },
  { id: "g_wirausaha", title: "Bimbingan Wirausaha", desc: "Mentoring bisnis & permodalan" },
];

export const TEACHER_ACTIVITIES = [
  { id: "act_pelatihan", title: "Pelatihan Guru", desc: "Upgrade keterampilan teknologi dan pedagogik modern secara berkala", image: "assets/teachers_activity/guru_pelatihan.png" },
  { id: "act_rapat", title: "Rapat-Rapat Guru", desc: "Sinkronisasi kurikulum, evaluasi kemajuan siswa, dan koordinasi manajemen", image: "assets/teachers_activity/guru_rapat.png" },
  { id: "act_kombel", title: "Komunitas Belajar (Kombel)", desc: "Kolaborasi antarpendidik untuk inovasi pembelajaran efektif dan bermutu", image: "assets/teachers_activity/guru_kombel.png" },
];
