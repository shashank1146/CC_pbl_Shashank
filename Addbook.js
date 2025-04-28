import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/books', {
      title, author, description, image
    });
    alert('Book added!');
    setTitle('');
    setAuthor('');
    setDescription('');
    setImage('');
  };

  return (
    <div>
      <h2>Add a Book (Admin)</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required /><br/>
        <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required /><br/>
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" /><br/>
        <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" /><br/>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
