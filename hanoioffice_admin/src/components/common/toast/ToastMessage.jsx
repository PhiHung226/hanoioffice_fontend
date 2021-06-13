import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const ToastMessage = ({ msg, icon }) => {
  return (
    <>
      <div className='flex'>
        <span className='mr-4 font-18 my-auto'>
          <FontAwesomeIcon icon={ icon } />
        </span>
        <span>{ msg }</span>
      </div>
    </>
  );
};

ToastMessage.propTypes = {
  msg: PropTypes.string,
  icon: PropTypes.string
};

export default React.memo(ToastMessage);