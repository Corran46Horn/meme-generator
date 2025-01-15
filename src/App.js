import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import MainPage from './routes/MainPage';
import HotPage from './routes/HotPage';
import Landing from './routes/Landing';
import FormPage from './routes/FormPage';
import assets from './assets/assets.json';
import './App.scss';
import './fonts/SLOrzel-Regular.otf';
import Container from '@mui/material/Container';

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    setMemes(assets);
  }, []);

  const updateMeme = (updatedMeme) => {
    setMemes(
      memes.map((meme) => (meme.id === updatedMeme.id ? updatedMeme : meme))
    );
  };

  const addMeme = (newMeme) => {
    setMemes((prevMemes) => [...prevMemes, newMeme]);
  };

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Aside />
        <Container>
          <Routes>
            <Route
              path='/'
              element={<Landing memes={memes} updateMeme={updateMeme} />}
            />
            <Route
              path='/hot'
              element={
                <HotPage
                  memes={memes.filter(
                    (meme) => meme.upvotes - meme.downvotes > 5
                  )}
                  updateMeme={updateMeme}
                />
              }
            />
            <Route
              path='/regular'
              element={
                <MainPage
                  memes={memes.filter(
                    (mem) => mem.upvotes - mem.downvotes <= 5
                  )}
                  updateMeme={updateMeme}
                />
              }
            />
            <Route path='/form' element={<FormPage addMeme={addMeme} />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
