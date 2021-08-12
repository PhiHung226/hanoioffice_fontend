import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import {useQuery} from 'react-query';
import { useSetRecoilState } from 'recoil';

import {getListTypeRoom} from '../../../../../service/room/typeRoom/listTypeRoom';
import MultipleSelect from '../../../../base/input/MultipleSelect';

const CardBranch = ({ filterParams, title }) => {
  const [ branch, setBranch ] = useState([]);
  const branchSearch = useSetRecoilState(filterParams);
  
  const getData = async () => {
    return await getListTypeRoom().getListArr();
  };
  const { data } = useQuery(
    [ 'PRODUCT_LIST_KEY_TYPE_ROOM_1' ],
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
        kindOfRoom: branch
      };
    });
  }, [ branch ]);
  return (
    <>
      <div className="flex items-center w-full">
        <span className="w-1/5">{ title }</span>
        <MultipleSelect data={ data } personName={ branch } setPersonName={ setBranch } minWidth='90%' oneChip={ true } />
      </div>
    </>
  );
};
CardBranch.propTypes = {
  filterParams: PropTypes.object,
  // dataArr: PropTypes.array,
  title: PropTypes.string
};
export default CardBranch;