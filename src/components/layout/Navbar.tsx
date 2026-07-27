'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOlahOpen, setIsOlahOpen] = useState(false);

  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm sticky top-0 z-50 transition-all">
      <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto">
        
        {/* Brand & Slogan */}
        <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
          <div className="font-headline-lg text-2xl font-bold text-primary">
            TAMANGAPA BERAKSI
          </div>
          <div className="hidden lg:block text-sm text-primary/70 font-semibold mt-1">
            Bersama Kelola Sampah, Bersama Jaga Iklim
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 items-center">
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-bold text-label-md" href="/">Home</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-bold text-label-md" href="/kenali">Kenali</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-bold text-label-md" href="/edukasi">Edukasi</Link>
          
          {/* Dropdown Olah */}
          <div 
            className="relative"
            onMouseEnter={() => setIsOlahOpen(true)}
            onMouseLeave={() => setIsOlahOpen(false)}
          >
            <button className="text-on-surface-variant hover:text-primary transition-colors font-bold text-label-md flex items-center gap-1 py-2">
              Olah
              <svg className={`w-4 h-4 transition-transform ${isOlahOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOlahOpen && (
              <div className="absolute top-full left-0 pt-2 w-48 z-50">
                <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl shadow-lg py-2 flex flex-col">
                  <Link className="px-4 py-2 text-sm hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" href="/olah/eco-enzym">Eco Enzym</Link>
                  <Link className="px-4 py-2 text-sm hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" href="/olah/eco-brick">Eco Brick</Link>
                  <Link className="px-4 py-2 text-sm hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" href="/olah/maggot">Maggot BSF</Link>
                </div>
              </div>
            )}
          </div>
          
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-bold text-label-md" href="/sehat">Sehat</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-bold text-label-md" href="/mandiri">Mandiri</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors font-bold text-label-md" href="/evaluasi">Evaluasi</Link>
        </div>
      </nav>
    </header>
  );
}
