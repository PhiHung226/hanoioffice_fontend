import React from 'react';

import Equiqment from '../../components/service/equiqment';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Danh sách tiện ích' ];
const Service = () => {
  return (
    <>
      <LayoutLink title='Danh sách tiện ích' listLink={ listLink }>
        <Equiqment />
      </LayoutLink>
    </>
  );
};
export default Service;