import logo from './logo.svg';
import './App.css';
import { Trans } from '@lingui/macro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans>
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <div> 
          <Trans>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Trans>
        </div>
      </header>
    </div>
  );
}

export default App;
