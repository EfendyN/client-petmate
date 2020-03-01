import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./_redux/store";

import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
