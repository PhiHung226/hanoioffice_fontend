import React from 'react';

import TableV1 from '../../common/table/TableV1';
import ButtonGroup from './ButtonGroup';
import SearchBar from './SearchBar';

const Employees = () => {

  return (
    <>
      <div className="my-1 sticky top-4 responsive-mt-0">
        <div className="mb-2 responsive-menu font-bold text-xl">Nhân viên</div>
        <div className="flex justify-between mb-8">
          <SearchBar />
          <ButtonGroup />
        </div>
        <div className="overscroll-auto">
          <TableV1 />
        </div>
      </div>
    </>
  );
};
export default Employees;