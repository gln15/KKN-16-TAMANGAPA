export default function SectionPlaceholder({ id, title, desc }: { id: string, title: string, desc: string }) {
  return (
    <section className="pt-8 pb-20 px-margin-desktop bg-surface" id={id}>
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-headline-xl text-headline-xl text-primary mb-4">{title}</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {desc}
        </p>
      </div>
    </section>
  );
}
