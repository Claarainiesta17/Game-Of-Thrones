import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    es: {
        translation: {
            title: "JUEGO DE TRONOS",
            characters: "PERSONAJES",
            houses: "CASAS",
            cronology: "CRONOLOGIA",
            find: "BUSCAR",
            name: "NOMBRE",
            house: "CASA",
        }
    },
    en: {
        translation: {
            title: "GAMES OF THRONES",
            characters: "CHARACTERS",
            houses: "HOUSES",
            cronology: "CRONOLOGY",
            find: "FIND",
            name: "NAME",
            house: "HOUSE",

        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        interpolation: {
            escapeValue: false // react already safes from xss
        },

    });

export default i18n;