import { Link } from 'react-router-dom'
import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { Button, Col } from 'reactstrap';
import toastr from 'toastr'


import '@/src/Styles/Home'
import API from '@/src/services/API'
import Console from '@/src/Components/Console'

const localUrl = `${window.location.href}`
const backUrl = localUrl + "WebApi/"

function Home() {

    const [console, setConsole] = useState(false);
    const [result, setResult] = useState([]);
    const { t } = useTranslation()

    const execJob = () => {
        API.execJob()
            .then(({ data }) => {
                result.push(data)
                setResult(JSON.parse(JSON.stringify(result)))
                setConsole(true)
            })
            .catch(error => toastr.error(error))
    }
    const onRemove = (key) => {
        result.splice(key, 1)
        setResult(JSON.parse(JSON.stringify(result)))
        if (result.length === 0) {
            setConsole(false)
        }
    }

    return (
        <div className="home">
            <header className="home-header" >
                <div>
                    <span>
                        <h3>
                            <Link to={"/methods"}>{t('metodos')}</Link>
                        </h3>
                    </span>
                    <span>
                        <h3>
                            <Link to={"/api"}>API REST</Link>
                        </h3>
                    </span>
                </div>
                <div>
                    <h2>{t('inicio')}</h2>
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
                    <a target="_blank" href={`${backUrl}execjob`} style={{ textAlign: "center", color: 'white' }} > {`${backUrl}execjob`} </a> <Button onClick={execJob}> Execute Job</Button>
                </p>
            </div>

            {console &&
                <Col md={10}>
                    <Console output={result} onRemove={onRemove} />
                </Col>
            }
        </div>
    );
}

export default Home