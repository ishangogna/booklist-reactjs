import React, {useState , useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const Booklist = () => {
    const { books } = useContext(BookContext)
    return ( 
        <div className = 'book-list'>
            <ul>
                {books.map(book=> {
                    return(
                        <BookDetails book = {book} key = {book.id}/>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Booklist;