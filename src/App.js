import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate, FormattedTime, FormattedNumber, FormattedPlural } from "react-intl";
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
        <p>
        <FormattedMessage
          id="dateComponent.text"
          defaultMessage="The date is: {formattedDate}"
          values={{
            formattedDate: (
              <FormattedDate
                value={new Date()}
                year="numeric"
                month="long"
                day="numeric"
                weekday="long"
              />
            ),
          }}
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
        <p>
          <FormattedNumber
            value={42000.42}
          />
        </p>
        <p>
          <FormattedNumber
            value={20000.42}
            style="currency"
            currencyDisplay="symbol"
            currency="USD"
          />
        </p>
        <p>
          <FormattedPlural
            value={3}
            one="The little girl had one small scoop of ice cream"
            other="The little girl had never eaten more ice cream in her whole entire life"
          />
          </p>
      </header>
    </div>
  );
}

export default App;
