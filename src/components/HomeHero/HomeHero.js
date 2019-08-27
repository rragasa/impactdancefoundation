import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  strapLine: {
    fontFamily: 'league_gothicregular',
    color: '#4B2E62',
    '@media (max-width:600px)': {
      fontSize: '50px',
    },
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Typography
              variant="h1"
              component="h1"
              className={classes.strapLine}
              gutterBottom
            >
              TO MOTIVATE, LEAD AND INSPIRE 'ORDINARY' PEOPLE TO ACHIEVE 'EXTRA-ORDINARY' THINGS THROUGH THE MEDIUM OF DANCE
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(HomeHero);