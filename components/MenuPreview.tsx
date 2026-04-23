import { Locale, MenuCategory, MenuItem, TranslationDictionary } from "@/types";
import MenuCard from "./MenuCard";

interface MenuPreviewProps {
  items: MenuItem[];
  category: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
  locale: Locale;
  t: TranslationDictionary;
}

const categories: MenuCategory[] = ["breakfast", "pasta", "desserts", "drinks"];

export default function MenuPreview({
  items,
  category,
  onCategoryChange,
  locale,
  t
}: MenuPreviewProps) {
  const filtered = items.filter((item) => item.category === category);

  return (
    <section id="menu" className="section-wrap">
      <div className="fade-up">
        <p className="text-xs uppercase tracking-[0.2em] text-olive">Menu</p>
        <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">{t.menu.title}</h2>
        <p className="mt-4 max-w-2xl text-walnut">{t.menu.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((entry) => (
            <button
              key={entry}
              onClick={() => onCategoryChange(entry)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                category === entry
                  ? "bg-walnut text-white shadow"
                  : "bg-white text-walnut hover:bg-beige"
              }`}
            >
              {t.menu.categories[entry]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
