export default function Maggot() {
  return (
    <section className="py-section-gap px-margin-desktop" id="maggot">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold text-2xl">
                MB
              </div>
              <h2 className="font-headline-lg text-headline-lg text-tertiary">Maggot BSF Lifecycle</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:left-8 before:top-8 before:bottom-8 before:w-0.5 before:bg-outline-variant/30">
              <div className="flex gap-8 relative">
                <div className="w-16 h-16 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center border-4 border-background z-10 font-bold text-tertiary">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-lg">Egg Stage</h4>
                  <p className="text-on-surface-variant">Eggs are laid in wood crevices and hatch within 3-4 days into tiny larvae.</p>
                </div>
              </div>
              <div className="flex gap-8 relative">
                <div className="w-16 h-16 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center border-4 border-background z-10 font-bold text-tertiary">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-lg">Growth (Waste Consumption)</h4>
                  <p className="text-on-surface-variant">Larvae consume organic waste voraciously for 14-21 days, growing rapidly.</p>
                </div>
              </div>
              <div className="flex gap-8 relative">
                <div className="w-16 h-16 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center border-4 border-background z-10 font-bold text-tertiary">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-lg">Prepupa & Pupa</h4>
                  <p className="text-on-surface-variant">Larvae stop eating and migrate to a dry area to begin their transformation.</p>
                </div>
              </div>
              <div className="flex gap-8 relative">
                <div className="w-16 h-16 rounded-full bg-surface-container flex-shrink-0 flex items-center justify-center border-4 border-background z-10 font-bold text-tertiary">
                  04
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adult BSF</h4>
                  <p className="text-on-surface-variant">The fly emerges, lives for 5-8 days without eating, only to mate and lay eggs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-tertiary/10 rounded-[40px] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-surface-container-lowest p-4 rounded-[40px] shadow-xl border border-outline-variant/20">
                <img className="w-full h-[500px] object-cover rounded-[32px]" alt="Maggot BSF" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuSO9KxYYJIhU5dZDNBeUVDKLKrUzPhmj46uLwKKpyHdwzZEGsK85x9Pxh5qMHeqEAqZb5vFd5Sj0UBLiK5BKmy_vFA4FJjT4JEcrAnPACRaPvaVIHcbJjbI0IBsSCboubHTu5FX2GwTYilNB-9URf4FX6rk1PHF-zuCZb6Fi6KPGklaNdH9qa9RVs9b8ExSKaYK0tVq6RRFXVhje2DPznpXB8pk-83mbbA4Ea6n16Sh6RFDK7_2pmAcOjbeKV9ayYA6hKw8m2dA3I" />
                <div className="absolute bottom-10 left-10 right-10 glass-card p-6 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-label-md text-label-md text-tertiary">Processing Capacity</p>
                      <p className="font-stat-number text-stat-number text-tertiary">2-5 kg/day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
