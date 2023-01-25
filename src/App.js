import logo from './logo.svg';
import './App.css';
import { Trans, Plural } from '@lingui/macro';



function App() {
  const monkeysCount = 0;

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
        <div>
{/* Defining Message ID */}
          <p>
            <Trans id="custom.id">I've manually defined this string's message ID</Trans>
          </p>
{/* Plurals */}
          <p>
            <Plural
                value={monkeysCount}
                one="There is one monkey jumping on the bed"
                other="There are # monkeys jumping on the bed"
            />
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
