import { useState, useEffect } from "react"
import styled from "styled-components"



const StyledConsole = styled.div`
    color:white;
    background-color:black;
    padding: 1rem;
    max-height: 20rem;
    overflow-x: hidden;
    border: solid white 2px;
    position: relative;
`

const Tab = styled.div`
    background-color: black;
    color: white;
    width: 8rem;
    padding: 0 0 0 1rem;
    cursor:auto;
    min-width: 7rem;
    position: relative;
    top: 2px;

    &.active{
        border: white solid 2px;
        border-radius: 4px;
    }

    &.inactive{
        border-bottom: white 4px solid;
        background-color: #777;
        border-radius: 4px;
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
const Close = styled.span`
    float: right;
    padding: 0 0.3rem;
    cursor: pointer !important;
`

const Console = ({ output, onRemove }) => {

    const [active, setActive] = useState(0);

    useEffect(() => {
        setActive(output.length - 1)
    }, [output])

    return <div>
        <Tabs>
            {output.map((tab, key) => {
                return <Tab
                    key={key}
                    onClick={() => { setActive(key) }}
                    className={key === active ? "active" : 'inactive'}>
                    <span>{`C:\\>_`}</span>
                    <Close onClick={() => { onRemove(key) }}>&#x2715;</Close>
                </Tab>
            })}
        </Tabs>
        <StyledConsole dangerouslySetInnerHTML={{ __html: output[active] }} />
    </div>
}

export default Console