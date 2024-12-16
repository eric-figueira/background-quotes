import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { translations } from "./locales"

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    fallbackLng: 'en',
    defaultNS: 'translations',
  })

export default i18n
