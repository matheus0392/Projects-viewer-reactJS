import React from 'react'
import { useState, useEffect, useContext } from "react"
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'reactstrap';
import DropdownBox from '@/src/Components/DropdownBox'

import ConfigContext from "@/src/ConfigContext"


import { themeLowGray } from '@/src/Styles/theme'



import Translate from '@/src/Util/Translate'


const Navbar = (props) => {
    const [showNotifications, setShowNotifications] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [closed, setClosed] = useState(true)
    const { language } = useContext(ConfigContext)
    const { setConfig } = props

    const menu = () => {
        return (
            <div style={{ flex: 1 }}>
                <span >
                    {(!showMenu || true)
                        && (
                            <Button onClick={() => {
                                if (!closed) {
                                    setShowMenu(true)
                                } else {
                                    setShowMenu(true)
                                    setClosed(false)
                                }
                            }}
                            >
                                <div>{Translate('language')}</div>
                                {getFlag()}
                            </Button>
                        )
                    }
                    {showMenu && !closed ? openedMenu() : ''}
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
                    setClosed(true)
                }}
            >
                <div>
                    <div>
                        <span>
                            <Button color="secondary" onClick={() => {
                                setConfig({ language: 'pt' })
                                localStorage.setItem("config", JSON.stringify({ language: 'pt' }))
                                setShowMenu(false)
                                setShowNotifications(false)
                            }}>
                                <img style={{ maxWidth: '30px' }} src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" />
                                <span> {Translate('pt')}</span>
                            </Button>
                        </span>
                    </div>
                    <div>
                        <span>
                            <Button color="secondary" onClick={() => {
                                setConfig({ language: 'fr' })
                                localStorage.setItem("config", JSON.stringify({ language: 'fr' }))
                                setShowMenu(false)
                                setShowNotifications(false)
                            }}>
                                <img style={{ maxWidth: '30px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png" />
                                <span> {Translate('fr')}</span>
                            </Button>
                        </span>
                    </div>
                </div>
            </DropdownBox>
        );
    }

    const getFlag = () => {
        if (language == undefined || language == 'pt') {
            return <img style={{ maxWidth: '30px' }} src="https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg" />
        } else if (language == 'fr') {
            return <img style={{ maxWidth: '30px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png" />
        }
    }

    return (
        <nav className="navbar navbar--90 justify-content-between">
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
