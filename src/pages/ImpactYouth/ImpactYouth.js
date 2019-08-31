import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../css/assets/imgs/IMPACT_YOUTH_ThePlace_TUNEDIN_Alicia_Clarke.jpg';

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
});
export class ImpactYouth extends Component {
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
            <h1 className="strap-underline">IMPACT YOUTH</h1>
          </Box>
        </Box>
        <Box component="div" className={classes.pageContent}>
        <Typography
            variant="p"
            component="p"
            paragraph
          >
            For nearly 25 years, Impact Dance has motivated, inspired and nurtured
            young people through hip-hop and street dance. Founded by Hakeem Onibudo,
            the company has been a leader in the hip-hop, street and youth dance sector
            since its inception in 1995.
          </Typography>
          <Typography
            variant="p"
            component="p"
            paragraph
          >
            Through dance training, mentoring, creative performances and international
            projects, we enable young people of all backgrounds - particularly those
            less privileged and considered 'hard-to-reach' - to develop their creative
            and life skills, to discover their talent and grow up to be 'fully functioning
            individuals'; Impact alumini have gone on to thrive as, for example,
            professional dance artists, investment bankers, radio presenters and designers.
          </Typography>
          <Typography
            variant="p"
            component="p"
            paragraph
          >
            Based and working in Brent, with a London-wide reach and a global footprint,
            Impact Dance is at a pivotal point in its history. Responding to a local need,
            we are scaling up our operation to develop opportunities where there are none,
            to invest in young people's futures, and to ensure we can continue these
            efforts for years to come.
          </Typography>
        </Box>
      </Box>
    );
  }
};

export default withStyles(styles)(ImpactYouth);