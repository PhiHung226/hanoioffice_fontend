import React from 'react';

import PropTypes from 'prop-types';

const FramesFilter = ({ title, event }) => {
  return (
    <>
      <div className="w-full border-b-2 rounded mx-2 shadow-smb bg-gray-100">
        <div className="m-2 py-2">
          <span className="text-sm font-bold">{ title }</span>
          <div className="mx-6">
            { event }
          </div>
        </div>
      </div>
    </>
  );
};
FramesFilter.propTypes = {
  title: PropTypes.string,
  event: PropTypes.object
};
export default FramesFilter;