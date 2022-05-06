import React from 'react'

function Book({title, author, year}) {
  return (
      <div>
            <p key={title}>{title}</p>
            <p>{author}</p>
            <p>{year}</p>
      </div>
  )
}

export default Book;