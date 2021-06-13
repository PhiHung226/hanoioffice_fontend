import React, { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import MailIcon from '@material-ui/icons/Mail';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import useWindowDimensions from '../../hooks/useWindowDimensions';
import { setWidthDefault } from '../../store/atoms/header/header';
import MenuHeaderBar from './MenuBar';
import TopHeader from './TopHeader';

// const widthDefault = 1280;
const Header = ({ mainContent }) => {
  const widthDefault = useRecoilValue(setWidthDefault);
  const { screenWidth } = useWindowDimensions();
  const [ widths, setWidths ] = useState(300);
  const drawerWidth = widths;
  useEffect(() => {
    if (screenWidth > widthDefault) {
      setWidths(300);
    } else if (screenWidth < widthDefault) {
      setWidths(0);
    }
  }, [ screenWidth ]);

  const useStyles = makeStyles((theme) => ({
    root: { display: 'flex' },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
      // width: '22rem'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>
          <TopHeader />
        </Toolbar>
      </AppBar>
      <Drawer
        className={ classes.drawer }
        variant="permanent"
        classes={ {
          paper: classes.drawerPaper,
        } }
      >
        <Toolbar />
        <div className={ classes.drawerContainer }>
          <MenuHeaderBar />
        </div>
      </Drawer>
      <main className={ classes.content }>
        <Toolbar />
        { mainContent }
      </main>
    </div>
  );
};
Header.propTypes = {
  mainContent: PropTypes.object
};
export default Header;