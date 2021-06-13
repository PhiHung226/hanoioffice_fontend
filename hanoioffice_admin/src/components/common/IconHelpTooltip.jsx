import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const IconHelpTooltip = ({ label, tooltip }) => {
  return (
    <span className="ml-2 cursor-pointer">
      <FontAwesomeIcon
        data-tip={ tooltip }
        data-for={ label }
        icon={ 'info-circle' }
        className="hover:text-gray-600"
        size={ 'lg' }
        color={ '#999' }
      />
      <ReactTooltip
        id={ label }
        className="customeTheme"
        effect={ 'solid' }
        delayShow={ 200 }
        place={ 'right' }
        border
        borderColor={ '#4bac4d' }
        arrowColor={ '#fff' }
      />
    </span>
  );
};

IconHelpTooltip.propTypes = {
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
};

export default IconHelpTooltip;