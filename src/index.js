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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
