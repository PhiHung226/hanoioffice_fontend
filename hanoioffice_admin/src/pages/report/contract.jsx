import React from 'react';

import EmployeeList from '../../components/report/contract';
import Breadcrumbs from '../../components/report/contract/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo hợp đồng" titleLink={ Breadcrumbs }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default Employee;
