import React from 'react';

import Unregistered from '../../components/customer/unregistered';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Chưa đăng ký phòng' ];
const Customer = () => {
  return (
    <>
      <LayoutLink title='Chưa đăng ký phòng' listLink={ listLink }>
        <Unregistered />
      </LayoutLink>
    </>
  );
};
export default Customer;