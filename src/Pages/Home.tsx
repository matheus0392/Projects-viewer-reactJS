import { Link } from 'react-router-dom'

import logo from '/assets/logo.svg'
import '@/src/Styles/Home'


const localUrl = `${window.location.href}`
const backUrl = localUrl + "WebApi/"

function Home() {
    return (
        <div className="App">
            <header className="App-header">

                <Link to={"/arch"}> Arch</Link>
                <p >
                    <a href="https://github.com/matheus0392/Project-spring-batch/tree/project" style={{ textAlign: "center", color: 'white' }} > Matheus Nascimento </a>
                </p>
                <p >
                    <a href={`${backUrl}`} style={{ textAlign: "center", color: 'white' }} > {`${backUrl}`} </a>
                </p>
                <p >
                    <a href={`${backUrl}exec`} style={{ textAlign: "center", color: 'white' }} > {`${backUrl}exec`} </a>
                </p>

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default Home