import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// @ts-ignore
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// @ts-ignore
import MenuIcon from '@material-ui/icons/Menu';
// @ts-ignore
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

///IMG
// @ts-ignore
import SneakLogo from '../img/SneakLogo.jpg';
//STYLES
import '../styles/navbar.css';


const useStyles = makeStyles((theme) => ({
  
  buttonNavbar: {
    color: '#707070',
    background: 'white',
    '&:hover': {
        backgroundColor: '#FE667F',
        color: 'white',
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#FF5672'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  search:{
    color:'#FF5672'
  }
}));

export default function Navbar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
            
           
           
            
      <MenuItem>
          <Button className='ButtonNav' color="inherit">
              All
          </Button>
      </MenuItem>
      <MenuItem>
          <Button className='ButtonNav' color="inherit">
              Branding
          </Button>
      </MenuItem>
      <MenuItem >
          <Button className='ButtonNav' color="inherit">
              Web
          </Button>
      </MenuItem>
      <MenuItem >
        <Button className='ButtonNav' color="inherit">
              Photography
        </Button>
      </MenuItem>
      <MenuItem >
            <Button className='ButtonNav' color="inherit">
              App
            </Button>
      </MenuItem>
      <MenuItem >
        <IconButton 
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true" 
              color="inherit"
              className={classes.search}
            >
              <SearchIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar style={{ background: '#fff', color:'black'}}  elevation={0} position="static" >
        <Toolbar>   
          <div className={classes.search}>
          <Typography className={classes.title} variant="h6" noWrap>
            <img src={SneakLogo} className="App-logo" alt="logo" />
          </Typography>
            
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button className={classes.buttonNavbar} color="inherit">
              All
            </Button>
            <Button className={classes.buttonNavbar} color="inherit">
              Branding
            </Button>
            <Button className={classes.buttonNavbar} color="inherit">
              Web
            </Button>
            <Button className={classes.buttonNavbar} color="inherit">
              Photography
            </Button>
            <Button className={classes.buttonNavbar} color="inherit">
              App
            </Button>
            <IconButton 
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true" 
              color="inherit"
              className={classes.search}
            >
              <SearchIcon />
            </IconButton >
          </div>
          <div className={classes.sectionMobile}>
            <Button
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
