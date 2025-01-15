import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Meme({ meme, updateMeme }) {
  const handleUpvote = () => {
    updateMeme({ ...meme, upvotes: meme.upvotes + 1 });
  };

  const handleDownvote = () => {
    updateMeme({ ...meme, downvotes: meme.downvotes + 1 });
  };
  return (
    <Card variant='outlined' className='card'>
      <CardMedia title={meme.title} />
      <CardContent className='meme-content'>
        <img className='meme-img' src={meme.img} alt='' />
      </CardContent>
      <div className='meme-controls'>
        <button onClick={handleUpvote} className='thumb-up'>
          <ThumbUpIcon /> {meme.upvotes}
        </button>
        <button onClick={handleDownvote} className='thumb-down'>
          <ThumbDownIcon /> {meme.downvotes}
        </button>
      </div>
    </Card>
  );
}

export default Meme;
