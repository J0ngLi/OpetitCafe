import { TranslationDictionary } from "@/types";

interface FloatingButtonsProps {
  t: TranslationDictionary;
  whatsappLink: string;
}

export default function FloatingButtons({ t, whatsappLink }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
      >
        <span>💬</span>
        {t.floating.whatsapp}
      </a>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-[#2490EA] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
      >
        <span>✈️</span>
        {t.floating.telegram}
      </button>
    </div>
  );
}
