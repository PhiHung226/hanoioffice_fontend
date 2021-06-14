import React from 'react';

import ContractList from '../../components/contract/contractList';
import Breadcrumbs from '../../components/contract/contractList';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Danh sách hợp đồng" titleLink={ Breadcrumbs }>
        <ContractList />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
