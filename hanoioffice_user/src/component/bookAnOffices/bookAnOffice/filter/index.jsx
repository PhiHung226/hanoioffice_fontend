import React from 'react';

import CardBranch from './CardBranch';
import CardTypeRoom from './CardTypeRoom';
import MaxPeople from './maxPeople';

const Filter = () => {
  
  return (
    <>
      <div className='flex items-center'>
        <CardBranch/>
        <CardTypeRoom/>
      </div>
      <div className='pb-4'>
        <MaxPeople/>
      </div>
    </>
  );
};
export default Filter;