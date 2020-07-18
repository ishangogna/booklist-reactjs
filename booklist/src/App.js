import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import Booklist from './components/Booklist';

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Navbar />
        <Booklist />
      </div>
    </BookContextProvider>
  );
}

export default App;
