import logo from './logo.svg';
import './App.css';
import { Trans, Plural } from '@lingui/macro';



function App() {
  const monkeysCount = 0;
  const world = "World";
  var user = {};
  user.name = "Eric";
  const stars = 2;

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
{/* Exact Form Plurals */}
          <p>
            <Plural
            id="night.sky"
            value={stars}
            _0="I didn't see a single star"
            _1="I saw one bright star"
            other="The night sky was full of stars!"
            />
          </p>
        </div>
{/* JSX to MessageFormat examples */}
        <div>
          <p>
            <Trans>Hello {world}</Trans>
          </p>
          <p>
            <Trans>Hello {user.name}</Trans>
          </p>
          <p>
            <Trans>What about line breaks and other elements?<br />Good questions!</Trans>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
