'use client';
import { useState } from 'react';

const galleryData = [
  { id: 1, category: 'Bank Sampah', title: 'Penyetoran Rutin Unit 04', date: '15 Okt 2023', desc: 'Kegiatan rutin warga RW 04 menyetorkan sampah plastik dan kertas yang telah dipilah.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeYh8VGZsIPNqH6HXYQQX9FCPMU2xzjcQLCXcwbM5iY6DQypyVF5LRrR93ro9Wetaev8bit7JxBiEmbXR6U3PVtzGD3oh8fbUMBLJlb1cR__hTnNLBScYS-R7N_-ri8cVrkI9cqb3bBwbc44QQGGxVE1Out4dLEbCY-Zj_4I4mgUSP6xpA_nyyNKATA0DeTSdSLDCY7hna2gTU1pOpnG3cHIOQhC-mmHeu_rdch7LBUlFmankkQjtyIXy1j9UbT5IhwKXuMVObqUEI' },
  { id: 2, category: 'Edukasi', title: 'Workshop Eco-Bricks Sekolah', date: '12 Okt 2023', desc: 'Siswa SDN Tamangapa belajar mengolah sampah plastik menjadi material konstruksi.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmSzxEwf-CNUc2eY-meEvzrA5SKM_Qy1UYOHzkBgOue89q4-X1juhg71jEU8_9RRWk2vE9tr4ajknA9TbJpvNCchQ8Uz-_IzP9UiEVumV9pZJQLQ-jW9_plviZcpooXgweGc-uE_9eksooWQO9BbPH-wdp37flV0CQhws10pJd8nmCz5NYoHZ5-COI5fwfyuQJne9U--r9I8i-7G8xGP1jBPAPic1m_9KptmRsoIw9LmDYfQ1iXjoeXW53Kxl5Bb_nsu0PRJnT7Ryh' },
  { id: 3, category: 'Kebersihan', title: 'Aksi Bersih Kanal Perumnas', date: '08 Okt 2023', desc: 'Gotong royong warga membersihkan saluran drainase untuk mencegah penyumbatan.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl5opvqej5cfT6ElzwkmyQWd_tzLy7Vc5u6oYV0TBUPtL9zZ6HXHlh7QrngIsWXMVSRKNeb3zVgVmdGEpQAOX3nlkgXXCKGB6FaBT-UNVBalADWhWW9rM7m9v6DWua6zv7UT8vlWpqFLD4iyDOUuP3CSuzvJqZYID6LMU8WC5BmUgh3SzEsLbYVtbitP7ZlWAQ0C6qwMLrG06OC_PLdDP5wmkTpitAnYfVYCKt0xYkVcKlvfylozh04SAXEoRkf3KNy9g2vv83OIxO' },
  { id: 4, category: 'Sosialisasi Eco-Enzym', title: 'Pelatihan Ibu PKK', date: '05 Okt 2023', desc: 'Pembuatan cairan serbaguna dari sisa kulit buah oleh kelompok PKK RW 02.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop' },
  { id: 5, category: 'Edukasi', title: 'Sosialisasi Bahaya Lindi TPA', date: '01 Okt 2023', desc: 'Penyuluhan mengenai bahaya pencemaran air tanah akibat resapan lindi TPA Antang.', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, category: 'Bank Sampah', title: 'Peresmian Gudang Baru', date: '28 Sep 2023', desc: 'Gudang transit bank sampah kelurahan resmi dibuka untuk menampung lebih banyak stok.', img: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=2070&auto=format&fit=crop' },
  { id: 7, category: 'Kebersihan', title: 'Pembersihan Fasum Lapangan', date: '25 Sep 2023', desc: 'Kegiatan jumat bersih yang difokuskan pada area lapangan olahraga warga.', img: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=2129&auto=format&fit=crop' },
  { id: 8, category: 'Edukasi', title: 'Seminar Pengolahan Maggot BSF', date: '20 Sep 2023', desc: 'Mahasiswa KKN memberikan pengarahan tata cara budidaya Maggot skala rumah tangga.', img: 'https://images.unsplash.com/photo-1574682772590-0906236bfa5a?q=80&w=2070&auto=format&fit=crop' },
  { id: 9, category: 'Kebersihan', title: 'Pemangkasan Pohon Tumbang', date: '18 Sep 2023', desc: 'Kerjasama dengan dinas lingkungan hidup untuk memangkas pohon rawan tumbang.', img: 'https://images.unsplash.com/photo-1622322301322-869389e3557e?q=80&w=1931&auto=format&fit=crop' },
  { id: 10, category: 'Bank Sampah', title: 'Penimbangan Serentak', date: '15 Sep 2023', desc: 'Hari penimbangan serentak sampah kardus dari seluruh RT di Kelurahan Tamangapa.', img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1987&auto=format&fit=crop' },
  { id: 11, category: 'Sosialisasi Eco-Enzym', title: 'Panen Eco Enzym Perdana', date: '10 Sep 2023', desc: 'Hasil fermentasi Eco Enzym selama 3 bulan akhirnya dipanen dan dibagikan ke warga.', img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop' },
  { id: 12, category: 'Edukasi', title: 'Lomba Menggambar Daur Ulang', date: '05 Sep 2023', desc: 'Anak-anak berlomba menggambar dengan tema lingkungan sehat bebas polusi.', img: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop' }
];

const categories = ['Semua Kegiatan', 'Edukasi', 'Kebersihan', 'Bank Sampah', 'Sosialisasi Eco-Enzym'];
const ITEMS_PER_PAGE = 9;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Semua Kegiatan');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter based on category
  const filteredData = galleryData.filter(item => 
    activeCategory === 'Semua Kegiatan' || item.category === activeCategory
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentItems = filteredData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Bank Sampah': return 'bg-waste-plastic/10 text-waste-plastic';
      case 'Edukasi': return 'bg-primary-fixed text-on-primary-fixed-variant';
      case 'Kebersihan': return 'bg-waste-organic/20 text-on-surface';
      case 'Sosialisasi Eco-Enzym': return 'bg-tertiary/20 text-tertiary';
      default: return 'bg-surface-container text-on-surface';
    }
  };

  return (
    <section className="px-margin-desktop pt-4 pb-12 max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-2">
          <h1 className="font-headline-xl text-headline-xl text-primary">Galeri & Evaluasi Kegiatan</h1>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
            Dokumentasi upaya kolektif warga Kelurahan Tamangapa dalam menjaga kelestarian lingkungan dan pengelolaan sampah berkelanjutan.
          </p>
        </div>
        {/* Tombol tambah dokumentasi telah dihilangkan sesuai permintaan */}
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2 rounded-full font-label-md text-label-md transition-colors ${
              activeCategory === cat 
                ? 'bg-primary text-on-primary shadow-sm' 
                : 'bg-surface-container-high text-on-surface-variant hover:bg-organic-mint'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter min-h-[500px]">
          {currentItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 gallery-card-hover h-fit">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={item.title} 
                  src={item.img} 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className={`px-3 py-1 rounded-full font-label-md text-label-md ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-on-surface-variant font-label-md text-label-md">{item.date}</span>
                </div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-on-surface-variant line-clamp-2 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-[400px] flex items-center justify-center bg-surface-container rounded-3xl border border-outline-variant/20">
          <p className="text-on-surface-variant font-medium">Belum ada dokumentasi untuk kategori ini.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-4">
          <button 
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-6 py-2 rounded-full border flex items-center justify-center transition-all ${
              currentPage === 1 
                ? 'border-outline-variant/30 text-outline-variant/50 cursor-not-allowed' 
                : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
            }`}
          >
            Prev
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button 
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`w-10 h-10 rounded-lg font-bold transition-colors ${
                  currentPage === idx + 1 
                    ? 'bg-primary text-on-primary' 
                    : 'bg-transparent hover:bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-6 py-2 rounded-full border flex items-center justify-center transition-all ${
              currentPage === totalPages 
                ? 'border-outline-variant/30 text-outline-variant/50 cursor-not-allowed' 
                : 'border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
