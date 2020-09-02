import React from "react";
import "./App.less";

import Header from "./components/header/header.component";
import Jumbo from "./components/jumbo/jumbo.component";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//TODO:***TEST****
import { Button } from "antd";
//TODO:***TEST****

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbo />
      <Router>
      <Button type="primary">all route content here</Button>

      </Router>
    </div>
  );
}

export default App;
