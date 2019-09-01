import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import OurWork from './pages/OurWork';
import ImpactYouth from './pages/ImpactYouth';
import TheTeam from './pages/TheTeam';
import ContactUs from './pages/ContactUs';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation = () => {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    const { showMenu } = this.state;
    return (
      <Box component="div" className="App">
        <Navigation showMenu={showMenu} handleNavigation={this.handleNavigation} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/who-we-are" component={WhoWeAre}/>
          <Route path="/our-work" component={OurWork} />
          <Route path="/impact-youth" component={ImpactYouth} />
          <Route path="/the-team" component={TheTeam} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <Footer />
      </Box>
    );
  }
}

export default App;
