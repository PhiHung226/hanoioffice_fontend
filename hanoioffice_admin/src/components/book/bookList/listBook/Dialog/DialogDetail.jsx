import React, {useRef} from 'react';

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

import {getListTypeRoom} from '../../../../../service/room/typeRoom/listTypeRoom';
import DialogInfo from './DialogInfo';

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

  // const [form, setForm] = useState({
  //   date_created: getYearMonthDay(new Date(), 'yyyy-MM-dd'),
  //   date_end: getYearMonthDay(new Date(), 'yyyy-MM-dd')
  // });
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
  const methods = useForm({defaultValues: values});

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={ true }
      maxWidth={ '1200px' }
      onEntering={ handleEntering }
      aria-labelledby="confirmation-dialog-title"
      open={ openDialog }
      { ...other }
      height={ '180px' }
    >
      <FormProvider { ...methods } setValues={ setValues }>
        <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Chi tiết lịch đặt</DialogTitle>
        <DialogContent dividers>
          <DialogInfo data={ data }/>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={ () => methods.handleSubmit(onSubmitForm)() }>
                        Cập nhật
          </Button>
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
