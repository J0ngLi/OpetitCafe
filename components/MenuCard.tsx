import Image from "next/image";
import { Locale, MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
  locale: Locale;
}

export default function MenuCard({ item, locale }: MenuCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-walnut/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl text-charcoal">{item.name[locale]}</h3>
          <span className="rounded-full bg-beige px-3 py-1 text-sm font-semibold text-walnut">{item.price}</span>
        </div>
        <p className="text-sm leading-6 text-walnut">{item.description[locale]}</p>
      </div>
    </article>
  );
}
