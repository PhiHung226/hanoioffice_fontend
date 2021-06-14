import React from 'react';

import AboutToExpire from '../../components/contract/aboutToExpire';
import Breadcrumbs from '../../components/contract/aboutToExpire/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Hợp đồng sắp hết hạn" titleLink={ Breadcrumbs }>
        <AboutToExpire />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
