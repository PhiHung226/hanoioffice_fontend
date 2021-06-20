import React from 'react';

import AboutToExpire from '../../components/employees/NoLongerWorking';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Nhân viên đã nghỉ' ];
const Employee = () => {
  return (
    <>
      <LayoutLink title="Nhân viên đã nghỉ" listLink={ listLink }>
        <AboutToExpire />
      </LayoutLink>
    </>
  );
};
export default Employee;
