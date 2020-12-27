import { Link } from 'react-router-dom'

import '@/src/Styles/Home'
import Translate from '@/src/Util/Translate'

const localUrl = `${window.location.href}`
const backUrl = localUrl + "WebApi/"

function Home() {
    return (
        <div className="home">
            <header className="home-header" >
                <div>
                    <span>
                        <h3>
                            <Link to={"/methods"}>{Translate('metodos')}</Link>
                        </h3>
                    </span>
                    <span>
                        <h3>
                            <Link to={"/api"}>API REST</Link>
                        </h3>
                    </span>
                </div>
                <div>
                    <h2>{Translate('inicio')}</h2>
                </div>
            </header>
            <div>
                <p>
                    <a target="_blank" href="https://github.com/matheus0392/Project-spring-batch/tree/project" style={{ textAlign: "center", color: 'white' }} > Matheus Nascimento </a>
                </p>
                <p >
                    <a target="_blank" href={`${backUrl}`} style={{ textAlign: "center", color: 'white' }} > {`${backUrl}`} </a>
                </p>
                <p>
                    <a target="_blank" href={`${backUrl}execjob`} style={{ textAlign: "center", color: 'white' }} > {`${backUrl}execjob`} </a>
                </p>
            </div>
        </div>
    );
}

export default Home