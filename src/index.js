//import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/src/Styles/style.scss';
import '@/src/Utils/i18n'
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('root')
);

reportWebVitals();
