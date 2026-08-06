"use client";

import React from 'react';
import { AlertCircle, CheckCircle2, Info, Leaf, Recycle, AlertTriangle, Trash2, Sprout, Box, Landmark, Palette, Flame, Bug, FlaskConical, Trees } from 'lucide-react';

export default function Edukasi() {
  return (
    <div className="pt-4 pb-20 px-6 md:px-12 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
            Yuk, Kenali Sampah di Sekitar Kita!
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium">
            Panduan Sederhana Memilah dan Mengolah Sampah
          </p>
        </div>

        {/* Kenapa Harus Memilah Sampah */}
        <div className="bg-primary-container/20 rounded-[3rem] p-8 md:p-12 border border-primary/20 shadow-sm">
          <h2 className="text-3xl font-bold text-primary mb-6">Kenapa Harus Memilah Sampah?</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            Setiap hari, satu rumah tangga bisa menghasilkan 0,5–1 kg sampah. Kalau dikalikan seluruh warga, jumlahnya jadi sangat besar dan menumpuk di TPA (Tempat Pembuangan Akhir). Kalau semua sampah dicampur begitu saja, sampah yang sebenarnya bisa dimanfaatkan jadi ikut terbuang percuma. Padahal sampah organik butuh waktu berbulan-bulan untuk terurai, dan sampah plastik bisa butuh ratusan tahun.
          </p>
          <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
            <h3 className="text-xl font-bold text-on-surface mb-6">Dengan memilah sampah sejak dari rumah, kita bisa:</h3>
            <ul className="space-y-4">
              {[
                "Mengurangi tumpukan sampah di TPA",
                "Mengubah sampah jadi barang atau uang yang bermanfaat",
                "Mengurangi gas metana dari sampah organik yang membusuk (penyebab pemanasan global)",
                "Menjaga lingkungan tetap bersih dan sehat"
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* 1. Cara Mudah Memilah di Rumah */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-[3rem] shadow-xl border border-outline-variant/30 relative">
          <h2 className="text-3xl font-bold text-primary mb-8">1. Cara Mudah Memilah di Rumah</h2>
          <p className="text-lg text-on-surface-variant mb-6">
            Sediakan minimal 3 wadah/kantong terpisah sesuai anjuran Pemerintah Kota Makassar:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border border-green-500/30 bg-green-50/50 dark:bg-green-900/10 p-6 rounded-2xl flex flex-col gap-3">
              <h4 className="font-bold text-green-700 dark:text-green-400 text-lg border-b border-green-500/20 pb-2">Hijau / Basah (Organik)</h4>
              <ul className="text-on-surface-variant list-disc pl-5 space-y-1.5">
                <li>Sisa makanan (nasi, lauk pauk)</li>
                <li>Potongan sayur dan kulit buah</li>
                <li>Daun kering dan ranting kecil</li>
                <li>Tulang ikan atau ayam (ukuran kecil/lunak)</li>
                <li>Ampas kopi dan teh</li>
              </ul>
            </div>
            <div className="border border-yellow-500/30 bg-yellow-50/50 dark:bg-yellow-900/10 p-6 rounded-2xl flex flex-col gap-3">
              <h4 className="font-bold text-yellow-700 dark:text-yellow-400 text-lg border-b border-yellow-500/20 pb-2">Kuning / Kering (Anorganik)</h4>
              <ul className="text-on-surface-variant list-disc pl-5 space-y-1.5">
                <li>Botol dan gelas plastik minuman</li>
                <li>Kertas, koran, majalah, dan kardus</li>
                <li>Kaleng minuman atau makanan ringan</li>
                <li>Kemasan plastik yang bersih/tebal</li>
                <li>Botol kaca atau toples</li>
              </ul>
            </div>
            <div className="border border-gray-500/30 bg-gray-50/50 dark:bg-gray-900/10 p-6 rounded-2xl flex flex-col gap-3">
              <h4 className="font-bold text-gray-700 dark:text-gray-400 text-lg border-b border-gray-500/20 pb-2">Hitam / Abu-abu (Residu)</h4>
              <ul className="text-on-surface-variant list-disc pl-5 space-y-1.5">
                <li>Popok bayi dan pembalut</li>
                <li>Puntung rokok</li>
                <li>Styrofoam kotor / bekas makanan berminyak</li>
                <li>Plastik sachet atau kemasan <i>multilayer</i></li>
                <li>Tisu kotor atau kapas bekas pakai</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-2xl border border-red-200 dark:border-red-800/30 mb-10 flex gap-4 items-center">
            <Info className="w-8 h-8 text-red-600 flex-shrink-0" />
            <p className="text-red-900 dark:text-red-200">
              <strong>Sampah B3</strong> (baterai, lampu, obat kedaluwarsa, bahan kimia) disimpan terpisah, tidak dicampur ke tiga wadah di atas.
            </p>
          </div>

          <h4 className="font-bold text-xl text-on-surface mb-5">Tips Praktis:</h4>
          <ul className="space-y-4 mb-14">
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">✓</div>
              <span className="text-on-surface-variant text-lg pt-0.5">Bilas dulu botol atau kemasan yang masih ada sisa makanan sebelum dipilah, biar tidak bau dan tidak mengundang lalat/kecoa.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">✓</div>
              <span className="text-on-surface-variant text-lg pt-0.5">Lipat atau kecilkan kardus dan botol plastik supaya tidak makan tempat.</span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">✓</div>
              <span className="text-on-surface-variant text-lg pt-0.5">Sampah B3 jangan dicampur ke sampah biasa. Simpan terpisah dan serahkan ke tempat pengumpulan khusus (drop box baterai, puskesmas untuk obat, dll).</span>
            </li>
          </ul>

          {/* Aturan Baru Alert */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
              <AlertCircle className="w-80 h-80" />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <AlertCircle className="w-10 h-10 flex-shrink-0" />
                <h3 className="text-3xl md:text-4xl font-extrabold">Penting! Aturan Baru Mulai 1 Agustus 2026</h3>
              </div>
              <p className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
                Pemerintah Kota Makassar resmi menerapkan kebijakan baru: mulai 1 Agustus 2026, <span className="bg-white/20 px-2 py-1 rounded-lg">TPA Antang (Tamangapa) hanya menerima sampah residu.</span> Sampah organik dan anorganik tidak lagi boleh dibuang ke TPA. Harus diolah atau dipilah sejak dari rumah.
              </p>
              
              <div className="bg-black/10 backdrop-blur-md rounded-3xl p-6 md:p-8 mb-6 border border-white/20">
                <h4 className="font-bold text-xl mb-4 text-white">Yang perlu diketahui warga:</h4>
                <ul className="space-y-3 text-white/95 list-disc pl-5 text-lg">
                  <li>Kebijakan ini adalah bagian dari penghentian sistem <i>open dumping</i> menuju sistem <i>controlled landfill</i> yang lebih ramah lingkungan.</li>
                  <li>Sampah organik menyumbang porsi terbesar di TPA selama ini, dan jadi penyebab utama gas metana serta air lindi yang mencemari lingkungan.</li>
                  <li>Warga yang mengolah sampah organik jadi kompos atau budidaya maggot BSF bisa menjualnya ke Bank Sampah Pusat milik Pemerintah Kota Makassar.</li>
                  <li>Jika belum punya fasilitas pengolahan sendiri, sampah yang sudah dipilah bisa diserahkan ke kelurahan/kecamatan untuk diproses lebih lanjut.</li>
                </ul>
              </div>
              
              <div className="p-5 bg-white text-orange-900 rounded-2xl shadow-sm text-lg font-bold">
                Mulai sekarang hanya sampah residu yang boleh masuk kantong sampah yang diangkut ke TPA, sisanya wajib diolah, didaur ulang, atau disetor ke bank sampah.
              </div>
            </div>
          </div>
        </div>

        {/* 2. Alternatif Pengolahan Sampah */}
        <div>
          <h2 className="text-3xl font-bold text-on-surface mb-8">2. Alternatif Pengolahan Sampah</h2>
          <p className="text-lg text-on-surface-variant mb-10 max-w-4xl">
            Setelah dipilah, sampah tidak harus langsung dibuang. Ada beberapa cara mengolahnya sendiri di rumah atau di lingkungan RT/RW:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-green-600"><Sprout className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Kompos dari Sampah Organik</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sisa makanan dan sayur bisa diolah jadi pupuk kompos menggunakan komposter sederhana. Hasilnya bisa dipakai untuk pupuk tanaman.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-amber-600"><Box className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Ecobrick dari Sampah Plastik</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Plastik bekas yang tidak laku dijual bisa dipadatkan ke dalam botol plastik bekas sampai keras. Ecobrick ini bisa dirangkai jadi kursi atau meja.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-blue-600"><Landmark className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Bank Sampah</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sampah anorganik bernilai (botol, kardus, kaleng) disetor ke bank sampah, lalu ditimbang sebagai "tabungan". Bisa ditukar dengan uang tunai.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-purple-600"><Palette className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Daur Ulang Kreatif</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Botol bekas jadi pot bunga, kardus jadi tempat penyimpanan. Cocok jadi kegiatan kreatif bersama anak-anak di lingkungan.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-orange-600"><Flame className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Biogas Sampah Organik</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sampah organik dalam jumlah besar diolah jadi biogas untuk bahan bakar memasak. Cocok di tingkat kelurahan/kelompok tani.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-lime-600"><Bug className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Budidaya Maggot BSF</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Sisa organik jadi pakan maggot BSF. Maggot BSF dipanen sebagai pakan ikan bernilai jual tinggi, sisa medianya (kasgot) dipakai sebagai pupuk.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-teal-600"><FlaskConical className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Eco-enzyme dari Buah</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Kulit buah difermentasi bersama gula dan air selama 3 bulan. Hasilnya berupa cairan serbaguna untuk pembersih lantai dan penjernih air.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left text-green-600"><Trees className="w-12 h-12" /></div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Urban Farming</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Kompos dari sampah langsung dipakai menanam sayur di pot atau polybag. Membantu warga punya sayur segar sekaligus asri.
              </p>
            </div>

          </div>
        </div>

        {/* Penutup / Quote */}
        <div className="flex justify-center pt-8 pb-12">
          <div className="inline-block bg-tertiary text-on-tertiary px-8 py-4 rounded-full shadow-xl font-bold text-xl md:text-2xl transform hover:scale-105 transition-transform text-center">
            Perubahan besar dimulai dari kebiasaan kecil di rumah!
          </div>
        </div>

      </div>
    </div>
  );
}
