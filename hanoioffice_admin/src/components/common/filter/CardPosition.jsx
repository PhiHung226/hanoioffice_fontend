import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
// import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';

// import { AUTH_USER_INFO_KEY } from '../../../constants/queryKey';
import MultipleSelect from '../../base/input/MultipleSelect';

const CardPosition = ({ filterParams }) => {
  // const queryClient = useQueryClient();
  // const { data } = queryClient.getQueryData(AUTH_USER_INFO_KEY);
  const [ position, setPosition ] = useState([]);
  const positionSearch = useSetRecoilState(filterParams);
  // console.log(data);

  const data1 = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Quản lý' },
    { id: 3, name: 'Sale' },
    { id: 4, name: 'Lễ tân' }
  ];
  useEffect(() => {
    positionSearch(search => {
      return {
        ...search,
        positionSearch: position
      };
    });
  }, [ position ]);
  return (
    <>
      <div className="flex items-center w-full">
        <span className="w-1/5">Chức vụ</span>
        <MultipleSelect data={ data1 } personName={ position } setPersonName={ setPosition } minWidth='90%' />
      </div>
    </>
  );
};
CardPosition.propTypes = {
  filterParams: PropTypes.object
};
export default CardPosition;