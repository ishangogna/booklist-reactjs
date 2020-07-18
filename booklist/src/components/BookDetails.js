import React from 'react';


const BookDetails = ({ book }) => {
    return ( 
        <div>
            <div className = 'title'>
                { book.title }
            </div>
            <div className = 'author'>
                { book.author }
            </div>
            
        </div>
     );
}
 
export default BookDetails;