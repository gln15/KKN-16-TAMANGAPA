'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOlahOpen, setIsOlahOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileOlahOpen, setIsMobileOlahOpen] = useState(false);

  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm sticky top-0 z-50 transition-all">
      <nav className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto relative">

        {/* Brand & Slogan */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/images/logo.png" alt="Logo Tamangapa Beraksi" className="h-10 md:h-12 w-auto rounded-md shadow-sm" />
          <div className="flex flex-col">
            <div className="font-headline-lg text-lg md:text-2xl font-bold text-primary">
              TAMANGAPA BERAKSI
            </div>
            <div className="hidden lg:block text-xs md:text-sm text-primary/70 font-semibold mt-0.5">
              Bersama Kelola Sampah, Bersama Jaga Iklim
            </div>
          </div>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

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
                  <Link className="px-4 py-2 text-sm hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" href="/olah/eco-enzym">Eco-enzyme</Link>
                  <Link className="px-4 py-2 text-sm hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" href="/olah/eco-brick">Ecobrick</Link>
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/20 shadow-xl flex flex-col py-6 px-8 gap-5 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg" href="/">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg" href="/kenali">Kenali (Pemetaan)</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg" href="/edukasi">Edukasi Lingkungan</Link>
          
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileOlahOpen(!isMobileOlahOpen)}
              className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg flex items-center justify-between py-2"
            >
              Olah Sampah
              <svg className={`w-6 h-6 transition-transform ${isMobileOlahOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isMobileOlahOpen && (
              <div className="flex flex-col pl-4 gap-4 mt-3 border-l-2 border-outline-variant/30">
                <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-medium text-base" href="/olah/eco-enzym">1. Eco-enzyme</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-medium text-base" href="/olah/eco-brick">2. Ecobrick</Link>
                <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-medium text-base" href="/olah/maggot">3. Maggot BSF</Link>
              </div>
            )}
          </div>
          
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg" href="/sehat">Lingkungan Sehat</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg" href="/mandiri">Masyarakat Mandiri</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant hover:text-primary transition-colors font-bold text-lg" href="/evaluasi">Galeri & Evaluasi</Link>
        </div>
      )}
    </header>
  );
}
