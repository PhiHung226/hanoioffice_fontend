import React from 'react';

import AboutToExpire from '../../components/contract/aboutToExpire';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Hợp đồng sắp hết hạn' ];
const Contract = () => {
  return (
    <>
      <LayoutLink title="Hợp đồng sắp hết hạn" listLink={ listLink }>
        <AboutToExpire />
      </LayoutLink>
    </>
  );
};
export default Contract;
