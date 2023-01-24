import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as esMessages } from './locales/es/messages'

i18n.load({
  en: enMessages,
  es: esMessages,
})
i18n.activate('es')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nProvider i18n={i18n}>
    <App />
  </I18nProvider>
);
