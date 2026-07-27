import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-margin-desktop max-w-container-max mx-auto text-left">
        
        {/* Brand & Info */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <div className="font-headline-lg text-3xl font-bold">
            TAMANGAPA BERAKSI
          </div>
          <p className="text-white/90 font-body-md leading-relaxed max-w-sm">
            Program KKN Tematik 116 Universitas Hasanuddin. Bersama Kelola Sampah, Bersama Jaga Iklim di Kelurahan Tamangapa, Kecamatan Manggala, Kota Makassar.
          </p>
        </div>

        {/* Pilar Utama Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-lg border-b border-white/20 pb-2 inline-block w-fit">Pilar Program</h4>
          <div className="flex flex-col gap-3">
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/">Beranda</Link>
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
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/olah/eco-enzym">Eco Enzym</Link>
            <Link className="text-white/80 hover:text-white transition-colors hover:translate-x-1 w-fit" href="/olah/eco-brick">Eco Brick</Link>
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
