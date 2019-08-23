import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import OurWork from './pages/OurWork';
import ImpactYouth from './pages/ImpactYouth';
import TheTeam from './pages/TheTeam';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Box component="div" className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/who-we-are" component={WhoWeAre}/>
        <Route path="/our-work" component={OurWork} />
        <Route path="/impact-youth" component={ImpactYouth} />
        <Route path="/the-team" component={TheTeam} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Box>
  );
}

export default App;
