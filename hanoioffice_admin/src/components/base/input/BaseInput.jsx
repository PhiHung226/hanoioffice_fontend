import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const BaseInput = React.forwardRef((
  {
    placeholder,
    autoFocus = false,
    icon,
    iconClick,
    rightIcon,
    rightIconTip,
    rightIconClick,
    type = 'text',
    className = 'w-full',
    inputClassName = 'w-full',
    ...props
  }, ref) => {

  return (
    <div className={ `flex items-center justify-between relative ${className}` }>
      { icon && <FontAwesomeIcon onClick={ iconClick } className={ 'absolute' } icon={ icon } color={ '#999' } /> }
      <input
        { ...props }
        className={ `input w-full py-2 border-b border-gray-400 focus:outline-none focus:w-full ${icon ? 'input__icon' : ''} ${inputClassName}` }
        type={ type }
        placeholder={ placeholder }
        autoFocus={ autoFocus }
        ref={ ref }
      />
      { rightIcon && <FontAwesomeIcon onClick={ rightIconClick } className='absolute cursor-pointer'
        style={ { right: '1rem' } } icon={ rightIcon } color={ '#008ed7' }
        data-tip={ rightIconTip ? rightIconTip : '' } data-for='btn-right-icon-tip' /> }
      <span className="input__border" />
      { rightIconTip && <ReactTooltip id='btn-right-icon-tip' /> }
    </div>
  );
});

BaseInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  iconClick: PropTypes.func,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  autoFocus: PropTypes.bool,
  rightIcon: PropTypes.string,
  rightIconClick: PropTypes.func,
  rightIconTip: PropTypes.string
};

export default BaseInput;
