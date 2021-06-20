import React from 'react';

import Permission from '../../components/employees/Permission';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Phân quyền' ];
const Employee = () => {
  return (
    <>
      <LayoutLink title="Phân quyền" listLink={ listLink }>
        <Permission />
      </LayoutLink>
    </>
  );
};
export default Employee;
