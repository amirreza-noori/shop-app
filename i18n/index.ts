import i18n, { dir } from "i18next";
import { initReactI18next } from "react-i18next";
import fa from "./fa.json";

i18n.use(initReactI18next).init({
	resources: {
		fa: {
			translation: fa,
			dir: "rtl",
		},
	},
	lng: "fa",
	fallbackLng: "fa",

	interpolation: {
		escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
	},
});

export const direction = i18n.dir();

export default i18n;
