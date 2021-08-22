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
import {useMutation, useQuery, useQueryClient} from 'react-query';

import {getYearMonthDay} from '../../../../../helpers/helper';
import {getListTypeRoom} from '../../../../../service/room/typeRoom/listTypeRoom';
import DialogAddInfo from './DetailInfo';

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

const DialogDetail = ({openDialog, setOpenDialog, queryKey, id, detailFunction, ...other}) => {
  const ref = useRef(null);
  
  const queryClient = useQueryClient();
  const handleEntering = () => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };
  const {data} = useQuery(
    [queryKey, id],
    () => detailFunction(id),
  );
  console.log(data);
  const [values, setValues] = React.useState({
    codeTypeRoom: data.codeTypeRoom,
    priceTypeRoom: data.priceTypeRoom,
    name: data.name,
    description: data.description
  });
  
  const [form, setForm] = useState({
    date_created: getYearMonthDay(new Date(), 'yyyy-MM-dd'),
    date_end: getYearMonthDay(new Date(), 'yyyy-MM-dd')
  });
  // Xóa loại phòng
  const deleteMutation = useMutation(id => getListTypeRoom().updateTypeRoom(id));
  const handleCancel = () => {
    deleteMutation.mutate(id, {
      onSuccess: async () => {
        await queryClient.refetchQueries('PRODUCT_LIST_KEY_TYPE_ROOM_SPECIES_1', {active: true});
        handleCancel();
      },
      onError: () => {
      }
    });
    setOpenDialog(false);
  };
  // Cập nhật loại phòng
  const updateMutation = useMutation(param => getListTypeRoom().updateTypeRoom(param));
  const onSubmitForm = (values) => {
    const param = {id, values};
    updateMutation.mutate(param, {
      onSuccess: async () => {
        await queryClient.refetchQueries('PRODUCT_LIST_KEY_TYPE_ROOM_SPECIES_1', {active: true});
        handleCancel();
      },
      onError: () => {
      }
    });
    setOpenDialog(!openDialog);
  };
  // Trạng thái sử dụng
  const [stop, setStop] = useState(true);
  // const updateStatusMutation = useMutation(param => getListTypeRoom().updateTypeRoom(param));
  const stopUsing = () => {
    setStop(!stop);
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
        <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Chi tiết phòng</DialogTitle>
        <DialogContent dividers>
          <DialogAddInfo form={ form } setForm={ setForm }/>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={ () => methods.handleSubmit(onSubmitForm)() }>
            Cập nhật
          </Button>
          {
            stop &&
            <Button color="secondary" variant="contained" onClick={ stopUsing }>
              Ngừng sử dụng
            </Button>
          }
          {
            !stop &&
            <Button color="primary" variant="contained" onClick={ stopUsing }>
              Tiếp tục sử dụng
            </Button>
          }
          <Button color="secondary" variant="contained" onClick={ handleCancel }>
            Xóa
          </Button>
          <Button onClick={ handleCancel } color="secondary" variant="contained">
            Bỏ qua
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

DialogDetail.propTypes = {
  setOpenDialog: PropTypes.func,
  openDialog: PropTypes.bool,
  queryKey: PropTypes.string,
  id: PropTypes.number,
  detailFunction: PropTypes.func
  
};
export default DialogDetail;
