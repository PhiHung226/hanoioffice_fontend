import React, { useState } from 'react';

import {
  listContractFilterParamsState
} from '../../../../../store/atoms/contract/contractList/listContract';
import ButtonBase from '../../../../base/button/ButtonBase';
import DateSelection from '../../../../base/dateTime/DateSelection';
import CardBranch from '../../../../common/filter/CardBranch';
import CardPosition from '../../../../common/filter/CardPosition';
import CardSex from '../../../../common/filter/CardSex';
// import Dialog from '../../../../common/Dialog/Dialog';
import DialogAdd from '../DialogAdd/DialogAdd';
import SearchBar from '../Filters/SearchBar';

const Filters = () => {
  const [ openAdd, setOpenAdd ] = useState(false);
  return (
    <>
      <div className="rounded w-full bg-gray-100 my-2">
        <div className="m-2">
          <div className='flex gap-4'>
            <SearchBar />
            <CardBranch filterParams={ listContractFilterParamsState } />
            <CardPosition filterParams={ listContractFilterParamsState } />
          </div>
          <div className='flex gap-4'>

            <CardSex filterParams={ listContractFilterParamsState } />
            <DateSelection title="Thời gian vào" />
          </div>
          <div className="flex justify-end ">
            <ButtonBase title={ 'Thêm nhân viên' } color={ 'primary' } className='m-3' onClick={ () => setOpenAdd(!openAdd) } />
            {
              <DialogAdd setOpenDialog={ setOpenAdd } openDialog={ openAdd } />
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default Filters;