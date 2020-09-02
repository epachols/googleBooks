import React, { useState } from 'react'
import SearchBar from "../components/searchbar/searchbar.component"
import API from "../utils/API";

export default function Search(props) {

    const [searchInput, setSearchInput] = useState("")

    const [searchResult, setSearchResult] = useState({})

    const handleInputChange = event => {
        const value = event.target.value;
        setSearchInput(value);
      };

      const handleSearchSubmit = () => {
        // TODO: actually firing the search, then setting state to results array. also refine or limit search somehow via google's bringback. 
        const query = searchInput.split(" ").join("_")
        API.search(query)


        .then(res => console.log(res.data.items[0].volumeInfo.authors))
        //TODO: turn this return into a map of the values brought back, limiting returned data to reqeusted information

        .catch(err=>console.log(err));
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
