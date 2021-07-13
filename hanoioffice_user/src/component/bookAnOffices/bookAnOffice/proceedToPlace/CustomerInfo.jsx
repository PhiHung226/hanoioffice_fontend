import React from 'react';

import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

import TextFieldInput from '../../../common/TextFieldInput';

const CustomerInfo = () => {

  const defaultValues = {
    user_customer: '',
    pass_customer: ''
  };
  const methods = useForm({ defaultValues });
  const { formState: { errors }, control } = methods;

  const onSubmitForm = (value) => {
    console.log(value);

  };

  return (
    <>
      <div className="w-full">
        <div className="border-2 mx-48">
          <h1 className="text-center pt-8 pb-4 text-xl font-bold text-blue-800">Kiểm tra thông tin khách hàng</h1>
          <form action="">
            <h3 className='font-bold px-6 text-blue-800'>Thông tin cá nhân</h3>
            <div className="mx-10 grid grid-cols-3 gap-4">
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
                    error={ errors?.user_customer?.type === 'required' ? 'Mã khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'fist_name' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Họ" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.user_customer?.type === 'required' ? 'Họ khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'last_name' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Tên" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.user_customer?.type === 'required' ? 'Tên khách hàng không được bỏ trống!' : null } /> } />

            </div>
            <div className="mx-10">
              <Controller
                name={ 'address' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Địa chỉ" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.user_customer?.type === 'required' ? 'Địa chỉ khách hàng không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'HKTT' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextFieldInput label="Hộ khẩu thường trú" className="w-full"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.user_customer?.type === 'required' ? 'Hộ khẩu thường trú khách hàng không được bỏ trống!' : null } /> } />
            </div>
            <div className="mx-10 grid grid-cols-3 gap-4">
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
                    error={ errors?.user_customer?.type === 'required' ? 'Email khách hàng không được bỏ trống!' : null } /> } />
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
                    error={ errors?.user_customer?.type === 'required' ? 'Số điện thoại khách hàng không được bỏ trống!' : null } /> } />
            </div>
            <h3 className='font-bold mx-6 mt-4 text-blue-800'>Thông tin công ty</h3>
            <div className="mx-10 grid grid-cols-3 gap-4">
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
            </div>
            <div className="mt-4 flex justify-end p-10">
              <Button color="primary" variant="contained" onClick={ () => methods.handleSubmit(onSubmitForm)() }>
                Cập nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CustomerInfo;