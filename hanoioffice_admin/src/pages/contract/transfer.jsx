import React from 'react';

import Transfer from '../../components/contract/transfer';
import Breadcrumbs from '../../components/contract/transfer/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Contract = () => {
  return (
    <>
      <LayoutLink title="Chuyển nhượng hợp đồng" titleLink={ Breadcrumbs }>
        <Transfer />
      </LayoutLink>
    </>
  );
};
export default Contract;
