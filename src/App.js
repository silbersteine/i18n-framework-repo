import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch'}
};

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => (
            <button type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
          ))}
        </div>
        <p>
          <Trans i18nKey="description">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learnReact')}
        </a>
        <p>
          {t('interpolation', {what: 'i18next'})}
        </p>
        <p>
          {t('pluralization', {count: 1})}
          {/*change count number from one to other positive number to see change in key value*/}
          {/*German does not have plural forms like English. Singular and plural will appear the same in this scenario*/}
        </p>
        <p>
          {/* For information on all formatting options visit https://www.i18next.com/translation-function/formatting */}
          {t('number', {val: 1000 })}
        </p>
        <p>
          {t('currency', {val: 1000})}
        </p>
        <p>
          {/* Info on date/time formatting https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat */}
          {t('date', 
            {val: new Date(Date.UTC(1992, 10, 13, 11, 0)),
            formatParams: {
              val: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
            }
            })}
        </p>
        <p>
          
          {/* Note: German time would not be in 12 hr format. */}
          {t('time',
          {val: new Date(Date.UTC(1992, 10, 13, 4)),
          formatParams: {
            val: { hour: 'numeric', minute: 'numeric', timeZone: 'America/New_York', hour12: true}
          }
          })}
        </p>
        <p>
          {/* Pass a different context (female or none) to see the other translations */}
          {/* Context can be used with interpolation and plurals */}
          {t('friend', { context: 'male' })}
        </p>
        <p>
          {t('inception', {withinADream: 1})}
        </p>
      </header>
    </div>
  );
}

export default App;
