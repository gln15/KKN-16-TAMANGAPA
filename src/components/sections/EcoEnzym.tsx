"use client";

import { useState } from "react";

export default function EcoEnzym() {
  const [containerVolume, setContainerVolume] = useState<number | "">("");

  const volume = Number(containerVolume) || 0;
  const waterLiters = volume > 0 ? (volume * 0.6).toFixed(2) : "0";
  const sugarGrams = volume > 0 ? (volume * 60).toFixed(0) : "0";
  const organicGrams = volume > 0 ? (volume * 180).toFixed(0) : "0";

  return (
    <section className="py-24 px-6 md:px-12 bg-surface" id="eco-enzym">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-16 text-center md:text-left">
          <div className="w-20 h-20 rounded-3xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-lg shadow-primary/20 transform hover:scale-105 transition-all duration-300">
            <span className="font-bold text-3xl">EE</span>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-3">
              Produksi Eco-Enzyme
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl">
              Cairan ajaib serbaguna hasil fermentasi limbah organik dapur Anda. Solusi alami untuk lingkungan yang lebih bersih dan sehat.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kalkulator Card */}
          <div className="lg:col-span-3 bg-surface-container-lowest p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-outline-variant/30 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-500"></div>
            
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Kalkulator Kebutuhan Bahan
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 flex flex-col justify-center gap-3">
                <label htmlFor="volume" className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                  Kapasitas Wadah (Liter)
                </label>
                <div className="relative">
                  <input
                    id="volume"
                    type="number"
                    min="0"
                    step="any"
                    value={containerVolume}
                    onChange={(e) => setContainerVolume(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-full p-5 text-2xl font-bold rounded-2xl border-2 border-outline-variant bg-surface focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-on-surface"
                    placeholder="Contoh: 10"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant/50 font-bold">
                    LITER
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant/80 mt-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                  Air otomatis dihitung 60% dari kapasitas wadah agar tersisa ruang untuk gas fermentasi.
                </p>
              </div>

              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">Air Bersih</span>
                  <div className="text-5xl font-black text-blue-700 dark:text-blue-300 drop-shadow-sm">
                    {waterLiters}
                  </div>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-2 bg-blue-100 dark:bg-blue-800 px-3 py-1 rounded-full">Liter</span>
                </div>
                <div className="p-6 rounded-3xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-500 mb-2 uppercase tracking-wide">Gula Merah / Molase</span>
                  <div className="text-5xl font-black text-amber-800 dark:text-amber-400 drop-shadow-sm">
                    {sugarGrams}
                  </div>
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-500 mt-2 bg-amber-100 dark:bg-amber-800 px-3 py-1 rounded-full">Gram</span>
                </div>
                <div className="p-6 rounded-3xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm">
                  <span className="text-sm font-bold text-green-700 dark:text-green-500 mb-2 uppercase tracking-wide">Bahan Organik</span>
                  <div className="text-5xl font-black text-green-800 dark:text-green-400 drop-shadow-sm">
                    {organicGrams}
                  </div>
                  <span className="text-sm font-bold text-green-700 dark:text-green-500 mt-2 bg-green-100 dark:bg-green-800 px-3 py-1 rounded-full">Gram</span>
                </div>
              </div>
            </div>
          </div>

          {/* Materials Section */}
          <div className="lg:col-span-1 bg-surface-container-lowest p-8 rounded-3xl shadow-md border border-outline-variant/30 flex flex-col gap-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Komposisi Standar
            </h3>
            
            <div className="overflow-hidden rounded-2xl border border-outline-variant/30">
              <table className="w-full text-left bg-surface">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="p-4 text-sm font-bold text-primary uppercase tracking-wider">Bahan</th>
                    <th className="p-4 text-sm font-bold text-primary uppercase tracking-wider text-right">Rasio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-medium text-on-surface">Gula Merah / Molase</td>
                    <td className="p-4 font-bold text-primary text-right">1 Bagian</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-medium text-on-surface">Sisa Buah & Sayur</td>
                    <td className="p-4 font-bold text-primary text-right">3 Bagian</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-medium text-on-surface">Air</td>
                    <td className="p-4 font-bold text-primary text-right">10 Bagian</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-2 text-sm text-on-surface-variant flex flex-col gap-2 bg-surface-container p-4 rounded-xl">
              <p className="font-semibold text-primary">Proses Pembuatan:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Campurkan air dan gula ke dalam wadah tertutup rapat.</li>
                <li>Masukkan sisa buah/sayuran.</li>
                <li>Simpan selama 3 bulan di tempat teduh.</li>
                <li>Buka tutup setiap hari pada 1 bulan pertama.</li>
              </ul>
            </div>
          </div>

          {/* Usage & Dosage */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-3xl shadow-md border border-outline-variant/30 flex flex-col hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Manfaat & Cara Penggunaan
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              <div className="p-6 rounded-2xl bg-surface hover:bg-surface-container-low border border-outline-variant/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-on-surface mb-2">Pembersih Lantai</h4>
                <p className="text-on-surface-variant text-sm">Campurkan 10ml Eco-Enzyme dengan 1 Liter air untuk mengepel lantai secara alami dan mengusir serangga.</p>
              </div>
              
              <div className="p-6 rounded-2xl bg-surface hover:bg-surface-container-low border border-outline-variant/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-on-surface mb-2">Pembersih Udara</h4>
                <p className="text-on-surface-variant text-sm">Campurkan dengan perbandingan 1:1000. Semprotkan ke ruangan untuk menghilangkan bau dan membunuh bakteri.</p>
              </div>

              <div className="p-6 rounded-2xl bg-surface hover:bg-surface-container-low border border-outline-variant/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-on-surface mb-2">Pupuk Tanaman</h4>
                <p className="text-on-surface-variant text-sm">Gunakan rasio 1:1000. Siramkan pada tanaman hias atau kebun dua kali seminggu untuk kesuburan alami.</p>
              </div>

              <div className="p-6 rounded-2xl bg-surface hover:bg-surface-container-low border border-outline-variant/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-on-surface mb-2">Pembersih Saluran Air</h4>
                <p className="text-on-surface-variant text-sm">Gunakan cairan murni tanpa dicampur air. Tuang langsung ke saluran air, wastafel, atau kloset untuk mencegah sumbatan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
