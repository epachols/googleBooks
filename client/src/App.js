import React from "react";
import "./App.less"
import Header from "./components/header/header.component"

//TODO:***TEST****
import { Button } from 'antd';
//TODO:***TEST****

function App() {
  return (
    <div className="App">
    <Header />
        <h1>Catalog - for all your kitty book needs</h1>
        <Button type="primary">Comin' At Ya</Button>
    </div>
  );
}


export default App;
