import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import HeaderImg from '../../css/assets/imgs/IMG_4594.jpg';
import outreachPDF from '../../css/assets/imgs/Outreach-Engagement.pdf';

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
  subSection: {
    color: '#777',
    fontFamily: 'league_gothicregular',
    fontWeight: 'bold',
    letterSpacing: '.2rem',
    paddingBottom: '30px',
    paddingTop: '20px',
  },
  list: {
    marginLeft: '20px',
  },
  rightAlign: {
    justifyContent: 'flex-start',
  },
  leftAlign: {
    justifyContent: 'flex-end',
  },
});
export class OurWork extends Component {
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
            <h1 className="strap-underline">OUR WORK</h1>
          </Box>
        </Box>
        <Grid container spacing={3} className={classes.rightAlign}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                ACADEMY
              </Typography>
              <Typography variant="p" component="p" paragraph>
                For nearly 25 years, Impact Dance has motivated, inspired and nurtured
                young people through hip-hop and street dance. Founded by Hakeem Onibudo,
                the company has been a leader in the hip-hop, street and youth dance sector
                since its inception in 1995.
              </Typography>
              <ul className={classes.list}>
                  <li>
                    <Typography variant="h5" component="h5" className={classes.subSection}>
                      CENTRAL ACADEMY
                    </Typography>
                    <Typography variant="p" component="p" paragraph>
                      Our original Central London Academy trains over 20 young people aged
                      11 - 17 for four hours every Saturday at Danceworks, in Mayfair. These sessions include technique and
                      skill training as well as creative and choreographic tasks based around hip-hop dance theatre.
                    </Typography>
                  </li>
                  <li>
                  <Typography variant="h5" component="h5" className={classes.subSection}>
                      NORTH WEST ACADEMY
                    </Typography>
                    <Typography variant="p" component="p" paragraph>
                      We have recently opened our second Academy in the Borough of Brent in partnership with community
                      centre The Yellow, supported by Wembley Park Quintain. Through the same core group of teachers,
                      we run one-hour sessions for two age groups (7-10 and 11-17 years old).
                    </Typography>
                  </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.leftAlign}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                AUTHENTICITY
              </Typography>
              <Typography variant="p" component="p" paragraph>
                A London-wide youth dance company, Authenticity brings together the city’s most talented
                young dancers and offers high-quality dance training and accessible performance opportunities
                across the city. In 2019, Authenticity has been offered their second commission by Greenwich+Docklands
                International Festival.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.rightAlign}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                OUTREACH
              </Typography>
              <Typography variant="p" component="p" paragraph>
                Impact Dance has been delivering dance in schools, youth centre’s and educational environments
                for over 23 years. We offer a wide range such as after-school clubs, enrichment sessions,
                an educational resource (available with or without workshops), one off tailored workshops, work
                experience or performances.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                All these sessions represent the same practical and mental ethos to allow young people to achieve
                extra-ordinary things through the medium of dance whilst teaching leadership and life skills to equip
                the youth with the capacity to release their potential. These are all led by one of our experienced dance
                teachers who have been trained to deliver high quality classes all within the ethos of the company.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                We take pride that these are affordable, accessible and will ensure they meet the educational facilitators needs.
                The Impact team will manage all logistical elements whilst working closely with yourselves to guarantee a seamless experience.
                <a href={outreachPDF}>Outreach & Engagement</a> For more information please contact our Learning and Participation Manager Rebecca at rebecca@impactdance.co.uk
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.rightAlign}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                PROJECTS & EVENTS
              </Typography>
              <Typography variant="p" component="p" paragraph>


              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default withStyles(styles)(OurWork);