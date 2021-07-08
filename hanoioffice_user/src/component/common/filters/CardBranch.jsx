import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
// import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

// import { AUTH_USER_INFO_KEY } from '../../../constants/queryKey';
import MultipleSelect from '../../base/input/MultipleSelect';

const CardBranch = ({ filterParams, widthTitle }) => {
  // const queryClient = useQueryClient();
  // const { data } = queryClient.getQueryData(AUTH_USER_INFO_KEY);
  const [ branch, setBranch ] = useState([]);
  const branchSearch = useSetRecoilState(filterParams);
  // console.log(data);

  const data1 = [
    { id: 1, name: 'Chi nhánh Thanh Xuân' },
    { id: 2, name: 'Chi nhánh Thanh Hà' },
    { id: 3, name: 'Chi nhánh Hà Đông' },
    { id: 4, name: 'Chi nhanh Từ Liêm' }
  ];
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
        <span className={ widthTitle }>Chi nhánh</span>
        <MultipleSelect data={ data1 } personName={ branch } setPersonName={ setBranch } minWidth='90%' oneChip={ true } />
      </div>
    </>
  );
};
CardBranch.propTypes = {
  filterParams: PropTypes.object,
  widthTitle: PropTypes.string
};
export default CardBranch;