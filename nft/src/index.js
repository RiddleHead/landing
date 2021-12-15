import React from 'react';
import ReactDOM from 'react-dom';
// import 'overlayscrollbars/css/OverlayScrollbars.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import OverlayScrollbars from 'overlayscrollbars';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// OverlayScrollbars(document.body, {
//   nativeScrollbarsOverlaid: {
//       initialize: true
//   },
//   scrollbars: { 
//     autoHide: "move",
//   }
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
