import React from 'react';

import RadioGroup from '../../../base/radio/RadioGroup';
import RadioSex from '../../../base/radio/RadioSex';

const Filter = () => {
  return (
    <>
      <div>
        <div className="w-full mx-2 mt-4 mb-8 text-xl font-bold border-b-2 rounded">
          <p>Nhân viên</p>
        </div>
        <RadioGroup />
        <RadioSex />
      </div>
    </>
  );
};
export default Filter;