import React, {useCallback, useEffect, useState} from 'react';

import {useQuery} from 'react-query';
import {useRecoilState, useRecoilValue} from 'recoil';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import {
  orderBookFilterParams,
  orderBookFilterParamsContinuous,
  orderBookFilterParamsState
} from '../../../../store/actom/orderBook/orderBook';
import SelectInput from '../../../base/input/SelectInput';

const MaxPeople = () => {
  const [filterState, setFilterState] = useRecoilState(orderBookFilterParamsContinuous);
  
  const filterParams = useRecoilValue(orderBookFilterParamsState);
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
    setFilterState({
      ...filterState,
      idRoom: value
    });
  }, [value]);
  const onChage = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <SelectInput title='Số người tối đa' dataArr={ data } className='w-full' value={ value }
        onChange={ e => onChage(e) }/>
    </>
  );
};
export default MaxPeople;