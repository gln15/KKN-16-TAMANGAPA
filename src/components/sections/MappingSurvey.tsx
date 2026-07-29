export default function MappingSurvey() {
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Peta Kewilayahan */}
            <div className="bg-surface-container-lowest rounded-[32px] p-6 lg:p-8 shadow-sm border border-outline-variant/20 group">
              <h3 className="text-xl font-bold text-primary mb-2">Peta Administrasi Kewilayahan</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Memvisualisasikan batas-batas kelurahan, infrastruktur jalan utama, letak fasilitas umum, dan sebaran permukiman warga (RT/RW).
              </p>
              
              <div className="w-full aspect-[4/3] bg-surface-container rounded-2xl overflow-hidden relative border border-outline-variant/10 group-hover:shadow-lg transition-all duration-300">
                {/* Ganti src dengan gambar peta wilayah asli Anda */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                  alt="Peta Administrasi Kewilayahan" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-black/50 text-white px-4 py-2 rounded-full font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    [Masukkan Peta Kewilayahan Anda Di Sini]
                  </span>
                </div>
              </div>
            </div>

            {/* Peta Buffer Zone TPA */}
            <div className="bg-surface-container-lowest rounded-[32px] p-6 lg:p-8 shadow-sm border border-outline-variant/20 group">
              <h3 className="text-xl font-bold text-error mb-2">Peta Buffer Zone TPA Antang</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Menganalisis radius persebaran dampak pencemaran (bau, lindi, polusi udara) dari TPA Antang terhadap kawasan permukiman terdekat.
              </p>
              
              <div className="w-full aspect-[4/3] bg-surface-container rounded-2xl overflow-hidden relative border border-outline-variant/10 group-hover:shadow-lg transition-all duration-300">
                {/* Ganti src dengan gambar peta buffer zone asli Anda */}
                <img 
                  src="https://images.unsplash.com/photo-1473172846931-31ba586940a4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Peta Buffer Zone TPA" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-black/50 text-white px-4 py-2 rounded-full font-bold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    [Masukkan Peta Buffer Zone Anda Di Sini]
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
