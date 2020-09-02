import React from "react";
import "./searchbar.css";
import { Input } from "antd";
const { Search } = Input;

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <h3 style={{ textAlign: "left", marginLeft: "2rem" }}>Book Search</h3>
      <p>Search</p>
      <Search
       placeholder="enter a book or keyword"
       onSearch={value => console.log(value)}
       enterButton="Start Siftin'"
      ></Search>
    </div>
  );
}
