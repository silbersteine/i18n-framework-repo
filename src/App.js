import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from "react-intl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      </header>
    </div>
  );
}

export default App;
