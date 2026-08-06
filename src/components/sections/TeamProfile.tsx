"use client";

import { useState } from "react";

export default function TeamProfile() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const teamMembers = [
    {
      name: "Alif Allamah",
      id: "D011231088",
      faculty: "Teknik Sipil",
      image: "/team/D011231088.jpg"
    },
    {
      name: "Naurah Halwah Syakirah",
      id: "H061231019",
      faculty: "Geofisika",
      image: "/team/H061231019.jpg"
    },
    {
      name: "Siti Suhaila Ramadanti S.",
      id: "H031231071",
      faculty: "Kimia",
      image: "/team/H031231071.jpg"
    },
    {
      name: "Adelia Maya Rezanty",
      id: "I011231330",
      faculty: "Peternakan",
      image: "/team/I011231330.jpg"
    },
    {
      name: "Muh Faiz Hidayat",
      id: "A031231140",
      faculty: "Akuntansi",
      image: "/team/A031231140.jpg"
    },
    {
      name: "Andi Muthia Amalia M.",
      id: "D101231029",
      faculty: "Perencanaan Wilayah & Kota",
      image: "/team/D101231029.jpg"
    },
    {
      name: "Radhitya Pramudya Suandi",
      id: "J011231220",
      faculty: "Pend. Dokter Gigi",
      image: "/team/J011231220.jpg"
    },
    {
      name: "Rizky Nur Fahreza",
      id: "C021231070",
      faculty: "Psikologi",
      image: "/team/C021231070.jpg"
    },
    {
      name: "Nur Hilmi Khairunnisa Y.",
      id: "D041231040",
      faculty: "Teknik Elektro",
      image: "/team/D041231040.jpg"
    }
  ];

  return (
    <section className="pt-4 pb-24 px-margin-desktop bg-surface-container scroll-mt-20" id="tim-kami">
      <div className="max-w-container-max mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Kolom Kiri: Judul & Logo */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-32">
            <img
              src="/images/logo.png"
              alt="Logo Tamangapa Beraksi"
              className="w-48 h-48 lg:w-64 lg:h-64 object-contain mb-6 mx-auto rounded-3xl drop-shadow-md"
            />
            <h2 className="font-headline-xl text-4xl lg:text-5xl text-primary mb-4 leading-tight font-extrabold text-left">
              Tim KKN 116 <br className="hidden lg:block" /> Tamangapa
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
                  <div 
                    className="w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-surface shadow-inner cursor-pointer"
                    onClick={() => setSelectedImage(member.image)}
                  >
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

      {/* Modal View Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full h-auto flex justify-center items-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Team Member Full" 
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
