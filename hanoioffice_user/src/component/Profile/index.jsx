import React from 'react';

import {NavLink} from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <div className="border border-black w-4/12 mx-auto mt-2">
        <h1 className="pl-2 font-bold text-center text-xl pt-4">Thông tin cá nhân</h1>
        <div className="pt-2 grid grid-cols-3 gap-8 pl-10 pr-8">
          <div className="pt-20">
            <label className="inline-block pr-4 text-sm" htmlFor="">Họ </label>
            <input className="pl-2 py-2 rounded-lg border border-black w-28" type="text" />
          </div>
          <div className="pt-20">
            <label className="inline-block pr-4 text-sm" htmlFor="">Tên </label>
            <input className="pl-2 py-2 rounded-lg border border-black w-28" type="text" />
          </div>
          <div>
            <img className="w-40 h-40" src="https://dulichso.vn/wp-content/uploads/2021/01/xp-hng-3-tim-chp-nh-th-ly-ngay-p-nht-h-giang-nm-2021-0112.jpg" alt="" />
          </div>
        </div>
        <div className="pt-2 grid grid-cols-10">
          <div className="col-span-3">
            <label className="inline-block pr-2 pl-3 text-sm" htmlFor="">Giới tính</label>
            <select className="bg-white py-2 border border-black rounded-lg px-1" name="" id="">
              <option value="Nam">NAM</option>
              <option value="Nữ">NỮ</option>
            </select>
          </div>
          <div className="col-span-4">
            <label className="inline-block pr-2 text-sm" htmlFor="">Ngày sinh </label>
            <input className="pl-2 py-2 rounded-lg border border-black w-40" type="date" />
          </div>
          <div className="col-span-3">
            <label className="inline-block pr-2 text-sm" htmlFor="">Số ĐT </label>
            <input className="pl-2 py-2 rounded-lg border border-black w-28" type="text" />
          </div>
        </div>
        <div className="pt-3 pl-4">
          <label className="text-sm pr-6" htmlFor="">Email</label>
          <input className="border border-black rounded-lg py-2 w-5/6 pl-2" type="email" />
        </div>
        <div className="pt-4 pl-3 mr-2">
          <label className="text-sm pr-6" htmlFor="">Địa chỉ</label>
          <input className="border border-black rounded-lg py-2 w-5/6 pl-2" type="text" />
        </div>
        <div className="pt-16 text-right pb-24 pr-8">
          <NavLink className="border border-black rounded-lg py-2 px-2 mr-2" to="/changepassword" >Đổi mật khẩu</NavLink>
          <input className="border border-black rounded-lg py-1 px-2" type="submit" value="Cập nhật" />
        </div>
      </div>
    </>
  );
};
export default Profile;