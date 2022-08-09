import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { TRANSLATIONS_CYM } from './cym/translations';
import { TRANSLATIONS_EN } from './en/translations';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      format: function (value) {
        if (typeof value === 'number')
          return new Intl.NumberFormat().format(value);
        return value;
      },
    },
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      cym: {
        translation: TRANSLATIONS_CYM,
      },
    },
  });

i18n.changeLanguage('cym');

export default i18n;
