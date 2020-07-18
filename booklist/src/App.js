import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Navbar />
      </div>
    </BookContextProvider>
  );
}

export default App;
