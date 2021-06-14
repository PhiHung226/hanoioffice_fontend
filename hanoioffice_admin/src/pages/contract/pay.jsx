import React from 'react';

import Pay from '../../components/contract/pay';
import Breadcrumbs from '../../components/contract/pay/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Thanh toán hợp đồng" titleLink={ Breadcrumbs }>
        <Pay />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
