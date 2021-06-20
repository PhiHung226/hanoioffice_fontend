import React from 'react';

import BranchHistory from '../../components/branch/branchHistory';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Lịch sử địa điểm' ];
const Branch = () => {
  return (
    <>
      <LayoutLink title='Lịch sử' listLink={ listLink }>
        <BranchHistory />
      </LayoutLink>
    </>
  );
};
export default Branch;