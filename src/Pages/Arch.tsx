import { Link } from 'react-router-dom'

import logo from '/assets/logo.svg'
import '@/src/Styles/Home'

import Translate from '@/src/Util/Translate'

const annotation = 'spring_batch.annotation'
const cdi = 'spring_batch.cdi'
const method = 'spring_batch.metodos'

function Arch() {
    return (
        <div className="App">
            <header className="App-header">

                <Link to={"/"}>Home</Link>

                <div>@EnableBatchProcessing</div>
                <div>{Translate(annotation + '.EnableBatchProcessing')}</div>

                <img src={logo} className="App-logo" alt="logo" />

                <p> Architecture</p>
            </header>
        </div>
    );
}

export default Arch