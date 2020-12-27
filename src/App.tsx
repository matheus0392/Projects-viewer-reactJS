import React, { useEffect, useState } from "react"
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from '@/src/Components/Navbar';
import Home from '@/src/Pages/Home';
import Methods from '@/src/Pages/Methods';
import ApiREST from '@/src/Pages/ApiREST';
import NotFound from '@/src/Pages/NotFound';

import ConfigContext from "@/src/ConfigContext"

const App = () => {

    const initialConfig = { language: 'pt' }
    const [configData, setConfigData] = useState(initialConfig)

    useEffect(() => {
        localStorage.setItem("config", JSON.stringify(initialConfig))
    }, [])

    return (
        <ConfigContext.Provider value={configData}>
            <Navbar setConfig={setConfigData} />
            <main className="main">
                <Switch>
                    <Route exact path="/methods" component={Methods} />
                    <Route exact path="/api" component={ApiREST} />
                    <Route path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </main>

        </ConfigContext.Provider>
    );
}

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};


export default App;
