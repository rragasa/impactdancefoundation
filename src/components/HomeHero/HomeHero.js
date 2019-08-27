import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  strapLine: {
    fontFamily: 'league_gothicregular',
    color: '#4B2E62',
  },
});
export class HomeHero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box
        component="div"
        className="clearfix"
        m={4}
      >
        <Typography
          variant="h1"
          component="h1"
          className={classes.strapLine}
          gutterBottom
        >
          TO MOTIVATE, LEAD AND INSPIRE 'ORDINARY' PEOPLE TO ACHIEVE 'EXTRA-ORDINARY' THINGS THROUGH THE MEDIUM OF DANCE
        </Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(HomeHero);