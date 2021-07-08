import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectedInput = ({ className, dataArr, title, value, onChange }) => {
  const classes = useStyles();
  return (
    <>
      <div className={ className }>
        <FormControl className={ classes.formControl }>
          <InputLabel id="demo-simple-select-helper-label">{ title }</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={ value }
            onChange={ onChange }
          >
            {
              dataArr.map((item, index) => {
                return (
                  <MenuItem key={ index } value={ item.id }>{ item.text }</MenuItem>
                );
              })
            }
          </Select>
        </FormControl>
      </div>
    </>
  );
};
SelectedInput.propTypes = {
  className: PropTypes.string,
  dataArr: PropTypes.array,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  keySearch: PropTypes.string
};
export default SelectedInput;