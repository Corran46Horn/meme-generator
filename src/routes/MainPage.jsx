import React from 'react';
import Meme from '../components/Meme';

const MainPage = ({ memes, updateMeme }) => {
  return (
    <div className='main-page'>
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} updateMeme={updateMeme} />
      ))}
    </div>
  );
};

export default MainPage;
