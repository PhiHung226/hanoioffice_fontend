import React from 'react';

import {useQuery} from 'react-query';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import {orderBookFilterParams} from '../../../../store/actom/orderBook/orderBook';
import CheckboxGroup from '../../../base/checkbox/CheckboxGroup';

// const dataService = [
//   {id: 200, value: 'Máy chiếu', checked: false}
// ];

const ServiceBook = () => {
  const {data} = useQuery(
    ['LIST_SERVICE'],
    () => getListBook().getListService(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  
  return (
    <>
      <CheckboxGroup dataCheckbox={ data } title={ 'Dịch vụ đi kèm' } filterParams={ orderBookFilterParams }
        name={ 'listService' } className='w-full text-xs' dataAll={ [] } column={ '3' }/>
    </>
  );
};

export default ServiceBook;