import React, { useState } from 'react'

function Book({title, author, year}) {

    const [showDetails, setShowDetails] = useState(false);
    return (
        <div>
                <h2 key={title}>{title}</h2>
                {
                    showDetails && //falsy operator
                    <>
                        <h3>{author}</h3>
                        <h3>{year}</h3>
                    </>
                }
                
                <button onClick={() =>{
                    setShowDetails(!showDetails);
                }}>
                    {showDetails ? "Hide" : "Show details" }
                </button>
        </div>
    )
}

export default Book;