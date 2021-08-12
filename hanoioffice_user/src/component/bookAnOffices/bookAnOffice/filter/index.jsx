import React, {useCallback, useEffect, useState} from 'react';

import {useQuery} from 'react-query';
import {useRecoilValue, useRecoilState} from 'recoil';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import {
  orderBookFilterParams,
  orderBookFilterParamsState
} from '../../../../store/actom/orderBook/orderBook';
import SelectInput from '../../../base/input/SelectInput';
import CardBranch from './CardBranch';
import CardTypeRoom from './CardTypeRoom';

// const maxPeople = [
//   { id: 1, name: '1-10' },
//   { id: 2, name: '11-20' },
//   { id: 3, name: '21-30' }
// ];

const Filter = () => {
  // const {data} = useQuery(
  //   ['BRANCH_LIST'],
  //   () => getListBook().getListBranch(),
  //   {
  //     keepPreviousData: true, staleTime: 5000,
  //   }
  // );
  const filterParams = useRecoilValue(orderBookFilterParamsState);
  const list = useRecoilValue(orderBookFilterParams);
  console.log(list);
  const [params, setParams] = useRecoilState(orderBookFilterParams);
  
  
  const getData = useCallback(async () => {
    const {branch, typeRoom} = filterParams;
    return await getListBook().getListNumberPeoPle({
      branch, typeRoom
    });
  }, [filterParams]);
  
  const {data, refetch} = useQuery(
    ['LIST_PEOPLE_TYPEROOM_BRANCH', JSON.stringify(filterParams)],
    () => getData(),
    {
      keepPreviousData: true, staleTime: 5000
    }
  );
  useEffect(() => {
    refetch();
  }, [filterParams]);
  
  const [value, setValue] = useState(data[0].id);
  useEffect(() => {
    setValue(data[0].id);
  }, [data]);
  useEffect(() => {
    setParams({
      ...params,
      idRoom: value
    });
  }, [value]);
  const onChage = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className='flex items-center'>
        <CardBranch/>
        <CardTypeRoom/>
      </div>
      <div className='pb-4'>
        <SelectInput title='Số người sử dụng' dataArr={ data } className='w-full' value={ value }
          onChange={ e => onChage(e) }/>
      </div>
    </>
  );
};
export default Filter;