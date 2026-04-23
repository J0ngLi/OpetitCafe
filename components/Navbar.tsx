import { TranslationDictionary, Locale } from "@/types";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  t: TranslationDictionary;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function Navbar({ t, locale, onLocaleChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-walnut/10 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="font-serif text-lg tracking-wide text-charcoal">
          O&apos;PETIT CAFE
        </a>

        <div className="hidden items-center gap-7 text-sm text-walnut md:flex">
          <a href="#about" className="transition hover:text-charcoal">
            {t.nav.about}
          </a>
          <a href="#menu" className="transition hover:text-charcoal">
            {t.nav.menu}
          </a>
          <a href="#gallery" className="transition hover:text-charcoal">
            {t.nav.gallery}
          </a>
          <a href="#services" className="transition hover:text-charcoal">
            {t.nav.services}
          </a>
          <a href="#contact" className="transition hover:text-charcoal">
            {t.nav.contact}
          </a>
        </div>

        <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
      </nav>
    </header>
  );
}
