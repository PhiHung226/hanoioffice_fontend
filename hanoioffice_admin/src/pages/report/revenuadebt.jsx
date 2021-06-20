import React from 'react';

import EmployeeList from '../../components/report/revenuadebt';
import Breadcrumbs from '../../components/report/revenuadebt/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo công nợ" titleLink={ Breadcrumbs }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default Employee;
