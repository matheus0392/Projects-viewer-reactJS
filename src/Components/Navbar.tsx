import React from 'react'
import { useState, useContext } from "react"
import PropTypes from 'prop-types'
import { Button, Col } from 'reactstrap';
import Styled from 'styled-components'

import DropdownBox from '@/src/Components/DropdownBox'
import ConfigContext from "@/src/ConfigContext"
import { useTranslation } from 'react-i18next'

const br_flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
const fr_flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png'
const usa_flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png'

const languages = [
    { language: 'pt', flag: br_flag },
    { language: 'fr', flag: fr_flag },
    { language: 'en', flag: usa_flag }
]

const StyledButton = Styled(Button)`
    height: 2.5rem;
    width: 4rem;
`

const StyledImage = Styled.img`
   /* max-width: 36px;
    min-width: 36px;
    max-height: 24px;
    min-height: 24px;
    */
   width: 2.5rem;
    height: -webkit-fill-available;
`



const Navbar = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const { language } = useContext(ConfigContext)
    const { setConfig } = props

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    };

    const menu = () => {
        return (
            <div style={{ flex: 1 }}>
                <span >
                    {(!showMenu || true)
                        && (
                            <StyledButton onClick={() => {
                                setShowMenu(!showMenu)
                            }}
                            >
                                {getFlag()}
                            </StyledButton>
                        )
                    }
                    {showMenu ? openedMenu() : ''}
                </span>
            </div>
        );
    }


    const openedMenu = () => {
        return (
            <DropdownBox
                className="menu-dropdown"
                onClose={() => {
                    setShowMenu(false)
                }}
            >
                {languages.map((lang, key) => {
                    return <div key={key}>
                        <div>
                            <span>
                                <StyledButton color="secondary" onClick={() => {
                                    setConfig({ language: lang.language })
                                    changeLanguage(lang.language)
                                    localStorage.setItem("config", JSON.stringify({ language: lang.language }))
                                    setShowMenu(false)
                                }}>
                                    <StyledImage src={lang.flag} />
                                    <span>{` ${t(lang.language)}`}</span>
                                </StyledButton>
                            </span>
                        </div>
                    </div>
                })}
            </DropdownBox>
        );
    }

    const getFlag = () => {
        if (language === 'pt' || language === undefined) {
            return <StyledImage src={br_flag} />
        } else if (language === 'fr') {
            return <StyledImage src={fr_flag} />
        } else if (language === 'en') {
            return <StyledImage src={usa_flag} />
        }
    }

    return (
        <nav className="navbar justify-content-between">
            <div className="container-fluid pl-0 mobile-padding">
                <Col md={12} style={{ display: 'flex' }}>
                    <div style={{ flex: 7 }} />
                    {menu()}
                </Col>
            </div>
        </nav >
    )
}

export default Navbar;
