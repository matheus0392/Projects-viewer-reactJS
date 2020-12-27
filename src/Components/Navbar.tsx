import React from 'react'
import { useState, useContext } from "react"
import PropTypes from 'prop-types'
import { Button, Col } from 'reactstrap';

import DropdownBox from '@/src/Components/DropdownBox'
import ConfigContext from "@/src/ConfigContext"
import Translate from '@/src/Util/Translate'

const br_flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
const fr_flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png'
const usa_flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png'

const Navbar = (props) => {
    //const [showNotifications, setShowNotifications] = useState(false)
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
                                //setShowNotifications(false)
                            }}>
                                <img style={{ maxWidth: '30px', height: '21px', marginRight: '5px' }} src={br_flag} />
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
                                //setShowNotifications(false)
                            }}>
                                <img style={{ maxWidth: '30px', height: '21px', marginRight: '5px' }} src={fr_flag} />
                                <span> {Translate('fr')}</span>
                            </Button>
                        </span>
                    </div>
                    <div>
                        <span>
                            <Button color="secondary" onClick={() => {
                                setConfig({ language: 'en' })
                                localStorage.setItem("config", JSON.stringify({ language: 'en' }))
                                setShowMenu(false)
                                //setShowNotifications(false)
                            }}>
                                <img style={{ maxWidth: '30px', height: '21px', marginRight: '5px' }} src={usa_flag} />
                                <span> {Translate('en')}</span>
                            </Button>
                        </span>
                    </div>
                </div>
            </DropdownBox>
        );
    }

    const getFlag = () => {
        if (language == undefined || language == 'pt') {
            return <img style={{ maxWidth: '30px' }} src={br_flag} />
        } else if (language == 'fr') {
            return <img style={{ maxWidth: '30px' }} src={fr_flag} />
        } else if (language == 'en') {
            return <img style={{ maxWidth: '30px' }} src={usa_flag} />
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
