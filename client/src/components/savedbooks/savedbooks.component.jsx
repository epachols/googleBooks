import React from "react";
import BookCard from "../bookcard/bookcard.component";
import "./savedbooks.css";

export default function SavedBooks(props) {
  return (
    <div className="SavedBooks">
      <h3 style={{ textAlign: "left", marginLeft: "2rem" }}>Saved Books</h3>
      {props.savedBooks && props.savedBooks[0] ? (
        props.savedBooks.map((item) => <BookCard getBooks={props.getSavedBooks} data={item} />)
      ) : (
        <></>
      )}
    </div>
  );
}
