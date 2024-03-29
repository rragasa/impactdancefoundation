import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../css/assets/imgs/logo.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'flex',
    float: 'right',
    zIndex: '99999',
    '@media (min-width:320px)': {
      marginRight: theme.spacing(1),
      marginTop: '20px',
    },
    '@media (min-width:600px)': {
      margin: theme.spacing(3),
    },
  },
  title: {
    flexGrow: 1,
  },
  menuIcon: {
    '@media (min-width:320px)': {
      fontSize: '30px',
    },
    '@media (min-width:600px)': {
      fontSize: '50px',
    },
  },
  logo: {
    marginTop: '20px',
    '@media (min-width:320px)': {
      marginLeft: theme.spacing(1),
      width: '200px',
    },
    '@media (min-width:600px)': {
      marginLeft: '18px',
      width: 'auto',
    },
  },
});
export class Navigation extends Component {
  render() {
    const { classes, showMenu, handleNavigation } = this.props;

    const ulClass = ['nav-links'];
    if (showMenu) {
      ulClass.push('open');
    }

    return (
      <nav
        role="navigation"
        aria-label="Main"
        classes={classes.root}
        className={ulClass.join(' ')}
      >
        <Link to="/">
          <img
            src={Logo}
            className={classes.logo}
            alt="Impact Dance Logo"
          />
        </Link>
        <IconButton
          onClick={handleNavigation}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon className={classes.menuIcon}/>
        </IconButton>
        { showMenu && (
            <ul className="nav-links">
              <li><Link to="/" onClick={handleNavigation}>Home</Link></li>
              <li><Link to="/who-we-are" onClick={handleNavigation}>Who We Are</Link></li>
              <li><Link to="/our-work" onClick={handleNavigation}>Our Work</Link></li>
              <li><Link to="/impact-youth" onClick={handleNavigation}>Impact Youth</Link></li>
              <li><Link to="/the-team" onClick={handleNavigation}>The Team</Link></li>
              <li><Link to="/contact-us" onClick={handleNavigation}>Contact Us</Link></li>
            </ul>
          )
        }
      </nav>
    );
  }
}

export default withStyles(styles)(Navigation);