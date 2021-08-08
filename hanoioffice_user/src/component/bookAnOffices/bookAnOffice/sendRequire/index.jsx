import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import Filter from '../filter';
import ServiceBook from '../serviceBook';
import ContinuousUse from './continuousUse';
import IntermittentUse from './intermittentUse';

const SendRequire = () => {
  const [value, setValue] = React.useState('lien_tuc');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div>
        <Filter />
      </div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={ value } onChange={ handleChange }>
          <FormControlLabel value={ 'lien_tuc' } control={ <Radio /> } label="Sử dụng liên tục" />
          <FormControlLabel value={ 'ngat_quang' } control={ <Radio /> } label="Sử dụng theo số buổi" />
        </RadioGroup>
      </FormControl>
      { value === 'lien_tuc' && <ContinuousUse /> }
      { value === 'ngat_quang' && <IntermittentUse />}
      <div>
        <ServiceBook />
      </div>
    </>
  );
};

export default SendRequire;