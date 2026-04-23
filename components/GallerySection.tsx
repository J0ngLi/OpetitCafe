import Image from "next/image";
import { TranslationDictionary } from "@/types";

interface GallerySectionProps {
  t: TranslationDictionary;
}

const galleryImages = [
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&w=900&q=80"
];

export default function GallerySection({ t }: GallerySectionProps) {
  return (
    <section id="gallery" className="section-wrap">
      <div className="fade-up">
        <p className="text-xs uppercase tracking-[0.2em] text-olive">Gallery</p>
        <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">{t.gallery.title}</h2>
        <p className="mt-4 max-w-2xl text-walnut">{t.gallery.subtitle}</p>
      </div>

      <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryImages.map((src, index) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-2xl ${
              index % 3 === 0 ? "md:col-span-2 md:row-span-2 md:h-[24rem]" : "h-44 md:h-56"
            }`}
          >
            <Image
              src={src}
              alt="O'PETIT CAFE gallery"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
