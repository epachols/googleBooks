import React from "react";
import "./searchresults.css";
import BookCart from "../images/librarian.png";
import BookCard from "../bookcard/bookcard.component";

export default function SearchResults(props) {

  return (
    <div className="SearchResults">
      <h3 style={{ textAlign: "left", marginLeft: "2rem" }}>Search results</h3>
      {props.results && props.results[0] ? (
        props.results[0].map((item) => {
          if (item.authors && item.description && item.subtitle && item.image.thumbnail) {
            return <BookCard save={true} data={item} />;
          }
        })
      ) : (
        <></>
      )}

    </div>
  );
}
