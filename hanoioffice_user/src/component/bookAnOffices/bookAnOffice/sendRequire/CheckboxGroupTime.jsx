import React, {useEffect, useState} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';

const CheckboxGroup = ({
  title,
  className,
  helperText,
  listDate,
  setListDate,
  color = 'primary',
  data,
  timeSelect,
  indexs, dataItem
}) => {
  
  const [dataNew, setDataNew] = useState(timeSelect);
  useEffect(() => {
    if (dataItem.length > 0) {
      setDataNew(dataItem);
    } else {
      setDataNew(timeSelect);
    }
    
  }, [data, dataItem]);
  
  const [stateAll, setStateAll] = useState(false);
  const handleChange = (e) => {
    setDataNew(
      dataNew.map((item) => {
        return {
          ...item,
          checked: item.id.toString() === e.target.id ? e.target.checked : item.checked
        };
      })
    );
  };
  useEffect(() => {
    setListDate(listDate.map((item, index) => {
      return {
        ...item,
        // listShift: index === indexs ? (dataNew.filter(item => item.checked).length === timeSelect.length ?
        //   [timeSelectAll[0].id.toString()] : dataNew.filter(i => i.checked).map(j => j.id.toString())) : item.listShift
        listShift: index === indexs ? dataNew : item.listShift
      };
    }));
  }, [dataNew]);
  
  useEffect(() => {
    setStateAll(
      dataNew.filter(item => item.checked).length === timeSelect.length
    );
  }, [dataNew]);
  const handleChangeAll = () => {
    setStateAll(!stateAll);
    setDataNew(
      dataNew.map((item) => {
        return {
          ...item,
          checked: !stateAll
        };
      })
    );
  };
  return (
    <>
      <FormControl component="fieldset" className={ className }>
        <FormLabel component="legend">{title}</FormLabel>
        <FormGroup>
          <div className='grid grid-cols-4 gap-2 w-full'>{
            dataNew.map((item, index) => {
              // console.log(item);
              return (
                <FormControlLabel key={ index }
                  control={ <Checkbox checked={ item.checked } color={ color }
                    onChange={ e => handleChange(e) } id={ item.id.toString() }/> }
                  label={ item.value }
                />
              );
            })
          }
          <FormControlLabel control={ <Checkbox checked={ stateAll } onChange={ handleChangeAll } color={ 'primary' }/> }
            label="Cả ngày"/>
          </div>
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
};
CheckboxGroup.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  className: PropTypes.string,
  helperText: PropTypes.string,
  filterParams: PropTypes.object,
  color: PropTypes.string,
  listDate: PropTypes.array,
  indexs: PropTypes.number,
  setListDate: PropTypes.func,
  data: PropTypes.array,
  timeSelect: PropTypes.array,
  timeSelectAll: PropTypes.array,
  dataItem: PropTypes.array
};
export default CheckboxGroup;
