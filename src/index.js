import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import { Provider } from "mobx-react";

ReactDOM.render(
  <Provider>
    <Routes basename={"/portfolio"} />
  </Provider>,
  document.getElementById("root")
);
