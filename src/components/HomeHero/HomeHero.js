import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import HeroImg from '../../css/assets/imgs/IMPACT_YOUTH_LIVEVIBE_3-TheDukeLDN.jpg';

const styles = theme => ({
  root: {
    '@media (min-width:320px)': {
      margin: theme.spacing(1),
    },
    '@media (min-width: 600px)': {
      margin: theme.spacing(3),
    },
  },
  strapLine: {
    fontFamily: 'league_gothicregular',
    fontSize: '96px',
    lineHeight: '96px',
    color: '#4B2E62',
    '@media (max-width:600px)': {
      fontSize: '44px',
      lineHeight: '44px',
    },
  },
  heroImg: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
});
export class HomeHero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Box
          component="div"
          className={classes.root}
        >
          <div className={classes.strapLine}>TO MOTIVATE, LEAD</div>
          <div className={classes.strapLine}>AND INSPIRE 'ORDINARY'</div>
          <div className={classes.strapLine}>PEOPLE TO ACHIEVE</div>
          <div className="strapline">'EXTRA-ORDINARY'</div>
          <div className={classes.strapLine}>THINGS THROUGH THE</div>
          <div className={classes.strapLine}>MEDIUM OF DANCE</div>
        </Box>
        <Box
          component="div"
          className={classes.root}
        >
          <img
            src={HeroImg}
            className={classes.heroImg}
            alt="home hero"
          />
        </Box>
      </Fragment>
    );
  }
}

export default withStyles(styles)(HomeHero);