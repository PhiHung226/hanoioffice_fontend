import React, {useState} from 'react';

import PropTypes from 'prop-types';

import {orderBookFilterParamsState} from '../../../../store/actom/orderBook/orderBook';
import CheckboxGroup from '../../../base/checkbox/CheckboxGroup';
import DateFromTo from '../../../base/dateTime/DateFromTo';

const timeSelect = [
  { id: 200, value: '8h-10', checked: false },
  { id: 201, value: '10h-12h', checked: false },
  { id: 202, value: '12h-14h', checked: false },
  { id: 203, value: '14h-16h', checked: false },
  { id: 1, value: '16h-18h', checked: false },
];

const ContinuousUse = () => {
  const [valueFrom, setValueFrom] = useState(new Date());
  const [valueTo, setValueTo] = useState(new Date());
  // getYearMonthDay(fromDay, 'yyyy-MM-dd')
  React.useEffect(()=> {
    setValueTo(valueFrom > valueTo ? valueFrom : valueTo);
  },[valueFrom]);
  return (
    <>
      <div className='mb-6 border-dashed pl-3 pt-2 ml-10'>
        <div className='grid grid-cols-2 gap-6 mb-1'>
          <DateFromTo title={ 'Ngày bắt đầu' } value={ valueFrom } onChange={ setValueFrom } classNameTitle='w-64'/>
          <DateFromTo title={ 'Ngày kết thúc' } value={ valueTo } onChange={ setValueTo } classNameTitle='w-64' disabledDays={ valueFrom }/>
        </div>
        <div className='pl-16'>
          <CheckboxGroup dataCheckbox={ timeSelect } title={ '' } filterParams={ orderBookFilterParamsState } className='w-full'/>
        </div>
      </div>
    </>
  );
};
ContinuousUse.propTypes = {
  values: PropTypes.number,
  name: PropTypes.string,
  filterParams: PropTypes.object
};
export default ContinuousUse;
