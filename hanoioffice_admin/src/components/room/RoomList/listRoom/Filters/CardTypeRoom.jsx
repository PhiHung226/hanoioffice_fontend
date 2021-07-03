import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
// import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

// import { AUTH_USER_INFO_KEY } from '../../../constants/queryKey';
import MultipleSelect from '../../../../base/input/MultipleSelect';

const CardBranch = ({ filterParams, dataArr, title }) => {
  // const queryClient = useQueryClient();
  // const { data } = queryClient.getQueryData(AUTH_USER_INFO_KEY);
  const [ branch, setBranch ] = useState([]);
  const branchSearch = useSetRecoilState(filterParams);
  // console.log(data);

  useEffect(() => {
    branchSearch(search => {
      return {
        ...search,
        branchSearch: branch
      };
    });
  }, [ branch ]);
  return (
    <>
      <div className="flex items-center w-full">
        <span className="w-1/5">{ title }</span>
        <MultipleSelect data={ dataArr } personName={ branch } setPersonName={ setBranch } minWidth='90%' oneChip={ true } />
      </div>
    </>
  );
};
CardBranch.propTypes = {
  filterParams: PropTypes.object,
  dataArr: PropTypes.array,
  title: PropTypes.string
};
export default CardBranch;