import React from 'react';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonBase = ({ variant, color, onClick, startIcon, title, className, ...props }) => {
  return (
    <>
      <div className={ className }>
        <Button variant={ variant }
          color={ color }
          onClick={ onClick }
          startIcon={ startIcon } { ...props }>
          { title }
        </Button>
      </div>
    </>
  );
};
ButtonBase.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  startIcon: PropTypes.object,
  title: PropTypes.string,
  className: PropTypes.string
};
ButtonBase.defaultProps = {
  variant: 'contained',// chọn màu nền 
  color: 'primary',// chọn màu nền cho chữ 
  // disableElevation (chọn bóng )
  // disabled (vô hiệu hóa)
};
export default ButtonBase;

// contained: màu nền
// outlined: chỉ có viền