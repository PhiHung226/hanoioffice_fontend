import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormLabel from '@material-ui/core/FormLabel';
// import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
// import { useSetRecoilState } from 'recoil';

import FramesFilter from '../framesFilter';
import { StyledRadio } from '../radio/tabRadio';

const RadioGroupForm = ({ dataRadio, values, disabled, labelPlacement }) => {
  // const setParams = useSetRecoilState(filterParams);
  const [ value, setValue ] = useState(values);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // React.useEffect(() => {
  //   setParams(data => {
  //     return {
  //       ...data,
  //       [ name ]: value
  //     };
  //   });
  // }, [ value ]);
  return (
    <>
      <FramesFilter event={ <FormControl component="fieldset">
        {/* <FormLabel component="legend">{ title }</FormLabel> */ }
        <RadioGroup aria-label="gender" name="gender1" value={ value } onChange={ handleChange }>
          {
            dataRadio.map((item, index) => {
              return (
                <FormControlLabel key={ index } value={ item.value } control={ <StyledRadio /> } label={ item.label }
                  disabled={ disabled && (item.disabled !== null && item.disabled !== undefined) ? item.disabled : false }
                  labelPlacement={ labelPlacement } />
              );
            })
          }
        </RadioGroup>
      </FormControl> } title={ 'Chi nhánh' } />
    </>
  );
};
RadioGroupForm.propTypes = {
  dataRadio: PropTypes.array,
  title: PropTypes.string,
  values: PropTypes.number,
  name: PropTypes.string,
  filterParams: PropTypes.object,
  disabled: PropTypes.bool,
  labelPlacement: PropTypes.string
};
RadioGroupForm.defaultProps = {
  dataRadio: [
    { id: 1, label: 'Giá trị 1', value: 0, disabled: false },
    { id: 2, label: 'Giá trị 2', value: 1, disabled: false },
  ],
  values: 0,
  disabled: false,
  labelPlacement: 'end'
};
export default RadioGroupForm;

