import React from 'react'
import "./searchresults.css"
import BookCart from "../images/librarian.png"

export default function SearchResults(props) {
    return (
        <div className='SearchResults'>
            {/* TODO: TERNARY FOR whether or not there are results, displaying book cart if not there */}
            <h3 style={{ textAlign: "left", marginLeft: "2rem" }}>Search results</h3>
            {props.results&&props.results[0]? "REPLACE ME WITH BOOK CARDS, YE LAND LUBBER" : <img  style={{height:"200px"}} src={BookCart}></img>}
        </div>
    )
}
