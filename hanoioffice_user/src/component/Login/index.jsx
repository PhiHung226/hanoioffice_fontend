import React from 'react';

import {NavLink} from 'react-router-dom';

const  Login = () => {
  return (
    <>
      <div className="border border-black rounded-3xl w-3/12 mx-auto mt-2">
        <div className="text-center">
          <input className="pl-2 py-2 text-black border rounded-lg w-5/6  mx-4 mt-8 border-black" type="text" placeholder="Email hoặc số điện thoại" />
          <input className="pl-2 py-2 text-black border rounded-lg w-5/6  mx-4 mt-6 border-black" type="password" placeholder="Mật khẩu" />
          <input className="pl-2 py-2 text-black border rounded-lg w-5/6  mx-4 mt-6 border-black font-bold bg-white hover:bg-blue-500" type="submit" value="Đăng nhập" />
        </div>
        <NavLink to="/forgotpassword" className="text-xs block text-center py-2">Quên mật khẩu ?</NavLink>
        <div className="border-b-2 border-black mx-6"></div>
        <div className="text-center pt-4 pb-4">
          <NavLink to="/register" className="px-12 py-2 text-black border rounded-lg mx-4 mt-6 border-black font-bold bg-white hover:bg-blue-500" >Tạo tài khoản</NavLink>
        </div>
      </div>
    </>
  );
};
export default Login;