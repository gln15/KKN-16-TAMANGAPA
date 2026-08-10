'use client';
import { useState, useEffect, useCallback } from 'react';
import { parseCSV } from '@/utils/csvParser';



const categories = ['Semua', 'Edukasi', 'Olah', 'Sehat', 'Mandiri', 'Kenali', 'Evaluasi', 'Seminar'];
const ITEMS_PER_PAGE = 9;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Close modal on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedItem(null);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItem, handleKeyDown]);

  useEffect(() => {
    async function fetchGallery() {
      const csvUrl = process.env.NEXT_PUBLIC_GALLERY_CSV_URL || "https://docs.google.com/spreadsheets/d/e/2PACX-1vSm3TS5PLT1x4ujKkbqiEWvvUzhDhM2pxMtTuRxOvWQWvIP7XKIETrwaqMX8rzawtO1OwuWJH0BONuG/pub?gid=0&single=true&output=csv";
      if (!csvUrl) {
        setIsLoading(false);
        return;
      }
      
      try {
        const response = await fetch(csvUrl);
        if (!response.ok) throw new Error('Failed to fetch CSV');
        
        const csvText = await response.text();
        const parsed = parseCSV(csvText);
        
        // Map to match the expected object structure (supporting ID & EN headers)
        const mappedItems = parsed.map((row, index) => {
          let imgUrl = row.img || row.gambar || '';
          
          // Perbaiki link Google Drive agar bisa ditampilkan di tag <img>
          // Format uc?export=view sudah diblokir Google, gunakan lh3.googleusercontent.com
          if (imgUrl.includes('drive.google.com')) {
            const idMatch = imgUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) || imgUrl.match(/id=([a-zA-Z0-9_-]+)/);
            if (idMatch && idMatch[1]) {
              imgUrl = `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
            }
          }

          // Normalize kategori: capitalize first letter agar cocok dengan filter
          const rawCategory = row.category || row.kategori || 'Lainnya';
          const category = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1).toLowerCase();

          return {
            id: parseInt(row.id) || index + 100,
            category,
            title: row.title || row.judul || 'Tanpa Judul',
            date: row.date || row.tanggal || '-',
            desc: row.desc || row.deskripsi || '',
            img: imgUrl || '/images/placeholder-gallery.svg'
          };
        });
        
        if (mappedItems.length > 0) {
          setGalleryItems(mappedItems);
        } else {
          // If CSV is empty (only headers), keep the hardcoded dummy data for now
          setGalleryItems([]);
        }
      } catch (err) {
        console.error('Error fetching gallery CSV:', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGallery();
  }, []);

  // Filter based on category, lalu sort berdasarkan tanggal terbaru
  const filteredData = galleryItems
    .filter(item => activeCategory === 'Semua' || item.category === activeCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
      case 'Edukasi': return 'bg-emerald-800/15 text-emerald-800';
      case 'Olah': return 'bg-teal-800/15 text-teal-800';
      case 'Sehat': return 'bg-rose-800/15 text-rose-800';
      case 'Mandiri': return 'bg-slate-700/15 text-slate-700';
      case 'Kenali': return 'bg-indigo-800/15 text-indigo-800';
      case 'Evaluasi': return 'bg-orange-800/15 text-orange-800';
      case 'Seminar': return 'bg-violet-800/15 text-violet-800';
      default: return 'bg-stone-700/15 text-stone-700';
    }
  };

  return (
    <>
    <section className="px-margin-desktop pt-4 pb-12 max-w-container-max mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="space-y-2">
          <h1 className="font-headline-xl text-headline-xl text-primary">Galeri & Dokumentasi</h1>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl">
            Kumpulan foto dan dokumentasi kegiatan KKN 116 di Kelurahan Tamangapa dalam pengelolaan sampah dan pemberdayaan masyarakat.
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

      {isLoading ? (
        <div className="w-full h-[400px] flex flex-col items-center justify-center bg-surface-container rounded-3xl border border-outline-variant/20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-on-surface-variant font-medium">Memuat data galeri...</p>
        </div>
      ) : currentItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter min-h-[500px]">
          {currentItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300 gallery-card-hover h-fit cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={item.title} 
                  src={item.img}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder-gallery.svg'; }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-label-md text-label-md flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Lihat Detail
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className={`px-3 py-1 rounded-full font-label-md text-label-md ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-on-surface-variant font-label-md text-label-md">{item.date}</span>
                </div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-1">{item.title}</h3>
                {item.desc && (
                  <p className="text-on-surface-variant text-sm mt-1">{item.desc}</p>
                )}
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

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedItem(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-surface-container-lowest rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-[scaleIn_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              aria-label="Tutup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image — capped height so it doesn't dominate */}
            <div className="w-full max-h-[280px] md:max-h-[360px] overflow-hidden rounded-t-2xl">
              <img 
                src={selectedItem.img} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = '/images/placeholder-gallery.svg'; }}
              />
            </div>

            {/* Details */}
            <div className="p-5 md:p-7">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`px-4 py-1.5 rounded-full font-label-md text-label-md ${getCategoryColor(selectedItem.category)}`}>
                  {selectedItem.category}
                </span>
                <span className="text-on-surface-variant font-label-md text-label-md flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {selectedItem.date}
                </span>
              </div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-primary mb-3">{selectedItem.title}</h2>
              {selectedItem.desc && (
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {selectedItem.desc}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
