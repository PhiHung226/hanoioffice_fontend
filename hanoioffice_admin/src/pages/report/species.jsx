import React from 'react';

import Species from '../../components/report/species';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Báo cáo loại phòng' ];
const Employee = () => {
  return (
    <>
      <LayoutLink title="Báo cáo loại phòng" listLink={ listLink }>
        <Species />
      </LayoutLink>
    </>
  );
};
export default Employee;
