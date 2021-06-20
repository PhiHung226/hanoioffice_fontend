import React from 'react';

import EmployeeList from '../../components/employees/EmployeeList';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Danh sách nhân viên' ];
const Employee = () => {
  return (
    <>
      <LayoutLink title="Danh sách hợp đồng" listLink={ listLink }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default Employee;
