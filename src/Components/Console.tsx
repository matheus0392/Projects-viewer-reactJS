import { useState, useEffect } from "react"
import styled from "styled-components"
import { useTranslation } from 'react-i18next'
import _ from 'lodash';

const StyledConsole = styled.div`
    color:white;
    background-color:black;
    padding: 1rem;
    max-height: 20rem;
    overflow-x: hidden;
    border: solid white 2px;
    position: relative;
    font-family: monospace;
    font-size: 0.9rem;

    :after{
        content:'|';
        color:white;
        animation-name: mark;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
    }

    @keyframes mark {
        0%   {opacity:1}
        25%  {opacity:0}
        50%  {opacity:0}
        75%  {opacity:1}
        100% {opacity:1}
      }
`

const Tab = styled.div`
    display: flex;
    margin: 0 1px;
    color: white;
    width: 8rem;
    padding: 0 0 0 0.5rem;
    cursor: auto;
    min-width: 7rem;
    position: relative;
    top: 2px;

    &.active{
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(102, 102, 102) 100%);
        border: white solid 2px;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        border-bottom: none;
        margin: 0;
        top: 1px;
    }

    &.inactive{
        background-color: #777;
        background: linear-gradient(0deg, rgb(150, 150, 150) 0%, rgb(102, 102, 102,1) 100%);
        span {
            cursor: pointer !important;
        }
        :hover {
            background: linear-gradient(0deg, rgb(150, 150, 150, 0.8) 0%, rgb(102, 102, 102, 0.8) 100%);
        }
        border-bottom: white 4px solid;

        border-top-right-radius: 4px;
        border-top-left-radius: 4px;

        &.new{
            //animation-name: new2;
            //animation-duration: 5s;
            //animation-iteration-count: infinite;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,175,0,1) 100%);
            :hover {
                background: linear-gradient(0deg, rgba(30,30,30,0.8) 0%, rgba(255,175,0,1) 100%);
            }
        }
    }

    span{
        cursor: context-menu;
    }
`
const Tabs = styled.div`
    display: flex;
    z-index: 1;
    overflow-y: hidden;
    position: relative;
    top: 2px;
`

const Span1 = styled.span`
    flex:1;
`
const Span2 = styled.span`
    flex:3;
    text-align: center;
`

const Close = styled.span`
    float: right;
    padding: 0 0.3rem;
    cursor: pointer !important;
`
var lastOutput;
const Console = ({ output, onRemove }) => {

    const [active, setActive] = useState(0);
    const [tabs, setTabs] = useState(0);
    const [newContent, setNewContent] = useState([]);   //tab inativa com novas informações => piscar
    const { t } = useTranslation()
    const [out, setOut] = useState([]);

    useEffect(() => {
        if (output) {
            setOut(output.filter(each => each != null))
        }
    }, [output])

    useEffect(() => {
        if (out.length > 0) {
            if (out.length != tabs) {
                setActive(out[out.length - 1].index)
                setTabs(out.length)
            }

            out.forEach(element => {
                if (element) {
                    let last = lastOutput.find(each => each && each.index === element.index)

                    if (last && last.index == active) {
                        newContent[last.index] = false
                    }

                    if (last && last.message.length != element.message.length) {
                        newContent[element.index] = true
                        setNewContent(_.cloneDeep(newContent))
                    }
                }
            });
        }
        lastOutput = out
    }, [out])

    useEffect(() => {
        newContent[active] = false
        setNewContent(_.cloneDeep(newContent));
    }, [active])

    const getClass = (index) => {
        if (index === active) {
            return "active"
        }

        let classe = 'inactive '

        if (newContent[index]) {
            classe += 'new'
        }
        return classe
    }

    return <div>
        <Tabs>
            {out.map((tab) => {
                if (!tab) { return '' }

                return <Tab
                    key={tab.index}
                    onClick={() => {
                        newContent[active] = false;
                        setNewContent(_.cloneDeep(newContent));
                        setActive(tab.index)
                    }}
                    className={getClass(tab.index)}>
                    <Span1>{'>_'}</Span1>
                    <Span2>{`${t('aba')} ${tab.index}`}</Span2>
                    <Close onClick={() => { onRemove(tab.index) }}>&#x2715;</Close>
                </Tab>
            })}
        </Tabs>
        <StyledConsole dangerouslySetInnerHTML={
            {
                __html: out.find(each => each.index == active) != null
                    ? out.find(each => each.index == active).message : null
            }
        } />
    </div>
}

export default Console