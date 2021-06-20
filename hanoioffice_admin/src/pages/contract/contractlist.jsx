import React from 'react';

import ContractList from '../../components/contract/contractList';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Danh sách hợp đồng' ];
const Contract = () => {
  return (
    <>
      <LayoutLink title="Danh sách hợp đồng" listLink={ listLink }>
        <ContractList />
      </LayoutLink>
    </>
  );
};
export default Contract;
