import React from 'react';

import EmployeeList from '../../components/employees/EmployeeList';
import Breadcrumbs from '../../components/employees/EmployeeList/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Danh sách nhân viên" titleLink={ Breadcrumbs }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
