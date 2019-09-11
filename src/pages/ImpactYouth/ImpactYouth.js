import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../css/assets/imgs/IMPACT_YOUTH_ThePlace_TUNEDIN_Alicia_Clarke.jpg';
import ReactPlayer from 'react-player'

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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                THE YOUTH
              </Typography>
              <Typography variant="p" component="p" paragraph>
                Impact Youth is the performance company of the Academy and was the foundation
                of the Impact Dance Company in its inaugural year in 1995. From there it has grown
                to be one of the most successful Hip-Hop/Street Dance Youth companies of its time.
                In 2005 Impact Youth became the first London company to represent their region at
                England’s National Youth Dance Festival (now known as U.Dance) in Birmingham.
                Over the last year few years Impact Youth represented London at the U.Dance event
                in Salford and Birmingham in 2016 and 2017 respectively. The company has performed
                at various venues and events and worked with large institutions including: NEC and
                NIA Birmingham, Sadler’s Wells, Peacock theatre, Nickelodeon TV, Royal Ballet School,
                C4 amongst others. The company have been asked to perform internationally at both
                In the Picture Festival 2018 and 2019 in Amsterdam. On numerous occasions working
                with Untold Dance, based at the Bijlmerpark Theatre in Amsterdam, on exchange
                programmes with their youths and performing in the African Diaspora Performing
                Arts Festival in 2018.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <ReactPlayer url='https://youtu.be/t0lzBXb8_lE' width='100%' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                STYLES
              </Typography>
              <Typography variant="p" component="p" paragraph>
                Impact Youth creates dance theatre pieces combining a range of different
                styles including hip-hop, street dance, contemporary movement and physical
                theatre to create narratives.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default withStyles(styles)(ImpactYouth);