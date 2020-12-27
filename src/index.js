//import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/src/Styles/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
