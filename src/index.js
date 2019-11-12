import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/CombineReducers";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//Alert React
// optional cofiguration
const options = {
  position: positions.MIDDLE_RIGHT,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

//Redux
const store = createStore(reducer);
store.subscribe(() => {
  console.log("state updated");
  console.log(store.getState());
});

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <App />
    </Provider>
  </AlertProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
