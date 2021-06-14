import React from 'react';

import AboutToExpire from '../../components/employees/NoLongerWorking';
import Breadcrumbs from '../../components/employees/NoLongerWorking/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Nhân viên đã nghỉ" titleLink={ Breadcrumbs }>
        <AboutToExpire />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
