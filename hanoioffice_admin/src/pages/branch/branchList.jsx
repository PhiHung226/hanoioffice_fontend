import React from 'react';

import BranchList from '../../components/branch/branchList';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Danh sách chi nhánh' ];
const Branch = () => {
  return (
    <>
      <LayoutLink title='Danh sách chi nhánh' listLink={ listLink }>
        <BranchList />
      </LayoutLink>
    </>
  );
};
export default Branch;