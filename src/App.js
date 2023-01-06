import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";
import { Context } from "./components/Wrapper"

function App(props) {
  const context = useContext(Context);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Language Switcher */}
        <select value={context.locale} onChange={context.selectLang}>
          <option value="en-US">English</option>
          <option value="es-MX">Español</option>
        </select>

        <p>
          <FormattedMessage
            id="editAndSave"
            defaultMessage= "Edit <code>{fileName}</code> and save to reload."
            values = {
              // code value must match the html attribute in the text
              {fileName: "src/app.js", code: (word) => <code>{word}</code>} 
            }
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
            // Key name
            id="learnReact"
            // Fallback message
            defaultMessage="Learn React"
          />
        </a>
        <p>
          <FormattedMessage
            id="codeBy"
            defaultMessage= "Coded by Eric"
            values= {
              {name: "Eric"}
            }
          />
        </p>
        <p>
          <FormattedDate
            value={props.date}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </p>
        <p>
          <FormattedTime
            value={new Date()}
            hour="numeric"
            minute="numeric"
            second="numeric"
            // timeZoneName="longOffset"
          />
        </p>

      </header>
    </div>
  );
}

export default App;
