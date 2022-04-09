import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./assets/i18n/en";
import { es } from "./assets/i18n/es";

const resources = {
  es: {
      translation: es
  },
  en: {
      translation: en
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
      resources,
      lng: 'en',

      interpolation: {
          escapeValue: false // react already safes from xss
      },

  });

export default i18n;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
