import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {useQuery} from 'react-query';
import {useRecoilState} from 'recoil';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import {
  orderBookFilterParams,
  orderBookFilterParamsContinuous,
  orderBookFilterParamsState
} from '../../../../store/actom/orderBook/orderBook';
import SelectInput from '../../../base/input/SelectInput';

const CardTypeRoom = () => {
  // const [ branch, setBranch ] = useState([]);
  // const branchSearch = useSetRecoilState(filterParams);
  // console.log(branchSearch);
  const [filterState, setFilterState] = useRecoilState(orderBookFilterParamsState);
  const [filter, setFilter] = useRecoilState(orderBookFilterParamsContinuous);
  const [filterOder, setFilterOder] = useRecoilState(orderBookFilterParams);
  const {data} = useQuery(
    ['TYPE_ROOM_LIST'],
    () => getListBook().getListTypeRoom(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const [valueTypeRoom, setValueTyeRoom] = useState(data[0].id);
  const onChageBranch = (e) => {
    setValueTyeRoom(e.target.value);
  };
  useEffect(() => {
    setFilterState({
      ...filterState,
      typeRoom: valueTypeRoom
    }
    );
    setFilter({
      ...filter,
      valueType: data.filter(i => i.id === valueTypeRoom)
    });
    setFilterOder({
      ...filterOder,
      valueType: data.filter(i => i.id === valueTypeRoom)
    });
  }, [valueTypeRoom]);
  return (
    <>
      <SelectInput title='Loại phòng' dataArr={ data } className='w-full' value={ valueTypeRoom }
        onChange={ e => onChageBranch(e) }/>
    </>
  );
};
CardTypeRoom.propTypes = {
  filterParams: PropTypes.object,
  value: PropTypes.object,
  onChange: PropTypes.func
};
export default CardTypeRoom;