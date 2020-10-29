import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { history, store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
