import React from 'react';

import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const TextFieldInput = React.forwardRef((
  { className = 'w-full',
    label,
    type = 'text',
    name,
    error = '',
    value,
    onChange,
    ...props }
  , ref) => {

  return (
    <>
      <TextField
        { ...props }
        ref={ ref }
        id={ name }
        label={ label }
        className={ className }
        helperText={ error }
        type={ type }
        error={ error !== null }
        value={ value }
        onChange={ onChange }
      />
    </>
  );
});
TextFieldInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};
export default React.memo(TextFieldInput);