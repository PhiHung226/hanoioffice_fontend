import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabPanel from '../../../components/common/tabPanel/TabPanel';
import { a11yProps, useStyles } from '../../../components/common/tabPanel/tabPanelProps';
import Layout from '../../../layouts';
import ListRoom from '../RoomList/listRoom';
import Filter from '../RoomList/listRoom/Filters';
import RoomEmpty from '../RoomList/roomEmpty';
import FilterEmpty from '../RoomList/roomEmpty/Filters';

const RoomList = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [ value, setValue ] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Layout>
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
              <Tab label="Danh sách phòng" { ...a11yProps(0) } />
              <Tab label="Phòng trống" { ...a11yProps(1) } />
            </Tabs>
          </AppBar>
          <TabPanel value={ value } index={ 0 } dir={ theme.direction } className="customs-tabPanel" nav={ Filter }>
            <ListRoom />
          </TabPanel>
          <TabPanel value={ value } index={ 1 } dir={ theme.direction } className="customs-tabPanel" nav={ FilterEmpty }>
            <RoomEmpty />
          </TabPanel>
        </div>
      </Layout>
    </>
  );
};
export default RoomList;