import React from 'react';
// I removed the /client from react-dom. Having done this the browser can now display my app.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import Spanish from "./lang/es.json";
import English from "./lang/en.json";

// get user's current local
const local = navigator.language;

let lang;
if (local === "en-US") {
    lang = English;
} else {
    lang = Spanish;
}

// Local injects formatting specific to local of user. Language specifies messages translation
ReactDOM.render(
    <IntlProvider locale={local} messages={Spanish}>
        <App />
    </IntlProvider>, 
    document.getElementById('root'));
