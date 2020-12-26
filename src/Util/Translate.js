import PT from '@/src/Text/pt'
import EN from '@/src/Text/en'
import FR from '@/src/Text/fr'
import { useContext } from "react"
import ConfigContext from "@/src/ConfigContext"


const Translate = (msg) => {
    const { language } = useContext(ConfigContext)
    if (msg == null) {
        return '';
    }

    const properties = msg.split('.')
    let propertie

    switch (language) {
        default:
        case 'pt':
            propertie = PT; break;
        case 'fr':
            propertie = FR; break;
        case 'en':
            propertie = EN; break;
    }

    for (let i = 0; i < properties.length; i++) {
        propertie = propertie[properties[i]]
    }

    return propertie
}


export default Translate 