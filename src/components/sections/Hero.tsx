'use client';
import { useState, useEffect } from 'react';

const ChevronLeft = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
const ChevronRight = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;

const slides = [
  {
    title: "Program KKN Tematik 116 Tamangapa",
    desc: "Mewujudkan lingkungan yang bersih dan mandiri melalui inovasi pengelolaan sampah berkelanjutan dari tingkat rumah tangga.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjOpvmdmORFu2FyJM-YgITDl3YUhjg4Mu80K2_LqETaaw3mMzMu_XDT-fCONaEhm_Op_1OO4L-cZ0ASSpH2bRHUH1OEuwicjbzITIbWxUJ_2WYlLedEgUkgiiyopYHKHvJp7a38PHtrlhQJEN3kGM2QCToHqsRp_riZ-Ud2kEQAum0UR1ierMXH_Waovkrv7uSDuiyYs7zHOqP1fXmmRzd74Esjay5pBTDEWLZ8or2arb37JgZpicX5VU7sj36DuktFR1vIDF01wdz"
  },
  {
    title: "Edukasi Pengelolaan Lingkungan",
    desc: "Memberikan pemahaman mendalam kepada masyarakat mengenai pentingnya memilah sampah dan menjaga kelestarian alam.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Inovasi Daur Ulang Mandiri",
    desc: "Mengubah limbah organik menjadi Eco Enzym dan Maggot, serta memanfaatkan plastik menjadi barang bernilai lewat Eco Brick.",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[450px] lg:h-[550px] overflow-hidden bg-surface group">
      
      {/* Sliding Track */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className="w-full h-full flex-shrink-0 relative"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-20 h-full max-w-container-max mx-auto px-16 lg:px-24 flex flex-col justify-center">
              <div className="max-w-3xl">
                <h1 className="font-headline-xl text-4xl lg:text-6xl text-white mb-6 font-bold leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="font-body-lg text-lg lg:text-2xl text-white/90 max-w-2xl drop-shadow-md">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
        aria-label="Previous Slide"
      >
        <ChevronLeft />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
        aria-label="Next Slide"
      >
        <ChevronRight />
      </button>

      {/* Navigation Dots (Smaller) */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 shadow-md ${
              idx === currentSlide ? 'bg-primary w-6' : 'bg-white/60 hover:bg-white w-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
