import React, {useEffect, useRef, useState} from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
// import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import {useQuery} from 'react-query';

import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';

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

const DialogService = ({
  setOpenDialog,
  openDialog,
  setListDate,
  listDate,
  dataItem,
  indexs,
  color = 'primary',
  ...other
}) => {
  const ref = useRef(null);
  
  const handleEntering = () => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };
  
  const handleCancel = () => {
    setOpenDialog(!openDialog);
  };
  
  const {data} = useQuery(
    ['LIST_SERVICE_12'],
    () => getListBook().getListService(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const [dataNew, setDataNew] = useState(dataItem.length > 0 ? dataItem : data);
  useEffect(() => {
    if (dataItem.length > 0) {
      setDataNew(dataItem);
    } else {
      setDataNew(data);
    }
  }, [data, dataItem]);
  
  const [stateAll, setStateAll] = useState(false);
  const handleChange = (e) => {
    setDataNew(
      dataNew.map((item) => {
        return {
          ...item,
          checked: item.id.toString() === e.target.id ? e.target.checked : item.checked
        };
      })
    );
  };
  useEffect(() => {
    setListDate(listDate.map((item, index) => {
      return {
        ...item,
        // listService: index === index ? dataNew.filter(i => i.checked).map(j => j.id.toString()) : item.listShift
        listService: indexs === index ? dataNew : item.listService
      };
    }));
  }, [dataNew]);
  
  useEffect(() => {
    setStateAll(
      dataNew.filter(item => item.checked).length === data.length
    );
  }, [dataNew]);
  const handleChangeAll = () => {
    setStateAll(!stateAll);
    setDataNew(
      dataNew.map((item) => {
        return {
          ...item,
          checked: !stateAll
        };
      })
    );
  };
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
      <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Lựa chọn tiện ích đi kèm</DialogTitle>
      <DialogContent dividers>
        <div>
          <FormControl component="fieldset" className={ 'w-full' }>
            {/*<FormLabel component="legend">Chọn tất cả</FormLabel>*/}
            <FormGroup>
              <div className='grid grid-cols-4 gap-2 w-full'>{
                dataNew.map((item, index) => {
                  return (
                    <FormControlLabel key={ index }
                      control={ <Checkbox checked={ item.checked }
                        onChange={ e => handleChange(e) } id={ item.id.toString() }
                        color={ color }/> }
                      label={ item.value }
                    />
                  );
                })
              }
              <FormControlLabel control={ <Checkbox checked={ stateAll } onChange={ handleChangeAll } color={ color }/> }
                label={ 'Tất cả' }/>
              </div>
            </FormGroup>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={ handleCancel }>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogService.propTypes = {
  setOpenDialog: PropTypes.func,
  openDialog: PropTypes.bool,
  setListDate: PropTypes.func,
  listDate: PropTypes.array,
  indexs: PropTypes.number,
  dataItem: PropTypes.array,
  color: PropTypes.string
};
export default DialogService;