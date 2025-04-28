import React from 'react';
import BookList from './components/Booklist';
import AddBook from './components/Addbook';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Online Bookstore</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
