import React from 'react';

import ServiceOther from '../../components/service/serviceOther';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Dịch vụ khác' ];
const Service = () => {
  return (
    <>
      <LayoutLink title='Dịch vụ khác' listLink={ listLink }>
        <ServiceOther />
      </LayoutLink>
    </>
  );
};
export default Service;