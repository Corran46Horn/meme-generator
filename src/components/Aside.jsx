import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';

const Aside = () => {
  return (
    <aside className='sidebar'>
      <Container maxWidth='lg'>
        <div className='d-flex'>
          <NavLink
            to='/hot'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Ulubione
          </NavLink>
          <NavLink
            to='/regular'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Wszystkie
          </NavLink>
          <NavLink
            to='/form'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Stwórz mem
          </NavLink>
        </div>
      </Container>
    </aside>
  );
};

export default Aside;
