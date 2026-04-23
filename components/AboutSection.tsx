import { TranslationDictionary } from "@/types";

interface AboutSectionProps {
  t: TranslationDictionary;
}

export default function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="section-wrap">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <article className="fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-olive">About</p>
          <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">{t.about.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-walnut">{t.about.text}</p>
        </article>
        <aside className="glass-card fade-up">
          <p className="text-sm text-walnut">
            Nazhimedenova 16 B, Astana, Kazakhstan 010000
            <br />
            <span className="mt-2 inline-block text-charcoal">Breakfast • Pasta • Desserts • Coffee</span>
          </p>
        </aside>
      </div>
    </section>
  );
}
