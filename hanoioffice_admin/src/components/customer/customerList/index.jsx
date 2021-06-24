import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabPanel from '../../../components/common/tabPanel/TabPanel';
import { a11yProps, useStyles } from '../../../components/common/tabPanel/tabPanelProps';
import Layout from '../../../layouts';
import BadCustomer from '../customerList/badCustomer';
import FilterBad from '../customerList/badCustomer/Filters';
import ListCustomer from '../customerList/listCustomer';
import Filter from '../customerList/listCustomer/Filters';

const CustomerList = () => {
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
              <Tab label="Danh sách khách hàng" { ...a11yProps(0) } />
              <Tab label="Danh sách đen" { ...a11yProps(0) } />
            </Tabs>
          </AppBar>
          <TabPanel value={ value } index={ 0 } dir={ theme.direction } className="customs-tabPanel" nav={ Filter }>
            <ListCustomer />
          </TabPanel>
          <TabPanel value={ value } index={ 1 } dir={ theme.direction } className="customs-tabPanel" nav={ FilterBad }>
            <BadCustomer />
          </TabPanel>
        </div>
      </Layout>
    </>
  );
};
export default CustomerList;