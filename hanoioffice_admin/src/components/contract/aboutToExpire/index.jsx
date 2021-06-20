import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabPanel from '../../../components/common/tabPanel/TabPanel';
import { a11yProps, useStyles } from '../../../components/common/tabPanel/tabPanelProps';
import AboutToExpire from '../../../components/contract/aboutToExpire/aboutToExpire';
// import FilterList from '../../components/employees/listEmployees/filters';
import Layout from '../../../layouts';
import Filter from '../aboutToExpire/aboutToExpire/filters';
const AboutToExpires = () => {
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
  //     default:
  //       return;
  //   }
  // };
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
              <Tab label="Hợp đồng sắp hết hạn" { ...a11yProps(0) } />
            </Tabs>
          </AppBar>
          <TabPanel value={ value } index={ 0 } dir={ theme.direction } className="customs-tabPanel" nav={ Filter }>
            <AboutToExpire />
          </TabPanel>
        </div>
      </Layout>
    </>
  );
};
export default AboutToExpires;