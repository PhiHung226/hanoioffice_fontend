import React from 'react';

import Overview from '../../components/overview/today';
import Breadcrumbs from '../../components/overview/today/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Overviews = () => {
  return (
    <>
      <LayoutLink title='Tổng quan hàng ngày' titleLink={ Breadcrumbs }>
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Overviews;