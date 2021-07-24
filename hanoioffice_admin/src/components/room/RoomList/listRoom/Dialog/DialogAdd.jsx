import React, { useRef, useState} from 'react';

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
// import {useQuery} from 'react-query';

// import {LIST_ORDER_PLACEHOLDER_DATA} from '../../../../../fixedData/dataEmployee';
import { getYearMonthDay } from '../../../../../helpers/helper';
import {getListCustomer} from '../../../../../service/customer/customerList/listCustomer';
import DialogAddInfo from '../Dialog/DetailInfo';

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

const DialogAdd = (props) => {
  const { setOpenDialog, openDialog, ...other } = props;
  const ref = useRef(null);

  const handleEntering = () => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };

  const [ values, setValues ] = React.useState({
    code_utilities: '',
    name_utilities: '',
    number_utilities: 0
  });
  const [ form, setForm ] = useState({
    date_created: getYearMonthDay(new Date(), 'yyyy-MM-dd'),
    date_end: getYearMonthDay(new Date(), 'yyyy-MM-dd')
  });
  const handleCancel = () => {
    setOpenDialog(!openDialog);
  };
  
  const onSubmitForm = (values) => {
    // setOpenDialog(!openDialog);
    console.log(values);
    const {
      branch, code_room, code_utilities, location_room, name_room, name_utilities,
      note, number_customer, number_utilities, position
    } = values;
    const {
      date_created
    } = form;
    const value = {
      branch, code_room, code_utilities, location_room, name_room, name_utilities,
      note, number_customer, number_utilities, position, date_created
    };
    const getData = async () => {
      return await getListCustomer().addRoom(value);
    };
    console.log(getData());
  };
  const methods = useForm({ defaultValues: values });
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={ true }
      maxWidth={ 'md' }
      onEntering={ handleEntering }
      aria-labelledby="confirmation-dialog-title"
      open={ openDialog }
      { ...other }
      height={ '180px' }
    >
      <FormProvider { ...methods } setValues={ setValues }>
        <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Thêm mới phòng</DialogTitle>
        <DialogContent dividers>
          <DialogAddInfo form={ form } setForm={ setForm } />
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={ () => methods.handleSubmit(onSubmitForm)() }>
            Thêm
          </Button>
          <Button onClick={ handleCancel } color="secondary" variant="contained" >
            Bỏ qua
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

DialogAdd.propTypes = {
  setOpenDialog: PropTypes.func,
  openDialog: PropTypes.bool
};
export default DialogAdd;
