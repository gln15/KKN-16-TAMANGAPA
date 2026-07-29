export default function Mandiri() {
  return (
    <div className="pt-4 pb-20 px-margin-desktop bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-headline-xl text-5xl text-primary mb-4 font-bold">Pilar Masyarakat Mandiri</h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Membangun ekonomi sirkular dengan mengubah "sampah menjadi rupiah". Memberdayakan masyarakat untuk menciptakan produk bernilai jual dari bahan daur ulang.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-16 relative group">
          <img 
            src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1987&auto=format&fit=crop" 
            alt="Ekonomi Mandiri" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Ekonomi Sirkular & UMKM Hijau</h2>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary-container/30 p-8 rounded-[32px] border border-primary/20 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-primary-fixed text-on-primary-fixed rounded-2xl flex items-center justify-center text-3xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">Optimalisasi Bank Sampah</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Meningkatkan partisipasi warga dalam menabung sampah plastik, kertas, dan logam ke Bank Sampah terdekat yang kemudian ditukarkan dengan uang tunai atau bahan pokok.
              </p>
            </div>
            <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-bold hover:opacity-90 transition-opacity">
              Lihat Kinerja Bank Sampah
            </button>
          </div>

          <div className="bg-organic-mint/30 p-8 rounded-[32px] border border-organic-mint/50 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-waste-organic text-white rounded-2xl flex items-center justify-center text-3xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">Komersialisasi Produk Daur Ulang</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Mengajarkan warga cara pengemasan (packaging) dan pemasaran (marketing) produk turunan sampah seperti pupuk kompos cair (Eco Enzym) dan pakan ternak (Maggot BSF) ke UMKM peternakan.
              </p>
            </div>
            <button className="w-full py-3 bg-surface-container text-on-surface rounded-xl font-bold hover:bg-surface-container-high transition-colors">
              Katalog Produk UMKM
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
