import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../lang/es.json";
import English from "../lang/en.json";

export const Context = React.createContext();

// get user's current local
const local = navigator.language;

let lang;
if (local === "en-US") {
    lang = English;
} else {
    lang = Spanish;
}
    
const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "es-MX") {
            setMessages(Spanish);
        } else {
            setMessages(English)
        }
    }

    return (
        <Context.Provider value = {{locale, selectLang}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
};

export default Wrapper;