import React from 'react'
import "./searchresults.css"
import BookCart from "../images/librarian.png"
import BookCard from "../bookcard/bookcard.component"

export default function SearchResults(props) {
    return (
        <div className='SearchResults'>
            {/* TODO: TERNARY FOR whether or not there are results, displaying book cart if not there */}
            <h3 style={{ textAlign: "left", marginLeft: "2rem" }}>Search results</h3>
            {props.results&&props.results[0]? (
                props.results[0].map(item => <BookCard data={item}/>)
            ) : <img  style={{height:"200px"}} src={BookCart}></img>}
        </div>
    )
}
