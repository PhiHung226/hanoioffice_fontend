import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';

const CheckboxSingle = ({ checked, color, handleChange, label, labelPlacement, ...props }) => {
  return (
    <>
      <FormControlLabel
        control={ <Checkbox checked={ checked } { ...props } onChange={ handleChange } color={ color }
          inputProps={ { 'aria-label': 'primary checkbox' } } /> } labelPlacement={ labelPlacement }
        label={ label }>
      </FormControlLabel>
    </>
  );
};
CheckboxSingle.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
  color: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  labelPlacement: PropTypes.string // vị trí của chữ so với checkbox
};
CheckboxSingle.defaultProps = {
  checked: false,
  color: 'primary',
  name: '',
  label: '',
  labelPlacement: 'end',
};
export default CheckboxSingle;

//top, start, button, end