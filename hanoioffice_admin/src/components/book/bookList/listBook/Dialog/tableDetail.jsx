import React from 'react';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PropTypes from 'prop-types';

const TableDetail = ({
  data = {name: 'Tên phòng', numberRoom: 'Số chỗ ngồi', time: 'Ca trống', branch: 'Chi nhánh'},
  text_center = 'pl-2', buttonDelete = false
}) => {

  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-11 grid grid-cols-11'>
          <p className={ `border-br-1 pt-2 ${text_center} col-span-2` }>{data.name}</p>
          <p className={ `border-br-1 pt-2 ${text_center} col-span-2` }>{data.numberRoom}</p>
          <p className={ `border-br-1 pt-2 ${text_center} col-span-2` }>{data.time}</p>
          <p className={ `pt-1 ${text_center} col-span-5` }>{data.branch}</p>
        </div>
        {buttonDelete && <div className='ml-2 cursor-pointer' title={ 'Thay thế ngày hiện tại' }>
          <AddCircleOutlineIcon className='hover:text-blue-800'/>
        </div>}
      </div>
    </>
  );

};
TableDetail.propTypes = {
  data: PropTypes.object,
  text_center: PropTypes.string,
  buttonDelete: PropTypes.bool
};
export default TableDetail;