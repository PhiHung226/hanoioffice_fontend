import React from 'react';

import ServiceOther from '../../components/service/serviceOther';
import Breadcrumbs from '../../components/service/serviceOther/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Service = () => {
  return (
    <>
      <LayoutLink title='Dịch vụ thêm' titleLink={ Breadcrumbs }>
        <ServiceOther />
      </LayoutLink>
    </>
  );
};
export default Service;