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
  projectsList: {
    paddingTop: '25px',
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
                The academy represents the practical and mental ethos of Impact Dance for young
                people aged 11-19 years. We aim to allow ordinary young people to achieve extra-ordinary
                things through the medium of dance, all the time teaching leadership and life skills
                to equip the youth with the capacity to realise their potential and become a Fully
                Functioning Individual. This is done through our core group of teachers. The teachers
                that represent the company are trained to deliver high quality classes all within
                the ethos of the company.
              </Typography>
              <ul className={classes.list}>
                  <li>
                    <Typography variant="h5" component="h5" className={classes.subSection}>
                      CENTRAL ACADEMY
                    </Typography>
                    <Typography variant="p" component="p" paragraph>
                      Our original Central London Academy trains over 20 young people aged 11 - 19
                      for four hours every Saturday at Danceworks, in Mayfair. These sessions include
                      technique and skill training as well as creative and choreographic tasks based
                      around hip-hop dance theatre.
                    </Typography>
                    <ul>
                      <li>
                        <Typography variant="p" component="p" paragraph>
                          <b>When:</b> Saturday 21st September – Saturday 7th December (Half Term - Saturday 26th October and Saturday 2nd November)
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="p" component="p" paragraph>
                          <b>Where:</b> Danceworks, 16 Balderton Street, Mayfair, W1K 6TN
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="p" component="p" paragraph>
                          <b>Fees:</b> £50 – 10-week term
                        </Typography>
                        </li>
                      <li>Contact <a href="mailto:clara@impactdance.co.uk">clara@impactdance.co.uk</a> to book your space, or for more information</li>
                    </ul>
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
                A London-wide youth dance company, Authenticity brings together the city’s most talented young dancers and offers high-quality
                dance training and accessible performance opportunities across the city. In 2019, Authenticity was offered their second commission
                by Greenwich+Docklands International Festival. Here they performed the site specific piece “Shop Plastique”.
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
                Impact Dance has been delivering dance in schools, youth centre’s and educational environments for over 23 years. We offer a wide
                range such as after-school clubs, enrichment sessions, an educational resource (available with or without workshops), one off
                tailored workshops, work experience or performances.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                All these sessions represent the same practical and mental ethos to allow young people to achieve extra-ordinary things through
                the medium of dance whilst teaching leadership and life skills to equip the youth with the capacity to release their potential.
                These are all led by one of our experienced dance teachers who have been trained to deliver high quality classes all within the
                ethos of the company.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                We take pride that these are affordable, accessible and will ensure they meet the educational facilitators needs. The Impact
                team will manage all logistical elements whilst working closely with yourselves to guarantee a seamless experience.“Take a
                look at our <a href={outreachPDF}>'Outreach and Engagement'</a> info sheet.
              </Typography>
              <Typography variant="p" component="p" paragraph>
                For more information please contact Clara <a href="mailto:clara@impactdance.co.uk">clara@impactdance.co.uk</a>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.leftAlign}>
          <Grid item xs={12} sm={12} md={7} lg={7}>
            <Box component="div" className={classes.pageContent}>
              <Typography variant="h3" component="h3" className={classes.sectionHeading}>
                PROJECTS & EVENTS
              </Typography>
              <Typography variant="p" component="p" paragraph>
                We look for high-quality, impactful international opportunities for young people to benefit from. In 2019, this included Impact Youth Company
                performing at the In the Picture Festival in Amsterdam, a British Council-supported collaboration with Uganda. As well as, the incredible 4x4 Dance Championship Competition
                held in Wembley.
              </Typography>
              <ul className={classes.list}>
                <li><Typography variant="h5" component="h5" className={classes.subSection}>UPCOMING</Typography></li>
                <li>
                  <ul>
                    <li>
                    <Typography variant="p" component="p" paragraph>
                      <b>IMPACT DANCEATHON</b>
                    </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        We will be hosting a fundraising event to raise money to help support the work we are doing weekly with young people.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        <b>When: </b> Saturday 2nd November 2019
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        <b>Time: </b> 3 - 6PM
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        <b>Location: </b> The Yellow, 1 Humphry Repton Lane, Wembley, NW2 5PJ
                      </Typography>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className={classes.projectsList}>
                    <li>
                    <Typography variant="p" component="p" paragraph>
                      <b>END OF YEAR SHOW</b>
                    </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                      Impact Dance will be taking over The Place for an epic night of youth dance.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        <b>When: </b> Saturday 14th December 2019
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        <b>Time: </b> 7.30PM
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        <b>Location: </b> The Place, 17 Duke’s Road, London, WC1H 9PY
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        Tickets available soon at: <a href="https://www.theplace.org.uk">theplace.org.uk</a>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p" component="p" paragraph>
                        Contact Creative Producer <a href="mailto:paige@impactdance.co.uk">paige@impactdance.co.uk</a> for more information.
                      </Typography>
                    </li>
                  </ul>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default withStyles(styles)(OurWork);