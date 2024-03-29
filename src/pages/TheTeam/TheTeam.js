import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../css/assets/imgs/IMG_4781.jpg';
import RebeccaImg from '../../css/assets/imgs/rebeccaleslie.png';
import PaigeImg from '../../css/assets/imgs/paigejarrett.png';
import HakeemImg from '../../css/assets/imgs/hakeemonibudo.png';
import ClaraImg from '../../css/assets/imgs/claracowen.png';

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
    maxHeight: '800px',
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
  img: {
    width: '100%',
    maxHeight: '550px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
});
export class TheTeam extends Component {
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
            <h1 className="strap-underline">THE TEAM</h1>
          </Box>
        </Box>
        <Box component="div" className={classes.pageContent}>
          <Typography variant="h3" component="h3" className={classes.sectionHeading}>
            NICE TO MEET YOU
          </Typography>
          <Box mt={4} mb={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img src={HakeemImg} alt="Hakeem Onibudo" className={classes.img}/>
              <Typography variant="p" component="p" gutterBottom>
                <b>HAKEEM ONIBUDO</b>
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
                CEO/Artistic Director
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
                <a href="mailto:hakeem@impactdance.co.uk">hakeem@impactdance.co.uk</a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img src={RebeccaImg} alt="Rebecca Leslie" className={classes.img}/>
              <Typography variant="p" component="p" gutterBottom>
                <b>REBECCA LESLIE</b>
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
                Outreach and Engagement Manager
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
              <a href="mailto:rebecca@impactdance.co.uk">rebecca@impactdance.co.uk</a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img src={PaigeImg} alt="Paige Jarrett" className={classes.img} />
              <Typography variant="p" component="p" gutterBottom>
                <b>PAIGE JARRETT</b>
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
                Creative Producer
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
              <a href="mailto:paige@impactdance.co.uk">paige@impactdance.co.uk</a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img src={ClaraImg} alt="Paige Jarrett" className={classes.img} />
              <Typography variant="p" component="p" gutterBottom>
                <b>CLARA COWEN</b>
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
                Academy Manager
              </Typography>
              <Typography variant="p" component="p" gutterBottom>
              <a href="mailto:clara@impactdance.co.uk">clara@impactdance.co.uk</a>
              </Typography>
            </Grid>
          </Grid>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default withStyles(styles)(TheTeam);