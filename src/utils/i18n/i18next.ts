import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ru from "./locales/ru/translation.json";

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
    });

export default i18n;
