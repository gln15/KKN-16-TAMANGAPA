export default function Newsletter() {
  return (
    <section className="pt-8 pb-20 px-margin-desktop bg-primary-container text-on-primary-container overflow-hidden relative">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-nature-leaf/20 rounded-full blur-3xl"></div>
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <h2 className="font-headline-xl text-headline-xl mb-6">Ready to Join the Movement?</h2>
        <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-90">Get weekly updates on sustainable living, workshop schedules, and community waste management tips directly in your inbox.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input className="flex-grow rounded-lg bg-surface/10 border-white/20 text-white placeholder:text-white/60 px-6 py-4 focus:ring-2 focus:ring-primary-fixed outline-none" placeholder="Enter your email address" type="email" />
          <button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform active:scale-95">Subscribe Now</button>
        </form>
      </div>
    </section>
  );
}
