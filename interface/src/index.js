import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./core/router/routes";
import { createStore } from "redux";
import reducers from "./shared/redux/index";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
