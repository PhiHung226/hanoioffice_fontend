import React, { useRef } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

import DialogAddInfo from '../DialogAdd/DialogAddInfo';
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[ 500 ],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={ classes.root } { ...other }>
      <Typography variant="h6">{ children }</Typography>
      { onClose ? (
        <IconButton aria-label="close" className={ classes.closeButton } onClick={ onClose }>
          <CloseIcon />
        </IconButton>
      ) : null }
    </MuiDialogTitle>
  );
});

const ConfirmationDialogRaw = (props) => {
  const { setOpenDialog, openDialog, ...other } = props;
  const ref = useRef(null);

  const handleEntering = () => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };

  const handleCancel = () => {
    setOpenDialog(!openDialog);
  };
  const handleOk = () => {
    setOpenDialog(!openDialog);
  };


  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={ true }
      onEntering={ handleEntering }
      aria-labelledby="confirmation-dialog-title"
      open={ openDialog }
      { ...other }
      height={ '180px' }
    >
      <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Thêm mới nhân viên</DialogTitle>
      <DialogContent dividers>
        <DialogAddInfo />
      </DialogContent>
      <DialogActions>
        <Button onClick={ handleOk } color="primary">
          Thêm
        </Button>
        <Button autoFocus onClick={ handleCancel } color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialogRaw.propTypes = {
  setOpenDialog: PropTypes.func,
  openDialog: PropTypes.bool,
};
export default ConfirmationDialogRaw;
