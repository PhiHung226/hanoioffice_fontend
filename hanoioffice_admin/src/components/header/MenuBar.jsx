import React from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';

import { router } from '../../router';
import MenuBarItem from './MenuBarItem';
// import Demo from './demo1';
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

const MenuBar = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={ <ListSubheader component="div" id="nested-list-subheader">
        Phong cách làm việc mới!
      </ListSubheader> }
      className={ classes.root }
    >
      <Divider />
      {
        router.map((item, index) => (
          <MenuBarItem item={ item } key={ index } />
        ))
      }
    </List>
  );
};
export default MenuBar;