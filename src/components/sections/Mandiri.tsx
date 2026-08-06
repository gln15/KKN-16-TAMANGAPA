"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Handshake,
  Zap,
  Target,
  Gem,
  HeartHandshake,
  Users,
  Package,
  Megaphone,
  Wallet,
  Coins,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const bmcElements = [
  {
    number: "01",
    title: "Customer Segments",
    subtitle: "Target Pelanggan",
    icon: Users,
    question: "Siapa yang akan membeli produk kita?",
    description: "Customer Segments merupakan kelompok orang yang akan menjadi sasaran penjualan produk atau jasa. Menentukan target pelanggan sangat penting agar produk yang dibuat sesuai dengan kebutuhan masyarakat.",
    items: [
      "Rumah tangga di sekitar kelurahan.",
      "Sekolah dan kampus.",
      "Bank sampah.",
      "UMKM dan warung makan.",
      "Komunitas peduli lingkungan."
    ],
  },
  {
    number: "02",
    title: "Value Proposition",
    subtitle: "Nilai Yang Ditawarkan",
    icon: Gem,
    question: "Apa keunggulan produk yang kita tawarkan?",
    description: "Value Proposition adalah keunggulan atau manfaat yang diberikan kepada pelanggan sehingga mereka tertarik menggunakan produk atau jasa tersebut.",
    items: [
      "Produk ramah lingkungan.",
      "Mengurangi pencemaran akibat sampah.",
      "Menghasilkan produk bermanfaat dari limbah.",
      "Harga terjangkau dengan kualitas baik."
    ],
  },
  {
    number: "03",
    title: "Channels",
    subtitle: "Saluran Pemasaran",
    icon: Megaphone,
    question: "Bagaimana produk sampai ke pelanggan?",
    description: "Channels merupakan cara usaha menyampaikan produk kepada pelanggan, baik secara langsung maupun melalui platform digital.",
    items: [
      "Penjualan langsung kepada masyarakat.",
      "Media sosial dan WhatsApp.",
      "Marketplace online.",
      "Pameran atau bazar UMKM.",
      "Kerja sama dengan sekolah maupun instansi."
    ],
  },
  {
    number: "04",
    title: "Customer Relationship",
    subtitle: "Hubungan Dengan Pelanggan",
    icon: HeartHandshake,
    question: "Bagaimana menjaga loyalitas pelanggan?",
    description: "Hubungan yang baik dengan pelanggan membuat mereka kembali membeli produk dan merekomendasikannya kepada orang lain.",
    items: [
      "Memberikan pelayanan yang ramah.",
      "Menjaga kualitas produk secara konsisten.",
      "Merespons pertanyaan pelanggan dengan cepat.",
      "Memberikan promo atau hadiah pada momen tertentu."
    ],
  },
  {
    number: "05",
    title: "Revenue Streams",
    subtitle: "Sumber Pendapatan",
    icon: Coins,
    question: "Dari mana saja usaha memperoleh uang?",
    description: "Revenue Streams merupakan semua sumber pemasukan yang diperoleh dari usaha. Semakin beragam sumber pendapatan, semakin baik ketahanan usaha.",
    items: [
      "Penjualan produk hasil daur ulang.",
      "Penjualan minyak jelantah kepada mitra pengolah.",
      "Penjualan pupuk atau Eco-enzyme.",
      "Pelatihan pengelolaan sampah."
    ],
  },
  {
    number: "06",
    title: "Key Resources",
    subtitle: "Sumber Daya Utama",
    icon: Package,
    question: "Apa saja yang dibutuhkan agar usaha berjalan?",
    description: "Sumber daya utama adalah semua hal yang dibutuhkan agar usaha dapat berjalan, mulai dari peralatan hingga kemampuan sumber daya manusia.",
    items: [
      "Peralatan produksi.",
      "Bahan baku sampah.",
      "Tempat produksi.",
      "Tenaga kerja terampil.",
      "Pengetahuan dan keterampilan."
    ],
  },
  {
    number: "07",
    title: "Key Activities",
    subtitle: "Aktivitas Utama",
    icon: Zap,
    question: "Kegiatan apa saja yang harus dilakukan?",
    description: "Aktivitas utama adalah kegiatan yang harus dilakukan agar usaha tetap berjalan dan menghasilkan produk berkualitas.",
    items: [
      "Mengumpulkan sampah dari warga.",
      "Memilah sampah berdasarkan jenis.",
      "Mengolah sampah menjadi produk.",
      "Mengemas dan memasarkan produk.",
      "Melayani pelanggan."
    ],
  },
  {
    number: "08",
    title: "Key Partners",
    subtitle: "Mitra Utama",
    icon: Handshake,
    question: "Siapa saja yang membantu usaha ini?",
    description: "Mitra membantu usaha agar dapat berkembang dengan lebih mudah. Kerja sama yang baik dapat memperluas pemasaran sekaligus memperkuat keberlangsungan usaha.",
    items: [
      "Pemerintah kelurahan.",
      "Bank sampah.",
      "Pengepul.",
      "Vendor pembeli minyak jelantah.",
      "UMKM, sekolah, dan komunitas lingkungan."
    ],
  },
  {
    number: "09",
    title: "Cost Structure",
    subtitle: "Struktur Biaya",
    icon: Wallet,
    question: "Biaya apa saja yang harus dikeluarkan?",
    description: "Cost Structure merupakan seluruh biaya yang dikeluarkan untuk menjalankan usaha. Dengan mengetahui seluruh biaya, pelaku usaha dapat menentukan harga jual yang tepat sehingga usaha tetap memperoleh keuntungan.",
    items: [
      "Pembelian peralatan.",
      "Transportasi.",
      "Kemasan produk.",
      "Listrik dan air.",
      "Promosi dan biaya operasional lainnya."
    ],
  },
];

export default function Mandiri() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = bmcElements.length;

  const goTo = useCallback((index: number, dir: 'left' | 'right') => {
    setDirection(dir);
    setActive(index);
  }, []);

  const goPrev = useCallback(() => {
    goTo(active === 0 ? total - 1 : active - 1, 'left');
  }, [active, total, goTo]);

  const goNext = useCallback(() => {
    goTo(active === total - 1 ? 0 : active + 1, 'right');
  }, [active, total, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goPrev, goNext]);

  // Touch / swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  // Helper to get relative position
  const getOffset = (index: number) => {
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="pt-4 pb-24 px-6 md:px-12 bg-surface min-h-screen relative z-0">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[5%] left-[-5%] w-[35%] h-[35%] bg-primary/8 rounded-full blur-[140px]"></div>
        <div className="absolute top-[50%] right-[-8%] w-[30%] h-[30%] bg-secondary/6 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-[5%] left-[20%] w-[25%] h-[25%] bg-primary-container/8 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* ═══ HERO SECTION ═══ */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-8 mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight">
            Merancang <span className="text-primary">Usaha Mandiri</span> dari Pengelolaan Sampah
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
            Dengan pendekatan <strong>Business Model Canvas (BMC)</strong>, masyarakat Kelurahan Tamangapa diajak melihat sampah bukan sebagai limbah, melainkan sebagai bahan baku usaha yang menghasilkan nilai ekonomi nyata.
          </p>
        </div>

        {/* ═══ WHAT & WHY BMC ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
          <div className="bg-surface-container-lowest/70 backdrop-blur-[10px] p-8 md:p-10 rounded-[2rem] border border-outline-variant/30 shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.12)] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Apa itu BMC?</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Business Model Canvas (BMC) adalah alat sederhana yang digunakan untuk merancang dan memahami bagaimana suatu usaha dapat berjalan, memperoleh pelanggan, menghasilkan pendapatan, serta mengelola biaya.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              BMC terdiri dari <strong className="text-on-surface">sembilan bagian</strong> yang saling berhubungan dan membantu pelaku usaha melihat gambaran bisnis secara menyeluruh.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Dalam KKN ini, BMC diperkenalkan kepada masyarakat sebagai panduan mengembangkan usaha berbasis pengelolaan sampah.
            </p>
          </div>

          <div className="bg-primary-container/10 backdrop-blur-[10px] p-8 md:p-10 rounded-[2rem] border border-primary/15 shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.12)] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Mengapa BMC Penting?</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Banyak usaha kecil berhenti berkembang karena hanya berfokus pada penjualan tanpa perencanaan yang jelas. Melalui BMC, pelaku usaha dapat:
            </p>
            <ul className="space-y-4">
              {[
                "Mengetahui siapa target konsumennya.",
                "Menentukan produk atau layanan yang ditawarkan.",
                "Mengetahui cara memasarkan produk.",
                "Menghitung sumber pendapatan dan biaya.",
                "Menjalin kerja sama dengan pihak pendukung."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ═══ CAROUSEL SECTION ═══ */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-5 py-2 rounded-full mb-5 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              9 Elemen Penting
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
              Peta Lengkap Model Bisnis
            </h2>
            <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
              Geser ke kiri atau kanan untuk menjelajahi setiap elemen BMC.
            </p>
          </div>

          {/* Carousel Container */}
          <div
            className="relative w-full overflow-hidden select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ minHeight: '520px' }}
          >
            {/* Cards */}
            <div className="relative w-full h-[520px] flex items-center justify-center">
              {bmcElements.map((el, index) => {
                const Icon = el.icon;
                const offset = getOffset(index);
                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 2;

                if (!isVisible) return null;

                // Position, scale, opacity, z-index based on offset
                const translateX = offset * 340; // px spacing between cards
                const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.7;
                const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.5 : 0.2;
                const zIndex = isActive ? 30 : Math.abs(offset) === 1 ? 20 : 10;

                return (
                  <div
                    key={index}
                    className="absolute w-[90%] max-w-[420px] cursor-pointer"
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      zIndex,
                      transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: isActive ? 'auto' : 'none',
                    }}
                    onClick={() => {
                      if (offset > 0) goTo(index, 'right');
                      if (offset < 0) goTo(index, 'left');
                    }}
                  >
                    <div className={`
                      rounded-[2rem] overflow-hidden flex flex-col
                      bg-surface-container-lowest backdrop-blur-[10px]
                      border-2 transition-colors duration-500
                      ${isActive ? 'border-primary/30 shadow-[0px_12px_40px_rgba(15,82,56,0.15)]' : 'border-outline-variant/20 shadow-[0px_4px_20px_rgba(44,62,80,0.06)]'}
                    `}>
                      {/* Top Accent Bar */}
                      <div className={`h-2 w-full transition-colors duration-500 ${isActive ? 'bg-primary' : 'bg-outline-variant/40'}`}></div>

                      <div className="p-8 flex flex-col">
                        {/* Number + Icon Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-primary text-on-primary scale-100' : 'bg-primary/10 text-primary scale-90'}`}>
                              <Icon className="w-7 h-7" />
                            </div>
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-widest text-primary/60 mb-0.5">{el.subtitle}</p>
                              <h3 className="text-xl font-bold text-on-surface leading-snug">{el.title}</h3>
                            </div>
                          </div>
                          <span className="text-5xl font-black text-on-surface/[0.06] leading-none">{el.number}</span>
                        </div>

                        {/* Question */}
                        <div className="bg-primary/5 border border-primary/10 rounded-xl px-5 py-3 mb-6">
                          <p className="text-sm font-semibold text-primary italic">
                            &ldquo;{el.question}&rdquo;
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                          {el.description}
                        </p>

                        {/* Items */}
                        <ul className="space-y-3">
                          {el.items.map((item, ii) => (
                            <li key={ii} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-nature-leaf flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-on-surface leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goPrev}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-container-lowest border-2 border-outline-variant/30 shadow-[0px_4px_20px_rgba(44,62,80,0.12)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:shadow-[0px_8px_30px_rgba(15,82,56,0.15)] transition-all active:scale-90 cursor-pointer"
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-surface-container-lowest border-2 border-outline-variant/30 shadow-[0px_4px_20px_rgba(44,62,80,0.12)] flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:shadow-[0px_8px_30px_rgba(15,82,56,0.15)] transition-all active:scale-90 cursor-pointer"
              aria-label="Slide berikutnya"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {bmcElements.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index, index > active ? 'right' : 'left')}
                className={`
                  rounded-full transition-all duration-300 cursor-pointer
                  ${index === active
                    ? 'w-8 h-3 bg-primary'
                    : 'w-3 h-3 bg-outline-variant/40 hover:bg-outline-variant/70'
                  }
                `}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Current Slide Label */}
          <p className="text-center text-sm text-on-surface-variant/60 mt-4 font-medium">
            {active + 1} / {total}
          </p>
        </div>

        {/* ═══ CLOSING CTA ═══ */}
        <div className="bg-primary-container/15 backdrop-blur-[10px] rounded-[2rem] p-8 md:p-12 border border-primary/15 text-center max-w-4xl mx-auto shadow-[0px_4px_20px_rgba(44,62,80,0.08)]">
          <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface mb-4">
            Dari Limbah Menjadi Peluang Usaha
          </h3>
          <p className="text-on-surface-variant leading-relaxed max-w-2xl mx-auto text-lg">
            Dengan memahami dan menerapkan kesembilan elemen BMC di atas, masyarakat Kelurahan Tamangapa dapat membangun usaha pengelolaan sampah yang <strong className="text-primary">mandiri, berkelanjutan, dan menguntungkan</strong>. Usaha menjadi lebih terarah, efisien, dan memiliki peluang berkembang yang lebih besar.
          </p>
        </div>

      </div>
    </div>
  );
}
