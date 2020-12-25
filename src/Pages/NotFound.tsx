import { Link } from 'react-router-dom'

import logo from '/assets/logo.svg'
import '@/src/Styles/Home'


const localUrl = `${window.location.href}`
const backUrl = localUrl + "WebApi/"

function NotFound() {
    return (
        <div className="App">
            <header className="App-header">

                <p>404 Not Found Page</p>
                <Link to={"/"}>Home</Link>
                <p >
                    <a href="https://github.com/matheus0392/Project-spring-batch/tree/project" style={{ textAlign: "center", color: 'white' }} > Matheus Nascimento </a>
                </p>

                <img src={logo} className="App-logo" alt="logo" />

            </header>
        </div>
    );
}

export default NotFound