import BerkebutuhanKhusus from "../components/ArticlesComponents/Articles/BerkebutuhanKhusus";
import KonsultasiPsikologis from "../components/ArticlesComponents/Articles/KonsultasiPsikologis";
import ManfaatScreening from "../components/ArticlesComponents/Articles/ManfaatScreening";
import MasalahAkademik from "../components/ArticlesComponents/Articles/MasalahAkademik";
import MinatBakat from "../components/ArticlesComponents/Articles/MinatBakat";
import TesKecerdasan from "../components/ArticlesComponents/Articles/TesKecerdasan";
import artikelImage from "../images/artikel_image.jpg";
import minatBakatImage from "../images/minatbakat.jpg";
import deteksiMasalahAkademikImage from "../images/deteksiakademik.jpg";
import tumbuhKembangImage from "../images/tumbuhkembangs.jpg";
import tesKecerdasanImage from "../images/kecerdasans.jpg";
import konsultasiImage from "../images/konsultasi.jpg";
import articleTsunami from "../images/articles_tsunami.jpeg";
import EventSiapaTsunami from "../components/ArticlesComponents/Articles/EventSiapaTsunami";

const Articles = [
  {
    slug: "artikel-minat-bakat",
    title: "Pentingnya Tes Minat dan Bakat pada Anak",
    text: "Pentingnya Tes Minat dan Bakat pada Anak Mengidentifikasi potensi dan minat anak sejak dini adalah langkah penting dalam membantu mereka mencapai perkembangan optimal. Tes minat dan bakat memainkan peran krusial dalam proses ini. Dengan memahami minat dan bakat anak, orang tua dan pendidik dapat memberikan dukungan yang tepat, sehingga anak dapat berkembang sesuai dengan potensinya. Artikel ini akan membahas pentingnya tes minat dan bakat pada anak serta bagaimana hasil tes ini dapat memberikan manfaat yang signifikan.",
    date: "25 Juli 2024",
    image: minatBakatImage,
    component: MinatBakat,
  },
  {
    slug: "artikel-masalah-akademik",
    title: "Deteksi Dini Masalah Akademik dan Cara Menanganinya",
    text: "Masalah akademik pada anak dapat mempengaruhi perkembangan belajar dan kesejahteraan emosional mereka. Deteksi dini masalah akademik sangat penting untuk memberikan intervensi yang tepat dan membantu anak mencapai potensi penuh mereka. Artikel ini akan membahas tanda-tanda awal masalah akademik, strategi untuk mendeteksi masalah tersebut, dan cara menanganinya secara efektif.",
    date: "25 Juli 2024",
    image: deteksiMasalahAkademikImage,
    component: MasalahAkademik,
  },
  {
    slug: "artikel-program-terapi-anak-berkebutuhan-khusus",
    title: "Mengenal Program Terapi Anak Berkebutuhan Khusus",
    text: "Anak berkebutuhan khusus memerlukan perhatian dan dukungan ekstra untuk mengatasi tantangan yang mereka hadapi dalam kehidupan sehari-hari. Beberapa kondisi umum yang termasuk dalam kategori anak berkebutuhan khusus adalah autisme, ADHD (Attention Deficit Hyperactivity Disorder), disleksia, dan sindrom Down. Program terapi yang tepat dapat membantu anak-anak ini mengembangkan keterampilan yang diperlukan untuk mencapai potensi maksimal mereka.",
    date: "25 Juli 2024",
    image: artikelImage,
    component: BerkebutuhanKhusus,
  },
  {
    slug: "manfaat-screening",
    title: "Manfaat Screening Tumbuh Kembang untuk Anak",
    text: "Screening tumbuh kembang adalah proses evaluasi awal yang dilakukan untuk mengidentifikasi potensi masalah dalam perkembangan fisik, kognitif, sosial, dan emosional anak. Ini adalah langkah penting dalam memastikan bahwa anak menerima dukungan dan intervensi yang diperlukan pada waktu yang tepat. Berikut ini adalah beberapa manfaat dari screening tumbuh kembang untuk anak.",
    date: "25 Juli 2024",
    image: tumbuhKembangImage,
    component: ManfaatScreening,
  },
  {
    slug: "mengapa-tes-kecerdasan-penting",
    title: "Mengapa Tes Kecerdasan Penting untuk Anak Anda?",
    text: "Tes kecerdasan, atau sering disebut sebagai tes IQ (Intelligence Quotient), adalah alat yang digunakan untuk mengukur kemampuan kognitif dan potensi intelektual seseorang. Tes ini sering digunakan pada anak-anak untuk berbagai tujuan, dari keperluan pendidikan hingga intervensi psikologis. Berikut adalah beberapa alasan mengapa tes kecerdasan penting untuk anak Anda.",
    date: "25 Juli 2024",
    image: tesKecerdasanImage,
    component: TesKecerdasan,
  },
  {
    slug: "konsultasi-psikologis",
    title:
      "Konsultasi Psikologis: Solusi Tepat untuk Masalah Kesehatan Mental dan Emosional",
    text: "Kesehatan mental dan emosional merupakan bagian penting dari kesejahteraan keseluruhan seseorang. Ketika menghadapi tantangan dalam aspek ini, konsultasi psikologis dapat menjadi langkah yang sangat bermanfaat. Artikel ini membahas pentingnya konsultasi psikologis untuk masalah kesehatan mental dan emosional, serta bagaimana layanan ini dapat membantu individu mengatasi berbagai isu yang mungkin mereka hadapi.",
    date: "25 Juli 2024",
    image: konsultasiImage,
    component: KonsultasiPsikologis,
  },
  {
    slug: "tim-edukasi-ceria-gelar-event-memperingati-19-tahun-tsunami",
    title: "Tim Edukasi Ceria Gelar Event Memperingati 19 Tahun Tsunami",
    text: 'Kegiatan dengan tema "Siapa Tsunami?" dirancang untuk menambah pemahaman anak-anak di usia 5-12 tahun agar paham bagaimana cara atau langkah mitigasi bencana saat darurat dan cara mengatur kembali emosi agar tetap stabil.',
    date: "26 Desember 2023",
    image: articleTsunami,
    component: EventSiapaTsunami,
  },
];

export default Articles;
