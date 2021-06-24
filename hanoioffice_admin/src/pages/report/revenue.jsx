import React from 'react';

import EmployeeList from '../../components/report/revenue';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Báo cáo doanh thu' ];
const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo doanh thu" listLink={ listLink }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default Employee;
