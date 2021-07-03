import React from 'react';

import {
  Twitter, Facebook,
  Instagram, Pinterest, MailOutline, Phone, LocationOn
} from '@material-ui/icons';


const Footer = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-4 bg-black py-16">
          <div className="pl-28">
            <img className="w-64 h-10" src="https://hanoioffice.vn/wp-content/uploads/2021/02/logo-black.png" />
            <div className="mx-6 my-3 text-gray-500">
              <p>Hanoi Office chuyên cung cấp các giải pháp cho thuê văn phòng</p>
              <p>chuyên nghiệp – hiện đại, phù hợp với mọi hoạt động kinh doanh</p>
              <p>của các doanh nghiệp. Đến với Hanoi Office, bạn sẽ được tận</p>
              <p>hưởng dịch vụ cho thuê hoàn hảo trong không gian sang trọng.</p>
            </div>
            <a className="mx-6 text-white"> Chi Tiết + </a>
          </div>
          <div className="pl-10 pr-10">
            <h3 className="text-white">LIÊN HỆ</h3>
            <div className="cursor-pointer my-3">
              <span><LocationOn className="text-white hover:text-blue-500" /></span>
              <a href="">
                <span className="text-base text-gray-500">Trụ Sở Chính:Tầng 8 tòa nhà Sanam,78 Duy Tân,Dịch Vọng Hậu,Cầu Giấy</span>
              </a>
            </div>
            <div className="cursor-pointer my-3">
              <span><Phone className="mb-1 mr-3 text-white hover:text-blue-500" /></span>
              <span className="text-base text-gray-500">085 339 4567 - 0904 388 909</span>
            </div>
            <div className="cursor-pointer my-3">
              <span><MailOutline className="mb-1 mr-3 text-white hover:text-blue-500" /></span>
              <span className="text-base text-gray-500">contact@hanoioffice.vn</span>
            </div>
            <a className="text-white" href="">Liên Hệ +</a>
          </div>
          <div>
            <h3 className="text-white">ĐĂNG KÝ TƯ VẤN DỊCH VỤ</h3>
            <div className="mt-3 mb-2">
              <input className="border px-1.5 py-1.5 mr-3 text-gray-500" placeholder="Địa chỉ Email"/>
              <input className="border px-1.5 py-1.5 text-gray-500" placeholder="Số điện thoại"/>
            </div>
            <button className="bg-blue-500 py-1.5 mb-10 text-white px-40" >ĐĂNG KÝ</button>
            <p className="text-gray-500 pb-2">Đồng hành cùng Hanoi Office tại:</p>
            <Twitter className="text-gray-500 hover:text-blue-500" />
            <Pinterest className="text-gray-500 hover:text-blue-500 mx-2" />
            <Facebook className="text-gray-500 hover:text-blue-500 mx-2" />
            <Instagram className="text-gray-500 hover:text-blue-500 mx-2" />
          </div>
        </div>
        <div className="bg-gray-800 text-center">
          <p className="text-gray-300 inline-block">Copyright © Hanoi Office 2020 All Rights Reserved</p>
          <a href="https://www.dmca.com/Protection/Status.aspx?ID=1a302d9c-3192-4542-8cf9-becb750d7274&refurl=https://hanoioffice.vn/">
            <img className="inline-block h-13" src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-02.png?ID=1a302d9c-3192-4542-8cf9-becb750d7274" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;