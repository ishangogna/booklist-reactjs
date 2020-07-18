import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import Booklist from './components/Booklist';
import BookForm from './components/BookForm';

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Navbar />
        <Booklist />
        <BookForm />
      </div>
    </BookContextProvider>
  );
}

export default App;
