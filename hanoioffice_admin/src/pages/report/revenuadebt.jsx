import React from 'react';

import EmployeeList from '../../components/report/revenuadebt';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Báo cáo công nợ' ];
const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo công nợ" listLink={ listLink }>
        <EmployeeList />
      </LayoutLink>
    </>
  );
};
export default Employee;
