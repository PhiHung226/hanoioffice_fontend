import React from 'react';

// import BranchDetail from './BranchDetail';
// import LoginBook from './LoginBook';
import ProceedToPlace from './proceedToPlace';
import SelectedBranch from './SelectedBranch';

const BookAnOffice = () => {
  const [ state, setState ] = React.useState('detail');
  return (
    <>
      <div className="md:container md:mx-auto">
        {/* <LoginBook /> */ }
        {
          state === 'detail' && <SelectedBranch setState={ setState } />
        }
        {
          state === 'pay' && <ProceedToPlace setState={ setState } />
        }
        {/* <BranchDetail /> */ }
      </div>
    </>
  );
};
export default BookAnOffice;