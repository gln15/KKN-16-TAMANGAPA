export default function TeamProfile() {
  const teamMembers = [
    { 
      name: "Alif Allamah", 
      id: "D011231088", 
      faculty: "Teknik Sipil",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Naurah Halwah Syakirah", 
      id: "H061231019", 
      faculty: "Geofisika",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Siti Suhaila Ramadanti S.", 
      id: "H031231071", 
      faculty: "Kimia",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Adelia Maya Rezanty", 
      id: "I011231330", 
      faculty: "Peternakan",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Muh Faiz Hidayat", 
      id: "A031231140", 
      faculty: "Akuntansi",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Andi Muthia Amalia M.", 
      id: "D101231029", 
      faculty: "Perencanaan Wilayah & Kota",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Radhitya Pramudya Suandi", 
      id: "J011231220", 
      faculty: "Pend. Dokter Gigi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Rizky Nur Fahreza", 
      id: "C021231070", 
      faculty: "Psikologi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop" 
    },
    { 
      name: "Nur Hilmi Khairunnisa Y.", 
      id: "D041231040", 
      faculty: "Teknik Elektro",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop" 
    }
  ];

  return (
    <section className="pt-8 pb-24 px-margin-desktop bg-surface-container" id="tim-kkn">
      <div className="max-w-container-max mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Kolom Kiri: Judul & Logo */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-32">
            <img 
              src="/unhas-logo.png" 
              alt="Logo Universitas Hasanuddin" 
              className="w-36 h-36 lg:w-44 lg:h-44 object-contain mb-6 mx-auto mix-blend-multiply drop-shadow-sm"
            />
            <h2 className="font-headline-xl text-4xl lg:text-5xl text-primary mb-4 leading-tight font-extrabold text-left">
              Tim KKN 116 <br className="hidden lg:block"/> Tamangapa
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-sm text-sm lg:text-base text-left">
              Mahasiswa Universitas Hasanuddin sebagai agen perubahan yang berkomitmen mengabdi untuk masyarakat Kelurahan Tamangapa, mewujudkan lingkungan bersih dan ekonomi sirkular.
            </p>
          </div>

          {/* Kolom Kanan: Card Mahasiswa */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-4">
              <h3 className="font-headline-lg text-2xl lg:text-3xl text-primary font-bold">
                Anggota Tim KKN
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-surface-container-lowest p-4 lg:p-5 rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant/10 group flex flex-col items-center text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-surface shadow-inner">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-sm lg:text-base text-on-surface mb-1 leading-tight line-clamp-2">{member.name}</h3>
                  <p className="text-secondary font-bold text-xs mb-3 opacity-90">{member.id}</p>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] lg:text-xs font-semibold rounded-full mt-auto">
                    {member.faculty}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
