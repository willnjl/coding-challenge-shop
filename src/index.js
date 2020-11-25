import React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./data/reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
