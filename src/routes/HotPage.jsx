import React from 'react';
import Meme from '../components/Meme';

const HotPage = ({ memes, updateMeme }) => {
  return (
    <div className='hot-page'>
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} updateMeme={updateMeme} />
      ))}
    </div>
  );
};

export default HotPage;
