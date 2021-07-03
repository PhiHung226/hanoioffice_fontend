import React, { useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';

import { getYearMonthDay } from '../../../../../helpers/helper';

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
  const { setOpenDialog, openDialog, detail: Detail, ...other } = props;
  const ref = useRef(null);

  const handleEntering = () => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };

  const handleCancel = () => {
    setOpenDialog({
      ...openDialog,
      open: !openDialog.open
    });
  };

  const handleOk = () => {
    setOpenDialog({
      ...openDialog,
      open: !openDialog.open
    });
  };
  const [ values, setValues ] = React.useState({
    fist_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: '',
    hktt: '',
    code_employee: '',
    // note_personal: '',
    user_employee: '',
    pass_employee: '',
    note_work: '',
    sex: '0',
    position: '1',
    branch: ''
  });
  const [ form, setForm ] = useState({
    birthday: getYearMonthDay(new Date(), 'yyyy-MM-dd'),
    start_day: getYearMonthDay(new Date(), 'yyyy-MM-dd'),
  });
  const methods = useForm({ defaultValues: values });

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={ true }
      maxWidth={ 'lg' }
      onEntering={ handleEntering }
      aria-labelledby="confirmation-dialog-title"
      open={ openDialog.open }
      { ...other }
      height={ '180px' }
    >
      <FormProvider { ...methods } setValues={ setValues }>
        <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Thông tin nhân viên chi tiết</DialogTitle>
        <DialogContent dividers>
          <Detail form={ form } setForm={ setForm } isAdd={ false } />
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleOk } variant="contained" color="primary">
            Cập nhật
          </Button>
          <Button autoFocus onClick={ handleCancel } variant="contained" color="primary">
            Chuyển sang đã nghỉ
          </Button>
          <Button autoFocus onClick={ handleCancel } variant="contained" color="secondary">
            Hủy
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

ConfirmationDialogRaw.propTypes = {
  setOpenDialog: PropTypes.func,
  openDialog: PropTypes.object,
  detail: PropTypes.func,
};
export default ConfirmationDialogRaw;
