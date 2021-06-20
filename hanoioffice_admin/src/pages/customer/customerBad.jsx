import React from 'react';

import Overview from '../../components/customer/customerBad';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Danh sách báo xấu' ];
const Customer = () => {
  return (
    <>
      <LayoutLink title='Báo xấu' listLink={ listLink }>
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Customer;