import React from 'react';

import PropTypes from 'prop-types';

import {orderBookFilterParams} from '../../../../store/actom/orderBook/orderBook';
import CheckboxGroup from '../../../base/checkbox/CheckboxGroup';

// const timeSelect = [
//   {id: 200, value: '8h-10', checked: false},
// ];

const ContinuousShift = ({data}) => {
  
  const timeSelect = data.filter(i => i.startTime.indexOf('C') === -1);
  const timeSelectAll = data.filter(i => i.startTime.indexOf('C') !== -1);
  return (
    <>
      <CheckboxGroup dataCheckbox={ timeSelect } title={ '' } filterParams={ orderBookFilterParams } name={ 'listTime' }
        dataAll={ timeSelectAll } className='w-full' lableAll={ 'Cả ngày' } color={ 'primary' }/>
    </>
  );
};
ContinuousShift.propTypes = {
  data: PropTypes.array
};
export default ContinuousShift;