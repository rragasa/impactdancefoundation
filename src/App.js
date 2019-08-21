import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Home from './pages/Home';

function App() {
  return (
    <Box className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" component={Home} />
      </Switch>
    </Box>
  );
}

export default App;
