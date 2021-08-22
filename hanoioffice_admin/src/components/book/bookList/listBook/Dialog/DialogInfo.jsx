import React, {useState} from 'react';

import PropTypes from 'prop-types';

import SelectInput from '../../../../base/input/SelectInput';
import SchedulesItem from '../../../../room/species/species/Dialog/SchedulesItem';

const DialogInfo = ({data}) => {
  const [valueBranch, setValueBranch] = useState(data.branch[0].id);
  const onChageBranch = (e) => {
    setValueBranch(e.target.value);
  };
  return (
    <>
      <div className='grid grid-cols-5'>
        <div className='border-br-1 col-span-3 pr-5'>
          <div className='grid grid-cols-3 gap-4'>
            <SelectInput title='Chi nhánh' dataArr={ data.branch } className='w-full' value={ valueBranch }
              classNameItem='w-full' disabled={ true } onChange={ e => onChageBranch(e) }/>
            <SelectInput title='Loại phòng' dataArr={ data.branch } className='w-full' value={ valueBranch }
              classNameItem='w-full' disabled={ true } onChange={ e => onChageBranch(e) }/>
            <SelectInput title='Phòng' dataArr={ data.branch } className='w-full' value={ valueBranch }
              classNameItem='w-full' disabled={ false } onChange={ e => onChageBranch(e) }/>
          </div>
          <h2 className='mt-2'>Danh sách lịch đặt yêu cầu</h2>
          <div className='mt-3 '>
            <SchedulesItem/>
          </div>
        </div>
        <div className='col-span-2'>

        </div>
      </div>
    </>
  );
};
DialogInfo.propTypes = {
  data: PropTypes.object
};
export default DialogInfo;