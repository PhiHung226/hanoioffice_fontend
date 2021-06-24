import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import TabPanel from '../../../components/common/tabPanel/TabPanel';
import { a11yProps, useStyles } from '../../../components/common/tabPanel/tabPanelProps';
import Layout from '../../../layouts';
import Species from '../species/species';
import Filter from '../species/species/Filters';

const Speciess = () => {
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
              <Tab label="Danh sách loại phòng" { ...a11yProps(0) } />
            </Tabs>
          </AppBar>
          <TabPanel value={ value } index={ 0 } dir={ theme.direction } className="customs-tabPanel" nav={ Filter }>
            <Species />
          </TabPanel>
        </div>
      </Layout>
    </>
  );
};
export default Speciess;