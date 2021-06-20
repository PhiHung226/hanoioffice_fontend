import React from 'react';

import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { children, value, index, nav: Nav, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      id={ `full-width-tabpanel-${index}` }
      aria-labelledby={ `full-width-tab-${index}` }
      { ...other }
    >
      <div>
        { <Nav /> }
      </div>
      { value === index &&
        <Box p={ 3 }>
          <div>{ children }</div>
        </Box>
      }
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.object,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  nav: PropTypes.func
};
export default TabPanel;