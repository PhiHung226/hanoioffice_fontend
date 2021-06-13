import React from 'react';

import Room from '../../components/room';
// import Filter from '../../components/room/filters';
import LayoutNoFilter from '../../layoutNoFilter';

const Employee = () => {
  return (
    <>
      <LayoutNoFilter title='Khách hàng'>
        <Room />
      </LayoutNoFilter>
    </>
  );
};
export default Employee;