import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabPanel from '../../components/common/tabPanel/TabPanel';
import { a11yProps, useStyles } from '../../components/common/tabPanel/tabPanelProps';
import BlackListEmployees from '../../components/employees/BlackListEmployees';
// import FilterBlackList from '../../components/employees/BlackListEmployees/filters';
import Decentralizition from '../../components/employees/Decentralization';
// import FilterDecen from '../../components/employees/Decentralization/filters';
import ListEmployees from '../../components/employees/listEmployees';
// import FilterList from '../../components/employees/listEmployees/filters';
import Layout from '../../layouts';

const Employee = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [ value, setValue ] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const navFilter = () => {
  //   switch (value) {
  //     case 0:
  //       return <FilterList />;
  //     case 1:
  //       return <FilterDecen />;
  //     case 2:
  //       return <FilterBlackList />;
  //     default:
  //       return;
  //   }
  // };
  return (
    <>
      <Layout title='Nhân viên'>
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
              <Tab label="Danh sách nhân viên" { ...a11yProps(0) } />
              <Tab label="Phân quyền" { ...a11yProps(1) } />
              <Tab label="Danh sách đen" { ...a11yProps(2) } />
            </Tabs>
          </AppBar>
          <TabPanel value={ value } index={ 0 } dir={ theme.direction } className="customs-tabPanel">
            <ListEmployees />
          </TabPanel>
          <TabPanel value={ value } index={ 1 } dir={ theme.direction } className="customs-tabPanel">
            <Decentralizition />
          </TabPanel>
          <TabPanel value={ value } index={ 2 } dir={ theme.direction } className="customs-tabPanel">
            <BlackListEmployees />
          </TabPanel>
        </div>
      </Layout>
    </>
  );
};
export default Employee;