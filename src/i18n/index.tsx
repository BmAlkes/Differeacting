import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enJson from "./locale/en.json";
import heJson from "./locale/he.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: "he",
    fallbackLng: "en",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      he: heJson,
      en: enJson,
    },
  });

export default i18n;
