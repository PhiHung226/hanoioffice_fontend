import React from 'react';

import EmployeeList from '../../components/report/contract';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Báo cáo hợp đồng' ];
const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo hợp đồng" listLink={ listLink }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default Employee;
