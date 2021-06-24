import React from 'react';

import Overview from '../../components/overview/revenue';
import LayoutLink from '../../layoutLink';

const Overviews = () => {
  return (
    <>
      <LayoutLink title='Tổng quan doanh thu' >
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Overviews;