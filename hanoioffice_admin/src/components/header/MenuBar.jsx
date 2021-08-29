import React from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import {makeStyles} from '@material-ui/core/styles';

import {router, router2, router3, router4} from '../../router';
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
  const role = 1;
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={ <ListSubheader component="div" id="nested-list-subheader">
                Phong cách làm việc mới!
      </ListSubheader> }
      className={ classes.root }
    >
      <Divider/>
      {role === 1 &&
            router.map((item, index) => (
              <MenuBarItem item={ item } key={ index }/>
            ))
      }
      {role === 2 &&
            router2.map((item, index) => (
              <MenuBarItem item={ item } key={ index }/>
            ))
      }
      {role === 3 &&
            router3.map((item, index) => (
              <MenuBarItem item={ item } key={ index }/>
            ))
      }
      {role === null &&
            router4.map((item, index) => (
              <MenuBarItem item={ item } key={ index }/>
            ))
      }
    </List>
  );
};
export default MenuBar;