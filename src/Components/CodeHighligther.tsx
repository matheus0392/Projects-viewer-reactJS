import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as theme from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from "styled-components"
/*
dark --bordas marron
dracula -- fundo mesma cor
shades-of-purple,--colorido --preto
tomorrow, --laranja --preto
twilight, --preto
vs, --branco
*/

const StledDiv = styled.div`
    .code{
        font-size: 0.95rem !important;
        max-width: 95vw;
    }
`

const CodeHighligther = (props) => {
    const { code, style } = props

    return (
        <StledDiv>
            <SyntaxHighlighter className="code" language="java" style={theme['tomorrow']}>
                {code}
            </SyntaxHighlighter>
        </StledDiv>
    );
};

export default CodeHighligther