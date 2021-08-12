import React, { useEffect, useState} from 'react';

import PropTypes from 'prop-types';
import {useQuery} from 'react-query';
import { useSetRecoilState } from 'recoil';

import {getListBranchs} from '../../../service/branch/listBranch/branchList';
import MultipleSelect from '../../base/input/MultipleSelect';

const CardBranch = ({ filterParams }) => {
  const [ branch, setBranch ] = useState([]);
  const branchSearch = useSetRecoilState(filterParams);
  
  const getData = async () => {
    return await getListBranchs().getListArr();
  };
  const { data } = useQuery(
    [ 'PRODUCT_LIST_KEY_BRANCH_1' ],
    () => getData(),
    {
      keepPreviousData: true, staleTime: 5000,
      placeholderData: []
    }
  );
  useEffect(() => {
    branchSearch(search => {
      return {
        ...search,
        branchRoom: branch
      };
    });
  }, [ branch ]);
  return (
    <>
      <div className="flex items-center w-full">
        <span className="w-1/5">Chi nhánh</span>
        <MultipleSelect data={ data } personName={ branch } setPersonName={ setBranch } minWidth='90%' oneChip={ true } />
      </div>
    </>
  );
};
CardBranch.propTypes = {
  filterParams: PropTypes.object
};
export default CardBranch;