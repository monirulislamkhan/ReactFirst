import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Assets/scss/main.scss';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
window.name = 'Sobha City Gurgaon';
window.domainName = 'www.sobhacitygurgaon.org.in';
ReactDOM.render(<><App /></>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const injectGA = () => {
  if (typeof window == 'undefined') {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-69690963-1');
};
<script>{injectGA()}</script>