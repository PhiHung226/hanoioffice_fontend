import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
// import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

// import { AUTH_USER_INFO_KEY } from '../../../constants/queryKey';
import MultipleSelect from '../../../../base/input/MultipleSelect';

const CardBranch = ({ filterParams }) => {
  // const queryClient = useQueryClient();
  // const { data } = queryClient.getQueryData(AUTH_USER_INFO_KEY);
  const [ branch, setBranch ] = useState([]);
  const branchSearch = useSetRecoilState(filterParams);
  // console.log(data);

  const data1 = [
    { id: 1, name: 'Đã đăng ký phòng' },
    { id: 2, name: 'Đã hết hạn' },
    { id: 3, name: 'Chưa đăng ký phòng' },
    { id: 4, name: 'Báo xấu' }
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
        <span className="w-1/5">Thành phần</span>
        <MultipleSelect data={ data1 } personName={ branch } setPersonName={ setBranch } minWidth='90%' oneChip={ true } />
      </div>
    </>
  );
};
CardBranch.propTypes = {
  filterParams: PropTypes.object
};
export default CardBranch;