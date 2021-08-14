import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import {useQuery} from 'react-query';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import Filter from '../filter';
// import ServiceBook from '../serviceBook';
import ContinuousUse from './continuousUse';
import IntermittentUse from './intermittentUse';

const SendRequire = ({value, onChange}) => {
  
  const {data} = useQuery(
    ['LIST_TIME'],
    () => getListBook().getListTime(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  return (
    <>
      <div>
        <Filter/>
      </div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={ value } onChange={ onChange }>
          <FormControlLabel value={ 'lien_tuc' } control={ <Radio/> } label="Sử dụng liên tục"/>
          <FormControlLabel value={ 'ngat_quang' } control={ <Radio/> } label="Sử dụng theo số buổi"/>
        </RadioGroup>
      </FormControl>
      {value === 'lien_tuc' && <ContinuousUse data={ data }/>}
      {value === 'ngat_quang' && <IntermittentUse data={ data }/>}
    </>
  );
};
SendRequire.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
export default SendRequire;