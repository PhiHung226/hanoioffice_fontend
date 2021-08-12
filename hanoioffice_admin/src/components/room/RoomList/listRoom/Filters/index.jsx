import React, { useState } from 'react';

import { listRoomFilterParamsState } from '../../../../../store/atoms/room/listRoom/listRoom';
import ButtonBase from '../../../../base/button/ButtonBase';
import CardBranch from '../../../../common/filter/CardBranch';
import DialogAdd from '../Dialog/DialogAdd';
import CardTypeRoom from '../Filters/CardTypeRoom';
import SearchBar from '../Filters/SearchBar';

const Filters = () => {

  const [ openAdd, setOpenAdd ] = useState(false);
  return (
    <>
      <div className="rounded w-full bg-gray-100 my-2">
        <div className="m-2">
          <div className='flex grid grid-cols-3 gap-4'>
            <SearchBar />
            <CardBranch filterParams={ listRoomFilterParamsState } />
            <CardTypeRoom title={ 'Loại phòng' } filterParams={ listRoomFilterParamsState } />
          </div>
          <div className="flex justify-end ">
            <ButtonBase title={ 'Thêm phòng' } color={ 'primary' } className='m-3' onClick={ () => setOpenAdd(!openAdd) } />
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