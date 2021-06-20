import React from 'react';

import Overview from '../../components/customer/unregistered';
import Breadcrumbs from '../../components/customer/unregistered/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Customer = () => {
  return (
    <>
      <LayoutLink title='Chưa đăng ký phòng' titleLink={ Breadcrumbs }>
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Customer;