import React, { useState, useEffect } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';

const CheckboxGroup = ({ title, className, helperText, dataCheckbox, filterParams, name, color }) => {
  const setParams = useSetRecoilState(filterParams);

  const [state, setState] = useState(dataCheckbox);
  const handleChange = (event, id) => {
    setState(
      dataCheckbox.map((i) => {
        return {
          ...i,
          checked: i.id === id ? event.target.checked : i.id
        };
      })
    );
  };
  useEffect(() => {
    setParams(data => {
      return {
        ...data,
        [name]: state
      };
    });
  }, [state]);
  return (
    <>
      <FormControl component="fieldset" className={ className }>
        <FormLabel component="legend">{ title }</FormLabel>
        <FormGroup>
          {
            dataCheckbox.map((item, index) => {
              return (
                <FormControlLabel key={ index }
                  control={ <Checkbox checked={ item.checked } color={ color }
                    onChange={ e => handleChange(e, item.id) } name={ item.name } /> }
                  label={ item.value }
                />
              );
            })
          }
        </FormGroup>
        <FormHelperText>{ helperText }</FormHelperText>
      </FormControl>
    </>
  );
};
CheckboxGroup.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  className: PropTypes.string,
  dataCheckbox: PropTypes.array.isRequired,
  helperText: PropTypes.string,
  filterParams: PropTypes.object,
  color: PropTypes.string,
  name: PropTypes.string.isRequired
};
CheckboxGroup.defaultProps = {
  dataCheckbox: [
    { id: 1, name: 'number1', value: 'Người số 1', checked: false },
    { id: 2, name: 'number2', value: 'Người số 2', checked: false }
  ],
  color: 'primary',
  checked: false
};
export default CheckboxGroup;
