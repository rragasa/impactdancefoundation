import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import HeroImg from '../../css/assets/imgs/IMPACT_YOUTH_LIVEVIBE_3-TheDukeLDN.jpg';

const styles = theme => ({
  strapLine: {
    fontFamily: 'league_gothicregular',
    fontSize: '96px',
    lineHeight: '96px',
    color: '#4B2E62',
    '@media (max-width:600px)': {
      fontSize: '36px',
      lineHeight: '36px',
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
        <Box
          component="div"
          className="clearfix"
          m={4}
        >
          <div className={classes.strapLine}>TO MOTIVATE, LEAD</div>
          <div className={classes.strapLine}>AND INSPIRE 'ORDINARY'</div>
          <div className={classes.strapLine}>PEOPLE TO ACHIEVE</div>
          <div className="strap-underline">'EXTRA-ORDINARY'</div>
          <div className={classes.strapLine}>THINGS THROUGH THE</div>
          <div className={classes.strapLine}>MEDIUM OF DANCE</div>
        </Box>
        <img
          src={HeroImg}
          className={classes.heroImg}
          alt="home hero"
        />
      </Fragment>
    );
  }
}

export default withStyles(styles)(HomeHero);