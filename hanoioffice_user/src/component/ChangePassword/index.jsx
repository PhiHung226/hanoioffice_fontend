import React from 'react';

const ChangePasswod = () => {
  return (
    <>
      <div className="border border-black w-4/12 mx-auto mt-2 ">
        <h1 className="pl-2">Đổi mật khẩu</h1>
        <div className="border-b border-gray-300"></div>
        <div className="pt-8 px-8">
          <div className="px-12 mx-2">
            <p className="text-sm text-center bg-gray-100">Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu khác</p>
          </div>
          <div className="pt-6 text-center">
            <input className="border border-black rounded-lg px-2 py-3 w-9/12" type="password" placeholder="Mật khẩu cũ" />
          </div>
          <div className="pt-6 text-center">
            <input className="border border-black rounded-lg px-2 py-3 w-9/12" type="password" placeholder="Mật khẩu mới" />
          </div>
          <div className="pt-6 text-center">
            <input className="border border-black rounded-lg px-2 py-3 w-9/12" type="password" placeholder="Nhập lại mật khẩu mới" />
          </div>
          <div className="pt-6 pb-6 text-center">
            <input className="border border-black rounded-lg px-2 py-3 font-bold hover:bg-blue-500" type="submit" value="Lưu thay đổi" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePasswod;