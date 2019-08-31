import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../css/assets/imgs/GORM-8493.jpg';
import HeroRip from '../../css/assets/imgs/hero-rip-pages.svg';

const styles = theme => ({
  root: {
    '@media (min-width:320px)': {
      margin: theme.spacing(1),
    },
    '@media (min-width: 600px)': {
      margin: theme.spacing(3),
    },
  },
  // heroOutWrap: {
  //   position: 'relative',
  //   width: '100%',
  //   height: '82vh',
  //   zIndex: '-1',
  // },
  // heroInnerWrap: {
  //   margin: '0 auto',
  //   '@media (min-width:320px)': {
  //     height: 'auto',
  //     padding: theme.spacing(1),
  //   },
  //   '@media (min-width: 600px)': {
  //     height: '100%',
  //   },
  //   '@media (min-width: 1280px)': {
  //     height: 'calc(80vh - 8.2rem)',
  //     padding: theme.spacing(3),
  //   },
  // },
  // wrapDiv: {
  //   width: '100%',
  //   overflow: 'hidden',
  //   filter: 'alpha(opacity=95)',
  //   opacity: 0.95,
  //   '@media (min-width:320px)': {
  //     height: 'auto',
  //   },
  //   '@media (min-width: 600px)': {
  //     height: '100%',
  //   },
  // },
  // showHeroImg: {
  //   filter: 'none',
  //   opacity: 1,
  // },
  // heroViWidth: {
  //   width: '100vw',
  //   '@media (min-width:320px)': {
  //     height: 'auto',
  //   },
  //   '@media (min-width: 600px)': {
  //     height: '100%',
  //   },
  // },
  // rip: {
  //   position: 'absolute',
  //   bottom: '0',
  //   width: '100%',
  //   background: `url(${HeroRip}) no-repeat center top 7rem transparent`,
  //   backgroundSize: '110% auto',
  //   '@media (min-width:320px)': {
  //     height: '5rem',
  //     backgroundPosition: 'center top',
  //   },
  //   '@media (min-width: 600px)': {
  //     height: '8rem',
  //   },
  //   '@media (min-width: 1280px)': {
  //     height: '9rem',
  //   },
  // },
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
export class WhoWeAre extends Component {
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
            <h1 className="strap-underline">WHO WE ARE</h1>
          </Box>
        </Box>
        {/* <Box component="div" className={classes.heroOutWrap}>
          <div className={classes.heroInnerWrap}>
            <div className={classes.wrapDiv}>
              <div className={classes.showHeroImg}>
                <img
                  src={HeaderImg}
                  className={classes.heroViWidth}
                  alt="who we are hero"
                />
              </div>
            </div>
          </div>
          <div className={classes.rip}></div>
        </Box> */}
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

export default withStyles(styles)(WhoWeAre);