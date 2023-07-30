import React from 'react';

const Book = ({book}) =>{
    return(
        <article className="book">
            <img src={book.img} alt={book.title} />
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>           
        </article>
    );
};

export default Book;

