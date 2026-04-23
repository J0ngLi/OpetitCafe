"use client";

import { useMemo, useState } from "react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import menuData from "@/data/menu.json";
import { translations } from "@/data/translations";
import { Locale, MenuCategory, MenuItem } from "@/types";

const whatsappLink = "https://wa.me/77084251968";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("ru");
  const [category, setCategory] = useState<MenuCategory>("breakfast");

  const t = useMemo(() => translations[locale], [locale]);
  const items = menuData as MenuItem[];

  return (
    <main>
      <Navbar t={t} locale={locale} onLocaleChange={setLocale} />
      <Hero t={t} whatsappLink={whatsappLink} />
      <AboutSection t={t} />
      <MenuPreview
        items={items}
        category={category}
        onCategoryChange={setCategory}
        locale={locale}
        t={t}
      />
      <GallerySection t={t} />
      <ServicesSection t={t} />
      <ContactSection t={t} whatsappLink={whatsappLink} />
      <Footer t={t} locale={locale} onLocaleChange={setLocale} />
      <FloatingButtons t={t} whatsappLink={whatsappLink} />
    </main>
  );
}
