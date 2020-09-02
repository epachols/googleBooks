import React from "react";
import "./App.less";
import Search from "./pages/search"
import Saved from "./pages/saved"
import Header from "./components/header/header.component";
import Jumbo from "./components/jumbo/jumbo.component";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

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

    </Router>
      </div>
  );
}

export default App;
