import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Menu from '@material-ui/core/Menu';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DateRange from '@material-ui/icons/DateRange';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const defaultDate = [
  {
    id: 'day',
    name: 'Ngày',
    item: [
      { id: '11', name: 'Hôm nay' },
      { id: '12', name: 'Hôm qua' }
    ]
  },
  {
    id: 'week',
    name: 'Tuần',
    item: [
      { id: 21, name: 'Tuần này' },
      { id: 22, name: 'Tuần trước' }
    ]
  },
  {
    id: 'month',
    name: 'Tháng',
    item: [
      { id: 31, name: 'Tháng này' },
      { id: 32, name: 'Tháng trước' }
    ]
  },
  {
    id: 'periodic',
    name: 'Quý',
    item: [
      { id: 41, name: 'Quý này' },
      { id: 42, name: 'Quý trước' }
    ]
  },
  {
    id: 'year',
    name: 'Năm',
    item: [
      { id: 51, name: 'Năm này' },
      { id: 52, name: 'Năm trước' },
      { id: 53, name: 'Toàn thời gian' }
    ]
  }
];

const DateSelection = ({ title }) => {
  // const [ paramDate, setParamDate ] = React.useState({ fromDate: '', toDate: '' });
  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ openDefault, setOpenDefault ] = useState('0');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };
  const handleDefaultDate = (event) => {
    setOpenDefault(event.target.value);
  };
  const handleSearch = () => {

  };
  const [ fromDay, setFromDay ] = useState(new Date());
  const handleFromDayClick = (day, { selected }) => {
    setFromDay(selected ? undefined : day);
  };
  const [ toDay, setToDay ] = useState(new Date());
  const handleToDayClick = (day, { selected }) => {
    setToDay(selected ? undefined : day);
  };
  return (
    <>
      <div className="shadow-md bg-white">
        <div className="flex items-center h-full">
          <span className='pr-6 pl-4 font-medium'>{ title }</span>
          <div className="flex mr-3" aria-controls="simple-menu" aria-haspopup="true" onClick={ handleClick }>
            <p className='border-b-1 px-10 border-gray-500 cursor-pointer'>
              20-24/03/2021
            </p>
            <DateRange className="cursor-pointer" />
          </div>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={ anchorEl }
          keepMounted
          open={ Boolean(anchorEl) }
          onClose={ handleClose }
        >
          <div className="px-4">
            <div style={ { borderBottom: '1px solid gray' } }>
              <RadioGroup row aria-label="position" defaultValue={ '0' } name="position" onChange={ handleDefaultDate }>
                <FormControlLabel
                  value={ '0' }
                  control={ <Radio color="primary" /> }
                  label="Có sẵn"
                  labelPlacement="end"
                  onChange={ handleDefaultDate }
                  checked={ openDefault === '0' }
                />
                <FormControlLabel
                  value={ '1' }
                  control={ <Radio color="primary" /> }
                  label="Tự chọn"
                  labelPlacement="end"
                  onChange={ handleDefaultDate }
                  checked={ openDefault === '1' }
                />
              </RadioGroup>
            </div>
            <div>
              {
                openDefault === '0' &&
                <div className="flex">
                  {
                    defaultDate.map((item, index) => {
                      return (
                        <div key={ index } className="px-1">
                          <p>{ item.name }</p>
                          {
                            item.item.map((i, x) => {
                              return (
                                <p key={ x } className="cursor-pointer p-2 hover:text-blue-800 text-blue-500">{ i.name }</p>
                              );
                            })
                          }
                        </div>
                      );
                    })
                  }
                </div>
              }
              {
                openDefault === '1' &&
                <div className="">
                  <div className="grid grid-cols-2">
                    <div className="mt-4">
                      <span>Ngày bắt đầu</span>
                      <span className="border-b-1 px-10 text-blue-500">{ fromDay ? fromDay.toLocaleDateString() : null }</span>
                    </div>
                    <div className="mt-4">
                      <span>Ngày kết thúc</span>
                      <span className="border-b-1 px-10 text-blue-500">{ toDay ? toDay.toLocaleDateString() : null }</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DayPicker
                      selectedDays={ fromDay }
                      onDayClick={ handleFromDayClick }
                      todayButton="Tháng này"
                    // modifiers={ {
                    //   foo: new Date(),
                    // } }
                    />
                    <DayPicker
                      selectedDays={ toDay }
                      onDayClick={ handleToDayClick }
                      todayButton="Tháng này"
                    // month={ new Date() }
                    // todayButton="Go to Today"
                    // modifiers={ {
                    //   foo: new Date(),
                    // } }
                    // onTodayButtonClick={ (day, modifiers) => console.log(day, modifiers) }
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button autoFocus onClick={ handleSearch } color="primary">
                      Tìm kiếm
                    </Button>
                  </div>
                </div>
              }
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
};
DateSelection.propTypes = {
  filterParams: PropTypes.object,
  title: PropTypes.string
};
export default DateSelection;