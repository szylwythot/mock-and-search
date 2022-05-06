import React, { useState, useEffect } from "react";
import LoadingMask from "./LoadingMask";
import Book from "./Book";

function App() {

    const [loading, setLoading] = useState(false);

    const [books, setBooks] = useState([]);

    async function fetchBooks(){
        const response = await fetch("http://www.testdomain.com/v1/api/books");
        const responseJson = await response.json();
        console.log(responseJson);
        setBooks(responseJson);
        setLoading(false);
    }

    useEffect(
        () => {
            setLoading(true);
            fetchBooks();
        },
        []
    );

    // const LoadingBooks = ({isLoading}) => {
    //     if(isLoading){
    //         return (
    //             <p>Books are loading</p>
    //         )
    //     } else{
    //         <p>Books loaded</p>
    //     }
    // }

    return (
        <div className="App">
            {/* <LoadingBooks isLoading={loading} /> */}
            {
                loading ? 
                <LoadingMask/> :
                books.map(({title, author, year}) => <Book key={title} title={title} year={year} author={author} />)
            }
        </div>
    );
}

export default App;
