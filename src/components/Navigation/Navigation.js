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
    margin: theme.spacing(3),
    zIndex: '99999',
  },
  title: {
    flexGrow: 1,
  },
  menuIcon: {
    fontSize: '50px',
  },
  logo: {
    margin: theme.spacing(3),
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
        <img src={Logo} className={classes.logo} />
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/our-work">Our Work</Link></li>
              <li><Link to="/impact-youth">Impact Youth</Link></li>
              <li><Link to="/the-team">The Team</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          )
        }
      </nav>
    );
  }
}

export default withStyles(styles)(Navigation);