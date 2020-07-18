import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return(
        <div>
        { books.length>0 ? (
            <div>You have {books.length} books left to get through!</div>
        ) : (
            <div className = 'empty'>You have no books left!</div>
        ) }
        </div>
    )
}
export default Navbar;
