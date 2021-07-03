import React, { useState } from 'react';

import ButtonBase from '../../../../base/button/ButtonBase';
import DialogAdd from '../Dialog/DialogAdd';
import SearchBar from '../Filters/SearchBar';

const Filters = () => {
  const [ openAdd, setOpenAdd ] = useState(false);
  return (
    <>
      <div className="rounded w-full bg-gray-100 my-2">
        <div className="m-2">
          <div className='flex grid grid-cols-3 gap-4'>
            <SearchBar />
          </div>
          <div className="flex justify-end ">
            <ButtonBase title={ 'Thêm dịch vụ khác' } color={ 'primary' } className='m-3' onClick={ () => setOpenAdd(!openAdd) } />
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