import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { addBook } = useContext(BookContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
    }
    return ( 
        <form>
            <input type="text" placeholder= 'Title' onChange = {(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder= 'Author' onChange = {(e) => setAuthor(e.target.value)} />
            <input type="submit" value = 'add a new book!' onClick = {handleSubmit}/>
        </form>
     );
}
 
export default BookForm;

