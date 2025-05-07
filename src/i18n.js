import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en', // fallback language if detected language is not available
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            about: "About Us",
            news: "News",
            login: "Login",
            signup: "Signup"
          },
          home: {
            welcome: "Welcome to Crave-Cart",
            description: "Your favorite multilingual food delivery app"
          },
          // Continue for coin, aboutus, news, etc.
        }
      },
      hi: {
        translation: {
          navbar: {
            home: "होम",
            about: "हमारे बारे में",
            news: "समाचार",
            login: "लॉग इन",
            signup: "साइन अप"
          },
          home: {
            welcome: "क्रेव-कार्ट में आपका स्वागत है",
            description: "आपका पसंदीदा बहुभाषी फूड डिलीवरी ऐप"
          },
          // Continue for coin, aboutus, news, etc.
        }
      }
    }
  })    

export default i18n;
