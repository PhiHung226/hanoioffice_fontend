import React from 'react';

import DateYear from '../../../base/dateTime/DateYear';
// import PropTypes from 'prop-types';

const TotalCustomer = () => {
  return (
    <>
      <div className="w-full bg-white-300 h-40 shadow-lg rounded-lg">
        <div className="block">
          <div className="flex justify-between">
            <p className="text-xl font-medium mx-3 mt-3 antialiased">Khách hàng</p>
            <div className="mx-3">
              <DateYear />
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-4xl font-extrabold text-blue-700 px-4 pt-4">
              1,500
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-lg px-6 text-blue-700 font-extrabold">Khách Hàng</span>
          </div>
          <div className="pb-3 px-4 flex justify-start">
            <p className="hover:text-blue-700 cursor-pointer">Xem chi tiết</p>
          </div>
        </div>
      </div>
    </>
  );
};
// TotalCustomer.propTypes = {
//   title: PropTypes.string,
//   value: PropTypes.string
// };
export default TotalCustomer;