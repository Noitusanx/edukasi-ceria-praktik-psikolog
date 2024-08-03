import artikelImage from "../images/artikel_image.jpg";
import konsultasiImage from "../images/konsultasi.jpg";
import childrenschoolImage from "../images/childrenschools.jpg";
import minatBakatImage from "../images/minatbakat.jpg";
import deteksiMasalahAkademikImage from "../images/deteksiakademik.jpg";
import tumbuhKembangImage from "../images/tumbuhkembangs.jpg";
import tesKecerdasanImage from "../images/kecerdasans.jpg";
import sharingClassImage from "../images/sharingclasses.jpg";
import psikoedukasiImage from "../images/psikoedu.jpg";
import konsultasianakimage from "../images/konsultasi_anak_img.jpg";

const layanans = [
  {
    slug: "konsultasi",
    title: "Konsultasi",
    subtitle:
      "Layanan konsultasi psikologis untuk berbagai masalah pribadi dan emosional",
    description:
      "Layanan konsultasi ini membantu individu mengatasi berbagai masalah pribadi dan emosional, seperti kecemasan, depresi, stres, dan masalah hubungan. Psikolog akan bekerja sama dengan Anda untuk menemukan solusi yang tepat.",
    image: konsultasiImage,
    bgColor: "#7FDCF9",
    activity_description:
      "Kegiatan ini melibatkan penilaian dan intervensi psikologis yang dirancang untuk membantu individu mengatasi berbagai masalah pribadi dan emosional.",
    activity: [
      {
        title: "Sesi Konseling Individu",
        description:
          "Sesi tatap muka dengan psikolog untuk membahas dan mengatasi masalah pribadi dan emosional.",
        image: sharingClassImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Terapi Kognitif Perilaku",
        description:
          "Pendekatan terapi yang fokus pada mengubah pola pikir negatif dan perilaku maladaptif.",
        image: konsultasiImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Pelatihan Manajemen Stres",
        description:
          "Teknik dan strategi untuk mengelola stres secara efektif dan meningkatkan kesejahteraan emosional.",
        image: minatBakatImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: deteksiMasalahAkademikImage,
    benefits: [
      {
        title: "Pemahaman Diri yang Lebih Baik",
        description:
          "Membantu individu mendapatkan wawasan tentang masalah mereka dan menemukan solusi yang efektif.",
      },
      {
        title: "Peningkatan Kesejahteraan Emosional",
        description:
          "Mengurangi gejala kecemasan, depresi, dan stres melalui intervensi yang sesuai.",
      },
      {
        title: "Keterampilan Menghadapi Masalah",
        description:
          "Mengajarkan keterampilan yang berguna untuk mengatasi tantangan hidup dan meningkatkan kualitas hidup.",
      },
    ],
  },
  {
    slug: "tes-kesiapan-sekolah",
    title: "Tes Kesiapan Sekolah",
    subtitle: "Evaluasi kesiapan anak untuk memasuki pendidikan formal",
    description:
      "Tes kesiapan sekolah dirancang untuk menilai apakah anak siap secara kognitif, sosial, dan emosional untuk memulai pendidikan formal. Evaluasi ini membantu orang tua dan guru memahami kebutuhan dan potensi anak.",
    image: childrenschoolImage,
    bgColor: "#FFC36C",
    activity_description:
      "Kegiatan ini melibatkan penilaian kognitif, sosial, dan emosional yang bertujuan untuk mengidentifikasi dan mengatasi berbagai masalah pribadi dan emosional.",
    activity: [
      {
        title: "Penilaian Kognitif",
        description:
          "Evaluasi kemampuan berpikir, pemecahan masalah, dan keterampilan belajar dasar.",
        image: artikelImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Penilaian Sosial",
        description:
          "Observasi interaksi anak dengan teman sebaya dan kemampuan beradaptasi dalam lingkungan sosial.",
        image: deteksiMasalahAkademikImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Penilaian Emosional",
        description:
          "Mengidentifikasi regulasi emosi, kematangan emosional, dan respons terhadap situasi yang menantang.",
        image: konsultasiImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: tesKecerdasanImage,
    benefits: [
      {
        title: "Persiapan Optimal",
        description:
          "Membantu memastikan anak siap menghadapi tantangan pendidikan formal dengan memberikan gambaran mengenai area yang mungkin memerlukan dukungan lebih lanjut.",
      },
      {
        title: "Identifikasi Kebutuhan",
        description:
          "Menyediakan informasi yang berguna untuk menyesuaikan pendekatan pengajaran dan dukungan sesuai dengan kebutuhan spesifik anak.",
      },
      {
        title: "Perencanaan Pendidikan",
        description:
          "Memudahkan orang tua dan guru dalam merancang strategi yang efektif untuk mendukung perkembangan anak selama masa transisi ke sekolah.",
      },
    ],
  },
  {
    slug: "tes-minat-bakat",
    title: "Tes Minat Bakat",
    subtitle: "Penilaian untuk mengidentifikasi minat dan bakat anak",
    description:
      "Tes ini bertujuan untuk mengidentifikasi minat dan bakat anak, membantu mereka dalam memilih jalur pendidikan dan karir yang sesuai dengan potensi mereka.",
    image: minatBakatImage,
    bgColor: "#FFA2C9",
    activity_description:
      "Tes ini melibatkan berbagai jenis penilaian untuk menilai minat dan bakat anak.",
    activity: [
      {
        title: "Penilaian Minat",
        description:
          "Mengidentifikasi minat anak melalui berbagai kuisioner dan tes.",
        image: konsultasianakimage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Penilaian Bakat",
        description:
          "Menilai bakat anak dalam berbagai bidang seperti seni, olahraga, dan akademik.",
        image: tesKecerdasanImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Pemetaan Potensi",
        description:
          "Menggabungkan hasil dari penilaian minat dan bakat untuk memberikan gambaran menyeluruh tentang potensi anak.",
        image: artikelImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: childrenschoolImage,
    benefits: [
      {
        title: "Pemetaan Karir",
        description:
          "Memberikan panduan untuk memilih jalur pendidikan dan karir yang sesuai dengan minat dan bakat anak.",
      },
      {
        title: "Peningkatan Kepercayaan Diri",
        description:
          "Membantu anak merasa lebih yakin dengan potensi dan kemampuan mereka.",
      },
      {
        title: "Perencanaan Pendidikan",
        description:
          "Membantu orang tua dan pendidik merencanakan pendidikan yang sesuai dengan minat dan bakat anak.",
      },
    ],
  },

  {
    slug: "program-terapi-anak-berkebutuhan-khusus",
    title: "Program Terapi Anak Berkebutuhan Khusus",
    subtitle: "Terapi untuk anak dengan kebutuhan khusus",
    description:
      "Program terapi ini dirancang khusus untuk anak-anak dengan kebutuhan khusus, seperti autism, ADHD, dan gangguan perkembangan lainnya. Terapi ini membantu anak mencapai potensi maksimal mereka melalui pendekatan yang individual.",
    image: artikelImage,
    bgColor: "#7FDCF9",
    activity_description:
      "Program ini melibatkan berbagai terapi dan penilaian untuk mendukung perkembangan anak.",
    activity: [
      {
        title: "Terapi Kognitif",
        description:
          "Menggunakan teknik untuk meningkatkan kemampuan berpikir dan pemecahan masalah.",
        image: tesKecerdasanImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Terapi Sosial",
        description:
          "Membantu anak meningkatkan keterampilan sosial dan adaptasi dalam lingkungan sosial.",
        image: childrenschoolImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Terapi Emosional",
        description:
          "Mendukung anak dalam mengelola emosi dan meningkatkan kematangan emosional.",
        image: artikelImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: konsultasianakimage,
    benefits: [
      {
        title: "Pendekatan Individual",
        description:
          "Memberikan terapi yang disesuaikan dengan kebutuhan khusus masing-masing anak.",
      },
      {
        title: "Peningkatan Kemampuan",
        description:
          "Membantu anak mengembangkan kemampuan dan keterampilan yang diperlukan untuk berfungsi dengan baik dalam kehidupan sehari-hari.",
      },
      {
        title: "Dukungan Terpadu",
        description:
          "Melibatkan orang tua dan guru dalam proses terapi untuk memberikan dukungan yang menyeluruh.",
      },
    ],
  },

  {
    slug: "deteksi-masalah-akademik",
    title: "Deteksi Masalah Akademik/Kesulitan Belajar",
    subtitle: "Identifikasi dan penanganan masalah akademik pada anak",
    description:
      "Layanan ini bertujuan untuk mengidentifikasi dan menangani berbagai masalah akademik dan kesulitan belajar pada anak, termasuk gangguan konsentrasi, disleksia, dan masalah lainnya yang mempengaruhi prestasi akademik.",
    image: deteksiMasalahAkademikImage,
    bgColor: "#FFC36C",
    activity_description:
      "Layanan ini melibatkan penilaian dan intervensi untuk mengatasi masalah akademik.",
    activity: [
      {
        title: "Penilaian Kognitif",
        description:
          "Evaluasi kemampuan berpikir, pemecahan masalah, dan keterampilan belajar dasar untuk mengidentifikasi masalah.",
        image: minatBakatImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Penilaian Akademik",
        description:
          "Menilai kesulitan belajar spesifik seperti disleksia atau gangguan konsentrasi.",
        image: tesKecerdasanImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Intervensi Pendidikan",
        description:
          "Menyediakan strategi dan dukungan untuk membantu anak mengatasi kesulitan akademik.",
        image: artikelImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: tumbuhKembangImage,
    benefits: [
      {
        title: "Identifikasi Masalah",
        description:
          "Menemukan masalah akademik yang mempengaruhi prestasi anak secara dini.",
      },
      {
        title: "Strategi Dukungan",
        description:
          "Menyediakan rencana intervensi yang efektif untuk mengatasi masalah akademik.",
      },
      {
        title: "Peningkatan Prestasi",
        description:
          "Membantu anak meningkatkan prestasi akademik dan kepercayaan diri.",
      },
    ],
  },

  {
    slug: "screening-tumbuh-kembang",
    title: "Screening Tumbuh Kembang",
    subtitle: "Pemeriksaan perkembangan anak secara menyeluruh",
    description:
      "Screening tumbuh kembang adalah proses pemeriksaan yang dilakukan untuk menilai perkembangan fisik, kognitif, sosial, dan emosional anak, serta mengidentifikasi adanya keterlambatan atau masalah perkembangan.",
    image: tumbuhKembangImage,
    bgColor: "#FFA2C9",
    activity_description:
      "Screening ini melibatkan penilaian menyeluruh terhadap berbagai aspek perkembangan anak.",
    activity: [
      {
        title: "Penilaian Fisik",
        description:
          "Menilai aspek fisik anak termasuk motorik kasar dan halus.",
        image: konsultasianakimage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Penilaian Kognitif",
        description:
          "Menilai perkembangan kognitif dan keterampilan belajar anak.",
        image: tesKecerdasanImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Penilaian Sosial dan Emosional",
        description:
          "Menilai kemampuan sosial dan emosional anak serta mengidentifikasi potensi masalah.",
        image: childrenschoolImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: sharingClassImage,
    benefits: [
      {
        title: "Deteksi Dini",
        description:
          "Mengidentifikasi masalah perkembangan sejak dini untuk intervensi yang lebih cepat.",
      },
      {
        title: "Gambaran Menyeluruh",
        description:
          "Memberikan gambaran menyeluruh tentang perkembangan anak di berbagai aspek.",
      },
      {
        title: "Dukungan Pengembangan",
        description:
          "Membantu orang tua dan pendidik dalam merencanakan dukungan yang sesuai untuk perkembangan anak.",
      },
    ],
  },
  {
    slug: "tes-kecerdasan",
    title: "Tes Kecerdasan",
    subtitle: "Penilaian tingkat kecerdasan anak secara komprehensif",
    description:
      "Tes kecerdasan bertujuan untuk menilai kemampuan kognitif anak secara menyeluruh, termasuk pemahaman verbal, logika, dan kemampuan pemecahan masalah. Hasil tes ini dapat membantu dalam menentukan kebutuhan pendidikan anak.",
    image: tesKecerdasanImage,
    bgColor: "#7FDCF9",
    activity_description:
      "Aktivitas dalam tes kecerdasan ini dirancang untuk menilai berbagai aspek kognitif dan kemampuan anak.",
    activity: [
      {
        title: "Evaluasi Kemampuan Verbal",
        description:
          "Menilai kemampuan anak dalam memahami, mengingat, dan menggunakan bahasa untuk berkomunikasi.",
        image: childrenschoolImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Penilaian Logika dan Pemecahan Masalah",
        description:
          "Mengukur kemampuan anak dalam berpikir logis dan memecahkan masalah dengan cara yang sistematis.",
        image: minatBakatImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Pengujian Kemampuan Kognitif Umum",
        description:
          "Evaluasi kemampuan kognitif anak secara keseluruhan, termasuk memori, perhatian, dan kecepatan pemrosesan informasi.",
        image: artikelImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: deteksiMasalahAkademikImage,
    benefits: [
      {
        title: "Pemahaman Mendalam tentang Kemampuan Anak",
        description:
          "Memberikan wawasan yang mendalam tentang kekuatan dan kelemahan kognitif anak untuk mendukung pengembangan yang lebih baik.",
      },
      {
        title: "Peningkatan Metode Pengajaran",
        description:
          "Membantu guru dan orang tua dalam menyesuaikan metode pengajaran agar sesuai dengan kemampuan kognitif dan gaya belajar anak.",
      },
      {
        title: "Perencanaan Pendidikan yang Tepat",
        description:
          "Membantu dalam merencanakan strategi pendidikan yang tepat berdasarkan hasil tes untuk memaksimalkan potensi anak.",
      },
    ],
  },
  {
    slug: "konsultasi-anak",
    title: "Konsultasi Anak",
    subtitle: "Layanan konsultasi untuk membantu perkembangan psikologis anak",
    description:
      "Konsultasi Anak adalah layanan yang dirancang untuk membantu anak-anak mengatasi berbagai masalah psikologis dan emosional yang mereka hadapi. Layanan ini mencakup evaluasi, diagnosis, dan intervensi yang disesuaikan dengan kebutuhan masing-masing anak.",
    image: konsultasianakimage,
    bgColor: "#FFC36C",
    activity_description:
      "Layanan ini melibatkan berbagai aktivitas untuk mendukung perkembangan psikologis anak.",
    activity: [
      {
        title: "Evaluasi Psikologis",
        description:
          "Penilaian mendalam untuk memahami kondisi psikologis anak.",
        image: konsultasiImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Sesi Konsultasi",
        description:
          "Sesi tatap muka untuk membahas masalah dan kebutuhan psikologis anak.",
        image: deteksiMasalahAkademikImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Terapi Anak",
        description:
          "Intervensi terapi untuk membantu anak mengatasi masalah psikologis dan emosional.",
        image: minatBakatImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: artikelImage,
    benefits: [
      {
        title: "Pendekatan Personal",
        description:
          "Pendekatan yang disesuaikan dengan kebutuhan unik setiap anak.",
      },
      {
        title: "Pengembangan Keterampilan Sosial",
        description:
          "Membantu anak mengembangkan keterampilan sosial dan emosional yang penting.",
      },
      {
        title: "Dukungan untuk Orang Tua",
        description:
          "Memberikan panduan dan dukungan kepada orang tua untuk memahami dan membantu anak mereka.",
      },
    ],
  },

  {
    slug: "sharing-class",
    title: "Sharing Class",
    subtitle: "Kelas berbagi pengetahuan dan pengalaman seputar psikologi",
    description:
      "Sharing Class adalah program di mana para peserta dapat berbagi pengetahuan dan pengalaman terkait psikologi dalam suasana yang interaktif dan edukatif. Kelas ini juga menjadi tempat untuk belajar dan berdiskusi tentang topik-topik terbaru dalam dunia psikologi.",
    image: sharingClassImage,
    bgColor: "#FFA2C9",
    activity_description:
      "Kelas ini melibatkan berbagai aktivitas berbagi pengetahuan dan diskusi tentang psikologi.",
    activity: [
      {
        title: "Diskusi Psikologi",
        description:
          "Berbagi pengetahuan dan pengalaman tentang berbagai topik psikologi.",
        image: childrenschoolImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Sesi Interaktif",
        description:
          "Kegiatan interaktif yang melibatkan peserta dalam pembelajaran aktif.",
        image: tumbuhKembangImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Tanya Jawab",
        description:
          "Sesi tanya jawab untuk membahas isu-isu psikologi dan mendapatkan wawasan tambahan.",
        image: deteksiMasalahAkademikImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: minatBakatImage,
    benefits: [
      {
        title: "Pengetahuan Mendalam",
        description:
          "Mendapatkan wawasan mendalam tentang topik-topik psikologi dari berbagai perspektif.",
      },
      {
        title: "Interaksi Sosial",
        description:
          "Kesempatan untuk berdiskusi dan berbagi pengalaman dengan peserta lainnya.",
      },
      {
        title: "Pembelajaran Aktif",
        description:
          "Terlibat dalam proses pembelajaran yang interaktif dan partisipatif.",
      },
    ],
  },
  {
    slug: "psikoedukasi",
    title: "Psikoedukasi",
    subtitle:
      "Program edukasi psikologi untuk meningkatkan pemahaman masyarakat",
    description:
      "Program psikoedukasi bertujuan untuk meningkatkan pemahaman masyarakat tentang kesehatan mental dan pentingnya perawatan psikologis. Melalui sesi edukatif, peserta akan belajar tentang berbagai topik psikologi dan bagaimana menjaga kesehatan mental mereka.",
    image: psikoedukasiImage,
    bgColor: "#7FDCF9",
    activity_description:
      "Aktivitas dalam program psikoedukasi melibatkan penyampaian materi, diskusi, dan pelatihan untuk meningkatkan pemahaman tentang kesehatan mental.",
    activity: [
      {
        title: "Sesi Edukasi Kesehatan Mental",
        description:
          "Pembelajaran tentang konsep dasar kesehatan mental, tanda-tanda gangguan, dan pentingnya perawatan psikologis.",
        image: konsultasiImage,
        bgColor: "#9BE2D0",
      },
      {
        title: "Diskusi Interaktif",
        description:
          "Sesi diskusi yang memungkinkan peserta berbagi pengalaman dan bertanya tentang topik-topik terkait kesehatan mental dan psikologi.",
        image: tumbuhKembangImage,
        bgColor: "#7FDCF9",
      },
      {
        title: "Pelatihan Keterampilan Kesehatan Mental",
        description:
          "Pelatihan tentang teknik-teknik untuk menjaga kesehatan mental, seperti manajemen stres, teknik relaksasi, dan strategi coping.",
        image: minatBakatImage,
        bgColor: "#FFA2C9",
      },
    ],
    benefit_image: sharingClassImage,
    benefits: [
      {
        title: "Peningkatan Pemahaman tentang Kesehatan Mental",
        description:
          "Memberikan pengetahuan yang lebih baik tentang kesehatan mental dan cara-cara untuk menjaga kesejahteraan psikologis.",
      },
      {
        title: "Kesadaran akan Pentingnya Perawatan Psikologis",
        description:
          "Meningkatkan kesadaran peserta tentang pentingnya perawatan psikologis dan bagaimana mengenali tanda-tanda gangguan mental.",
      },
      {
        title: "Pengembangan Keterampilan untuk Menjaga Kesehatan Mental",
        description:
          "Menyediakan keterampilan praktis yang dapat diterapkan dalam kehidupan sehari-hari untuk mengelola stres dan meningkatkan kesejahteraan mental.",
      },
    ],
  },
];

export default layanans;
