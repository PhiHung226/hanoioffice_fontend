import React from 'react';

import Overview from '../../components/overview/report';
import LayoutLink from '../../layoutLink';

const Overviews = () => {
  return (
    <>
      <LayoutLink title='Tổng quan báo cáo' >
        <Overview />
      </LayoutLink>
    </>
  );
};
export default Overviews;