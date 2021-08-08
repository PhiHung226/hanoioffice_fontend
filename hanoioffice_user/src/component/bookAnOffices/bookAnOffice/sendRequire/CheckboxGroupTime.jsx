import React, {useEffect, useState} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
// import { useSetRecoilState } from 'recoil';

const CheckboxGroup = ({ title, className, helperText, listDate, indexs, setListDate, dataCheckbox,
  // filterParams, name,
  color }) => {
  // const setParams = useSetRecoilState(filterParams);
  const [data, setData] = useState(listDate);
  useEffect(()=> {
    setData(listDate);
  },[listDate]);
  
  const [stateAll, setStateAll] = useState(false);
  
  const handleChange = (e) => {
    setListDate(
      data.map((item,index)=> {
        return {
          ...item,
          times: index !== indexs ? item.times : item.times.map((it) => {
            console.log(it);
            return {
              ...it,
              checked: it.id.toString() === e.target.id ? e.target.checked : it.checked
            };
          })
        };
      })
    );
  };
  React.useEffect(() => {
    setStateAll(
      dataCheckbox.filter(item => item.checked).length === dataCheckbox.length
    );
  }, [dataCheckbox]);
  const handleChangeAll = () => {
    setStateAll(!stateAll);
    setListDate(
      data.map((item,index)=> {
        return {
          ...item,
          times: index !== indexs  ? item.times : item.times.map(i => {
            return {
              ...i,
              checked: !stateAll
            };
          })
        };
      })
    );
  };
  return (
    <>
      <FormControl component="fieldset" className={ className }>
        <FormLabel component="legend">{ title }</FormLabel>
        <FormGroup>
          <div className='grid grid-cols-4 gap-2 w-full'>{
            dataCheckbox.map((item, index) => {
              // console.log(item);
              return (
                <FormControlLabel key={ index }
                  control={ <Checkbox checked={ item.checked } color={ color } onChange={ e => handleChange(e) } id={ item.id.toString() } /> }
                  label={ item.value }
                />
              );
            })
          }
          <FormControlLabel control={ <Checkbox checked={ stateAll } onChange={ handleChangeAll } /> } label="Tất cả"/>
          </div>
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
  listDate: PropTypes.array,
  indexs: PropTypes.number,
  setListDate: PropTypes.func
};
export default CheckboxGroup;
