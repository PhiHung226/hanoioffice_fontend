import React from 'react';

// import DayPicker from 'react-day-picker';
// import Button from '@material-ui/core/Button';
import 'react-day-picker/lib/style.css';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';

// import IconCamera from '../../../../../assets/image/iconCamera.png';
import DateSingle from '../../../../base/dateTime/DateSingle';
import ImageUpdate from '../../../../common/ImageUpdate';
import SelectedInput from '../../../../common/SelectedInput';
import Sex from '../../../../common/Sex';
import TextFieldInput from '../../../../common/TextFieldInput';
import TextPassword from '../../../../common/TextPassword';


const positionList = [
  { id: '1', text: 'Admin' },
  { id: '2', text: 'Quản lý' },
  { id: '3', text: 'Lễ tân' },
  { id: '4', text: 'Sale' }
];
const branchList = [
  { id: '1', text: 'Chi nhánh Thanh Xuân' },
  { id: '2', text: 'Chi nhánh Nam Từ Liêm' },
  { id: '3', text: 'Chi nhánh Hà Đông' },
  { id: '4', text: 'Chinh nhánh Đống Đa' }
];
const DialogAddInfo = ({ setForm, form, isAdd }) => {

  const methods = useFormContext();
  const { formState: { errors }, control } = methods;


  return (
    <>
      <div style={ { height: '600px' } }>
        <div>
          <h4 className='text-base text-blue-700'>Thông tin cá nhân</h4>
          <div className='grid grid-cols-3'>
            <div>
              <ImageUpdate />
            </div>
            <div className="col-span-2 grid grid-cols-1 gap-2">
              <div className="grid grid-cols-2 gap-x-8 w-full">
                <Controller
                  name={ 'fist_name' }
                  control={ control }
                  rules={ { required: true } }
                  render={ ({ field: { onChange, value } }) =>
                    <TextFieldInput label="Họ nhân viên" className="w-full"
                      onChange={ e => {
                        onChange(e.target.value);
                      } }
                      value={ value }
                      error={ errors?.fist_name?.type === 'required' ? 'Họ nhân viên không được bỏ trống!' : null } /> } />
                <Controller
                  name={ 'last_name' }
                  control={ control }
                  rules={ { required: true } }
                  render={ ({ field: { onChange, value } }) =>
                    <TextFieldInput label="Tên nhân viên" className="w-full"
                      onChange={ e => {
                        onChange(e.target.value);
                      } }
                      value={ value }
                      error={ errors?.last_name?.type === 'required' ? 'Tên nhân viên không được bỏ trống!' : null } /> } />
                <div className="mt-3">
                  <Controller
                    name={ 'sex' }
                    control={ control }
                    rules={ {} }
                    render={ ({ field: { onChange, value } }) =>
                      <Sex
                        onChange={ e => {
                          onChange(e.target.value);
                        } }
                        value={ value } /> } />
                </div>
                <div className="flex items-end w-full">
                  <DateSingle title="Ngày sinh" classNameTitle="w-1/4"
                    onChange={ setForm }
                    value={ form } keySearch="birthday"
                  />
                </div>
                <Controller
                  name={ 'phone' }
                  control={ control }
                  rules={ { required: true } }
                  render={ ({ field: { onChange, value } }) =>
                    <TextFieldInput label="Số điện thoại" className="w-full"
                      onChange={ e => {
                        onChange(e.target.value);
                      } }
                      value={ value }
                      error={ errors?.phone?.type === 'required' ? 'Số điện thoại nhân viên không được bỏ trống!' : null } /> } />
                <Controller
                  name={ 'email' }
                  control={ control }
                  rules={ { required: true } }
                  render={ ({ field: { onChange, value } }) =>
                    <TextFieldInput label="Email" className="w-full"
                      onChange={ e => {
                        onChange(e.target.value);
                      } }
                      value={ value }
                      error={ errors?.email?.type === 'required' ? 'Email nhân viên không được bỏ trống!' : null } /> } />
              </div>
              <div className="w-full">
                <Controller
                  name={ 'address' }
                  control={ control }
                  rules={ { required: true } }
                  render={ ({ field: { onChange, value } }) =>
                    <TextFieldInput label="Quê quán" className="w-full"
                      onChange={ e => {
                        onChange(e.target.value);
                      } }
                      value={ value }
                      error={ errors?.address?.type === 'required' ? 'Quê quán nhân viên không được bỏ trống!' : null } /> } />
              </div>
              <div className="w-full">
                <Controller
                  name={ 'hktt' }
                  control={ control }
                  rules={ { required: true } }
                  render={ ({ field: { onChange, value } }) =>
                    <TextFieldInput label="Hộ khẩu thường trú" className="w-full"
                      onChange={ e => {
                        onChange(e.target.value);
                      } }
                      value={ value }
                      error={ errors?.hktt?.type === 'required' ? 'HKTt nhân viên không được bỏ trống!' : null } /> } />
              </div>
              {/* <div className="w-full">
                <Controller
                  name={ 'note_personal' }
                  control={ control }
                  rules={ {} }
                  render={ ({ field: { onChange, value } }) =>
                    <TextFieldInput label="Ghi chú cá nhân" className="w-full" multiline rows={ 3 } id="standard-multiline-static"
                      onChange={ e => {
                        onChange(e.target.value);
                      } }
                      value={ value }
                      error={ null } /> } />
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <p className='text-base text-blue-700 mt-6'>Thông tin làm việc</p>
          <div className="grid grid-cols-3 gap-x-8">
            <Controller
              name={ 'code_employee' }
              control={ control }
              rules={ { required: true } }
              render={ ({ field: { onChange, value } }) =>
                <TextFieldInput label="Mã nhân viên tự động" className="w-full"
                  onChange={ e => {
                    onChange(e.target.value);
                  } }
                  value={ value }
                  error={ errors?.code_employee?.type === 'required' ? 'Mã nhân viên không được bỏ trống!' : null } /> } />
            <Controller
              name={ 'position' }
              control={ control }
              rules={ {} }
              render={ ({ field: { onChange, value } }) =>
                <SelectedInput
                  dataArr={ positionList }
                  title='Chức vụ'
                  value={ value }
                  onChange={ e => {
                    onChange(e.target.value);
                  } }
                /> }
            />
            <Controller
              name={ 'branch' }
              control={ control }
              rules={ {} }
              render={ ({ field: { onChange, value } }) =>
                <SelectedInput
                  dataArr={ branchList }
                  title='Chi nhánh'
                  value={ value }
                  onChange={ e => {
                    onChange(e.target.value);
                  } }
                /> }
            />
            <div className="flex items-end pb-3 w-full">
              <DateSingle title="Thời gian vào" classNameTitle="w-1/3" onChange={ setForm } value={ form } keySearch="start_day" />
            </div>
            <Controller
              name={ 'user_employee' }
              control={ control }
              rules={ { required: true } }
              render={ ({ field: { onChange, value } }) =>
                <TextFieldInput label="Tên tài khoản" className="w-full"
                  onChange={ e => {
                    onChange(e.target.value);
                  } }
                  value={ value }
                  error={ errors?.user_employee?.type === 'required' ? 'Tài khoản nhân viên không được bỏ trống!' : null } /> } />
            {
              isAdd &&
              <Controller
                name={ 'pass_employee' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextPassword className="w-full" multiline rows={ 3 } id="standard-multiline-static"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.pass_employee?.type === 'required' ? 'Mật khẩu không được bỏ trống!' : null } /> } />
            }
          </div>
          <div>
            <Controller
              name={ 'node_work' }
              control={ control }
              rules={ {} }
              render={ ({ field: { onChange, value } }) =>
                <TextFieldInput label="Ghi chú công việc" className="w-full" multiline rows={ 3 } id="standard-multiline-static"
                  onChange={ e => {
                    onChange(e.target.value);
                  } }
                  value={ value }
                  error={ null } /> } />
          </div>
        </div>
      </div>
    </>
  );
};
DialogAddInfo.propTypes = {
  form: PropTypes.object,
  setForm: PropTypes.func,
  isAdd: PropTypes.bool
};
export default DialogAddInfo;