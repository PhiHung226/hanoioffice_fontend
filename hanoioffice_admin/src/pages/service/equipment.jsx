import React from 'react';

import Equiqment from '../../components/service/equiqment';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Trang thiết bị' ];
const Service = () => {
  return (
    <>
      <LayoutLink title='Trang thiết bị' listLink={ listLink }>
        <Equiqment />
      </LayoutLink>
    </>
  );
};
export default Service;