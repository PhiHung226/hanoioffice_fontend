import React, {useState} from 'react';

import ButtonBase from '../../../../base/button/ButtonBase';
import DialogAdd from '../Dialog/DialogAdd';

const Filters = () => {
  const [openAdd, setOpenAdd] = useState(false);
  return (
    <>
      <div className="flex justify-end ">
        <ButtonBase title={ 'Thêm lịch' } color={ 'primary' } className='m-3' onClick={ () => setOpenAdd(!openAdd) }/>
        {
          <DialogAdd setOpenDialog={ setOpenAdd } openDialog={ openAdd }/>
        }
      </div>
    </>
  );
};
export default Filters;