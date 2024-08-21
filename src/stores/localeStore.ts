import { defineStore } from "pinia";
import localeEng from "@/locale/eng.json";
import localeMev from "@/locale/mev.json";

export const useLocaleStore = defineStore({
    id: "locale",
    state: () => ({
        activeLocale: localeEng,
        locales: {
            eng: localeEng,
            mev: localeMev
        } as { [key: string]: any },
    }),
    actions: {
        switchLocale() {
            if (this.activeLocale === this.locales.eng) {
                this.activeLocale = this.locales.mev;
            } else {
                this.activeLocale = this.locales.eng;
        }},
        setLocale(locale: string) {
            console.log('locale', locale);
            console.log('this.locales[locale]', this.locales[locale]);
            
            
            if (this.locales[locale] !== this.activeLocale) {
                this.activeLocale = this.locales[locale];
            }
        }

    },
});