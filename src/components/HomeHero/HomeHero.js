import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HeroImg from '../../css/assets/imgs/IMPACT_YOUTH_LIVEVIBE_3-TheDukeLDN.jpg';
import { sizing } from '@material-ui/system';

const styles = theme => ({
  strapLine: {
    fontFamily: 'league_gothicregular',
    color: '#4B2E62',
    '@media (max-width:600px)': {
      fontSize: '50px',
    },
  },
  heroImg: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    padding: theme.spacing(3),
  },
});
export class HomeHero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <span className="line"></span>
        <Box
          component="div"
          className="clearfix"
          m={4}
        >
          <Grid container spacing={3} m={4}>
            <Grid item xs={12} sm={9} md={8} lg={5}>
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
        <img src={HeroImg} className={classes.heroImg} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(HomeHero);