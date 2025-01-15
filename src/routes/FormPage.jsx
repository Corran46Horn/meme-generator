import React, { useState } from 'react';
import Button from '@mui/material/Button';

const FormPage = ({ addMeme }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeme = {
      id: Date.now(),
      title,
      image: url || image,
      upvotes: 0,
      downvotes: 0,
    };
    addMeme((prevMemes) => [...prevMemes, newMeme]);
    setTitle('');
    setImage('');
    setUrl('');
  };

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className='form-page'>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Url obrazka
          <input
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <label>
          Załaduj obraz
          <input type='file' onChange={handleImageUpload} />
        </label>
        <Button type='submit' variant='contained'>
          Dodaj
        </Button>
      </form>
    </div>
  );
};

export default FormPage;
