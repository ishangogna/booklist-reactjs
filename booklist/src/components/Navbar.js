import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext)
    return(
        <div>
            You have {books.length} books left to get through!
        </div>
    )
}
export default Navbar;
