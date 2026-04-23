import { TranslationDictionary } from "@/types";

interface ServicesSectionProps {
  t: TranslationDictionary;
}

const iconClass =
  "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-beige text-lg text-walnut";

export default function ServicesSection({ t }: ServicesSectionProps) {
  return (
    <section id="services" className="section-wrap">
      <div className="fade-up">
        <p className="text-xs uppercase tracking-[0.2em] text-olive">Services</p>
        <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">{t.services.title}</h2>
        <p className="mt-4 max-w-2xl text-walnut">{t.services.subtitle}</p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <article className="glass-card">
          <span className={iconClass}>☀️</span>
          <p className="text-sm text-walnut">{t.services.breakfast}</p>
        </article>
        <article className="glass-card">
          <span className={iconClass}>💼</span>
          <p className="text-sm text-walnut">{t.services.businessLunch}</p>
        </article>
        <article className="glass-card">
          <span className={iconClass}>🚚</span>
          <p className="text-sm text-walnut">{t.services.delivery}</p>
        </article>
        <article className="glass-card">
          <span className={iconClass}>🥂</span>
          <p className="text-sm text-walnut">{t.services.banquets}</p>
        </article>
      </div>
    </section>
  );
}
