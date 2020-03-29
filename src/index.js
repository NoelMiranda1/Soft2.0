import React from 'react';
import ReactDOM from 'react-dom';
import Cajas from './routes/Cajas'
import * as serviceWorker from './serviceWorker';
import './scss/styles.scss'
ReactDOM.render(
  <Cajas />,
  document.getElementById('cajas')
);

serviceWorker.unregister();
