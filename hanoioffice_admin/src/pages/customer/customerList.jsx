import React from 'react';

import CustomerList from '../../components/customer/customerList';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Danh sách khách hàng' ];
const Customer = () => {
  return (
    <>
      <LayoutLink title='Danh sách khách hàng' listLink={ listLink }>
        <CustomerList />
      </LayoutLink>
    </>
  );
};
export default Customer;