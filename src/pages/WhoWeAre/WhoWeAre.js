import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import HeaderImg from '../../css/assets/imgs/GORM-8493.jpg';
import HeroRip from '../../css/assets/imgs/hero-rip-pages.svg';

// const styles = theme => ({
//   root: {
//     margin: theme.spacing(3),
//     '@media (min-width:320px)': {
//       margin: '15px',
//     },
//   },
//   heroWrap: {
//     position: 'relative',
//     width: '100%',
//     //height: 'calc(100vh - 8.2rem)',
//     zIndex: '-1',
//   },
//   hero: {
//     height: '100%',
//     width: '100%',
//   },
//   rip: {
//     position: 'absolute',
//     bottom: '0',
//     width: '100%',
//     height: '18rem',
//     background: `url(${HeroRip}) no-repeat center top 7rem transparent`,
//     backgroundSize: '110% auto',
//   },
// });

const styles = theme => ({
  heroOutWrap: {
    position: 'relative',
    width: '100%',
    height: '82vh',
    zIndex: '-1',
    '@media (min-width:320px)': {
      height: 'auto',
      padding: theme.spacing(1),
    },
    '@media (min-width: 1280px)': {
      height: 'calc(80vh - 8.2rem)',
      padding: theme.spacing(3),
    },
  },
  heroInnerWrap: {
    margin: '0 auto',
    '@media (min-width:320px)': {
      height: 'auto',
    },
    '@media (min-width: 600px)': {
      height: '100%',
    },
  },
  wrapDiv: {
    width: '100%',
    overflow: 'hidden',
    filter: 'alpha(opacity=95)',
    opacity: 0.95,
    '@media (min-width:320px)': {
      height: 'auto',
    },
    '@media (min-width: 600px)': {
      height: '100%',
    },
  },
  showHeroImg: {
    filter: 'none',
    opacity: 1,
  },
  heroViWidth: {
    width: '100vw',
    '@media (min-width:320px)': {
      height: 'auto',
    },
    '@media (min-width: 600px)': {
      height: '100%',
    },
  },
  rip: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    background: `url(${HeroRip}) no-repeat center top 7rem transparent`,
    backgroundSize: '110% auto',
    '@media (min-width:320px)': {
      height: '5rem',
      backgroundPosition: 'center top',
    },
    '@media (min-width: 600px)': {
      height: '8rem',
    },
    '@media (min-width: 1280px)': {
      height: '18rem',
    },
  },
});
export class WhoWeAre extends Component {
  render() {
    const { classes } = this.props;

    return(
      // <Box
      //   component="div"
      //   className={classes.root}
      // >
      //   <div className={classes.heroWrap}>
      //     <img
      //       src={HeaderImg}
      //       className={classes.hero}
      //       alt="who we are hero"
      //     />
      //     <div className={classes.rip}></div>
      //   </div>
      // </Box>

      <Box component="div" className={classes.heroOutWrap}>
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
      </Box>
    );
  }
};

export default withStyles(styles)(WhoWeAre);