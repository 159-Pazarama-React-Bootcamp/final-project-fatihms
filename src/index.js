import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  /* eslint comma-dangle: ["error", "never"] */
  document.getElementById("root")
);
