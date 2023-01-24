import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages } from './locales/en/messages'

i18n.load('en', messages)
i18n.activate('en')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nProvider i18n={i18n}>
    <App />
  </I18nProvider>
);
