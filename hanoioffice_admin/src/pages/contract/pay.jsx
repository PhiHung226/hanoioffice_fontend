import React from 'react';

import Pay from '../../components/contract/pay';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Thanh toán hợp đồng' ];
const Contract = () => {
  return (
    <>
      <LayoutLink title="Thanh toán hợp đồng" listLink={ listLink }>
        <Pay />
      </LayoutLink>
    </>
  );
};
export default Contract;
