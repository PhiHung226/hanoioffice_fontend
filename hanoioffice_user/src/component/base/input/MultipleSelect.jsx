import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    // minWidth: 360,
    maxWidth: '100%',
    minHeight: 40,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
    backgroundColor: '#cccccc'
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
const MultipleSelect = ({ data = [ { id: 1, name: 'Đang tải...' } ],
  personName, setPersonName,
  minWidth = '100%', context,
  noCheckbox = false,
  oneChip = false
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
      <div className="w-full">
        <FormControl className={ classes.formControl } style={ { minWidth: minWidth } }>
          <InputLabel id="demo-mutiple-chip-label">{ context }</InputLabel>
          <Select
            className="pt-2"
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={ personName }
            onChange={ handleChange }
            input={ <Input id="select-multiple-chip" className="" /> }
            renderValue={ (selected) => (
              <div className={ classes.chips }>
                { !oneChip &&
                selected.map((value, index) => (
                  <Chip key={ index } label={ nameSelect(value) } className={ classes.chip } />
                ))
                }
                {
                  oneChip &&
                  <>
                    <Chip label={ nameSelect(selected[ 0 ]) } className={ classes.chip } />
                    {
                      selected.length > 1 &&
                      <Chip label={ `+ ${selected.length - 1}` } className={ classes.chip } />
                    }
                  </>
                }
              </div>
            ) }
            MenuProps={ MenuProps }
          >
            { data.map((item, index) => (
              <MenuItem key={ index } value={ item.id } style={ getStyles(item.name, personName, theme) }>
                {
                  noCheckbox &&
                  <span>{ item.name }</span>
                }
                {
                  !noCheckbox &&
                  <>
                    <Checkbox checked={ personName.indexOf(item.id) > -1 } />
                    <ListItemText primary={ item.name } />
                  </>
                }
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
  minWidth: PropTypes.string,
  context: PropTypes.string,
  noCheckbox: PropTypes.bool,
  oneChip: PropTypes.bool
};
export default MultipleSelect;