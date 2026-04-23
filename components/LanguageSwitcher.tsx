import { Locale } from "@/types";

interface LanguageSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

const options: Array<{ code: Locale; label: string }> = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "kk", label: "KZ" }
];

export default function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex rounded-full border border-walnut/20 bg-white/70 p-1 shadow-sm backdrop-blur">
      {options.map((option) => (
        <button
          key={option.code}
          onClick={() => onChange(option.code)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition ${
            locale === option.code
              ? "bg-walnut text-white"
              : "text-walnut hover:bg-white hover:text-charcoal"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
