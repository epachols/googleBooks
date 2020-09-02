import React, { useState } from "react";
import SearchBar from "../components/searchbar/searchbar.component";
import API from "../utils/API";
import { Link } from "react-router-dom";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState("");

  const [searchResult, setSearchResult] = useState({});

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
  };

  const handleSearchSubmit = () => {
    // TODO: actually firing the search, then setting state to results array. also refine or limit search somehow via google's bringback.
    const query = searchInput.split(" ").join("_");
    API.search(query)

      .then((res) => {
        // console.log(res.data.items[0].volumeInfo.title);
        const results = res.data.items.map((item) => {
          const title = item.volumeInfo.title;
          const subtitle = item.volumeInfo.subtitle;
          const authors = item.volumeInfo.authors;
          const description = item.volumeInfo.description;
          const image = item.volumeInfo.imageLinks;
          const link = item.volumeInfo.infoLink;
          const categories = item.volumeInfo.categories;
          const pageCount = item.volumeInfo.pageCount;
          return {
            title,
            subtitle,
            authors,
            description,
            image,
            link,
            categories,
            pageCount

          };
        });
        console.log(results);
        // setSearchResult(results);
      })
      //TODO: turn this return into a map of the values brought back, limiting returned data to reqeusted information

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
      <div>results box</div>
    </div>
  );
}
