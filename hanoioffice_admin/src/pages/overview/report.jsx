import React from 'react';

import Overview from '../../components/overview/report';
import Breadcrumbs from '../../components/overview/report/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Overviews = () => {
  return (
    <>
      <LayoutLink title='Tổng quan báo cáo' titleLink={ Breadcrumbs }>
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Overviews;