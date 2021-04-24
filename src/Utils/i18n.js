import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import pt_ from '@/src/Text/pt'
import fr_ from '@/src/Text/fr'
import en_ from '@/src/Text/en'

i18n.use(initReactI18next)
    .init({
        resources: {
            pt: { translation: pt_ },
            en: { translation: en_ },
            fr: { translation: fr_ },
        },
        lng: 'pt',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;