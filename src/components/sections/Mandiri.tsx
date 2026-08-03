export default function Mandiri() {
  return (
    <div className="pt-4 pb-20 px-margin-desktop bg-surface min-h-screen relative z-0">
      {/* Decorative Background for Glassmorphism */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-container-max mx-auto">
        
        {/* BMC Intro Text */}
        <div className="mb-12 mt-8 max-w-4xl mx-auto text-on-surface">
          <h2 className="font-headline-xl text-3xl md:text-5xl text-primary mb-6 font-bold text-center">
            Business Model Canvas (BMC): Merancang Usaha dari Sampah Menjadi Bernilai
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Apa itu Business Model Canvas (BMC)?</h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed mb-3">
                Business Model Canvas (BMC) adalah sebuah alat sederhana yang digunakan untuk merancang dan memahami bagaimana suatu usaha dapat berjalan, memperoleh pelanggan, menghasilkan pendapatan, serta mengelola biaya. Dengan menggunakan BMC, ide usaha dapat disusun secara lebih jelas sehingga lebih mudah dijalankan dan dikembangkan.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed mb-3">
                BMC terdiri dari sembilan bagian yang saling berhubungan. Kesembilan bagian tersebut membantu pelaku usaha melihat gambaran bisnis secara menyeluruh, mulai dari siapa konsumennya hingga bagaimana usaha tersebut memperoleh keuntungan.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Dalam kegiatan Kuliah Kerja Nyata (KKN), BMC diperkenalkan kepada masyarakat sebagai panduan dalam mengembangkan usaha berbasis pengelolaan sampah, sehingga sampah tidak hanya dipandang sebagai limbah, tetapi juga sebagai sumber nilai ekonomi.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">Mengapa BMC Penting?</h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed mb-3">
                Banyak usaha kecil berhenti berkembang karena hanya berfokus pada penjualan produk tanpa memiliki perencanaan usaha yang jelas. Melalui BMC, pelaku usaha dapat:
              </p>
              <ul className="list-disc pl-6 font-body-lg text-on-surface-variant space-y-2 mb-3">
                <li>Mengetahui siapa target konsumennya.</li>
                <li>Menentukan produk atau layanan yang akan ditawarkan.</li>
                <li>Mengetahui cara memasarkan produk.</li>
                <li>Menghitung sumber pendapatan dan biaya usaha.</li>
                <li>Menjalin kerja sama dengan pihak lain yang dapat mendukung usaha.</li>
              </ul>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Dengan demikian, usaha menjadi lebih terarah, efisien, dan memiliki peluang berkembang yang lebih besar.
              </p>
            </div>
          </div>
        </div>

        {/* BMC Cards - Responsive Grid Content */}
        <div className="mb-16">
          <h3 className="font-headline-lg text-3xl text-center text-primary mb-10 font-bold">Sembilan Elemen Business Model Canvas</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            
            {/* 8. Key Partners */}
            <div className="lg:row-span-2 bg-waste-plastic/5 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-waste-plastic/5 group-hover:text-waste-plastic/10 transition-colors pointer-events-none">8</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">KEY PARTNERS</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-6">(MITRA UTAMA)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Mitra membantu usaha agar dapat berkembang dengan lebih mudah.</p>
                  <p className="font-bold text-on-surface pt-2">Contohnya:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Pemerintah kelurahan.</li>
                    <li>Bank sampah.</li>
                    <li>Pengepul.</li>
                    <li>Vendor pembeli minyak jelantah.</li>
                    <li>UMKM.</li>
                    <li>Sekolah.</li>
                    <li>Komunitas lingkungan.</li>
                  </ul>
                  <p className="pt-2">Kerja sama yang baik dapat memperluas pemasaran sekaligus memperkuat keberlangsungan usaha.</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-waste-plastic/20 relative z-10">
                <span className="text-xs font-semibold text-waste-plastic">Siapa Yang Membantu?</span>
              </div>
            </div>

            {/* 6. Key Resources */}
            <div className="bg-organic-mint/40 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-nature-leaf/5 group-hover:text-nature-leaf/10 transition-colors pointer-events-none">6</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">KEY RESOURCES</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-4">(SUMBER DAYA UTAMA)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Sumber daya utama adalah semua hal yang dibutuhkan agar usaha dapat berjalan.</p>
                  <p className="font-bold text-on-surface">Contohnya:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Peralatan produksi.</li>
                    <li>Bahan baku sampah.</li>
                    <li>Tempat produksi.</li>
                    <li>Tenaga kerja.</li>
                    <li>Pengetahuan dan keterampilan.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-nature-leaf/20 relative z-10">
                <span className="text-xs font-semibold text-nature-leaf">Apa Yang Dibutuhkan?</span>
              </div>
            </div>

            {/* 2. Value Proposition */}
            <div className="lg:row-span-2 bg-waste-plastic/5 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-waste-plastic/5 group-hover:text-waste-plastic/10 transition-colors pointer-events-none">2</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">VALUE PROPOSITION</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-6">(NILAI YANG DITAWARKAN)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Value Proposition adalah keunggulan atau manfaat yang diberikan kepada pelanggan sehingga mereka tertarik menggunakan produk atau jasa tersebut.</p>
                  <p className="font-bold text-on-surface pt-2">Contohnya:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Produk ramah lingkungan.</li>
                    <li>Mengurangi pencemaran akibat sampah.</li>
                    <li>Menghasilkan produk yang bermanfaat dari limbah.</li>
                    <li>Harga terjangkau dengan kualitas baik.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-waste-plastic/20 relative z-10">
                <span className="text-xs font-semibold text-waste-plastic">Apa Keunggulan Produk?</span>
              </div>
            </div>

            {/* 3. Channels */}
            <div className="bg-waste-paper/10 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-waste-paper/20 group-hover:text-waste-paper/30 transition-colors pointer-events-none">3</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">CHANNELS</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-4">(SALURAN PEMASARAN)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Channels merupakan cara usaha menyampaikan produk kepada pelanggan.</p>
                  <p className="font-bold text-on-surface">Beberapa contoh saluran pemasaran:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Penjualan langsung kepada masyarakat.</li>
                    <li>Media sosial.</li>
                    <li>WhatsApp.</li>
                    <li>Marketplace.</li>
                    <li>Pameran atau bazar UMKM.</li>
                    <li>Kerja sama dengan sekolah maupun instansi.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-waste-paper/30 relative z-10">
                <span className="text-xs font-semibold text-waste-paper">Dijual Lewat Mana?</span>
              </div>
            </div>

            {/* 1. Customer Segments */}
            <div className="lg:row-span-2 bg-waste-plastic/5 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-waste-plastic/5 group-hover:text-waste-plastic/10 transition-colors pointer-events-none">1</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">CUSTOMER SEGMENTS</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-6">(TARGET PELANGGAN)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Customer Segments merupakan kelompok orang yang akan menjadi sasaran penjualan produk atau jasa. Menentukan target pelanggan sangat penting agar produk yang dibuat sesuai dengan kebutuhan masyarakat.</p>
                  <p className="font-bold text-on-surface pt-2">Contoh pada usaha pengelolaan sampah:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Rumah tangga.</li>
                    <li>Sekolah.</li>
                    <li>Bank sampah.</li>
                    <li>UMKM.</li>
                    <li>Komunitas peduli lingkungan.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-waste-plastic/20 relative z-10">
                <span className="text-xs font-semibold text-waste-plastic">Siapa Pembelinya?</span>
              </div>
            </div>

            {/* 7. Key Activities */}
            <div className="bg-organic-mint/40 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-nature-leaf/5 group-hover:text-nature-leaf/10 transition-colors pointer-events-none">7</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">KEY ACTIVITIES</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-4">(AKTIVITAS UTAMA)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Aktivitas utama adalah kegiatan yang harus dilakukan agar usaha tetap berjalan.</p>
                  <p className="font-bold text-on-surface">Contohnya:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Mengumpulkan sampah.</li>
                    <li>Memilah sampah.</li>
                    <li>Mengolah sampah menjadi produk.</li>
                    <li>Mengemas produk.</li>
                    <li>Memasarkan produk.</li>
                    <li>Melayani pelanggan.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-nature-leaf/20 relative z-10">
                <span className="text-xs font-semibold text-nature-leaf">Apa Pekerjaan Utamanya?</span>
              </div>
            </div>

            {/* 4. Customer Relationships */}
            <div className="bg-waste-paper/10 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-waste-paper/20 group-hover:text-waste-paper/30 transition-colors pointer-events-none">4</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl leading-tight">CUSTOMER RELATIONSHIP</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-4">(HUBUNGAN DENGAN PELANGGAN)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Hubungan yang baik dengan pelanggan membuat mereka kembali membeli produk dan merekomendasikannya kepada orang lain.</p>
                  <p className="font-bold text-on-surface">Contohnya:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Memberikan pelayanan yang ramah.</li>
                    <li>Menjaga kualitas produk.</li>
                    <li>Merespons pertanyaan pelanggan dengan cepat.</li>
                    <li>Memberikan promo atau hadiah pada momen tertentu.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-waste-paper/30 relative z-10">
                <span className="text-xs font-semibold text-waste-paper">Bagaimana Menjaga Pelanggan?</span>
              </div>
            </div>

          </div>

          {/* Bottom BMC Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            
            {/* 9. Cost Structure */}
            <div className="bg-tertiary-container/10 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-tertiary/5 group-hover:text-tertiary/10 transition-colors pointer-events-none">9</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">COST STRUCTURE</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-4">(STRUKTUR BIAYA)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Cost Structure merupakan seluruh biaya yang dikeluarkan untuk menjalankan usaha.</p>
                  <p className="font-bold text-on-surface">Contohnya:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Pembelian peralatan.</li>
                    <li>Transportasi.</li>
                    <li>Kemasan produk.</li>
                    <li>Listrik dan air.</li>
                    <li>Promosi.</li>
                    <li>Biaya operasional lainnya.</li>
                  </ul>
                  <p className="pt-2">Dengan mengetahui seluruh biaya, pelaku usaha dapat menentukan harga jual yang tepat sehingga usaha tetap memperoleh keuntungan.</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-tertiary/20 relative z-10">
                <span className="text-xs font-semibold text-tertiary">Biaya Apa Saja?</span>
              </div>
            </div>

            {/* 5. Revenue Streams */}
            <div className="bg-tertiary-container/10 backdrop-blur-[10px] p-8 rounded-3xl flex flex-col group shadow-[0px_4px_20px_rgba(44,62,80,0.08)] hover:shadow-[0px_8px_30px_rgba(44,62,80,0.15)] transition-all hover:-translate-y-1 border border-outline-variant/30 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 text-9xl font-bold text-tertiary/5 group-hover:text-tertiary/10 transition-colors pointer-events-none">5</div>
              <div className="mb-4 flex-grow relative z-10">
                <h4 className="font-bold text-on-surface text-xl">REVENUE STREAMS</h4>
                <h5 className="font-semibold text-on-surface-variant text-sm mb-4">(SUMBER PENDAPATAN)</h5>
                <div className="text-sm text-on-surface-variant space-y-3">
                  <p>Revenue Streams merupakan semua sumber pemasukan yang diperoleh dari usaha.</p>
                  <p className="font-bold text-on-surface">Contohnya:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Penjualan produk hasil daur ulang.</li>
                    <li>Penjualan minyak jelantah kepada mitra pengolah.</li>
                    <li>Penjualan pupuk atau Eco Enzyme.</li>
                    <li>Pelatihan pengelolaan sampah.</li>
                  </ul>
                  <p className="pt-2">Semakin beragam sumber pendapatan, semakin baik ketahanan usaha.</p>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-tertiary/20 relative z-10">
                <span className="text-xs font-semibold text-tertiary">Dapat Uang Darimana?</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

