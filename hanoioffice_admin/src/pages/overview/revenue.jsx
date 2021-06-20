import React from 'react';

import Overview from '../../components/overview/revenue';
import Breadcrumbs from '../../components/overview/revenue/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Overviews = () => {
  return (
    <>
      <LayoutLink title='Tổng quan doanh thu' titleLink={ Breadcrumbs }>
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Overviews;