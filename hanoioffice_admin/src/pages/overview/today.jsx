import React from 'react';

import Overview from '../../components/overview/today';
import LayoutLink from '../../layoutLink';

const Overviews = () => {
  return (
    <>
      <LayoutLink title='Tổng quan hàng ngày' >
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Overviews;