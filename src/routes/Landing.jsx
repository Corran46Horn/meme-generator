import Meme from '../components/Meme.jsx';
import Container from '@mui/material/Container';

function Landing({ memes, updateMeme }) {
  return (
    <Container maxWidth='lg'>
      {memes.map((meme) => (
        <Meme key={meme.title} meme={meme} updateMeme={updateMeme} />
      ))}
    </Container>
  );
}

export default Landing;
