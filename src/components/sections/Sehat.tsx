export default function Sehat() {
  return (
    <div className="pt-4 pb-20 px-margin-desktop bg-surface min-h-screen">
      <div className="max-w-container-max mx-auto">

        {/* PHBS Section */}
        <div className="mt-12">
          <div className="text-center mb-16">
            <h1 className="font-headline-xl text-5xl text-primary mb-6 font-bold">Perilaku Hidup Bersih dan Sehat (PHBS)</h1>
            <p className="font-body-lg text-on-surface-variant max-w-4xl mx-auto leading-relaxed">
              Perilaku Hidup Bersih dan Sehat (PHBS) adalah serangkaian perilaku yang dilakukan atas kesadaran sendiri untuk menjaga kesehatan, mencegah penyakit, serta menciptakan lingkungan yang bersih, sehat, dan nyaman. Penerapan PHBS juga berkontribusi dalam mengurangi dampak perubahan iklim melalui pengelolaan lingkungan yang lebih baik.
            </p>
          </div>

          <div className="space-y-12">
            {/* Kebersihan Lingkungan */}
            <div className="flex flex-col lg:flex-row gap-0 bg-secondary/5 rounded-[32px] overflow-hidden border border-secondary/20 hover:shadow-lg transition-shadow duration-300">
              <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-on-surface mb-6">1. Menjaga Kebersihan Lingkungan</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Menjaga kebersihan lingkungan dapat dilakukan dengan membuang sampah pada tempatnya, memilah sampah organik dan anorganik, mengurangi penggunaan plastik sekali pakai, serta membersihkan saluran air secara rutin. Lingkungan yang bersih membantu mencegah penyebaran penyakit, mengurangi risiko banjir, dan mendukung kelestarian lingkungan sebagai upaya adaptasi terhadap perubahan iklim.
                </p>
              </div>
              <div className="w-full lg:w-1/2 self-stretch lg:self-center">
                <img
                  src="/images/kebersihan-lingkungan.jpeg"
                  alt="Menjaga Kebersihan Lingkungan"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Kebersihan Diri */}
            <div className="flex flex-col lg:flex-row-reverse gap-0 bg-primary/5 rounded-[32px] overflow-hidden border border-primary/20 hover:shadow-lg transition-shadow duration-300">
              <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-on-surface mb-6">2. Menjaga Kebersihan Diri</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Menjaga kebersihan diri meliputi mandi secara teratur, mencuci tangan dengan sabun sebelum makan dan setelah beraktivitas, serta menjaga kesehatan gigi dan mulut. Sikat gigi minimal dua kali sehari (setelah sarapan dan sebelum tidur), gunakan pasta gigi berfluoride, bersihkan lidah, dan lakukan pemeriksaan gigi setiap 6 bulan sekali. Kesehatan gigi dan mulut yang baik dapat mencegah karies, penyakit gusi, bau mulut, serta menjaga kesehatan tubuh secara keseluruhan.
                </p>
              </div>
              <div className="w-full lg:w-1/2 self-stretch lg:self-center">
                <img
                  src="/images/kebersihan-diri.jpeg"
                  alt="Menjaga Kebersihan Diri"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
