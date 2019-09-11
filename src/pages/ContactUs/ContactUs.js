import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../css/assets/imgs/IMPACT_YOUTH_Startin_Point_6-TheDuke.LDN.png';

const styles = theme => ({
  root: {
    '@media (min-width:320px)': {
      margin: theme.spacing(1),
    },
    '@media (min-width: 600px)': {
      margin: theme.spacing(3),
    },
  },
  pageHeading: {
    position: 'relative',
    zIndex: '1',
    padding: theme.spacing(2),
    '@media (min-width:320px)': {
      marginTop: '-120px',
    },
    '@media (min-width: 600px)': {
      marginTop: '-140px',
    },
    '@media (min-width: 960px)': {
      marginTop: '-160px',
    },
  },
  subHeading: {
    fontFamily: 'league_gothicregular',
    marginBottom: '15px',
    color: '#BBB',
  },
  heroWrapper: {
    '@media (min-width:320px)': {
      margin: theme.spacing(1),
    },
    '@media (min-width: 600px)': {
      margin: theme.spacing(4),
    },
  },
  hero: {
    width: '100%',
    maxHeight: '620px',
    objectFit: 'cover',
  },
  pageContent: {
    '@media (min-width:320px)': {
      margin: theme.spacing(4),
    },
    '@media (min-width:600px)': {
      margin: '62px',
    },
  },
  sectionHeading: {
    color: '#000',
    fontFamily: 'league_gothicregular',
    fontWeight: 'bold',
    letterSpacing: '.2rem',
    paddingBottom: '30px',
  },
});
export class ContactUs extends Component {
  render() {
    const { classes } = this.props;

    return(
      <Box className="who-we-are">
        <Box component="div" className={classes.heroWrapper}>
          <img
            src={HeaderImg}
            className={classes.hero}
            alt="who we are hero"
          />
          <Box className={[classes.root, classes.pageHeading]}>
            <Typography variant="h4" component="h4" className={classes.subHeading}>
              ABOUT
            </Typography>
            <h1 className="strap-underline">CONTACT US</h1>
          </Box>
        </Box>
        <Box component="div" className={classes.pageContent}>
          <Box component="div" mb={4}>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4962.026232098592!2d-0.239413!3d51.5496585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876105331eee145%3A0xdc869f28f3a463af!2sThe%20Courtyard%2C%20100%20Villiers%20Rd%2C%20Willesden%2C%20London%20NW2%205PJ!5e0!3m2!1sen!2suk!4v1567372994713!5m2!1sen!2suk" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
          </Box>
          <Typography
            variant="h2"
            component="h2"
            className={classes.sectionHeading}
          >
            IMPACT DANCE
          </Typography>
          <Typography
            variant="h3"
            component="h3"
          >
            The Courtyard
            <br />
            100 Villiers Road
            <br />
            London
            <br />
            NW2 5PJ
          </Typography>
        </Box>
      </Box>
    );
  }
};

export default withStyles(styles)(ContactUs);