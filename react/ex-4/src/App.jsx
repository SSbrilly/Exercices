import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
