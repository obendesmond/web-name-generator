import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import "assets/scss/material-kit-react.scss?v=1.9.0";

import LandingPage from "views/LandingPage/LandingPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <LandingPage />
    </Router>
  </Provider>,
  document.getElementById("root")
);
