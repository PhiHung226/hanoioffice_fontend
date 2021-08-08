import React from 'react';

import { orderBookFilterParamsState } from '../../../../store/actom/orderBook/orderBook';
import CheckboxGroup from '../../../base/checkbox/CheckboxGroup';

const dataService = [
  { id: 200, value: 'Máy chiếu', checked: false },
  { id: 201, value: 'Máy in', checked: false },
  { id: 202, value: 'Máy fax', checked: false },
  { id: 203, value: 'Bảo vệ', checked: false },
  { id: 1, value: 'Người số 1', checked: false },
];

const ServiceBook = () => {
  return (
    <>
      <CheckboxGroup dataCheckbox={ dataService } title={ 'Dịch vụ đi kèm' } filterParams={ orderBookFilterParamsState } className='w-full'/>
    </>
  );
};

export default ServiceBook;