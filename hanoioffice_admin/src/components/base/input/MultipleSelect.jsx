import React from 'react';

import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 360,
    maxWidth: '100%',
    minHeight: 20
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};
const MultipleSelect = ({
  data = [ { id: 1, name: 'Đang tải...' } ],
  personName, setPersonName,
  minWidth = '360px'
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const nameSelect = (value) => {
    for (let i = 0; i < data.length; i++) {
      if (data[ i ].id === value) {
        return data[ i ].name;
      }
    }
  };

  return (
    <>
      <div>
        <FormControl className={ classes.formControl } style={ { minWidth: minWidth } }>
          {/* <InputLabel id="demo-mutiple-chip-label" className="">Chọn chi nhánh</InputLabel> */ }
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={ personName }
            onChange={ handleChange }
            input={ <Input id="select-multiple-chip" /> }
            renderValue={ (selected) => (
              <div className={ classes.chips }>
                { selected.map((value, index) => (
                  <Chip key={ index } label={ nameSelect(value) } className={ classes.chip } />
                )) }
              </div>
            ) }
            MenuProps={ MenuProps }
          >
            { data.map((item, index) => (
              <MenuItem key={ index } value={ item.id } style={ getStyles(item.name, personName, theme) }>
                { item.name }
              </MenuItem>
            )) }
          </Select>
        </FormControl>
      </div>
    </>
  );
};

MultipleSelect.propTypes = {
  data: PropTypes.array,
  personName: PropTypes.array,
  setPersonName: PropTypes.func,
  minWidth: PropTypes.string
};
export default MultipleSelect;