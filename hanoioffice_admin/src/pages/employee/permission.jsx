import React from 'react';

import Permission from '../../components/employees/Permission';
import Breadcrumbs from '../../components/employees/Permission/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Phân quyền" titleLink={ Breadcrumbs }>
        <Permission />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
