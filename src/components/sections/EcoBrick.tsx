export default function EcoBrick() {
  return (
    <section className="py-section-gap px-margin-desktop bg-surface-container-low" id="eco-brick">
      <div className="max-w-container-max mx-auto">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-2xl">
              EB
            </div>
            <div>
              <h2 className="font-headline-lg text-headline-lg text-secondary">Eco Brick Construction</h2>
              <p className="text-on-surface-variant">Transforming non-recyclable plastic into durable building blocks.</p>
            </div>
          </div>
          <button className="border-2 border-secondary text-secondary font-bold px-6 py-2 rounded-full hover:bg-secondary hover:text-on-secondary transition-all">Download PDF Guide</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-secondary font-stat-number mb-4 opacity-30 group-hover:opacity-100 transition-opacity">01</div>
            <h4 className="font-bold text-lg mb-2">Clean & Dry</h4>
            <p className="text-on-surface-variant font-body-md">Wash and dry all soft plastics to prevent bacterial growth inside the brick.</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-secondary font-stat-number mb-4 opacity-30 group-hover:opacity-100 transition-opacity">02</div>
            <h4 className="font-bold text-lg mb-2">Cut Into Bits</h4>
            <p className="text-on-surface-variant font-body-md">Cut plastic into smaller pieces to allow for higher density and easier packing.</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-secondary font-stat-number mb-4 opacity-30 group-hover:opacity-100 transition-opacity">03</div>
            <h4 className="font-bold text-lg mb-2">Pack Tight</h4>
            <p className="text-on-surface-variant font-body-md">Use a wooden stick to compress the plastic into a 500ml or 1.5L PET bottle.</p>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-secondary font-stat-number mb-4 opacity-30 group-hover:opacity-100 transition-opacity">04</div>
            <h4 className="font-bold text-lg mb-2">Weight Check</h4>
            <p className="text-on-surface-variant font-body-md">Ensure the brick meets the minimum density (0.33g/ml) for construction safety.</p>
          </div>
        </div>
        <div className="mt-12 rounded-3xl overflow-hidden glass-card p-1">
          <img className="w-full h-80 object-cover rounded-[22px]" alt="Eco Bricks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAKmP6EdoNwipxvUz20lCvGB6e7qp3qDN7FtYS4xusuJYZYsXT6uq_vq8ZPGqTEdjXcw84ZMUOw4HrXwRzvrKmX_FKGoyFdq7ED8M3w-lhc5OjIHxyxMCle5EK_YIKxiwGvsOldXYFaCV7jawKpe2vvEoMFrjz-3VsbmKmq3oxOpRabDjQGjGxxQsOFOs4Zs-y4_dkJCD5QDBgeVTkkhsRePFVUErBbIXmHaUphRoDVOqY9fClXW3ICZM6IDsOKNp9F6ijupnZFUoB" />
        </div>
      </div>
    </section>
  );
}
