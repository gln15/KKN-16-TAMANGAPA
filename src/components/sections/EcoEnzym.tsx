"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Droplets, HeartPulse, Sprout } from "lucide-react";

export default function EcoEnzym() {
  const [containerVolume, setContainerVolume] = useState<number | "">("");

  const volume = Number(containerVolume) || 0;
  const waterLiters = volume > 0 ? (volume * 0.6).toFixed(2) : "0";
  const sugarGrams = volume > 0 ? (volume * 60).toFixed(0) : "0";
  const organicGrams = volume > 0 ? (volume * 180).toFixed(0) : "0";

  return (
    <section className="pt-0 pb-24 px-6 md:px-12 bg-surface" id="eco-enzym">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface">
            Apa itu <span className="text-primary">Eco-Enzyme</span>?
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Eco-enzyme merupakan cairan serbaguna hasil fermentasi kulit buah/sayuran, gula, dan air selama 3 bulan atau lebih, yang dapat digunakan untuk berbagai keperluan rumah tangga dan lingkungan.
          </p>
        </div>

        {/* Sampah Dapur yang Ada di Rumah */}
        <div>
          <h2 className="text-3xl font-bold text-on-surface text-center mb-10">Sampah Dapur yang Ada di Rumah</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-[2.5rem] p-8 border border-green-200 dark:border-green-800 shadow-sm h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 bg-green-100 dark:bg-green-800/50 p-4 rounded-xl mx-auto w-full sm:w-fit text-center">
                <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 flex-shrink-0" />
                <h3 className="text-lg md:text-xl font-bold text-green-800 dark:text-green-300">Bisa Dibuat Eco-Enzyme</h3>
              </div>
              <p className="text-green-900 dark:text-green-100 mb-6 font-semibold text-center">Limbah buah dan sayuran yang masih segar, seperti:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Kulit buah jeruk", "Lemon", "Bonggol nanas", "Mangga", "Apel", "Pir", "Semangka", "Melon", "Pisang", "Pepaya", "Buah naga", "Salak", "Anggur", "Sayuran", "Kulit wortel", "Kentang", "Mentimun", "Kol", "Sawi", "Sereh", "Selada"].map(item => (
                  <span key={item} className="px-4 py-2 bg-green-200 dark:bg-green-800/50 text-green-900 dark:text-green-100 rounded-full text-sm font-medium">{item}</span>
                ))}
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-[2.5rem] p-8 border border-red-200 dark:border-red-800 shadow-sm h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 bg-red-100 dark:bg-red-800/50 p-4 rounded-xl mx-auto w-full sm:w-fit text-center">
                <XCircle className="w-6 h-6 text-red-700 dark:text-red-400 flex-shrink-0" />
                <h3 className="text-lg md:text-xl font-bold text-red-800 dark:text-red-300">Tidak Bisa Dibuat Eco-Enzyme</h3>
              </div>
              <ul className="space-y-4 px-2 mt-4">
                <li className="flex items-start gap-3 text-red-900 dark:text-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Daging, Ikan, Udang, Telur, Susu, Keju, dan olahan hewani lainnya.</span>
                </li>
                <li className="flex items-start gap-3 text-red-900 dark:text-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Kulit buah yang banyak mengandung minyak atau keras (misalnya alpukat dan durian).</span>
                </li>
                <li className="flex items-start gap-3 text-red-900 dark:text-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Makanan yang sudah dimasak.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Kalkulator Card */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[3rem] shadow-xl border border-outline-variant/30 relative overflow-hidden">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Cara Pembuatan</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Kalkulator Kolom */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">
              <div className="bg-primary-container/20 p-8 rounded-3xl border border-primary/20 h-full flex flex-col justify-center">
                <h4 className="font-bold text-2xl mb-6 text-primary text-center">Kalkulator Perbandingan 1 : 3 : 10</h4>
                <div className="flex flex-col gap-3 mb-8">
                  <label htmlFor="volume" className="text-sm font-bold text-on-surface-variant uppercase">Kapasitas Wadah Anda (Liter)</label>
                  <div className="relative">
                    <input
                      id="volume"
                      type="number"
                      min="0"
                      step="any"
                      value={containerVolume}
                      onChange={(e) => setContainerVolume(e.target.value === "" ? "" : Number(e.target.value))}
                      className="w-full p-5 text-xl font-bold rounded-2xl border-2 border-outline-variant bg-surface focus:outline-none focus:border-primary text-on-surface shadow-inner"
                      placeholder="Ketik kapasitas wadah..."
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant/50 font-bold">LITER</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 text-center shadow-sm">
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase block mb-1">1 Bagian</span>
                    <span className="text-sm font-bold text-amber-800 dark:text-amber-400 block mb-2">Gula / Molase</span>
                    <div className="text-3xl font-black text-amber-900 dark:text-amber-300">{sugarGrams}<span className="text-sm ml-1">g</span></div>
                  </div>
                  <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 text-center shadow-sm">
                    <span className="text-xs font-bold text-green-700 dark:text-green-500 uppercase block mb-1">3 Bagian</span>
                    <span className="text-sm font-bold text-green-800 dark:text-green-400 block mb-2">Sampah Organik</span>
                    <div className="text-3xl font-black text-green-900 dark:text-green-300">{organicGrams}<span className="text-sm ml-1">g</span></div>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 text-center shadow-sm">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-500 uppercase block mb-1">10 Bagian</span>
                    <span className="text-sm font-bold text-blue-800 dark:text-blue-400 block mb-2">Air Bersih</span>
                    <div className="text-3xl font-black text-blue-900 dark:text-blue-300">{waterLiters}<span className="text-sm ml-1">L</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Langkah-langkah Kolom */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
              <h4 className="font-bold text-2xl mb-8 text-on-surface">Langkah-langkah:</h4>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">1</div>
                  <p className="text-on-surface-variant pt-2 text-lg">Wadah dan bahan disiapkan.</p>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">2</div>
                  <p className="text-on-surface-variant pt-2 text-lg">Sampah kulit buah dipotong kecil.</p>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">3</div>
                  <p className="text-on-surface-variant pt-2 text-lg">Masukkan air bersih ke dalam wadah sesuai takaran.</p>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">4</div>
                  <p className="text-on-surface-variant pt-2 text-lg">Masukkan kulit buah ke dalam wadah sesuai takaran.</p>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">5</div>
                  <p className="text-on-surface-variant pt-2 text-lg">Masukkan gula/molase sesuai takaran.</p>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">6</div>
                  <p className="text-on-surface-variant pt-2 text-lg">Aduk hingga merata lalu tutup wadah.</p>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">7</div>
                  <p className="text-on-surface-variant pt-1 text-lg">Beri label tanggal pembuatan dan diamkan selama <strong>3 bulan atau lebih</strong>.</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Cara Penggunaan */}
        <div>
          <h2 className="text-3xl font-bold text-on-surface text-center mb-10">Cara Penggunaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-[2.5rem] border border-blue-200 dark:border-blue-800 shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800/50 rounded-2xl flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">1. Untuk Mencuci</h3>
              <p className="text-blue-800/80 dark:text-blue-200/80 mb-6 flex-grow">
                Digunakan untuk cuci tangan, cuci lantai, cuci piring, dan pembersih perabot.
              </p>
              <div className="bg-blue-100/50 dark:bg-blue-800/30 p-4 rounded-2xl w-full">
                <p className="font-bold text-blue-900 dark:text-blue-200 mb-2">Perbandingan 1:5 atau 1:10</p>
                <p className="text-sm text-blue-800/90 dark:text-blue-200/90">
                  Eco-enzyme 100ml + Sabun 100ml + Air 500–1000ml
                </p>
              </div>
            </div>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-8 rounded-[2.5rem] border border-rose-200 dark:border-rose-800 shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-800/50 rounded-2xl flex items-center justify-center mb-6">
                <HeartPulse className="w-8 h-8 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-rose-900 dark:text-rose-100 mb-4">2. Luka Ringan & Toilet</h3>
              <p className="text-rose-800/80 dark:text-rose-200/80 mb-6 flex-grow">
                Sebagai obat luka gores dan bisul, pembersih lantai kamar mandi, dan anti toilet tersumbat.
              </p>
              <div className="bg-rose-100/50 dark:bg-rose-800/30 p-4 rounded-2xl w-full">
                <p className="font-bold text-rose-900 dark:text-rose-200 mb-2">Gunakan Secara Murni</p>
                <p className="text-xs text-rose-800/90 dark:text-rose-200/90 italic">
                  *Jangan digunakan langsung pada luka terbuka. Untuk kamar mandi diamkan beberapa menit sebelum digosok/dibilas.
                </p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-[2.5rem] border border-green-200 dark:border-green-800 shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-800/50 rounded-2xl flex items-center justify-center mb-6">
                <Sprout className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4">3. Tanaman & Pengharum</h3>
              <p className="text-green-800/80 dark:text-green-200/80 mb-6 flex-grow">
                Sebagai pupuk organik, pembersih udara, penghilang bau, dan hand sanitizer.
              </p>
              <div className="bg-green-100/50 dark:bg-green-800/30 p-4 rounded-2xl w-full flex flex-col gap-3">
                <div>
                  <p className="font-bold text-green-900 dark:text-green-200 text-sm">Pupuk / Anti Bau (1:1000)</p>
                  <p className="text-xs text-green-800/90 dark:text-green-200/90">1 ml Eco-enzyme : 1 Liter Air</p>
                </div>
                <div className="w-full h-px bg-green-200/50 dark:bg-green-700/50"></div>
                <div>
                  <p className="font-bold text-green-900 dark:text-green-200 text-sm">Hand Sanitizer (1:400)</p>
                  <p className="text-xs text-green-800/90 dark:text-green-200/90">1 ml Eco-enzyme : 400 ml Air</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
