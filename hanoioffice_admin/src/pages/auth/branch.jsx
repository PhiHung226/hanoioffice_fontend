import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transitions = (props, ref) => {
  return <Slide direction="up" ref={ ref } { ...props } />;
};
const Transition = React.forwardRef(Transitions);

const BranchLogin = () => {

  const handleClose = () => {
  };
  const [ dialogBranch, setDialogBranch ] = useState(true);

  const onHandleClick = () => {
    setDialogBranch(false);
  };
  return (
    <>
      <Dialog fullScreen open={ dialogBranch } onClose={ handleClose } TransitionComponent={ Transition }>
        <div>
          <div>
            <div onClick={ onHandleClick(0) }>Admin</div>
            <div onClick={ onHandleClick(1) }>Sale</div>
            <div onClick={ onHandleClick(2) }>Lễ tân</div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default BranchLogin;