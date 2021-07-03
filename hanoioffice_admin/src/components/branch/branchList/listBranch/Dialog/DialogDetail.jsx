import React, { useRef } from 'react';

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
    code_branch: '',
    name_branch: '',
    address_branch: '',
    number_employee: 0,
    note: ''
  });
  const [ form, setForm ] = React.useState({
    date_created: getYearMonthDay(new Date(), 'yyyy-MM-dd'),
  });
  const methods = useForm({ defaultValues: values });

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={ true }
      maxWidth={ 'sm' }
      onEntering={ handleEntering }
      aria-labelledby="confirmation-dialog-title"
      open={ openDialog.open }
      { ...other }
      height={ '180px' }
    >
      <FormProvider { ...methods } setValues={ setValues }>
        <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Chi nhánh chi tiết</DialogTitle>
        <DialogContent dividers>
          <Detail form={ form } setForm={ setForm } />
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleOk } color="primary" variant="contained">
            Cập nhật
          </Button>
          <Button onClick={ handleOk } color="secondary" variant="contained">
            Xóa
          </Button>
          <Button autoFocus onClick={ handleCancel } color="secondary" variant="contained">
            Bỏ qua
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
