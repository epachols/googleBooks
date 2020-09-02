import React from "react";
import "./App.less";
import Search from "./pages/search"
import Saved from "./pages/saved"
import Header from "./components/header/header.component";
import Jumbo from "./components/jumbo/jumbo.component";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//TODO:***TEST****
import { Button } from "antd";
//TODO:***TEST****

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
        <Jumbo />

        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
        <Button type="primary">all route content here</Button>
    </Router>
      </div>
  );
}

export default App;
