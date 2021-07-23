import React from 'react';

const  Register = () => {
  return (
    <>
      <div className="border border-black w-4/12 mx-auto mt-2 ">
        <h1 className="pl-2">Đăng ký</h1>
        <div className="border-b border-gray-300"></div>
        <div className="pr-12">
          <div className="grid grid-cols-2 pt-8 gap-4 pl-8">
            <div>
              <input  className="border rounded-lg border-black pl-2 py-2 w-64" type="text" placeholder="Email or Phone Number" />
            </div>
            <div>
              <input className="border rounded-lg border-black pl-2 py-2 w-64"   type="password" placeholder="New Password" />
            </div>
          </div>
          <div className="grid grid-cols-2 pt-8 gap-4 pl-8">
            <div>
              <input  className="border rounded-lg border-black pl-2 py-2 w-64" type="text" placeholder="Họ" />
            </div>
            <div>
              <input className="border rounded-lg border-black pl-2 py-2 w-64"   type="text" placeholder="Tên" />
            </div>
          </div>
          <div className="grid grid-cols-2 pt-8 gap-4 pl-8">
            <div className="mx-12 pt-2">
              <input  className="border rounded-lg border-black bg-gray-300" id="gioitinhnam" name="gioitinh" value="Nam" type="radio" /> Nam
              <input  className="border rounded-lg border-black bg-gray-300 ml-12" id="gioitinhnu" name="gioitinh" value="Nữ" type="radio" /> Nữ
            </div>
            <div>
              <input className="border rounded-lg border-black pl-2 py-2 w-64"  type="date"  />
            </div>
          </div>
          <div className="pl-8 pt-6">
            <input className="border rounded-lg border-black pl-2 py-2 w-full"  type="text" placeholder="Địa chỉ" />
          </div>
          <div className="pl-8 pt-3 text-xs text-justify">
            <span>Bằng cách nhấp vào Đăng ký, bạn đồng ý với </span>
            <span className="underline text-blue-500">Điều khoản, Chính sách dữ liệu, </span>
            <span>và </span>
            <span className="underline text-blue-500">Chính sách cookie </span>
            <span>của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.</span>
          </div>
          <div className="text-center pt-2 pb-2">
            <input className="border rounded-lg border-black px-6 py-2 font-bold hover:bg-blue-500"  type="submit" value="Đăng ký" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;