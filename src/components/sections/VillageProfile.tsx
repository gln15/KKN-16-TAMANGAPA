const IconMaximize = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
);

const IconUsers = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const IconHome = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);

const IconMapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const IconMap = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
);

const IconAlertTriangle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);

export default function VillageProfile() {
  return (
    <section className="pt-4 pb-24 px-margin-desktop bg-surface scroll-mt-20" id="profil-wilayah">
      <div className="max-w-container-max mx-auto">

        {/* Section Header sebagai pemisah block */}
        <div className="text-center mb-12">
          <h2 className="font-headline-xl text-4xl lg:text-5xl text-primary font-bold mb-4">Profil Wilayah KKN</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Mengenal lebih dekat kondisi demografi, batas wilayah, dan tata letak Kelurahan Tamangapa sebagai lokasi pengabdian masyarakat.
          </p>
        </div>

        <div className="flex flex-col gap-10">

          {/* 1. SEJARAH & GAMBARAN UMUM (Full Width) */}
          <div className="bg-surface-container-lowest p-8 lg:p-12 rounded-[32px] border border-outline-variant/20 shadow-sm">
            <h3 className="text-3xl font-bold text-on-surface mb-2">Kelurahan Tamangapa</h3>
            <p className="text-primary font-semibold mb-8">Kecamatan Manggala, Kota Makassar</p>

            <h4 className="text-lg font-bold text-on-surface mb-3">Sejarah Singkat & Asal Usul</h4>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Nama "Tamangapa" berasal dari kata dalam bahasa Makassar, <i>"Tena na ngapa-ngapa"</i> yang berarti "tidak apa-apa" atau "aman". Secara historis, wilayah ini dianggap sebagai tempat perlindungan yang aman. Dahulu, jika pasukan Kerajaan Gowa pergi berperang dan mereka mundur sampai ke wilayah ini, mereka akan merasa aman dari kejaran musuh. Kelurahan ini resmi dibentuk pada tahun 1971 dari penggabungan dua kampung, yaitu Kampung Bangkala dan Kampung Kassi, saat dimasukkan ke dalam wilayah administratif Kotamadya Ujung Pandang.
            </p>

            <h4 className="text-lg font-bold text-on-surface mb-3">Deskripsi Wilayah</h4>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Kelurahan Tamangapa merupakan kelurahan dengan wilayah terluas di Kecamatan Manggala, mencapai 7,62 km². Wilayah ini berkembang pesat sebagai area pemukiman pinggiran kota yang berbatasan langsung dengan Kabupaten Gowa. Namun, wilayah ini juga dikenal luas karena keberadaan Tempat Pembuangan Akhir (TPA) Antang yang menjadi pusat pembuangan sampah utama bagi seluruh Kota Makassar.
            </p>

            <div className="bg-surface-container p-6 lg:p-8 rounded-2xl border-l-4 border-primary">
              <h4 className="text-lg font-bold text-on-surface mb-3">Visi & Misi Kelurahan</h4>
              <p className="text-on-surface-variant italic leading-relaxed">
                "Mewujudkan Pelayanan Publik yang Prima Menuju Kelurahan Tamangapa yang Bersih, Aman, dan Sejahtera serta Peduli terhadap Kelestarian Lingkungan Hidup."
              </p>
            </div>
          </div>

          {/* 2. STATISTIK & GEOGRAFI (Bento Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-[24px] flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors">
              <IconMaximize className="text-4xl text-primary mb-3" />
              <h4 className="font-bold text-on-surface mb-1">Luas Wilayah</h4>
              <p className="text-primary font-extrabold text-2xl">7,62 <span className="text-sm font-normal">km²</span></p>
            </div>

            <div className="bg-primary/5 border border-primary/10 p-6 rounded-[24px] flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors">
              <IconUsers className="text-4xl text-primary mb-3" />
              <h4 className="font-bold text-on-surface mb-1">Jumlah Penduduk</h4>
              <p className="text-primary font-extrabold text-2xl">16.178 <span className="text-sm font-normal">Jiwa</span></p>
            </div>

            <div className="bg-primary/5 border border-primary/10 p-6 rounded-[24px] flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors">
              <IconHome className="text-4xl text-primary mb-3" />
              <h4 className="font-bold text-on-surface mb-1">Total RT/RW</h4>
              <p className="text-primary font-extrabold text-2xl">43 <span className="text-sm font-normal">RT</span> / 7 <span className="text-sm font-normal">RW</span></p>
            </div>

            <div className="bg-primary/5 border border-primary/10 p-6 rounded-[24px] flex flex-col items-center justify-center text-center hover:bg-primary/10 transition-colors">
              <IconMapPin className="text-4xl text-primary mb-3" />
              <h4 className="font-bold text-on-surface mb-1">Kepadatan</h4>
              <p className="text-primary font-extrabold text-xl">2.123 <span className="text-sm font-normal">jiwa/km²</span></p>
            </div>
          </div>



          {/* 4. BATAS WILAYAH & PEMERINTAHAN (2 Kolom) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-[32px] border border-outline-variant/20 shadow-sm">
              <h4 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-3">
                <IconMap className="text-primary text-2xl" /> Batas Wilayah Geografis
              </h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                  <span className="text-on-surface-variant font-medium">Sebelah Utara</span>
                  <span className="font-bold text-on-surface text-right">Kelurahan Manggala & Antang</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                  <span className="text-on-surface-variant font-medium">Sebelah Selatan</span>
                  <span className="font-bold text-on-surface text-right">Kabupaten Gowa</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                  <span className="text-on-surface-variant font-medium">Sebelah Timur</span>
                  <span className="font-bold text-on-surface text-right">Kabupaten Gowa</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-3">
                  <span className="text-on-surface-variant font-medium">Sebelah Barat</span>
                  <span className="font-bold text-on-surface text-right">Kel. Bangkala & Biring Romang</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-[32px] border border-outline-variant/20 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="w-24 h-24 flex items-center justify-center rounded-full flex-shrink-0 border-4 border-primary/20 overflow-hidden shadow-sm">
                <img src="/images/lurah.jpeg" alt="Bapak Muhammad Sadli - Lurah Tamangapa" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface mb-1">Muhammad Sadli, SE., M.Si.</h4>
                <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">Lurah Tamangapa</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Pemerintahan Kelurahan Tamangapa dipimpin oleh Bapak Muhammad Sadli. Dengan wilayah administratif yang luas dan menaungi 7 RW serta 43 RT, kelurahan ini terus berupaya meningkatkan kualitas pelayanan publik dan menangani isu-isu strategis, terutama yang berkaitan dengan tata kelola lingkungan dan kebersihan.
                </p>
              </div>
            </div>
          </div>



          {/* 5. PERMASALAHAN / FOKUS KKN (Warning Box) */}
          <div className="bg-error/10 p-8 lg:p-12 rounded-[32px] border border-error/20 mt-4">
            <h3 className="text-2xl font-bold text-error mb-4 flex items-center gap-3">
              <IconAlertTriangle className="text-3xl" /> Titik Fokus KKN: Darurat Pengelolaan Sampah
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-4">
              Kelurahan Tamangapa menghadapi tantangan lingkungan yang sangat masif karena menjadi lokasi <b>TPA Antang</b>, tempat bermuaranya ribuan ton sampah dari seluruh penjuru Kota Makassar setiap harinya. Volume sampah yang terus menggunung tanpa pemilahan optimal menimbulkan masalah polusi udara, pencemaran tanah, dan risiko kesehatan bagi warga di radius <i>buffer zone</i>.
            </p>
            <p className="text-on-surface-variant leading-relaxed font-semibold">
              Kondisi kritis inilah yang melatarbelakangi lahirnya program kerja KKN "BERAKSI" (Bersama Kelola Sampah, Bersama Jaga Iklim). Kami berfokus untuk memberdayakan masyarakat agar mampu memilah limbah organik menjadi Eco-enzyme & Maggot BSF, serta mendaur ulang limbah plastik menjadi Ecobrick langsung dari rumah mereka.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
