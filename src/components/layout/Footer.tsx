import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-margin-desktop max-w-container-max mx-auto text-left">
        
        {/* Brand & Info */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="Logo Tamangapa Beraksi" className="h-24 md:h-28 w-auto drop-shadow-sm" />
            <div className="font-headline-lg text-2xl md:text-3xl font-bold">
              TAMANGAPA BERAKSI
            </div>
          </div>
          <p className="text-white/90 font-body-md leading-relaxed max-w-sm">
            Program KKN Tematik 116 Universitas Hasanuddin. Bersama Kelola Sampah, Bersama Jaga Iklim di Kelurahan Tamangapa, Kecamatan Manggala, Kota Makassar.
          </p>
          <div className="flex flex-col gap-3 mt-2">
            <h4 className="font-bold text-lg border-b border-white/20 pb-2 inline-block w-fit">Kontak</h4>
            <div className="flex flex-col gap-2 text-white/80">
              <a href="https://instagram.com/tamangapa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@tamangapa</span>
              </a>
              <a href="https://facebook.com/KelurahanTamangapa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                  <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  <path fill="#fff" d="M16.671 15.542l.532-3.469h-3.328V9.82c0-.949.465-1.874 1.956-1.874h1.514V5.006s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.633H7.078v3.469h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796z"/>
                </svg>
                <span>Kelurahan Tamangapa</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pilar Utama Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg border-b border-white/20 pb-2 inline-block w-fit">Pilar Program</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/#profil-wilayah">Profil Wilayah</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/#tim-kami">Tim Kami</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/#berita">Berita</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/kenali">Kenali (Pemetaan)</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/edukasi">Edukasi Lingkungan</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/sehat">Lingkungan Sehat</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/mandiri">Masyarakat Mandiri</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/evaluasi">Galeri & Evaluasi</Link>
          </div>
        </div>

        {/* Program Olah Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg border-b border-white/20 pb-2 inline-block w-fit">Olah Sampah</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/olah/eco-enzym">Eco-enzyme</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/olah/eco-brick">Ecobrick</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/olah/maggot">Maggot BSF</Link>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="mt-12 pt-8 border-t border-white/20 px-margin-desktop max-w-container-max mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/70 text-sm">
          © 2026 Tim KKN Tematik 116 Universitas Hasanuddin. All rights reserved.
        </p>
        <p className="text-white/70 text-sm">
          Kelurahan Tamangapa, Makassar
        </p>
      </div>
    </footer>
  );
}
