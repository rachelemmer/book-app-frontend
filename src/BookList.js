import React from 'react'
import BookCard from './BookCard'

const BookList = (props) => {
    return (
        <div className="list"> {
            props.books.map(book => {
            return <BookCard 
                key={book.id} 
                book={book}
                image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "" || book.image} 
                title={book.volumeInfo.title || book.title} 
                author={book.volumeInfo.authors || book.authors}
            />
            })
        }
        </div>
    )
}

export default BookList;
