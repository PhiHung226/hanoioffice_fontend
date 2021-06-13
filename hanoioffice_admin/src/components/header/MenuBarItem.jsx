import React, { useState } from 'react';

import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { onCloseOpenDrawer } from '../../store/atoms/header/header';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const MenuBarItem = ({ item }) => {
  const setStateMenu = useSetRecoilState(onCloseOpenDrawer);
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const location = useLocation();

  return (
    <>
      <NavLink to={ item.subMenu.length === 0 ? item.path : '#' } >
        <ListItem button onClick={ () => handleClick() } >
          <ListItemIcon>
            { item.icon }
          </ListItemIcon>
          <ListItemText primary={ item.title } className={ 'text-blue-900' } />
        </ListItem>
      </NavLink>
      {
        <Collapse in={ open } timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {
              item.subMenu.map((i, index) => (
                <NavLink to={ i.subPath || '#' } key={ index } onClick={ () => setStateMenu(false) }>
                  <ListItem button className={ classes.nested } selected={ location.pathname === i.subPath } key={ index }>
                    <ListItemIcon>
                      { i.subIcon }
                    </ListItemIcon>
                    <ListItemText primary={ i.subTitle } className={ 'text-blue-700' } />
                  </ListItem>
                </NavLink>
              ))
            }
          </List>
        </Collapse>
      }
    </>
  );
};
MenuBarItem.propTypes = {
  item: PropTypes.object,
};
export default MenuBarItem;