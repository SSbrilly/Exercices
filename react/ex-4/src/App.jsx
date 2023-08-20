import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import GithubUser from "./GithubUser";
import ShowGithubUser from "./ShowGithubUser";

function NotFound() {
  return <h2>404 - Not Found</h2>;
}

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
              <Link to="/github-user">Github User</Link>
            </li>
            <li>
              <Link to="/users/johndoe">Show Github User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/github-user" component={GithubUser} />
          <Route path="/users/:username" component={ShowGithubUser} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
