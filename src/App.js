import React, { useState, useEffect } from "react";

function App() {

    const [loading, setLoading] = useState(false);

    async function fetchBooks(){
        const response = await fetch("http://www.testdomain.com/v1/api/books");
        const responseJson = await response.json();
        console.log(responseJson);
    }

    useEffect(
        () => {
            setLoading(true);
            fetchBooks();
        },
        []
    );

    return (
        <div className="App">
            
        </div>
    );
}

export default App;
