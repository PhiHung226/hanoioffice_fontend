import React, {useRef, useState} from 'react';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import {useMutation} from 'react-query';
import {useRecoilValue} from 'recoil';

import {getYearMonthDay} from '../../../../helpers/helper';
import {getListBook} from '../../../../service/bookAnOffices/bookAnOffices';
import {orderBookFilterParams, orderBookFilterParamsContinuous} from '../../../../store/actom/orderBook/orderBook';


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

const BookOrder = ({openDialog, setOpenDialog, value, ...other}) => {
  const ref = useRef(null);
  const handleEntering = () => {
    if (ref.current != null) {
      ref.current.focus();
    }
  };
  
  const filterStateLT = useRecoilValue(orderBookFilterParams);
  const filterStateKLT = useRecoilValue(orderBookFilterParamsContinuous);
  
  const editMutationLT = useMutation(value => getListBook().orderBookLT(value));
  const editMutationKLT = useMutation(value => getListBook().orderBookKLT(value));
  const onChageClick = () => {
    if (value === 'lien_tuc') {
      const values = {
        idCustomer: '1',
        idRoom: filterStateLT.idRoom.toString(),
        startDate: filterStateLT.startDate,
        endDate: filterStateLT.endDate,
        listIdServiceSelected: filterStateLT.listService.filter(i => i.checked).map(j => j.id.toString()),
        listIdScheduleDetail: filterStateLT.listTime.filter(i => i.checked).map(j => j.id.toString())
      };
      editMutationLT.mutate(values, {
        onSuccess: async (e) => {
          console.log(e);
          await setOpenDialog(false);
        },
        onError: async () => {
          await setOpenDialog(true);
        }
      });
    } else if (value === 'ngat_quang') {
      const values = {
        idCustomer: '1',
        idRoom: filterStateKLT.idRoom.toString(),
        schedules: filterStateKLT.schdules.length > 0 ? filterStateKLT.schdules.map(item => {
          return {
            startDate: getYearMonthDay(item.startDate),
            listService: item.listService.length > 0 ? item.listService.filter(i => i.checked).map(j => j.id.toString()) : [],
            listShift: item.listShift.length > 0 ? (item.listShift.filter(k => k.checked).length === item.listShift.length ?
              [filterStateKLT.idAll] : item.listShift.filter(h => h.checked).map(t => t.id.toString())) : []
          };
        }) : []
      };
      console.log(values);
      editMutationKLT.mutate(values, {
        onSuccess: async (e) => {
          console.log(e);
          await setOpenDialog(false);
        },
        onError: async (e) => {
          console.log(e);
          await setOpenDialog(true);
        }
      });
    }
    
  };
  
  
  const handleCancel = () => {
    setOpenDialog(!openDialog);
  };
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Dialog
        scroll={ 'paper' }
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth={ true }
        maxWidth={ 'sm' }
        onEntering={ handleEntering }
        aria-labelledby="confirmation-dialog-title"
        open={ openDialog }
        { ...other }
        height={ '400px' }
      >
        <DialogTitle id="confirmation-dialog-title" onClose={ handleCancel }>Điều khoản và quy định</DialogTitle>
        <DialogContent dividers>
          <div>
            <FormControl component="fieldset" className={ 'w-full' }>
              {/*<FormLabel component="legend">Chọn tất cả</FormLabel>*/}
              <FormGroup>
                <div className='w-full'>
                  <h3 className='text-center font-bold'>Điều khoản yêu cầu</h3>
                  <p className='text-justify mb-4'>
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                  </p>
                </div>
                <div className='w-full'>
                  <h3 className='text-center font-bold'>Quy định chấp hành</h3>
                  <p className='text-justify mb-4'>
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                    Xây dựng nền móng cho doanh nghiệp của bạn trong một nền kinh tế đang mở rộng và dịch chuyển nhanh
                    với không gian văn phòng sẵn sàng sử dụng của chúng tôi tại Hà Nội. Tùy chỉnh cách bố trí để phù hợp
                    với giao diện của thương hiệu và mở rộng hoặc thu nhỏ không gian dễ dàng khi doanh nghiệp của bạn
                    phát triển. Nhân viên tiếp tân của chúng tôi sẽ chào đón các vị khách của bạn một cách chuyên
                    nghiệp. Và tận hưởng đồ nội thất tiện dụng chất lượng cao cũng như thư giãn trong khu vực bếp và
                    tiền sảnh riêng của chúng tôi.
                  </p>
                </div>
              </FormGroup>
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions>
          <FormControlLabel
            control={ <Checkbox
              checked={ checked }
              onChange={ () => setChecked(!checked) }
              name="checkedB"
              color="primary"
            /> }
            label="Tôi đồng ý với các điều khoản bên trên!"
          />
          <Button color="primary" variant="contained" onClick={ onChageClick } disabled={ !checked }>
            Xác nhận
          </Button>
          <Button color="secondary" variant="contained" onClick={ handleCancel }>
            Quay lại
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
BookOrder.propTypes = {
  setOpenDialog: PropTypes.func,
  openDialog: PropTypes.bool,
  value: PropTypes.string
};
export default BookOrder;