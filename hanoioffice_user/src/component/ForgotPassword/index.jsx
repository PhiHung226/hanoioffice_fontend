import React from 'react';

const ForgotPassword = () => {
  return (
    <>
      <div className="border border-black w-3/12 mx-auto mt-2 ">
        <h1 className="pl-3 py-2">Tìm tài khoản của bạn ?</h1>
        <div className="border-b border-black"></div>
        <div className="pt-6 mx-3">
          <div className="pl-2 pr-4">
            <p className="text-lg">Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản!</p>
          </div>
          <div className="pt-2">
            <input  className="border rounded-lg border-black pl-2 py-2 w-full" type="text" placeholder="Email hoặc số điện thoại" />
          </div>
          <div className="pt-16 text-right pb-2">
            <input  className="border rounded-lg border-black px-6 py-2 font-bold hover:bg-red-500" type="submit" value="Hủy" />
            <input  className="border rounded-lg border-black px-6 py-2 font-bold ml-2 hover:bg-blue-500" type="submit" value="Tìm kiếm" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgotPassword;