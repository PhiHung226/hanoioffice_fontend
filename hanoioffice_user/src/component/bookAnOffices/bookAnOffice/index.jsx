import React from 'react';

import Payment from './payment';
import SendRequire from './sendRequire';

const BookAnOffice = () => {
  const [value, setValue] = React.useState('lien_tuc');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="md:container md:mx-auto">
        <h1 className='flex justify-center py-4 mt-8 text-lg font-bold bg-gray-100 mx-48'>ĐĂNG KÝ SỬ DỤNG PHÒNG</h1>
        <div className='grid grid-cols-3 gap-2'>
          <div className='col-span-2 bg-gray-100 ml-48 mt-2'>
            <div>
            
            </div>
            <div className='mx-20'>
              <SendRequire value={ value } onChange={ handleChange }/>
            </div>
          </div>
          <div className='bg-gray-100 mt-2 mr-48'>
            <Payment value={ value }/>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookAnOffice;