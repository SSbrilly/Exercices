import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import GithubUserList from "./GithubUserList";
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
              <Link to="/github-user-list">Github User List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/github-user-list" component={GithubUserList} />
          <Route path="/users">
            <Route path="/users/:username" component={ShowGithubUser} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
