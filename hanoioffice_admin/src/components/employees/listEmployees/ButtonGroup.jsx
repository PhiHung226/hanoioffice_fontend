import React from 'react';

import Fade from '@material-ui/core/Fade';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';

import BaseButton from '../../base/button/ButtonBase';
const FadeMenu = () => {
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <BaseButton startIcon={ <SortIcon /> } onClick={ handleClick } />
      <Menu
        id="fade-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ open }
        onClose={ handleClose }
        TransitionComponent={ Fade }
      >
        <MenuItem>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default FadeMenu;