import React from 'react';

import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';

import DateSingle from '../../../../base/dateTime/DateSingle';
import ImageUpdate from '../../../../common/ImageUpdate';
import Sex from '../../../../common/Sex';
import TextFieldInput from '../../../../common/TextFieldInput';
import TextPassword from '../../../../common/TextPassword';

const DetailInfo = ({ form, setForm, isAdd = true }) => {
  const methods = useFormContext();
  const { formState: { errors }, control } = methods;
  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <div >
            <ImageUpdate />
          </div>
          <div className='col-span-2'>
            <h3 className="text-blue-500">Thông tin cá nhân</h3>
            <div className=" grid grid-cols-2 gap-4">
              <Controller
                name={ 'code_customer' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Mã khách hàng" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.code_customer?.type === 'required' ? 'Mã khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'fist_name' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Họ khách hàng" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.fist_name?.type === 'required' ? 'Họ khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'last_name' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Tên khách hàng" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.last_name?.type === 'required' ? 'Tên khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'user_customer' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Tài khoản" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.user_customer?.type === 'required' ? 'Tài khoản khách hàng không được bỏ trống!' : null } /> } />
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
                name={ 'phone_customer' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Số điện thoại" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.phone_customer?.type === 'required' ? 'Số điện thoại khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'email_customer' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Email" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.email_customer?.type === 'required' ? 'Email khách hàng không được bỏ trống!' : null } /> } />
              <div className="flex items-end w-full">
                <DateSingle title="Ngày tạo" classNameTitle="w-1/4"
                  onChange={ setForm }
                  value={ form } keySearch="date_created"
                />
              </div>
            </div>
            <div>
              <Controller
                name={ 'address_customer' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Quê quán" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.address_customer?.type === 'required' ? 'Quê quán khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'hktt_customer' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Hộ khẩu thường trú" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.hktt_customer?.type === 'required' ? 'HKTT khách không được bỏ trống!' : null } /> } />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-blue-500">Thông tin công ty</h4>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name={ 'name_company' }
                control={ control }
                rules={ {} }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Tên công ty" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ null } /> } />
              <Controller
                name={ 'address_company' }
                control={ control }
                rules={ {} }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Địa chỉ công ty" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ null } /> } />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Controller
                name={ 'code_company' }
                control={ control }
                rules={ {} }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Mã đăng ký công ty" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ null } /> } />

              <Controller
                name={ 'phone_company' }
                control={ control }
                rules={ {} }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Số điện thoại công ty" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ null } /> } />
              <Controller
                name={ 'mail_company' }
                control={ control }
                rules={ {} }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Email công ty" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ null } /> } />
            </div>
            <Controller
              name={ 'node' }
              control={ control }
              rules={ {} }
              render={ ({ field: { onChange, value } }) =>
                <TextFieldInput label="Ghi chú" className="w-full" multiline rows={ 3 } id="standard-multiline-static"
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
DetailInfo.propTypes = {
  setForm: PropTypes.func,
  form: PropTypes.object,
  isAdd: PropTypes.bool
};
export default DetailInfo;