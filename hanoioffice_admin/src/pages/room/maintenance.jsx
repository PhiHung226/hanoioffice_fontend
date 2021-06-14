import React from 'react';

import Maintenance from '../../components/room/maintenance';
import Breadcrumbs from '../../components/room/maintenance/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Bảo trì" titleLink={ Breadcrumbs }>
        <Maintenance />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
