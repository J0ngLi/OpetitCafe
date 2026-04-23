import { TranslationDictionary } from "@/types";

interface HeroProps {
  t: TranslationDictionary;
  whatsappLink: string;
}

export default function Hero({ t, whatsappLink }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-walnut/10 bg-[url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/45 to-charcoal/25" />
      <div className="section-wrap relative py-28 md:py-36">
        <div className="max-w-2xl fade-up">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-beige">European Cuisine Cafe</p>
          <h1 className="font-serif text-4xl leading-tight text-white md:text-6xl">O&apos;PETIT CAFE</h1>
          <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-[#d9b87c]"
            >
              {t.hero.menuCta}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/70 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {t.hero.reserveCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
