import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../css/assets/imgs/GORM-8493.jpg';

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
  subHeader: {
    fontFamily: 'league_gothicregular',
    marginBottom: '15px',
    color: '#BBB',
  },
  heroWrapper: {
    '@media (min-width:320px)': {
      margin: theme.spacing(1),
    },
    '@media (min-width: 600px)': {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginTop: '0px',
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
  list: {
    listStyle: 'disc',
    marginLeft: '20px',
  },
  rightAlign: {
    justifyContent: 'flex-start',
  },
  leftAlign: {
    justifyContent: 'flex-end',
  },
});
export class WhoWeAre extends Component {
  render() {
    const { classes } = this.props;

    return(
      <Box className="who-we-are">
        <Box component="div" className={classes.heroWrapper}>
          <img src={HeaderImg} className={classes.hero} alt="who we are hero" />
          <Box className={[classes.root, classes.pageHeading]}>
            <Typography variant="h4" component="h4" className={classes.subHeader}>
              ABOUT
            </Typography>
            <h1 className="strap-underline">WHO WE ARE</h1>
          </Box>
        </Box>
        <Grid container spacing={3} className={classes.rightAlign}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                IMPACT DANCE
              </Typography>
              <Typography variant="p" component="p" paragraph>
                For nearly 25 years, Impact Dance has motivated, inspired and nurtured young people
                through hip-hop and street dance. Founded by Hakeem Onibudo, the company has been a
                leader in the hip-hop, street and youth dance sector since its inception in 1995.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                Through dance training, mentoring, creative performances and international projects,
                we enable young people of all backgrounds - particularly those less privileged and
                considered 'hard-to-reach' - to develop their creative and life skills, to discover
                their talent and grow up to be 'fully functioning individuals'; Impact alumni have
                gone on to thrive as, for example, professional dance artists, investment bankers,
                radio presenters and designers.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                Based and working in Brent, with a London-wide reach and a global footprint, Impact
                Dance is at a pivotal point in its history. Responding to a local need, we are scaling
                up our operation to develop opportunities where there are none, to invest in young people's
                futures, and to ensure we can continue these efforts for years to come.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.leftAlign}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                OUR ETHOS
              </Typography>
              <Typography variant="p" component="p" paragraph>
                In everything we do, in each dance class, in each performance, in each project,
                we all adhere to a shared set of values: we strive to be inclusive, empowering,
                passionate, visionary and supportive of each other's wellbeing, allowing each
                individual to realise their potential in and through dance.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                By using dance to connect with young people aged 7 to 17, particularly those
                excluded from accessing the arts due to financial or social barriers. Our aim
                is to continue to:
              </Typography>
              <ul className={classes.list}>
                  <li>Support young people's physical and mental wellbeing by providing high-quality dance training.</li>
                  <li>Develop young people’s creative, social, life, team-work and leadership skills.</li>
                  <li>Enable young people to express themselves by creating a safe space.</li>
                  <li>Allow the young people to feel empowered by providing positive opportunities.</li>
                  <li>Increase young people’s confidence, self-belief and aspirations.</li>
                  <li>Support community cohesion by bringing together young people and families of diverse backgrounds.</li>
                  <li>Provide activities that deter young people from socially harmful distractions.</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default withStyles(styles)(WhoWeAre);