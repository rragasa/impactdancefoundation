import React from 'react';
import Box from '@material-ui/core/Box';
import Navigation from '../../components/Navigation';
import HomeHero from '../../components/HomeHero';

const Home = () => {
  return (
    <Box component="div">
      <Navigation />
      <HomeHero />
    </Box>
  );
}

export default Home;