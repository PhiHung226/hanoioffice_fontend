import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabPanel from '../common/tabPanel/TabPanel';
import { a11yProps, useStyles } from '../common/tabPanel/tabPanelProps';
import EmptyRoom from './table/EmptyRoom';
import ListRooms from './table/ListRooms';
import RepairRoom from './table/RepairRoom';

const Room = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [ value, setValue ] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={ classes.root }>
      <AppBar position="static" color="default">
        <Tabs
          value={ value }
          onChange={ handleChange }
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Phòng đang sử dụng" { ...a11yProps(0) } />
          <Tab label="Phòng trống" { ...a11yProps(1) } />
          <Tab label="Phòng bảo trì" { ...a11yProps(2) } />
        </Tabs>
      </AppBar>
      <TabPanel value={ value } index={ 0 } dir={ theme.direction }>
        <ListRooms />
      </TabPanel>
      <TabPanel value={ value } index={ 1 } dir={ theme.direction }>
        <EmptyRoom />
      </TabPanel>
      <TabPanel value={ value } index={ 2 } dir={ theme.direction }>
        <RepairRoom />
      </TabPanel>
    </div>
  );
};
export default Room;