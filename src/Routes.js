import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
import loadable from "@loadable/component";

const Main = loadable(() => import("./Pages/Main"));

const Routes = observer(() => {
  return (
    <Router basename={"/portfolio"}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
});

export default Routes;
