import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {" "}
            <Todos />
          </Route>
          <Route path="/todo/:id">
            {" "}
            <Todo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
