import React from 'react';

import Room from '../../components/room';
// import Filter from '../../components/room/filters';
import LayoutLink from '../../layoutLink';

const Employee = () => {
  return (
    <>
      <LayoutLink title='Phòng'>
        <Room />
      </LayoutLink>
    </>
  );
};
export default Employee;