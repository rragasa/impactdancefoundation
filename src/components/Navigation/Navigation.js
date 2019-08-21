import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const Navigation = () => {
  return (
    <Box component="div">
      <nav role="navigation" aria-label="Main">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </Box>
  );
}

export default Navigation;