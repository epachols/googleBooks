import React, { useState, useEffect } from 'react'
import SavedBooks from '../components/savedbooks/savedbooks.component'
import API from '../utils/API'

export default function Saved() {

    const [savedBooks, setSavedBooks] = useState({});

    const getSavedBooks = () => {
        API.getBooks()
        .then(res => {
            console.log(res.data)
            setSavedBooks(res.data)
        })
    }

    useEffect(()=> {
        getSavedBooks();
    }, [])

    return (
        <div>
            <SavedBooks getSavedBooks={getSavedBooks} savedBooks={savedBooks}/>
        </div>
    )
}
