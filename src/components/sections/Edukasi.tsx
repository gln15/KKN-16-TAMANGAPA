export default function Edukasi() {
  return (
    <div className="pt-8 pb-20 px-margin-desktop bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-headline-xl text-5xl text-primary mb-4 font-bold">Pilar Edukasi Lingkungan</h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Menanamkan kesadaran sejak dini tentang pentingnya memilah sampah dan menjaga kelestarian lingkungan, baik di tingkat sekolah maupun di tengah masyarakat luas.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-16 relative group">
          <img 
            src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop" 
            alt="Edukasi Masyarakat" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Sosialisasi Sadar Lingkungan</h2>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/20 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">1</div>
            <h3 className="text-2xl font-bold text-on-surface mb-3">Edukasi Sekolah Dasar (SD)</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Program mengajar di sekolah dasar sekitar Kelurahan Tamangapa. Memberikan pemahaman interaktif tentang bahaya sampah plastik dan cara sederhana mendaur ulangnya melalui permainan dan cerita bergambar.
            </p>
          </div>

          <div className="bg-tertiary/5 p-8 rounded-[32px] border border-tertiary/20 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-tertiary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">2</div>
            <h3 className="text-2xl font-bold text-on-surface mb-3">Penyuluhan Warga & PKK</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Mengadakan sosialisasi rutin ke pertemuan RT/RW dan ibu-ibu PKK mengenai tata cara pemilahan sampah organik dan anorganik dari dapur rumah tangga tangga untuk mengurangi volume buangan ke TPA.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
