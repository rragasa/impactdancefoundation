import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    display: 'flex',
    float: 'right',
    marginRight: theme.spacing(4),
    zIndex: '99999',
  },
  title: {
    flexGrow: 1,
  },
  menuIcon: {
    fontSize: '50px',
  }
});
export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation = () => {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    const { classes } = this.props;
    const { showMenu } = this.state;

    let boxClass = ['nav-links'];
    if (showMenu) {
      boxClass.push('open');
    }

    return (
      <nav
        role="navigation"
        aria-label="Main"
        classes={classes.root}
        className={boxClass.join(' ')}>
        <IconButton
          onClick={this.handleNavigation}
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