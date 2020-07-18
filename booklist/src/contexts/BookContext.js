import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title : 'Eragon', author : 'Christopher Paoloni', id : '1'},
        {title : 'Eldest', author : 'Christopher Paoloni', id : '2'},
        {title : 'Brisingr', author : 'Christopher Paoloni', id : '3'},
    ])
    const addBook = (title,author) = () => {
        setState([...books,{title : title, author : author}])
    }
    const removeBook = (id) => {
        setState(books.filter(book=> book.id !== id))
    };

    return ( 
        <BookContext.Provider value = {{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;