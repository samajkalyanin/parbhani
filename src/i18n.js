import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import mr from './locales/mr/translation.json';
import en from './locales/en/translation.json';

const resources = {
  mr: {
    translation: mr
  },
  en: {
    translation: en
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'mr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
