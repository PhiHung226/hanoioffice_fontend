import React, {useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {useQuery} from 'react-query';
import {useRecoilState} from 'recoil';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import {orderBookFilterParamsState} from '../../../../store/actom/orderBook/orderBook';
import SelectInput from '../../../base/input/SelectInput';

const CardBranch = () => {
  // const [ branch, setBranch ] = useState([]);
  // const branchSearch = useSetRecoilState(filterParams);
  // console.log(branchSearch);
  const [filterState, setFilterState] = useRecoilState(orderBookFilterParamsState);
  //useSetRecoilState
  const {data} = useQuery(
    ['BRANCH_LIST'],
    () => getListBook().getListBranch(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const [valueBranch, setValueBranch] = useState(data[0].id);
  const onChageBranch = (e) => {
    setValueBranch(e.target.value);
  };
  useEffect(() => {
    setFilterState({
      ...filterState,
      branch: valueBranch
    }
    );
  }, [valueBranch]);
  return (
    <>
      <SelectInput title='Chi nhánh' dataArr={ data } className='w-full' value={ valueBranch }
        onChange={ e => onChageBranch(e) }/>
    </>
  );
};
CardBranch.propTypes = {
  filterParams: PropTypes.object,
  value: PropTypes.object,
  onChange: PropTypes.func
};
export default CardBranch;