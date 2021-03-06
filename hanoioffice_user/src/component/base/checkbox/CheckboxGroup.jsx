import React, {useState} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import {useSetRecoilState} from 'recoil';

const CheckboxGroup = ({
  title, className, helperText, dataCheckbox,
  filterParams, name, lableAll = 'Tất cả', column = '4',
  color = 'primary'
}) => {
  const setParams = useSetRecoilState(filterParams);
  
  const [state, setState] = useState(dataCheckbox);
  const [stateAll, setStateAll] = useState(false);
  
  const handleChange = (event) => {
    setState(
      state.map((i) => {
        return {
          ...i,
          checked: i.id.toString() === event.target.id ? event.target.checked : i.checked
        };
      })
    );
  };
  React.useEffect(() => {
    setStateAll(
      state.filter(item => item.checked).length === state.length
    );
  }, [state]);
  const handleChangeAll = () => {
    setStateAll(!stateAll);
    setState(
      state.map((i) => {
        return {
          ...i,
          checked: !stateAll
        };
      })
    );
  };
  const [dataNew, setDataNew] = useState([]);
  React.useEffect(() => {
    const dataFilter = state.filter(i => i.checked);
    setDataNew(
      dataFilter.map(i => {
        return {...i};
      })
    );
  }, [state]);
  
  React.useEffect(() => {
    setParams(data => {
      return {
        ...data,
        [name]: dataNew
      };
    });
  }, [dataNew]);
  return (
    <>
      <FormControl component="fieldset" className={ className }>
        <FormLabel component="legend">{title}</FormLabel>
        <FormGroup>
          <div className={ `grid grid-cols-${column} gap-2 w-full` }>{
            state.map((item, index) => {
              return (
                <FormControlLabel key={ index }
                  control={ <Checkbox checked={ item.checked } color={ color }
                    onChange={ e => handleChange(e) } id={ item.id.toString() }/> }
                  label={ item.value }
                />
              );
            })
          }
          <FormControlLabel control={ <Checkbox checked={ stateAll } onChange={ handleChangeAll } color={ color }/> }
            label={ lableAll }/>
          </div>
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </>
  )
  ;
};
CheckboxGroup.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  className: PropTypes.string,
  dataCheckbox: PropTypes.array.isRequired,
  helperText: PropTypes.string,
  filterParams: PropTypes.object,
  color: PropTypes.string,
  name: PropTypes.string,
  dataAll: PropTypes.array,
  lableAll: PropTypes.string,
  column: PropTypes.string
};
export default CheckboxGroup;
