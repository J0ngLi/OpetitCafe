import { Locale, TranslationDictionary } from "@/types";
import LanguageSwitcher from "./LanguageSwitcher";

interface FooterProps {
  t: TranslationDictionary;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Footer({ t, locale, onLocaleChange }: FooterProps) {
  return (
    <footer className="border-t border-walnut/10 bg-[#efe4d3]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <h3 className="font-serif text-xl text-charcoal">O&apos;PETIT CAFE</h3>
          <p className="mt-2 text-sm text-walnut">Nazhimedenova 16 B, Astana</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm text-walnut underline-offset-4 transition hover:underline"
          >
            {t.footer.follow}
          </a>
        </div>

        <div className="space-y-3">
          <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
          <p className="text-xs text-walnut">© {new Date().getFullYear()} O&apos;PETIT CAFE. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
