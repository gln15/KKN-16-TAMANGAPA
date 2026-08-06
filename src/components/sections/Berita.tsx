"use client";

import React from 'react';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';

const allBerita = [
  {
    id: 1,
    title: "Mahasiswa KKN Tematik Perubahan Iklim Unhas Luncurkan Program Tamangapa Beraksi Olah",
    date: "27 Juli 2026",
    summary: "Mahasiswa KKN-T Perubahan Iklim Gelombang 116 Unhas melaksanakan program kerja \"Tamangapa Beraksi Olah: Sosialisasi dan Implementasi Pengolahan Sampah\" sebagai upaya meningkatkan kapasitas masyarakat dalam mengelola sampah rumah tangga secara berkelanjutan di tiga wilayah Kelurahan Tamangapa.",
    link: "https://www.ujungjari.com/2026/07/27/mahasiswa-kkn-tematik-perubahan-iklim-unhas-luncurkan-program-tamangapa-beraksi-olah/",
  },
  {
    id: 2,
    title: "Mahasiswa KKN Unhas di Manggala Fokus Edukasi PHBS dan Pemilahan Sampah",
    date: "20 Juli 2026",
    summary: "Mahasiswa KKN-T Perubahan Iklim Gelombang 116 Unhas menggelar program kerja \"Tamangapa Beraksi Sehat: Door to Door Edukasi PHBS dan Pemilahan Sampah\" di RT 7 RW 4, Kelurahan Tamangapa, Kecamatan Manggala, untuk meningkatkan kesadaran warga mengenai pemilahan sampah rumah tangga serta Perilaku Hidup Bersih dan Sehat.",
    link: "https://www.ujungjari.com/2026/07/20/mahasiswa-kkn-unhas-di-manggala-edukasi-phbs-dan-pemilahan-sampah/",
  },
];

export default function Berita() {
  return (
    <section id="berita" className="py-20 px-6 md:px-12 bg-surface scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-5 py-2 rounded-full mb-5 uppercase tracking-wider">
            <Newspaper className="w-4 h-4" />
            Informasi Terkini
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight">
            Berita & Kegiatan
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg">
            Pantau perkembangan kegiatan KKN 116 di Kelurahan Tamangapa.
          </p>
        </div>

        {/* Berita List */}
        <div className="flex flex-col gap-4">
          {allBerita.map((berita, index) => (
            <a
              key={berita.id}
              href={berita.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group bg-surface-container-lowest/80 backdrop-blur-[10px]
                border border-outline-variant/25 rounded-2xl
                p-6 md:p-8
                shadow-[0px_4px_20px_rgba(44,62,80,0.05)]
                hover:shadow-[0px_8px_30px_rgba(15,82,56,0.1)]
                hover:border-primary/20
                hover:-translate-y-0.5
                transition-all duration-300
                cursor-pointer
                block
              "
            >
              <div className="flex items-start gap-5">
                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-on-surface-variant/50" />
                    <span className="text-xs text-on-surface-variant/60 font-medium">{berita.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                    {berita.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {berita.summary}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 mt-1">
                  <ExternalLink className="w-5 h-5 text-on-surface-variant/30 group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
