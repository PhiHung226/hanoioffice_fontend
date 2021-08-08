import React from 'react';

import SendRequire from './sendRequire';

const BookAnOffice = () => {
  return (
    <>
      <div className="md:container md:mx-auto">
        <h1 className='flex justify-center py-4 mt-8 text-lg font-bold bg-gray-100 mx-48'>NHU CẦU SỬ DỤNG PHÒNG</h1>
        <div className='grid grid-cols-3 gap-2'>
          <div className='col-span-2 bg-gray-100 ml-48 mt-2'>
            <div>
    
            </div>
            <div className='mx-20'>
              <SendRequire />
            </div>
          </div>
          <div className='bg-gray-100 mt-2 mr-48'>
            <p>* Hướng dẫn điền thông tin</p>
            <p>Điền đầy đủ cac trường dữ liệu theo yêu cầu</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookAnOffice;