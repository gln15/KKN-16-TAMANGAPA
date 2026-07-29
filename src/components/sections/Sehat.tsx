export default function Sehat() {
  return (
    <div className="pt-4 pb-20 px-margin-desktop bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-headline-xl text-5xl text-primary mb-4 font-bold">Pilar Lingkungan Sehat</h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            Menjaga kebersihan lingkungan untuk meminimalisir risiko penyakit yang ditimbulkan oleh penumpukan sampah, lindi, dan polusi udara di sekitar kawasan TPA.
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-16 relative group">
          <img 
            src="https://images.unsplash.com/photo-1584820927498-cafe6c15af87?q=80&w=2070&auto=format&fit=crop" 
            alt="Lingkungan Sehat" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Gerakan Masyarakat Hidup Sehat (GERMAS)</h2>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-error/5 p-8 rounded-[32px] border border-error/20 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-error text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">🩺</div>
            <h3 className="text-xl font-bold text-on-surface mb-3">Pemeriksaan Kesehatan Gratis</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Bekerja sama dengan puskesmas setempat untuk memeriksa kondisi kesehatan warga, terutama Infeksi Saluran Pernapasan Akut (ISPA) akibat asap dan bau TPA.
            </p>
          </div>

          <div className="bg-primary/5 p-8 rounded-[32px] border border-primary/20 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">💧</div>
            <h3 className="text-xl font-bold text-on-surface mb-3">Sanitasi & Air Bersih</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Edukasi mengenai pentingnya perlindungan sumur warga dari resapan air lindi sampah, serta penyuluhan tata cara perebusan air yang benar untuk konsumsi.
            </p>
          </div>
          
          <div className="bg-tertiary/5 p-8 rounded-[32px] border border-tertiary/20 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-tertiary text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">🧹</div>
            <h3 className="text-xl font-bold text-on-surface mb-3">Kerja Bakti Massal</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Inisiasi kegiatan jumat bersih dan gotong royong membersihkan selokan serta area fasilitas umum untuk memberantas sarang nyamuk demam berdarah.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
