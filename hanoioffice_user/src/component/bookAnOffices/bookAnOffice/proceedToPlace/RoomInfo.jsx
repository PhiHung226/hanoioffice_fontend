import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';

import DateSingle from '../../../base/dateTime/DateSingle';
import UseDate from './useDate';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const listUtilities = [
  { id: 1, text: 'Máy in', status: false, name: 'mayin' },
  { id: 2, text: 'Máy fax', status: false, name: 'mayfax' },
  { id: 3, text: 'Máy chiếu', status: false, name: 'maychieu' },
  { id: 4, text: 'Lễ tân', status: false, name: 'letan' },
  { id: 5, text: 'Bảo vệ 24/7', status: false, name: 'baove24/7' },
  { id: 6, text: 'Chỗ đỗ xe', status: false, name: 'chodoxe' },
  { id: 7, text: 'Luật sử riêng', status: false, name: 'luatsurieng' },
];
const RoomInfo = () => {
  const classes = useStyles();

  const [ state, setState ] = React.useState(listUtilities);
  const [ form, setForm ] = React.useState({});
  const handleChange = (event) => {
    setState(state.map((item) => {
      return {
        ...item,
        status: event.target.name !== item.name ? !event.target.checked : event.target.checked
      };
    }));
  };
  return (
    <>
      <div className="w-full">
        <div className="border-2 mx-48">
          <h1 className='text-center font-bold text-xl text-blue-800'>Thông tin chi tiết phòng phòng</h1>
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <div className="row-span-2 border-2 bg-gray-100 px-4 py-2">
                <h3 className="text-blue-800 font-bold">Thông tin phòng đặt</h3>
                <p>Địa điểm: <span className="font-semibold">Lê Văn Lương - Thanh Xuân - Hà Nội</span></p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p >Loại phòng:<span className="font-semibold"> Phòng họp</span></p>
                    <p>Tên phòng: <span className="font-semibold">Phòng 304</span></p>
                  </div>
                  <div>
                    <p>Số ghế tối đa: <span className="font-semibold">10 ghế</span></p>
                  </div>
                </div>
                <p className='pt-3 font-bold pl-10 pb-1'>Các tiện ích lựa chọn</p>
                <div className={ classes.root + ' border-2 bg-white' }>
                  <FormControl component="fieldset" className={ classes.formControl }>
                    <FormGroup row>
                      {
                        state.map((item, index) => {
                          return (
                            <FormControlLabel key={ index }
                              control={ <Checkbox checked={ item.status } onChange={ handleChange } name={ item.name } color="primary" /> }
                              label={ item.text }
                            />
                          );
                        })
                      }
                    </FormGroup>
                  </FormControl>
                </div>
              </div>
              <div className="border-2 bg-gray-100 px-4 py-2">
                <h3 className="text-blue-800 font-bold">Chọn thời gian sử dụng</h3>
                <p className={ 'font-medium' }>Số buổi sử dụng: 10</p>
                <div className="flex items-end pb-3 w-full">
                  <DateSingle title="Ngày bắt đầu sử dụng" classNameTitle="w-1/3"  keySearch="start_day" onChange={ setForm } value={ form }/>
                </div>
                <UseDate />
              </div>
            </div>
            <div className="border-2 bg-gray-100">
              <h3 className='text-center text-blue-800 font-bold'>Giá thành thanh toán</h3>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoomInfo;