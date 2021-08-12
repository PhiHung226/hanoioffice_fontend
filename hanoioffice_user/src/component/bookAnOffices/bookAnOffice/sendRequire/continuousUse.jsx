import React, {useState} from 'react';

import PropTypes from 'prop-types';
import {useQuery} from 'react-query';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import {orderBookFilterParams} from '../../../../store/actom/orderBook/orderBook';
import CheckboxGroup from '../../../base/checkbox/CheckboxGroup';
import DateFromTo from '../../../base/dateTime/DateFromTo';
import ServiceBook from '../serviceBook';

// const timeSelect = [
//   {id: 200, value: '8h-10', checked: false},
// ];

const ContinuousUse = () => {
  
  const {data} = useQuery(
    ['LIST_TIME'],
    () => getListBook().getListTime(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const timeSelect = data.filter(i => i.startTime.indexOf('C') === -1);
  const timeSelectAll = data.filter(i => i.startTime.indexOf('C') !== -1);
  
  const [valueFrom, setValueFrom] = useState(new Date());
  const [valueTo, setValueTo] = useState(new Date());
  // getYearMonthDay(fromDay, 'yyyy-MM-dd')
  React.useEffect(() => {
    setValueTo(valueFrom > valueTo ? valueFrom : valueTo);
  }, [valueFrom]);
  return (
    <>
      <div className='mb-6 border-dashed pl-3 pt-2 ml-10'>
        <div className='grid grid-cols-2 gap-6 mb-1'>
          <DateFromTo title={ 'Ngày bắt đầu' } value={ valueFrom } onChange={ setValueFrom } classNameTitle='w-64'/>
          <DateFromTo title={ 'Ngày kết thúc' } value={ valueTo } onChange={ setValueTo } classNameTitle='w-64'
            disabledDays={ valueFrom }/>
        </div>
        <div className='pl-16'>
          <CheckboxGroup dataCheckbox={ timeSelect } title={ '' } filterParams={ orderBookFilterParams } name={ 'listTime' }
            dataAll={ timeSelectAll } className='w-full' lableAll={ 'Cả ngày' }/>
        </div>
      </div>
      <div className='ml-10'>
        <ServiceBook/>
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
