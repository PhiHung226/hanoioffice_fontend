import React from 'react';

import PropTypes from 'prop-types';

const Popover = React.forwardRef((
  {
    isVisible,
    background = 'bg-white',
    right,
    children,
    className = 'z-50',
    maxW = true,
    ...props
  }, ref) => {
  return (
    <div ref={ ref } { ...props }
      className={ `absolute ${isVisible ? 'block m-0' : 'hidden'} ${maxW ? 'max-w-lg' : ''} w-56 ${right ? 'right-0' : ''} ${className}` }>
      <div className={ `relative py-2 rounded-md shadow-2xl ${background}` }>
        <div className="relative w">{ children }</div>
      </div>
    </div>
  );
});

Popover.propTypes = {
  isVisible: PropTypes.bool,
  items: PropTypes.array,
  background: PropTypes.string,
  className: PropTypes.string,
  right: PropTypes.bool,
  maxW: PropTypes.bool
};
export default Popover;
