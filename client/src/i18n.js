import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DateTime } from 'luxon';

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    ns:['translation'],
    defaultNS : 'translation',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    /** SOLUTION ALTERBATIVE A L'UTILISATION DU NAME-SPACE ns et defaultNS CI-DESSUS **/
    // backend: {
    //   // for all available options read the backend's repository readme file
    //   loadPath: '/locales/{{lng}}/{{ns}}.json'
    // }

  });

  // new usage
  i18n.services.formatter.add('DATE_HUGE', (value, lng, options) => {
  return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime.DATE_HUGE)
  });

export default i18n;
