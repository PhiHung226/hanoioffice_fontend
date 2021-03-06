import React, {useRef, useState} from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import {FormProvider, useForm} from 'react-hook-form';
import {useMutation, useQueryClient} from 'react-query';

import {getYearMonthDay} from '../../../../../helpers/helper';
import {getListTypeRoom} from '../../../../../service/room/typeRoom/listTypeRoom';
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
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={ classes.root } { ...other }>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={ classes.closeButton } onClick={ onClose }>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogAdd = (props) => {
  const queryClient = useQueryClient();
  const {setOpenDialog, openDialog, ...other} = props;
  const ref = useRef(null);
  
  const handleEntering = () => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };
  
  const [values, setValues] = React.useState({
    codeTypeRoom: '',
    priceTypeRoom: 0,
    name: '',
    description: ''
  });
  const [form, setForm] = useState({
    date_created: getYearMonthDay(new Date(), 'yyyy-MM-dd'),
    date_end: getYearMonthDay(new Date(), 'yyyy-MM-dd')
  });
  const handleCancel = () => {
    setOpenDialog(!openDialog);
  };
  const createMutation = useMutation(value => getListTypeRoom().addRoom(value));
  const onSubmitForm = (values) => {
    // setOpenDialog(!openDialog);
    // console.log(values);
    const {
      codeTypeRoom, name,
      description, priceTypeRoom
    } = values;
    const value = {
      codeTypeRoom, name,
      description, priceTypeRoom
    };
    // const getData = async () => {
    //   return await getListCustomer().addRoom(value);
    // };
    // console.log(getData());
    createMutation.mutate(value, {
      onSuccess: async () => {
        await queryClient.refetchQueries('PRODUCT_LIST_KEY_TYPE_ROOM_SPECIES_1', {active: true});
        handleCancel();
      },
      onError: () => {
      }
    });
  };
  
  const methods = useForm({defaultValues: values});
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={ true }
      maxWidth={ 'sm' }
      onEntering={ handleEntering }
      aria-labelledby="confirmation-dialog-title"
      open={ openDialog }
      { ...other }
      height={ '180px' }
    >
      <FormProvider { ...methods } setValues={ setValues }>
        <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Th??m m????i loa??i pho??ng</DialogTitle>
        <DialogContent dividers>
          <DialogAddInfo form={ form } setForm={ setForm }/>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={ () => methods.handleSubmit(onSubmitForm)() }>
            Th??m
          </Button>
          <Button onClick={ handleCancel } color="secondary" variant="contained">
            Bo?? qua
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
