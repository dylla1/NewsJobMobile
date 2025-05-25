// Store review data (could also fetch from an API)
const reviews = {
    1: {
        imgSrc: "imgs/k1.jpg",
        title: "Dicari Progammer Java untuk Aplikasi Fintech",
        timePosted: "10 minutes ago",
        viewCount: "4566",
        content: `<p>Perusahaan fintech ternama di Indonesia membuka lowongan Programmer Java untuk tim pengembangan aplikasi pembayaran digital. Kandidat ideal memiliki pengalaman minimal 2 tahun dalam pengembangan backend menggunakan Spring Boot, serta familiar dengan integrasi API dan sistem keamanan perbankan. Tersedia kesempatan karir dengan gaji kompetitif dan benefit tunjangan kesehatan.</p>
                            <p>Tanggung jawab utama meliputi pengembangan fitur baru, optimasi kode, dan kolaborasi dengan tim QA untuk memastikan kualitas aplikasi. Perusahaan mencari kandidat yang mampu bekerja dalam lingkungan agile dan memiliki pemahaman kuat tentang microservices architecture. Pelamar diharapkan menguasai tools seperti Git, Docker, dan PostgreSQL.</p>
                            <p>Berminat? Kirim CV dan portofolio proyek terkait ke hr@fintechinovasi.com sebelum 30 November 2024. Cantumkan kode "JavaFintech_2024" pada subjek email. Proses rekrutmen terdiri dari tes teknis dan wawancara dengan tim engineering. Opportunity untuk bekerja hybrid (WFH/WFO) dan bonus tahunan!</p>
                            <h5>Catatan:</h5>
                            <p>Menyoroti skill spesifik (Spring Boot, API, keamanan), Menjelaskan tanggung jawab dan work environment, CTA jelas dengan deadline dan instruksi aplikasi, Tambahkan nilai tambah (hybrid, bonus) untuk daya tarik</p>

        `,
        fullNewsLink: "pages/news.html"
    },
    2: {
        imgSrc: "imgs/k2.jpeg",
        title: "Lowongan IT Support di Perusahaan Retail Nasional",
        timePosted: "16 minutes ago",
        viewCount: "345",
        content: `<p>PT. Retail Indonesia membuka posisi IT Support untuk penempatan di cabang Jakarta & Surabaya. Persyaratan: lulusan D3/S1 Teknik Informatika, mampu troubleshooting hardware/software, dan familiar dengan Windows Server & jaringan LAN/WAN. Tanggung jawab meliputi maintenance sistem POS dan pendampingan digitalisasi toko.</p>
                            <p>Perusahaan memberikan tunjangan transportasi, uang makan, dan program pelatihan bersertifikat. Kandidat harus siap kerja shift dan memiliki SIM C. Pengalaman di retail menjadi nilai tambah.</p>
                            <p>Segera daftar via link: bit.ly/ITSupport-Retail2024. Proses rekrutmen cepat (1 minggu) untuk kebutuhan segera. Bergabunglah dengan tim IT dari jaringan retail terbesar di Indonesia!</p>
                            
        `,
        fullNewsLink: "pages/news2.html"
    },
    3: {
        imgSrc: "imgs/k3.webp",
        title: "Rekrutmen Data Scientist untuk Startup HealthTech",
        timePosted: "20 minutes ago",
        viewCount: "1249",
        content: `
            <p>Startup innovasi kesehatan membuka lowongan Data Scientist untuk tim pengembangan AI diagnostik. Kualifikasi menguasai Python, SQL, & library machine learning (Scikit-learn/TensorFlow), pengalaman minimal 1 tahun di bidang healthcare data (preferable), kemampuan analisis statistik dan visualisasi data</p>
                            <p>Tugas utama: membangun model prediksi penyakit, mengolah dataset pasien, dan berkolaborasi dengan tim medis. Perusahaan menawarkan equity option dan lingkungan kerja fleksibel (remote-friendly).</p>
                            <p>Kirim CV + contoh proyek ke talent@healthai.co dengan subjek "DS_YourName". Rekrutmen terbuka hingga posisi terpenuhi. Jadilah bagian dari revolusi AI di dunia kesehatan!</p>

        `,
        fullNewsLink: "pages/news3.html"
    },
    4: {
        imgSrc: "imgs/k4.jpg",
        title: "Dibutuhkan Web Developer untuk Proyek E-Government",
        timePosted: "27 minutes ago",
        viewCount: "3126",
        content: `
           <p>Dinas Komunikasi dan Informatika Provinsi Jawa Barat mencari Web Developer (Fullstack) untuk pembuatan portal layanan publik. Kriteria: menguasai PHP/Laravel (backend) dan React.js (frontend), pemahami standar keamanan Pemerintah (PSE), portofolio proyek sejenis</p>
                            <p>Proyek berjangka 6 bulan dengan kemungkinan diperpanjang. Fee negotiable berdasarkan pengalaman (range 10-18 juta/bulan). WFO 3 hari/minggu di Bandung.</p>
                            <p>Ajukan lamaran melalui SIPKD Jabar sebelum 15 Desember 2024. Kontribusikan keahlian Anda untuk layanan publik digital yang lebih baik!</p>
        `,
        fullNewsLink: "pages/news4.html"
    },
    5: {
        imgSrc: "imgs/k5.jpg",
        title: "Lowongan Cyber Security Analyst di Bank Swasta",
        timePosted: "35 minutes ago",
        viewCount: "1566",
        content: `
             <p>Bank ABC membuka posisi Cyber Security Analyst untuk tim SOC (Security Operations Center). Persyaratan: S1 Teknik Informatika dengan sertifikasi CEH/CISSP, pengalaman monitoring ancaman siber & analisis forensik, mengerti regulasi OJK/PBI tentang keamanan perbankan.</p> 
                            <p>Benefit: gaji 20-30 juta, asuransi keluarga, dan program sertifikasi lanjutan. Shift kerja 24/7 dengan sistem rolling.</p>
                            <p>Kirim CV ke soc_recruitment@bankabc.co.id dengan lampiran sertifikas. Kode: "SOC_2024". Proses cepat - hanya 5 tahap seleksi!</p>
        `,
        fullNewsLink: "pages/news5.html"
    },
    6: {
        imgSrc: "imgs/k6.jpg",
        title: "Posisi UI/UX Designer untuk Aplikasi Edukasi",
        timePosted: "40 minutes ago",
        viewCount: "876",
        content: `
            <p>EduTech "PintarKoding" membutuhkan UI/UX Designer untuk merancang platform pembelajaran coding untuk anak. Ekspektasi: Pengalaman 1-3 tahun di Figma/Adobe XD, portofolio desain aplikasi edukasi/interaktif, memahami prinsip gamifikasi dalam desain</p>
                            <p>Tim kecil yang dinamis, remote full-time, dengan bonus berdasarkan engagement pengguna. Tunjangan kursus desain premium.</p>
                            <p>Showcase karya Anda di design@pintarkoding.id dengan subjek "EduDesign_[Nama]". Bantu ciptakan pengalaman belajar coding yang menyenangkan!</p>
        `,
        fullNewsLink: "pages/news6.html"
    }
};

// Get DOM elements
const reviewContainer = document.getElementById('review');
const closeReview = document.querySelector('#review .close');
const bodyOverlay = document.querySelector('.body-overlay');

document.querySelectorAll('.show-review').forEach(button => {
    button.addEventListener('click', function(e) {
        // Get the review ID from the <i> element inside the span
        const eyeIcon = this.querySelector('i.fa-eye');
        const reviewId = eyeIcon.getAttribute('data-review-id');
        
        // Check if review exists
        if (!reviews[reviewId]) {
            console.error(`Review with ID "${reviewId}" not found.`);
            return;
        }

        const reviewData = reviews[reviewId];

        // Update review content dynamically
        document.querySelector('#review .ind-news').src = reviewData.imgSrc;
        document.querySelector('#review .review-title').textContent = reviewData.title;
        document.querySelector('#review .time-posted').textContent = reviewData.timePosted;
        document.querySelector('#review .view-count').textContent = reviewData.viewCount;
        document.querySelector('#review .review-content').innerHTML = reviewData.content;
        document.querySelector('#review .full-news-link').href = reviewData.fullNewsLink;

        // Show the review
        reviewContainer.style.display = 'block';
        bodyOverlay.style.display = 'block';
    });
});

const closeButton = document.querySelector('#review .close');
if (closeButton) {
    closeButton.addEventListener('click', function() {
        reviewContainer.style.display = 'none';
        if (bodyOverlay) bodyOverlay.style.display = 'none';
    });
}