// import { useState } from 'react';
import memeData from './assets/assets.json';
import { Meme } from './components/Meme.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@mui/material/Container';

function App() {
  // const [memes, setMemes] = useState(memeData);

  return (
    <Container maxWidth='lg'>
      {memeData.map((meme) => (
        <Meme key={meme.title} meme={meme} />
      ))}
    </Container>
  );
}

export default App;
