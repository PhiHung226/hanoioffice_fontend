import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { func, string, number, oneOfType } from 'prop-types';

const BaseIconButton = React.forwardRef((
  {
    onClick,
    icon,
    size = 'lg',
    className
  }, ref, ...props) => {
  return (
    <>
      <div { ...props } ref={ ref } onClick={ onClick } className={ `icon__button ${className}` }>
        <FontAwesomeIcon icon={ icon } size={ size } color={ '#666' } fixedWidth />
      </div>
    </>
  );
});

BaseIconButton.propTypes = {
  onClick: func,
  icon: string,
  className: string,
  size: oneOfType([ number, string ]),
};
export default BaseIconButton;
