import React from 'react';

// import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
// import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import SearchIcon from '@material-ui/icons/Search';
import { useRecoilState, useRecoilValue } from 'recoil';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import { setWidthDefault } from '../../store/atoms/header/header';
import { onCloseOpenDrawer } from '../../store/atoms/header/header';
import MenuHeaderBar from './MenuBar';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [ theme.breakpoints.up('sm') ]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [ theme.breakpoints.up('sm') ]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [ theme.breakpoints.up('md') ]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [ theme.breakpoints.up('md') ]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [ theme.breakpoints.up('md') ]: {
      display: 'none'
    }
  }
}));

const TopHeader = () => {
  const { screenWidth } = useWindowDimensions();
  const widthDefault = useRecoilValue(setWidthDefault);
  const [ stateMenu, setStateMenu ] = useRecoilState(onCloseOpenDrawer);
  const classes = useStyles();
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState(null);

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
      anchorEl={ anchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id={ menuId }
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ handleMenuClose }>Thông tin cá nhân</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Tùy chỉnh</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Cài đặt</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Trợ giúp</MenuItem>
      <MenuItem onClick={ handleMenuClose }>Đăng xuất</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
      id={ mobileMenuId }
      keepMounted
      transformOrigin={ { vertical: 'top', horizontal: 'right' } }
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={ 4 } color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Tin nhắn</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={ 11 } color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Thông báo</p>
      </MenuItem>
      <MenuItem onClick={ handleProfileMenuOpen }>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Thông tin cá nhân</p>
      </MenuItem>
      <MenuItem onClick={ handleProfileMenuOpen }>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Chủ đề</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={ classes.grow } >
      <Toolbar>
        <div className="flex items-center">
          { screenWidth < widthDefault && <MenuIcon onClick={ () => setStateMenu(true) } /> }
          <Typography className={ classes.title } variant="h6" noWrap>
            <span className="pl-2">CS-Office</span>
          </Typography>
        </div>
        <SwipeableDrawer anchor={ 'left' } open={ stateMenu } onClose={ () => setStateMenu(false) } onOpen={ () => setStateMenu(true) }>
          <div className="w-72"
          // onClick={ toggleDrawer(false) }
          // onKeyDown={ toggleDrawer(false) }
          >
            <MenuHeaderBar />
          </div>
        </SwipeableDrawer>
        <div className={ classes.grow } />
        <div className={ classes.sectionDesktop }>
          <IconButton color="inherit">
            <ColorLensIcon />
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={ 4 } color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={ 17 } color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={ menuId }
            aria-haspopup="true"
            onClick={ handleProfileMenuOpen }
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
        <div className={ classes.sectionMobile }>
          <IconButton
            aria-label="show more"
            aria-controls={ mobileMenuId }
            aria-haspopup="true"
            onClick={ handleMobileMenuOpen }
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      { renderMobileMenu }
      { renderMenu }
    </div >
  );
};
export default TopHeader;