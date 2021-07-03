import React from 'react';

import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';

import DateSingle from '../../../../base/dateTime/DateSingle';
import TextFieldInput from '../../../../common/TextFieldInput';
import UtilitiesList from '../Dialog/UtilitiesList';
const utilitiesList = [
  { id: '1', text: 'Phòng Họp' },
  { id: '2', text: 'Máy in' },
  { id: '3', text: 'Máy fex' },
  { id: '4', text: 'Bãi đỗ xe' },
  { id: '5', text: 'Bảo vệ 24/7' },
  { id: '6', text: 'Biển tên công ty' },
  { id: '7', text: 'Địa chỉ ĐKKD' },
  { id: '8', text: 'Chuyển hướng cuộc gọi' },
  { id: '9', text: 'Lễ tân chuyên nghiệp' },
  { id: '10', text: 'Internet tốc độ cao' },
  { id: '11', text: 'Máy Photocopy' },
  { id: '12', text: 'Nhận - Chuyển Thư' },
  { id: '13', text: 'Nhân Viên Đại Diện' },
  { id: '14', text: 'Pantry' },
  { id: '15', text: 'Phòng Khách' },
  { id: '15', text: 'Tổng Đài Viên' },
];
const DetailInfo = ({ setForm, form }) => {
  const methods = useFormContext();
  const { formState: { errors }, control } = methods;

  return (
    <>
      <div>
        <Controller
          name={ 'code_branch' }
          control={ control }
          rules={ { required: true } }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Mã chi nhánh" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ errors?.code_branch?.type === 'required' ? 'Mã chi nhánh không được bỏ trống!' : null } /> } />
        <Controller
          name={ 'name_branch' }
          control={ control }
          rules={ { required: true } }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Tên chi nhánh" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ errors?.name_branch?.type === 'required' ? 'Tên chi nhánh không được bỏ trống!' : null } /> } />
        <Controller
          name={ 'address_branch' }
          control={ control }
          rules={ { required: true } }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Địa chỉ" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ errors?.address_branch?.type === 'required' ? 'Địa chỉ chi nhánh không được bỏ trống!' : null } /> } />
        <div className="mt-4">
          <UtilitiesList dataArr={ utilitiesList } />
        </div>
        <Controller
          name={ 'number_employee' }
          control={ control }
          rules={ {} }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Số lượng nhân viên" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ null } /> } />
        <div className="pt-4 pb-2">
          <DateSingle title="Ngày tạo" classNameTitle="w-1/4"
            onChange={ setForm }
            value={ form } keySearch="date_created"
          />
        </div>
        <Controller
          name={ 'note' }
          control={ control }
          rules={ {} }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Ghi chú" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ null } /> } />
      </div>
    </>
  );
};
DetailInfo.propTypes = {
  setForm: PropTypes.func,
  form: PropTypes.object
};
export default DetailInfo;