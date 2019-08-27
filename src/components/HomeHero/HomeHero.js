import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HeroImg from '../../css/assets/imgs/IMPACT_YOUTH_LIVEVIBE_3-TheDukeLDN.jpg';
import { sizing } from '@material-ui/system';
import { display } from '@material-ui/system';

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
          {/* <Grid container spacing={3} m={4}>
            <Grid item xs={12} sm={9} md={8} lg={5}>
              <Typography
                variant="h1"
                component="h1"
                className={classes.strapLine}
                gutterBottom
              >
                <span display="block">TO MOTIVATE, LEAD</span>
                <span display="block">AND INSPIRE 'ORDINARY'</span>
                <span display="block">PEOPLE TO ACHIEVE</span>
                <span display="block">'EXTRA-ORDINARY'</span>
                <span display="block">THINGS THROUGH THE</span>
                <span display="block">MEDIUM OF DANCE</span>
              </Typography>
            </Grid>
          </Grid> */}
                <div className={classes.strapLine}>TO MOTIVATE, LEAD</div>
                <div className={classes.strapLine}>AND INSPIRE 'ORDINARY'</div>
                <div className={classes.strapLine}>PEOPLE TO ACHIEVE</div>
                <div className="strap-underline">'EXTRA-ORDINARY'</div>
                <div className={classes.strapLine}>THINGS THROUGH THE</div>
                <div className={classes.strapLine}>MEDIUM OF DANCE</div>
        </Box>
        <img src={HeroImg} className={classes.heroImg} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(HomeHero);