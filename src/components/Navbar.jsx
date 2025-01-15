import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Container maxWidth='lg'>
        <Link to='/' className='navbar-logo'>
          Generator klikania w ekran
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
