export type Locale = "ru" | "en" | "kk";

export type MenuCategory = "breakfast" | "pasta" | "desserts" | "drinks";

export interface LocalizedText {
  ru: string;
  en: string;
  kk: string;
}

export interface MenuItem {
  id: string;
  category: MenuCategory;
  image: string;
  price: string;
  name: LocalizedText;
  description: LocalizedText;
}

export interface TranslationDictionary {
  nav: {
    about: string;
    menu: string;
    gallery: string;
    services: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    menuCta: string;
    reserveCta: string;
  };
  about: {
    title: string;
    text: string;
  };
  menu: {
    title: string;
    subtitle: string;
    categories: Record<MenuCategory, string>;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    breakfast: string;
    businessLunch: string;
    delivery: string;
    banquets: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    whatsapp: string;
    mapPlaceholder: string;
  };
  footer: {
    follow: string;
    rights: string;
  };
  floating: {
    whatsapp: string;
    telegram: string;
  };
}
