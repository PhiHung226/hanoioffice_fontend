import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const Transitions = (props, ref) => {
  return <Slide direction="up" ref={ ref } { ...props } />;
};
const Transition = React.forwardRef(Transitions);

const RoleLogin = ({ setRole }) => {

  const handleClose = () => {
  };
  const [ dialogBranch, setDialogBranch ] = useState(false);

  const onHandleClick = (roles) => {
    setRole(roles);
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
RoleLogin.propTypes = {
  setRole: PropTypes.func
};
export default RoleLogin;