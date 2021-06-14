import React from 'react';

import TableV7 from '../../common/table/TableV7';
// import ButtonGroup from './ButtonGroup';
// import SearchBar from './SearchBar';

const Employees = () => {

  return (
    <>
      <div className="my-1 sticky top-4 responsive-mt-0">
        {/* <div className="mb-2 responsive-menu font-bold text-xl">Nhân viên</div>
        <div className="flex justify-between mb-8">
          <SearchBar />
          <ButtonGroup />
        </div> */}
        <TableV7 />
      </div>
    </>
  );
};
export default Employees;