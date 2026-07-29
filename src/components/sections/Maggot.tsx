import React from 'react';
import { Zap, Fish, Sprout, Globe, CheckCircle2, XCircle } from 'lucide-react';

export default function Maggot() {
  return (
    <section className="pt-0 pb-24 px-6 md:px-12 bg-surface" id="maggot">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface">
            Panduan Budidaya <span className="text-primary">Maggot BSF</span> Rumah Tangga
          </h1>
          <p className="text-lg text-on-surface-variant">
            Setiap hari, aktivitas dapur kita menghasilkan limbah organik—mulai dari sisa sayuran, kulit buah, sisa nasi, hingga lauk-pauk. Tanpa pengelolaan yang tepat, sampah rumah tangga ini berakhir di TPA, membusuk, dan melepaskan gas metana yang merusak atmosfer bumi. Namun, ada solusi alami, cepat, dan bernilai ekonomi tinggi untuk mengatasi masalah ini: <strong>Maggot BSF (Black Soldier Fly)</strong>.
          </p>
        </div>

        {/* 1. Mengenal Maggot BSF & Mengapa Efektif */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6 bg-primary-container/30 p-8 md:p-10 rounded-[3rem] border border-primary/20">
             <h3 className="text-3xl font-bold text-primary">Mengenal Maggot BSF</h3>
             <p className="text-on-surface-variant text-lg leading-relaxed">
               Lalat Black Soldier Fly (BSF) bukan lalat hijau/lalat rumah. Lalat BSF aman, tidak membawa penyakit, dan larvanya merupakan pengurai sampah organik yang sangat cepat.
             </p>
             <h4 className="text-xl font-bold text-on-surface mt-6 pt-4 border-t border-outline-variant/20">Mengapa Sangat Efektif?</h4>
             <ul className="space-y-4 mt-4">
                <li className="flex gap-3 items-start"><Zap className="w-6 h-6 text-primary flex-shrink-0" /> <span className="text-on-surface-variant"><strong>Penguraian Super Cepat:</strong> Menghabiskan sampah organik dalam hitungan hari.</span></li>
                <li className="flex gap-3 items-start"><Fish className="w-6 h-6 text-primary flex-shrink-0" /> <span className="text-on-surface-variant"><strong>Pakan Berprotein Tinggi:</strong> Ideal untuk pakan ikan, ayam, dan unggas.</span></li>
                <li className="flex gap-3 items-start"><Sprout className="w-6 h-6 text-primary flex-shrink-0" /> <span className="text-on-surface-variant"><strong>Pupuk Organik (Kasgot):</strong> Menyuburkan tanah dan tanaman.</span></li>
                <li className="flex gap-3 items-start"><Globe className="w-6 h-6 text-primary flex-shrink-0" /> <span className="text-on-surface-variant"><strong>Menekan Emisi Karbon:</strong> Mencegah terbentuknya gas metana di TPA.</span></li>
             </ul>
          </div>
          
          <div className="order-1 lg:order-2 flex flex-col items-center">
            <img 
              className="w-full max-w-md rounded-[3rem] shadow-2xl object-contain border border-outline-variant/30" 
              alt="Infografis Panduan Budidaya Maggot" 
              src="/images/panduan-maggot.jpg.jpeg" 
            />
          </div>
        </div>

        {/* 2. 4 Langkah Budidaya */}
        <div className="bg-tertiary-container/30 rounded-[3rem] p-8 md:p-12 border border-tertiary/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-tertiary mb-4">4 Langkah Budidaya</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Ikuti langkah mudah ini untuk mulai mempraktikkan ekonomi sirkular dari dapur Anda sendiri.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-tertiary/20 border-dashed border-t-2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-surface shadow-xl flex items-center justify-center text-3xl font-bold text-tertiary mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/10">
                1
              </div>
              <h4 className="font-bold text-xl text-on-surface mb-3">Persiapan Kandang & Wadah</h4>
              <p className="text-on-surface-variant text-sm">Siapkan kandang jaring lalat dewasa dan wadah penetasan (biopond).</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-surface shadow-xl flex items-center justify-center text-3xl font-bold text-tertiary mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/10">
                2
              </div>
              <h4 className="font-bold text-xl text-on-surface mb-3">Penetasan</h4>
              <p className="text-on-surface-variant text-sm">Tetaskan telur BSF di wadah pembesaran.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-surface shadow-xl flex items-center justify-center text-3xl font-bold text-tertiary mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/10">
                3
              </div>
              <h4 className="font-bold text-xl text-on-surface mb-3">Pemberian Pakan</h4>
              <p className="text-on-surface-variant text-sm">Beri makan sampah organik rumah tangga secara rutin.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-surface shadow-xl flex items-center justify-center text-3xl font-bold text-tertiary mb-6 group-hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/10">
                4
              </div>
              <h4 className="font-bold text-xl text-on-surface mb-3">Panen</h4>
              <p className="text-on-surface-variant text-sm">Dipanen menjadi Maggot Dewasa (pakan ternak berprotein) dan Kasgot (pupuk organik tanaman).</p>
            </div>
          </div>
        </div>

        {/* 3. Jenis Sampah untuk Pakan */}
        <div>
          <h2 className="text-3xl font-bold text-on-surface text-center mb-10">Jenis Sampah untuk Pakan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-[2.5rem] p-8 border border-green-200 dark:border-green-800 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-6 bg-green-100 dark:bg-green-800/50 p-4 rounded-xl w-max mx-auto">
                <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400" />
                <h3 className="text-xl font-bold text-green-800 dark:text-green-300">Boleh Dimasukkan</h3>
              </div>
              <ul className="space-y-4 px-2">
                <li className="flex items-start gap-3 text-green-900 dark:text-green-100">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Sisa sayuran (dicacah)</span>
                </li>
                <li className="flex items-start gap-3 text-green-900 dark:text-green-100">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Kulit buah (non-asam)</span>
                </li>
                <li className="flex items-start gap-3 text-green-900 dark:text-green-100">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Sisa nasi & lauk</span>
                </li>
                <li className="flex items-start gap-3 text-green-900 dark:text-green-100">
                  <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Daun kering</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-[2.5rem] p-8 border border-red-200 dark:border-red-800 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-6 bg-red-100 dark:bg-red-800/50 p-4 rounded-xl w-max mx-auto">
                <XCircle className="w-6 h-6 text-red-700 dark:text-red-400" />
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300">Tidak Boleh Dimasukkan</h3>
              </div>
              <ul className="space-y-4 px-2">
                <li className="flex items-start gap-3 text-red-900 dark:text-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Sisa daging & tulang besar (menyebabkan bau)</span>
                </li>
                <li className="flex items-start gap-3 text-red-900 dark:text-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Makanan berminyak/santan (sulit dicerna)</span>
                </li>
                <li className="flex items-start gap-3 text-red-900 dark:text-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Kulit jeruk & buah asam (merusak pH media)</span>
                </li>
                <li className="flex items-start gap-3 text-red-900 dark:text-red-100">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span> 
                  <span className="text-lg">Sampah anorganik (plastik, kaca, logam, kertas berwarna)</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        {/* Outro */}
        <div className="bg-primary text-on-primary rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Mari Mulai Dari Rumah!</h2>
            <p className="text-on-primary/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              Kurangi sampah, hasilkan manfaat. Dengan mengadopsi sistem budidaya Maggot BSF, kita tidak hanya menciptakan lingkungan yang bersih dan <i>zero waste</i>, tetapi juga menghasilkan nilai ekonomi baru dari pekarangan rumah sendiri.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
