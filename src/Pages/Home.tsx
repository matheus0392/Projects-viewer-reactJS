import { Link } from 'react-router-dom'
import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { Button, Col } from 'reactstrap'
import _ from 'lodash';


import '@/src/Styles/Home'
import Console from '@/src/Components/Console'
import { connect, send } from '@/src/vendor/websock/app'

const localUrl = `${window.location.href}`
const backUrl = localUrl + "WebApi/"

var consoleCount = 0
var consoleText = []

function Home() {

    const [console, setConsole] = useState(false);
    const [result, setResult] = useState([]);
    const { t } = useTranslation()

    const newJob = () => {
        execJob(consoleCount++)
    }

    const execJob = (index) => {
        let stompClient = connect(index, function (data) {

            setResult(() => {
                if (consoleText[data.index] == null) {
                    consoleText[data.index] = { index: data.index, message: [data.message[0]], client: data.client }
                } else {
                    consoleText[data.index].message.push(data.message[0])
                }

                return _.cloneDeep(consoleText)
            })
        })
        setTimeout(() => {
            setConsole(true)
            send(stompClient, `{ "tab":${index},  "name": "JOB1" }`)
        }, 500)
    }

    const onRemove = (key) => {
        let tab = result.find(each => each && each.index == key)
        if (tab && tab.client) {
            tab.client.disconnect()
            consoleText[key] = null
            setResult(_.cloneDeep(consoleText))
        }

        if (consoleText.filter(each => each != null).length == 0) {
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
                    <a target="_blank" href={`${backUrl}execjob`} style={{ textAlign: "center", color: 'white' }} > {`${backUrl}execjob`} </a>
                    <Button onClick={() => newJob()}> Execute Job</Button>
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