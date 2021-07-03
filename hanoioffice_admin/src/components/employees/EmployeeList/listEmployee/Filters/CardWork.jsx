import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
// import FormLabel from '@material-ui/core/FormLabel';
// import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
// import { useSetRecoilState } from 'recoil';

// import FramesFilter from '../framesFilter';
// import { StyledRadio } from '../radio/tabRadio';
const CardWork = ({ values = '2' }) => {
  // const setParams = useSetRecoilState(filterParams);
  const [ value, setValue ] = React.useState(values);
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
  // const data1 = [
  //   { id: 0, label: 'Tất cả', value: 0 },
  //   { id: 1, label: 'Nam', value: 1 },
  //   { id: 2, label: 'Nữ', value: 2 }
  // ];
  return (
    <>
      <div className="shadow-md bg-white">
        <div className="flex items-center">
          <span className='pr-6 pl-4 font-medium'>Nhân viên</span>
          <FormControl component="fieldset">
            <RadioGroup row aria-label="position" defaultValue={ '2' } name="position" onChange={ handleChange }>
              <FormControlLabel
                value={ '2' }
                control={ <Radio color="primary" /> }
                label="Tất cả"
                labelPlacement="end"
                onChange={ handleChange }
                checked={ value === '2' }
              />
              <FormControlLabel
                value={ '0' }
                control={ <Radio color="primary" /> }
                label="Còn làm"
                labelPlacement="end"
                onChange={ handleChange }
                checked={ value === '0' }
              />
              <FormControlLabel
                value={ '1' }
                control={ <Radio color="primary" /> }
                label="Đã nghỉ"
                labelPlacement="end"
                onChange={ handleChange }
                checked={ value === '1' }
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};
CardWork.propTypes = {
  values: PropTypes.number,
  name: PropTypes.string,
  filterParams: PropTypes.object
};
export default CardWork;

