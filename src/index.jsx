import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import Main from "./Main";
import store from "./redux/store/configStore";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
