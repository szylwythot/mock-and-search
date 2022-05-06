import React, { useState } from 'react'

function Book({title, author, year}) {

    const [showDetails, setShowDetails] = useState(false);
    return (
        <div>
                <h2 key={title}>{title}</h2>
                {
                    // showDetails && // or ternary operator
                    // <>
                    //     <h3>{author}</h3>
                    //     <h3>{year}</h3>
                    // </>

                    showDetails ?
                    <>
                        <h3>{author}</h3>
                        <h3>{year}</h3>
                    </>: null

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