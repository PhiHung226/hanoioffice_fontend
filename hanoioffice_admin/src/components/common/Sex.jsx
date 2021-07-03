import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';

const RadioSex = ({ value, onChange }) => {
  // const [ value, setValue ] = React.useState(values);
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <>
      <div className="flex items-center flex-full">
        <span className='pr-6 font-medium text-sm'>Giới tính</span>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="position" defaultValue={ '0' } name="position" onChange={ onChange }>
            <FormControlLabel
              value={ '0' }
              control={ <Radio color="primary" size="small" /> }
              label="Nam"
              labelPlacement="end"
              onChange={ onChange }
              checked={ value === '0' }
            />
            <FormControlLabel
              value={ '1' }
              control={ <Radio color="primary" size="small" /> }
              label="Nữ"
              labelPlacement="end"
              onChange={ onChange }
              checked={ value === '1' }
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};
RadioSex.propTypes = {
  value: PropTypes.string,
  filterParams: PropTypes.object,
  onChange: PropTypes.func
};
export default RadioSex;

