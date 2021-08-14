import React, {useState} from 'react';

import Menu from '@material-ui/core/Menu';
import DateRange from '@material-ui/icons/DateRange';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MONTHS = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];
const WEEKDAYS_LONG = [
  'Chủ nhật',
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
];
const WEEKDAYS_SHORT = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

const DateSingle = ({title, classNameTitle, value, onChange, disabledDays = new Date()}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };
  
  // const [ fromDay, setFromDay ] = useState(new Date());
  // const handleFromDayClick = (day, { selected }) => {
  //   setFromDay(selected ? undefined : day);
  // };
  
  // React.useEffect(() => {
  //   onChange({
  //     ...value,
  //     [ keySearch ]: getYearMonthDay(fromDay, 'yyyy-MM-dd')
  //   });
  // }, [ fromDay ]);
  
  return (
    <>
      <div className="w-full">
        <div className="flex items-center w-full">
          <span className={ `font-medium ${classNameTitle}` }>{title}</span>
          <div className="flex mr-3 w-full" aria-controls="simple-menu" aria-haspopup="true" onClick={ handleClick }>
            <p className='border-b-1 px-10 border-gray-500 cursor-pointer w-full'>
              {value ? value.toLocaleDateString() : null}
            </p>
            <DateRange className="cursor-pointer"/>
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
            <div className="">
              <div className="flex items-start">
                <DayPicker
                  selectedDays={ value }
                  disabledDays={ [
                    // ...selectedDay,
                    {before: disabledDays},
                  ] }
                  onDayClick={ onChange }
                  todayButton="Tháng này"
                  locale={ 'vi' }
                  months={ MONTHS }
                  weekdaysLong={ WEEKDAYS_LONG }
                  weekdaysShort={ WEEKDAYS_SHORT }
                  firstDayOfWeek={ 1 }
                  fromDay={ new Date() }
                />
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </>
  );
};
DateSingle.propTypes = {
  title: PropTypes.string,
  classNameTitle: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
  // keySearch: PropTypes.string,
  disabledDays: PropTypes.object,
};
export default DateSingle;