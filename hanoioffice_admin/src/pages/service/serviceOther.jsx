import React from 'react';

import ServiceOther from '../../components/service/serviceOther';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Dịch vụ thêm' ];
const Service = () => {
  return (
    <>
      <LayoutLink title='Dịch vụ thêm' listLink={ listLink }>
        <ServiceOther />
      </LayoutLink>
    </>
  );
};
export default Service;