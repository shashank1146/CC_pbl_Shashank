import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await axios.get('http://localhost:5000/api/books');
    setBooks(res.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/api/books/${id}`);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      {books.map(book => (
        <div key={book._id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h3>{book.title}</h3>
          <p><b>Author:</b> {book.author}</p>
          <p>{book.description}</p>
          {book.image && <img src={book.image} alt={book.title} style={{ width: '100px' }} />}
          <br/>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
