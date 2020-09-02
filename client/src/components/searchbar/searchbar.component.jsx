import React from "react";
import "./searchbar.css";
import { Input } from "antd";
const { Search } = Input;

export default function SearchBar(props) {
  return (
    <div className="SearchBar">
      <h3 style={{ textAlign: "left", marginLeft: "2rem" }}>Book Search</h3>
      <p>Search</p>
      <Search
       placeholder="enter a book or keyword"
       value={props.value}
       onSearch={props.handleSearchSubmit}
       onChange={props.handleInputChange}
       enterButton="Start Siftin'"
      ></Search>
    </div>
  );
}
