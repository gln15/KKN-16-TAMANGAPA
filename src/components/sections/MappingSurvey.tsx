"use client";

import { useState, useEffect } from "react";

export default function MappingSurvey() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="pt-4 pb-20 px-margin-desktop bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4 font-bold">Fase Kenali: Survei & Pemetaan</h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Sebelum merumuskan program kerja, kami melakukan observasi mendalam, survei lapangan, dan pemetaan geospasial untuk memahami kondisi nyata, potensi, dan tantangan di Kelurahan Tamangapa, khususnya terkait dampak dari keberadaan TPA Antang.
          </p>
        </div>

        {/* Peta Kewilayahan & Buffer Zone */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-on-surface mb-8 border-b border-outline-variant/20 pb-4">
            Pemetaan Geospasial Wilayah
          </h2>
          
          <div className="flex flex-col gap-12">
            
            {/* Peta Wilayah Proker */}
            <div className="bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-sm border border-outline-variant/20 group flex flex-col md:flex-col">
              <div className="w-full bg-white relative border-b border-outline-variant/10 overflow-hidden">
                {/* Ganti src dengan gambar peta wilayah asli Anda */}
                <img 
                  src="/images/PETA_WILAYAH.jpg.jpeg" 
                  alt="Peta Wilayah Proker" 
                  className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/images/PETA_WILAYAH.jpg.jpeg")}
                />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-bold text-primary mb-4">Peta Wilayah Proker</h3>
                <div className="text-on-surface-variant leading-relaxed space-y-4">
                  <p>
                    Peta wilayah proker menggambarkan lokasi pelaksanaan kegiatan edukasi persampahan di Kelurahan Tamangapa, yang berfokus pada RT 07 RW 04, RT 02 RW 04, dan RT 02 RW 02. Ketiga wilayah tersebut menjadi sasaran utama kegiatan edukasi yang mencakup eco-brick, eco-enzyme, dan budidaya maggot. Peta juga menunjukkan jangkauan program kerja berdasarkan radius yang telah ditetapkan, sehingga dapat memberikan gambaran mengenai wilayah yang tercakup dalam pelaksanaan edukasi.
                  </p>
                  <p>
                    Selain menunjukkan wilayah kegiatan, peta ini memperlihatkan keterkaitan lokasi edukasi dengan persebaran sarana persampahan di sekitarnya, meliputi Tempat Pembuangan Sampah Sementara (TPS), Tempat Pengolahan Sampah Organik, Tempat Pembuangan Akhir (TPA), dan Bank Sampah Unit (BSU). Informasi tersebut membantu pengguna memahami kondisi persampahan secara spasial serta melihat keberadaan sarana yang dapat mendukung kegiatan edukasi dan pengelolaan sampah di wilayah sasaran.
                  </p>
                  <p>
                    Ke depannya, peta ini dapat dimanfaatkan sebagai referensi dalam menentukan wilayah prioritas edukasi, mengidentifikasi kebutuhan sarana persampahan, serta merencanakan pengembangan kegiatan lanjutan. Dengan adanya informasi lokasi dan jangkauan yang lebih jelas, kegiatan pengelolaan persampahan diharapkan tidak berhenti pada pelaksanaan program kerja, tetapi dapat dikembangkan melalui pemanfaatan sarana yang tersedia, peningkatan partisipasi masyarakat, dan perluasan edukasi ke wilayah lain di Kelurahan Tamangapa.
                  </p>
                </div>
              </div>
            </div>

            {/* Peta Buffer Zone TPA */}
            <div className="bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-sm border border-outline-variant/20 group flex flex-col md:flex-col">
              <div className="w-full bg-white relative border-b border-outline-variant/10 overflow-hidden">
                {/* Ganti src dengan gambar peta buffer zone asli Anda */}
                <img 
                  src="/images/PETA_BUFFER_ZONE.jpg.jpeg" 
                  alt="Peta Buffer Zone TPA" 
                  className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage("/images/PETA_BUFFER_ZONE.jpg.jpeg")}
                />
              </div>
              <div className="p-6 md:p-10">
                <h3 className="text-2xl font-bold text-error mb-4">Peta Buffer Zone TPA Tamangapa</h3>
                <div className="text-on-surface-variant leading-relaxed space-y-4">
                  <p>
                    Peta ini disusun sebagai bagian dari program kerja KKN Tematik Perubahan Iklim Gelombang 116 Kelurahan Tamangapa, Universitas Hasanuddin, untuk mengidentifikasi radius pengaruh (buffer zone) Tempat Pembuangan Akhir (TPA) Tamangapa terhadap permukiman warga di sekitarnya, sekaligus menjadi dasar penentuan prioritas intervensi program mitigasi perubahan iklim di tingkat RW.
                  </p>
                  
                  <div className="mt-8 mb-8 bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6">
                    <h4 className="font-bold text-on-surface mb-4 text-lg">Interpretasi Kewilayahan:</h4>
                    <ul className="space-y-6 list-none pl-0">
                      <li className="flex gap-4 items-start">
                        <div className="w-3 h-3 rounded-full bg-error mt-1.5 flex-shrink-0 shadow-sm"></div>
                        <div>
                          <strong className="text-on-surface">RW 004 berada tepat di zona merah (0–500 m)</strong>, yaitu radius terdekat dengan titik TPA. Wilayah ini merupakan area dengan tingkat kerentanan tertinggi, karena paling terpapar langsung oleh emisi gas metana, bau, air lindi (leachate), dan potensi vektor penyakit dari aktivitas TPA. RW 004 perlu menjadi prioritas utama program mitigasi, seperti penghijauan sabuk hijau, pemantauan kualitas udara dan air secara berkala, serta edukasi kesehatan lingkungan bagi warga.
                        </div>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-sm"></div>
                        <div>
                          <strong className="text-on-surface">RW 003, RW 002, RW 007, dan RW 001 berada pada zona biru (1000–1500 m)</strong>, yaitu radius terjauh dari TPA dalam cakupan buffer yang dipetakan. Wilayah-wilayah ini tergolong sebagai area dengan dampak paling rendah dibanding RW lain dalam zona penyangga, namun tetap berpotensi terdampak secara tidak langsung, misalnya melalui penurunan kualitas udara pada musim tertentu atau limpasan air permukaan. RW-RW ini dapat menjadi sasaran program edukasi preventif dan penguatan sistem pengelolaan sampah rumah tangga berbasis 3R.
                        </div>
                      </li>
                      <li className="flex gap-4 items-start">
                        <div className="w-3 h-3 rounded-full bg-success mt-1.5 flex-shrink-0 shadow-sm"></div>
                        <div>
                          <strong className="text-on-surface">RW 006 berada di luar seluruh cakupan zona penyangga ({">"}1500 m dari TPA)</strong>, sehingga secara spasial tidak termasuk dalam wilayah terdampak langsung aktivitas TPA. Namun demikian, wilayah ini tetap relevan dimasukkan sebagai kelompok pembanding (kontrol) dalam program KKN, terutama untuk edukasi mitigasi perubahan iklim yang bersifat umum, mengingat isu iklim (seperti kualitas udara regional dan pengelolaan sampah kolektif) tidak terbatas hanya pada radius TPA.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p>
                    TPA Tamangapa berkontribusi terhadap perubahan iklim melalui emisi gas metana (CH₄) hasil dekomposisi sampah organik secara anaerobik, yang berpotensi pemanasan global jauh lebih tinggi dibanding CO₂, serta melalui praktik pembakaran sampah terbuka yang menyumbang emisi karbon dan partikel polutan udara. 
                  </p>
                  <p>
                    Pola zonasi ini menunjukkan adanya gradien kerentanan iklim yang menurun seiring bertambahnya jarak dari TPA — RW 004 sebagai titik kerentanan tertinggi hingga RW-RW di zona biru dan RW 006 yang relatif lebih aman. Kedepannya, hasil pemetaan ini dapat menjadi dasar bagi Kelurahan Tamangapa dalam menentukan wilayah prioritas dan kebutuhan intervensi terkait dampak TPA, sehingga alokasi program mitigasi dan adaptasi perubahan iklim dapat dilakukan secara lebih terarah dan proporsional, dengan penanganan paling intensif di RW 004 dan pendekatan preventif-edukatif di RW-RW lainnya.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox/Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup peta"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Peta Diperbesar" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
