import React from 'react';

import Reserve from '../../components/contract/reserve';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Bảo lưu hợp đồng' ];
const Contract = () => {
  return (
    <>
      <LayoutLink title="Bảo lưu hợp đồng" listLink={ listLink }>
        <Reserve />
      </LayoutLink>
    </>
  );
};
export default Contract;
