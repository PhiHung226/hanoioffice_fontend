import React from 'react';

import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const day = new Date();
const thisYear = Number(day.getFullYear());
const listYears = () => {
  const listArr = [];
  for (let i = thisYear - 5; i < thisYear + 6; i++) {
    listArr.push(i);
  }
  return listArr;
};

const DateYear = () => {
  const classes = useStyles();
  const [ year, setYear ] = React.useState(thisYear);
  const [ open, setOpen ] = React.useState(false);
  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 4;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };
  return (
    <>
      <div className="flex items-center">
        <p>Năm: </p>
        <FormControl className={ classes.formControl }>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={ open }
            onClose={ handleClose }
            onOpen={ handleOpen }
            value={ year }
            onChange={ handleChange }
            MenuProps={ MenuProps }
          >
            {
              listYears().map((item, index) => {
                return (
                  <MenuItem key={ index } value={ item }>{ item }</MenuItem>
                );
              })
            }
          </Select>
        </FormControl>
      </div>
    </>
  );
};
DateYear.propTypes = {
  filterParams: PropTypes.object,
  title: PropTypes.string
};
export default DateYear;