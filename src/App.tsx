import React from 'react';
import { useEffect, useState } from "react"
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
//import ReduxToastr from 'react-redux-toastr';

import Navbar from '@/src/Pages/Navbar';
import Home from '@/src/Pages/Home';
import Arch from '@/src/Pages/Arch';
import NotFound from '@/src/Pages/NotFound';

import ConfigContext from "@/src/ConfigContext"

const App = () => {

    const [configData, setConfigData] = useState(JSON.parse(localStorage.getItem("config")))

    return (
        <ConfigContext.Provider value={configData}>
            <Navbar setConfig={setConfigData} />
            <main className="main">
                <Switch>
                    <Route exact path="/arch" component={Arch} />
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