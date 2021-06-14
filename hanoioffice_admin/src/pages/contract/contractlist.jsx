import React from 'react';

import ListEmloyee from '../../components/employees';
import Breadcrumbs from '../../components/employees/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ContractList = () => {
  return (
    <>
      <LayoutLink title="Hợp đồng" titleLink={ Breadcrumbs }>
        <ListEmloyee />
      </LayoutLink>
    </>
  );
};
export default ContractList;
