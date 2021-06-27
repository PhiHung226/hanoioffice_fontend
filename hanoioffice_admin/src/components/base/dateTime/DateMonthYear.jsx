import React, { useState } from 'react';

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
const thisMonth = Number(day.getMonth()) + 1;

const listYears = () => {
  const listArr = [];
  for (let i = thisYear - 6; i <= thisYear; i++) {
    listArr.push(i);
  }
  return listArr;
};
const listMonth = () => {
  const listArrMonth = [];
  for (let i = 1; i < 13; i++) {
    listArrMonth.push(i);
  }
  return listArrMonth;
};
const DateMonthYear = () => {
  const classes = useStyles();
  const [ year, setYear ] = useState(thisYear);
  const [ open, setOpen ] = useState(false);
  const [ month, setMonth ] = useState(thisMonth);
  const [ openMonth, setOpenMonth ] = useState(false);
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpenMonth = () => {
    setOpenMonth(!openMonth);
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
      <div className="flex">
        <div className="flex items-center">
          <p>Tháng: </p>
          <FormControl className={ classes.formControl }>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={ openMonth }
              onClose={ handleOpenMonth }
              onOpen={ handleOpenMonth }
              value={ month }
              onChange={ handleChangeMonth }
              MenuProps={ MenuProps }
            >
              {
                listMonth().map((item, index) => {
                  return (
                    <MenuItem key={ index } value={ item }>{ item }</MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
        </div>
        <div className="flex items-center">
          <p>Năm: </p>
          <FormControl className={ classes.formControl }>
            <Select
              labelId="demo-controlled-open-select-label1"
              id="demo-controlled-open-select1"
              open={ open }
              onClose={ handleOpen }
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
      </div>
    </>
  );
};
DateMonthYear.propTypes = {
  filterParams: PropTypes.object,
  title: PropTypes.string
};
export default DateMonthYear;