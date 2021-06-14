import React from 'react';

import Species from '../../components/room/species';
import Breadcrumbs from '../../components/room/species/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const ComponentsCenter = () => {
  return (
    <>
      <LayoutLink title="Loại phòng" titleLink={ Breadcrumbs }>
        <Species />
      </LayoutLink>
    </>
  );
};
export default ComponentsCenter;
