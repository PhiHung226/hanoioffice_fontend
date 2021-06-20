import React from 'react';

import Reserve from '../../components/contract/reserve';
import Breadcrumbs from '../../components/contract/reserve/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Contract = () => {
  return (
    <>
      <LayoutLink title="Bảo lưu hợp đồng" titleLink={ Breadcrumbs }>
        <Reserve />
      </LayoutLink>
    </>
  );
};
export default Contract;
