import React from 'react';

import Equiqment from '../../components/service/equiqment';
import Breadcrumbs from '../../components/service/equiqment/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Service = () => {
  return (
    <>
      <LayoutLink title='Trang thiết bị' titleLink={ Breadcrumbs }>
        <Equiqment />
      </LayoutLink>
    </>
  );
};
export default Service;