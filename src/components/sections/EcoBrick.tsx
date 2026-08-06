"use client";

import React from 'react';
import { Box, Wrench, Droplets, Scissors, Layers, Hammer, Scale, Sofa, Home, BookOpen } from 'lucide-react';

export default function EcoBrick() {
  return (
    <section className="pt-4 pb-24 px-6 md:px-12 bg-surface min-h-screen" id="eco-brick">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Box className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
            Panduan Membuat Ecobrick
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
            Mengubah sampah plastik menjadi bata ramah lingkungan
          </p>
        </div>

        {/* What is Ecobrick */}
        <div className="bg-secondary-container/20 rounded-[3rem] p-8 md:p-12 border border-secondary/20 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-5">
            <Box className="w-64 h-64" />
          </div>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed relative z-10">
            <strong className="text-secondary font-bold">Ecobrick</strong> (gabungan dari <i>eco</i> dan <i>brick</i>) adalah botol plastik PET yang diisi padat dengan sampah plastik hingga menjadi struktur modular yang keras. Inovasi ini bertujuan mengunci limbah plastik agar tidak mencemari lingkungan sekaligus memanfaatkannya kembali sebagai bahan bangunan alternatif.
          </p>
        </div>

        {/* Alat & Bahan */}
        <div>
          <h2 className="text-3xl font-bold text-on-surface mb-8 flex items-center gap-3">
            <Wrench className="w-8 h-8 text-secondary" />
            Alat & Bahan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-surface hover:bg-surface-container border border-outline-variant/30 p-6 rounded-3xl transition-all duration-300 shadow-sm">
              <h3 className="text-lg font-bold text-secondary mb-2">Botol PET</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Gunakan botol dengan ukuran sejenis (misal 600 ml atau 1,5 L) agar ukurannya seragam saat disusun.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container border border-outline-variant/30 p-6 rounded-3xl transition-all duration-300 shadow-sm">
              <h3 className="text-lg font-bold text-secondary mb-2">Sampah Plastik</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Plastik lembut/lunak (kantong kresek, kemasan makanan, sedotan). <strong>Harus bersih dan kering.</strong>
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container border border-outline-variant/30 p-6 rounded-3xl transition-all duration-300 shadow-sm">
              <h3 className="text-lg font-bold text-secondary mb-2">Tongkat Pendorong</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Kayu atau bambu tumpul untuk memadatkan plastik ke dalam botol agar tidak ada rongga udara.
              </p>
            </div>

            <div className="bg-surface hover:bg-surface-container border border-outline-variant/30 p-6 rounded-3xl transition-all duration-300 shadow-sm">
              <h3 className="text-lg font-bold text-secondary mb-2">Timbangan</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Untuk memastikan kepadatan ecobrick mencapai standar minimal yang aman.
              </p>
            </div>

          </div>
        </div>

        {/* Langkah-Langkah Pembuatan */}
        <div>
          <h2 className="text-3xl font-bold text-on-surface mb-8">Langkah-Langkah Pembuatan</h2>
          <div className="space-y-6">
            
            <div className="flex flex-col md:flex-row gap-6 bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Droplets className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-2">1. Bersihkan dan Keringkan Bahan <span className="text-sm font-normal text-on-surface-variant bg-surface-container px-3 py-1 rounded-full ml-2">Tahap Persiapan</span></h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Cuci botol PET dan seluruh sampah plastik sampai bersih. Pastikan 100% kering agar tidak memicu pertumbuhan bakteri atau jamur yang menghasilkan gas di dalam botol.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
                <Scissors className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-2">2. Potong Plastik (Jika Perlu) <span className="text-sm font-normal text-on-surface-variant bg-surface-container px-3 py-1 rounded-full ml-2">Pengolahan Sampah</span></h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Gunting plastik kemasan yang berukuran besar menjadi potongan-potongan lebih kecil agar mudah dimasukkan dan dipadatkan.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center">
                <Layers className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-2">3. Isi Dasar Botol <span className="text-sm font-normal text-on-surface-variant bg-surface-container px-3 py-1 rounded-full ml-2">Lapisan Pertama</span></h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Masukkan plastik berwarna-warni atau plastik lembut terlebih dahulu di dasar botol agar tampilan bagian bawah ecobrick terlihat rapi dan menarik.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                <Hammer className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-2">4. Padatkan dengan Tongkat <span className="text-sm font-normal text-on-surface-variant bg-surface-container px-3 py-1 rounded-full ml-2">Proses Inti</span></h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Masukkan potongan plastik secara bertahap dan tekan kuat-kuat menggunakan tongkat kayu. Pastikan tidak ada rongga udara yang tersisa di dalam botol.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                <Scale className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-2">5. Timbang dan Tutup <span className="text-sm font-normal text-on-surface-variant bg-surface-container px-3 py-1 rounded-full ml-2">Pemeriksaan Standar</span></h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Timbang ecobrick. Standar kepadatan ideal adalah 0,33 g/ml (contoh: botol 600 ml minimal berbobot 198 gram). Jika sudah cukup padat dan keras, pasang tutup botol rapat-rapat.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Pemanfaatan Ecobrick */}
        <div className="bg-secondary text-on-secondary rounded-[3rem] p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pemanfaatan Ecobrick</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
              <Sofa className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">Mebel Modular</h3>
              <p className="text-white/90 leading-relaxed">
                Digabungkan menggunakan lem silicone atau ikatan karet/tali untuk membuat kursi, meja, atau bangku taman.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
              <Home className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">Elemen Arsitektur</h3>
              <p className="text-white/90 leading-relaxed">
                Disusun menggunakan adonan semen/tanah liat untuk membuat dinding pembatas, pot tanaman besar, atau gazebo.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-colors">
              <BookOpen className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-xl font-bold mb-3">Edukasi Lingkungan</h3>
              <p className="text-white/90 leading-relaxed">
                Media kampanye efektif untuk menyadarkan masyarakat akan tingginya volume limbah plastik harian mereka.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
