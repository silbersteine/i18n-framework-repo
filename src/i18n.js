import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
        .init({
            debug: true,
            fallbackLng: 'en',
            resources: {
                en: {
                    translation: {
                        learnReact: 'Learn React',
                        description: ' Edit <1>src/App.js</1> and save to reload.'
                    }
                },
                de: {
                    translation: {
                        learnReact: 'Lerne React',
                        description: 'Editiere <1>src/App.js</1> und speichere um neu zu laden.'
                    }
                }
            }
        })