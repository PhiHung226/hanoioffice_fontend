import React from 'react';

import PropTypes from 'prop-types';

const totalRoom = ({
  title = 'Báo cáo',
  value = 0,
  totalRoom = '0'
}) => {
  return (
    <>
      <div className="w-full bg-white-300 h-36 shadow-lg rounded-lg">
        <div className="block">
          <p className="text-xl font-medium mx-3 mt-3 antialiased">{ title }</p>
          <div className="flex justify-center">
            <p className="text-4xl font-extrabold text-blue-700 p-4">
              { value }
            </p>
            <p className="text-2xl font-extrabold text-blue-700 px-4 pt-6">
              /  { totalRoom }
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-lg px-6 text-blue-700 font-extrabold">Phòng</span>
          </div>
        </div>
      </div>
    </>
  );
};
totalRoom.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  totalRoom: PropTypes.string
};
export default totalRoom;