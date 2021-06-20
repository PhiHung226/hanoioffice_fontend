import React from 'react';

import EmployeeList from '../../components/report/revenue';
import Breadcrumbs from '../../components/report/revenue/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo doanh thu" titleLink={ Breadcrumbs }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default Employee;
