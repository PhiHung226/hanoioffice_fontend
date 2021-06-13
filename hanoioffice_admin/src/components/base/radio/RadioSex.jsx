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
const RadioSex = ({ dataRadio, values, labelPlacement }) => {
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
        <RadioGroup aria-label="gender" name="gender1" value={ value } onChange={ handleChange }>
          {
            dataRadio.map((item, index) => {
              return (
                <FormControlLabel key={ index } value={ item.value } control={ <StyledRadio /> } label={ item.label }
                  labelPlacement={ labelPlacement } />
              );
            })
          }
        </RadioGroup>
      </FormControl> } title={ 'Giới tính' } />
    </>
  );
};
RadioSex.propTypes = {
  dataRadio: PropTypes.array,
  values: PropTypes.number,
  name: PropTypes.string,
  filterParams: PropTypes.object,
  labelPlacement: PropTypes.string
};
RadioSex.defaultProps = {
  dataRadio: [
    { id: 1, label: 'Tất cả', value: 0 },
    { id: 2, label: 'Nam', value: 1 },
    { id: 3, label: 'Nữ', value: 2 },
  ],
  values: 0,
  labelPlacement: 'end'
};
export default RadioSex;

