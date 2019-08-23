import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const Navigation = () => {
  return (
    <Box component="div">
      <nav role="navigation" aria-label="Main">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/who-we-are">Who We Are</Link></li>
          <li><Link to="/our-work">Our Work</Link></li>
          <li><Link to="/impact-youth">Impact Youth</Link></li>
          <li><Link to="/the-team">The Team</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </Box>
  );
}

export default Navigation;