import React, { useState } from 'react'
import SearchBar from "../components/searchbar/searchbar.component"

export default function Search(props) {

    const [searchInput, setSearchInput] = useState("")

    const handleInputChange = event => {
        const value = event.target.value;
        setSearchInput(value);
      };

      const handleSearchSubmit = () => {
        // event.preventDefault();
        console.log("pressed submit Button in the searchbar, jimmy. this log comes from handleSearchSubmit in search.js")
        // searchBooks(searchInput);
        setSearchInput("");
      };

    return (
        <div>
            <SearchBar 
                value={searchInput}
                handleInputChange={handleInputChange}
                handleSearchSubmit={handleSearchSubmit}
            />
            <div>results box</div>
        </div>
    )
}
