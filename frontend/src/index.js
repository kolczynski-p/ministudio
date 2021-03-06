import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.js';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);