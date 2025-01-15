import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function Meme({ meme }) {
  return (
    <Card variant='outlined'>
      <CardMedia title={meme.title} />
      <CardContent>
        <img src={meme.img} alt='' />
        <Typography gutterBottom variant='h5' component='div'>
          {meme.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
