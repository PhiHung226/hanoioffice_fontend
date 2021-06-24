import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabPanel from '../../../components/common/tabPanel/TabPanel';
import { a11yProps, useStyles } from '../../../components/common/tabPanel/tabPanelProps';
import Layout from '../../../layouts';
import AboutToExpire from '../contractList/aboutToExpire';
import FilterAbout from '../contractList/aboutToExpire/filters';
import ListContract from '../contractList/listContract';
import Filter from '../contractList/listContract/filters';

const ContractList = () => {
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
              <Tab label="Danh sách hợp đồng" { ...a11yProps(0) } />
              <Tab label="Hợp đồng sắp hết hạn" { ...a11yProps(1) } />
            </Tabs>
          </AppBar>
          <TabPanel value={ value } index={ 0 } dir={ theme.direction } className="customs-tabPanel" nav={ Filter }>
            <ListContract />
          </TabPanel>
          <TabPanel value={ value } index={ 1 } dir={ theme.direction } className="customs-tabPanel" nav={ FilterAbout }>
            <AboutToExpire />
          </TabPanel>
        </div>
      </Layout>
    </>
  );
};
export default ContractList;