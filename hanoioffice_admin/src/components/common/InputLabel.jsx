import React from 'react';

import PropTypes from 'prop-types';

import IconHelpTooltip from '../common/IconHelpTooltip';

const InputLabel = (
  {
    label, tooltip,
    children, className = 'mb-3',
    labelClassName = 'w-48',
    required = false,
    flex = true
  }
) => {
  return (
    <div className={ `${flex ? 'flex' : ''} items-center justify-between ${className}` }>
      <label className={ `${labelClassName} font-bold pt-2` }>
        { label } { required ? <span className='text-red-500'>*</span> : '' }
        { tooltip && <IconHelpTooltip label={ label } tooltip={ tooltip } /> }
      </label>
      {
        children &&
        <div className="w-full">
          { children }
        </div>
      }
    </div>
  );
};

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  tooltip: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  required: PropTypes.bool,
  flex: PropTypes.bool
};

export default InputLabel;
