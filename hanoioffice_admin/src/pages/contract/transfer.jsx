import React from 'react';

import Transfer from '../../components/contract/transfer';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Chuyển nhượng hợp đồng' ];
const Contract = () => {
  return (
    <>
      <LayoutLink title="Chuyển nhượng hợp đồng" listLink={ listLink }>
        <Transfer />
      </LayoutLink>
    </>
  );
};
export default Contract;
