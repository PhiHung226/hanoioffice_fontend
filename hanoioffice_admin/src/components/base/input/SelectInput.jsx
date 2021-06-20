import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectInput = ({
  dataArr = [],
  title, content,
  className, classNameItem,
  value = { id: 0, name: 'Đang tải' }
}) => {
  const [ valueItem, setValueItem ] = React.useState('');// xem xét để bỏ
  const classes = useStyles();
  const handleChange = (event) => {
    // setValue(event.target.value);
    console.log(event.target.value);

    setValueItem(event.target.value);
  };
  console.log(valueItem);


  return (
    <>
      <div className={ className }>
        <FormControl className={ classes.formControl + ` ${classNameItem}` }>
          <InputLabel >{ title }</InputLabel>
          <Select value={ value.id } onChange={ handleChange }>
            {
              dataArr.map((item, index) => {
                return (
                  <MenuItem value={ item.id } key={ index }>{ item.name }</MenuItem>
                );
              })
            }
          </Select>
          <FormHelperText>{ content }</FormHelperText>
        </FormControl>
      </div>
    </>
  );
};
SelectInput.propTypes = {
  dataArr: PropTypes.array,
  value: PropTypes.object,
  setValue: PropTypes.func,
  content: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  classNameItem: PropTypes.string
};
SelectInput.defaultProps = {
  title: ''
};
export default SelectInput;