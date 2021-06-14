import React from 'react';

import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
  const { children, value, index, nav, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={ value !== index }
      id={ `full-width-tabpanel-${index}` }
      aria-labelledby={ `full-width-tab-${index}` }
      { ...other }
    >
      { nav ?
        <div>
          { nav }
        </div> : null }
      { value === index && (
        <Box p={ 3 }>
          <div>{ children }</div>
        </Box>
      ) }
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.object,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  nav: PropTypes.node
};
export default TabPanel;