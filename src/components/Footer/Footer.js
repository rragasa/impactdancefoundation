import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const styles = theme => ({
  root: {
    '@media (min-width:320px)': {
      margin: theme.spacing(1),
    },
    '@media (min-width: 600px)': {
      margin: theme.spacing(4),
    },
  },
  footer: {
    position: 'absolute',
    right: '0',
    left: '0',
    padding: '1rem',
    backgroundColor: '#fff',
    textAlign: 'center',
    '@media (min-width:320px)': {
      padding: theme.spacing(4),
    },
    '@media (min-width:600px)': {
      padding: '62px',
    },
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  icon: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
});
export class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box component="div" className="footer" m={4}>
        <Box component="div" className={classes.footer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="p"
                component="p"
                align="left"
                paragraph>Impact Dance©2019</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <ul className={classes.socialIcons}>
                <li className={classes.icon}><a href="https://www.facebook.com/Impact-Youth-Dance-Company-1912612922144724/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className={classes.icon}><a href="https://twitter.com/Impact_Dance1"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className={classes.icon}><a href="https://www.instagram.com/impactdanceyouth/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className={classes.icon}><a href="https://www.youtube.com/channel/UCYU7ImEBHKrQCWYGdzoT4aQ"><FontAwesomeIcon icon={faYoutube} /></a></li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(Footer);