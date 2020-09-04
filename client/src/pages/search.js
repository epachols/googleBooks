import React, { useState } from "react";
import SearchBar from "../components/searchbar/searchbar.component";
import SearchResults from "../components/searchResults/searchresults.component";
import API from "../utils/API";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  const [searchResults, setSearchResults] = useState({});

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };

  const handleSearchSubmit = () => {
    const query = searchInput.split(" ").join("_");
    API.search(query)

      .then((res) => {
        const results = res.data.items.map((item) => {
          const title = item.volumeInfo.title;
          const subtitle = item.volumeInfo.subtitle;
          const authors = item.volumeInfo.authors;
          const description = item.volumeInfo.description;

          const image = item.volumeInfo.imageLinks;
          const link = item.volumeInfo.infoLink;
          // const categories = item.volumeInfo.categories;
          // const pageCount = item.volumeInfo.pageCount;
          return {
            title,
            subtitle,
            authors,
            description,
            image,
            link,
            // categories,
            // pageCount,
          };
        });
        setSearchResults([results]);
      })
      .catch((err) => console.log(err));
    setSearchInput("");
  };

  return (
    <div>
      <SearchBar
        value={searchInput}
        handleInputChange={handleInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <SearchResults results={searchResults} />
    </div>
  );
}
