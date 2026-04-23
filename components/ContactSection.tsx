import { TranslationDictionary } from "@/types";

interface ContactSectionProps {
  t: TranslationDictionary;
  whatsappLink: string;
}

export default function ContactSection({ t, whatsappLink }: ContactSectionProps) {
  return (
    <section id="contact" className="section-wrap">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-olive">Contact</p>
          <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-walnut">{t.contact.subtitle}</p>

          <div className="mt-7 space-y-2">
            <p className="text-sm uppercase tracking-[0.15em] text-olive">{t.contact.addressLabel}</p>
            <p className="text-walnut">{t.contact.addressValue}</p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-105"
          >
            {t.contact.whatsapp}
          </a>
        </article>

        <aside className="glass-card fade-up">
          <div className="flex h-full min-h-72 items-center justify-center rounded-2xl border border-dashed border-walnut/30 bg-beige/50 p-4 text-center text-walnut">
            {t.contact.mapPlaceholder}
          </div>
        </aside>
      </div>
    </section>
  );
}
