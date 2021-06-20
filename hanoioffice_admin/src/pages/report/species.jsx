import React from 'react';

import Species from '../../components/report/species';
import Breadcrumbs from '../../components/report/species/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo loại phòng" titleLink={ Breadcrumbs }>
        <Species />
      </LayoutLink>
    </>
  );
};
export default Employee;
