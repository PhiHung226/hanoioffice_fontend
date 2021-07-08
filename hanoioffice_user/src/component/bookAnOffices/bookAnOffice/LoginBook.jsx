import React from 'react';

import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

import TextFieldInput from '../../common/TextFieldInput';
import TextPassword from '../../common/TextPassword';
const LoginBook = () => {

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
      <div className="flex justify-center gap-16 mt-10">
        <div className="w-1/4 mt-20">
          <form >
            <h4 className="text-center font-bold text-xl">Đăng nhập</h4>
            <div>
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
                    error={ errors?.user_customer?.type === 'required' ? 'Tài khoản đăng nhập không được bỏ trống!' : null } /> } />
              <Controller
                name={ 'pass_customer' }
                control={ control }
                rules={ { required: true } }
                render={ ({ field: { onChange, value } }) =>
                  <TextPassword className="w-full" multiline rows={ 3 } id="standard-multiline-static"
                    onChange={ e => {
                      onChange(e.target.value);
                    } }
                    value={ value }
                    error={ errors?.pass_customer?.type === 'required' ? 'Mật khẩu không được bỏ trống!' : null } /> } />
              <div className="flex justify-between">
                <p className="hover:text-blue-700 cursor-pointer">Quên mật khẩu?</p>
                <p className="hover:text-blue-700 cursor-pointer">Đăng ký</p>
              </div>
            </div>
            <div className="mt-4">
              <Button color="primary" variant="contained" onClick={ () => methods.handleSubmit(onSubmitForm)() }>
                Đăng nhập
              </Button>
            </div>
          </form>
        </div>
        <div className="w-1/3">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/09/cho-ngoi-lam-viec-n1.jpg" alt="Hà Nội Office" align="center" />
        </div>
      </div>
    </>
  );
};
export default LoginBook;