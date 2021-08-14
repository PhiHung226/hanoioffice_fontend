import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import {useRecoilState} from 'recoil';

import {getYearMonthDay} from '../../../../helpers/helper';
import {orderBookFilterParams} from '../../../../store/actom/orderBook/orderBook';
import DateFromTo_V2 from '../../../base/dateTime/DateFromTo_V2';
import ServiceBook from '../serviceBook';
import ContinuousShift from './continuousShift';

const ContinuousUse = ({data = []}) => {
  
  // const list = useRecoilValue(orderBookFilterParams);
  // console.log(list);
  
  const [valueFrom, setValueFrom] = useState(new Date());
  const [valueTo, setValueTo] = useState(new Date());
  
  useEffect(() => {
    setValueTo(valueFrom > valueTo ? valueFrom : valueTo);
  }, [valueFrom]);
  
  const [filterState, setFilterState] = useRecoilState(orderBookFilterParams);
  console.log(filterState);
  useEffect(() => {
    setFilterState({
      ...filterState,
      startDate: getYearMonthDay(valueFrom),
      endDate: getYearMonthDay(valueTo)
    });
  }, [valueFrom, valueTo]);
  return (
    <>
      <div className='mb-6 border-dashed pl-3 pt-2 ml-10'>
        <div className='grid grid-cols-2 gap-6 mb-1'>
          <DateFromTo_V2 title={ 'Ngày bắt đầu' } value={ valueFrom } onChange={ setValueFrom } classNameTitle='w-64'/>
          <DateFromTo_V2 title={ 'Ngày kết thúc' } value={ valueTo } onChange={ setValueTo } classNameTitle='w-64'
            disabledDays={ valueFrom }/>
        </div>
        <div className='pl-16'>
          <ContinuousShift data={ data }/>
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
  filterParams: PropTypes.object,
  data: PropTypes.array
};
export default ContinuousUse;
