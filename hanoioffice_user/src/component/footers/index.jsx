import React from 'react';

import Button from '@material-ui/core/Button';
import {
  AddLocation, Phone, Email, Twitter,
  Pinterest, Facebook, Instagram, YouTube
} from '@material-ui/icons';
import { useForm, Controller } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import TextFieldInput from '../common/TextFieldInput';

const Footer = () => {
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
      <div className="mt-8">
        <div className="bg-black text-white py-28">
          <div className="grid grid-cols-5 gap-8">
            <div></div>
            <div className="gap-4">
              <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/logo_white.png" alt="Hà Nội Office" style={ { height: '18%' } } />
              <p className="text-sm text-gray-400 py-4 text-justify ">
                Hanoi Office chuyên cung cấp các giải pháp cho thuê văn phòng chuyên nghiệp – hiện đại,
                 phù hợp với mọi hoạt động kinh doanh của các doanh nghiệp. Đến với Hanoi Office,
                  bạn sẽ được tận hưởng dịch vụ cho thuê hoàn hảo trong không gian sang trọng.</p>
              <NavLink to={ '/gioi-thieu' } >
                <span className="text-sm text-gray-200 hover:text-blue-700 cursor-pointer">{ 'Chi tiết >' }</span>
              </NavLink>
            </div>
            <div>
              <h3>Liên hệ</h3>
              <div className="text-sm text-gray-400 pt-8 text-justify">
                <AddLocation fontSize="small" />
                <span>Trụ sở chính: Tầng 8 tòa nhà Sannam, 78 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</span>
              </div>
              <div className="text-sm text-gray-400 pt-3 text-justify">
                < Phone fontSize='small' />
                <span>Gọi Ngay (+84) 853 39 4567</span>
              </div>
              <div className="text-sm text-gray-400 pt-3 pb-4 text-justify">
                <Email fontSize='small' />
                <span>contact@hanoioffice.vn</span>
              </div>
              <NavLink to={ '/lien-he ' } >
                <span className="text-sm text-gray-200 hover:text-blue-700 cursor-pointer">{ 'Liên hệ >' }</span>
              </NavLink>
            </div>
            <div>
              <form >
                <h2>ĐĂNG KÝ THANH VIÊN</h2>
                <div className="flex gap-4">
                  <Controller
                    name={ 'email' }
                    control={ control }
                    rules={ { required: true } }
                    render={ ({ field: { onChange, value } }) =>
                      <TextFieldInput label="Email" className="w-full bg-white"
                        onChange={ e => {
                          onChange(e.target.value);
                        } }
                        value={ value }
                        error={ errors?.email?.type === 'required' ? 'Địa chỉ email không được bỏ trống!' : null } /> } />
                  <Controller
                    name={ 'phone' }
                    control={ control }
                    rules={ { required: true } }
                    render={ ({ field: { onChange, value } }) =>
                      <TextFieldInput label="Số điện thoại" className="w-full bg-white"
                        onChange={ e => {
                          onChange(e.target.value);
                        } }
                        value={ value }
                        error={ errors?.phone?.type === 'required' ? 'Số điện thoại không được bỏ trống!' : null } /> } />
                </div>
                <div className="mt-4">
                  <Button color="primary" variant="contained" onClick={ () => methods.handleSubmit(onSubmitForm)() } className="w-full">
                    Đăng ký
                  </Button>
                </div>
                <div className="mt-12">
                  <p className="">Đồng hành cùng Hanoi Office tại:</p>
                  <div className="pt-1">
                    <YouTube className="text-gray-500 hover:text-blue-500 mx-1" fontSize='small' />
                    <Twitter className="text-gray-500 hover:text-blue-500 mx-1" fontSize='small' />
                    <Pinterest className="text-gray-500 hover:text-blue-500 mx-1" fontSize='small' />
                    <Facebook className="text-gray-500 hover:text-blue-500 mx-1" fontSize='small' />
                    <Instagram className="text-gray-500 hover:text-blue-500 mx-1" fontSize='small' />
                  </div>
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-gray-900 text-white">
          <p className="text-center py-4">Copyright © Hanoi Office 2020 All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};
export default Footer;