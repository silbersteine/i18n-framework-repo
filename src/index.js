import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import Spanish from "./locales/es/translations.json";
import English from "./locales/en/translations.json";

// get user's current local
const local = navigator.language;

let lang;
if (local === "en-US") {
    lang = English;
} else {
    lang = Spanish;
}

// Local injects formatting specific to local of user. Language specifies messages translation
ReactDOM.render(<IntlProvider locale={local} messages={lang}><App /></IntlProvider>, document.getElementById('root'));
