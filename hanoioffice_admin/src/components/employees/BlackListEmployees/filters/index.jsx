import React from 'react';

import RadioGroup from '../../../base/radio/RadioGroup';

const Filters = () => {
  return (
    <>
      <div>
        <div className="w-full mx-2 mt-4 mb-8 text-xl font-bold border-b-2 rounded">
          <p>Danh sách đen</p>
        </div>
        <RadioGroup />
      </div>
    </>
  );
};
export default Filters;