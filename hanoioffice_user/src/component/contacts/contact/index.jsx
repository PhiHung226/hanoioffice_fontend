import React from 'react';

import {EmailOutlined, PhoneOutlined, PrintOutlined} from '@material-ui/icons';

const Contact = () => {
  return (
    <>
      <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3724.302500323029!2d105.77097599345107!3d21.02057888722425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1626539506938!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
      <div className="grid grid-cols-2 mx-96 gap-6 pt-16">
        <div>
          <h2 className="font-bold text-3xl">CÔNG TY CỔ PHẦN INC VIỆT NAM</h2>
          <span className="pt-3">Hanoi Office - Giải pháp cho thuê văn phòng hiện đại và chuyên nghiệp.</span>
          <div className="pt-8">
            <span className="font-bold">Trụ sở chính: </span>
            <span>Tầng 8, tòa nhà Sannam, 78 phố Duy Tân, quận Cầu Giấy, thành phố Hà Nội</span>
          </div>
          <div className="pt-2">
            <span className="font-bold">Điện thoại: </span>
            <span>(84) 24 3795 9900</span>
          </div>
          <div className="pt-2">
            <span className="font-bold">Email: </span>
            <span>contact@hanoioffice.vn</span>
          </div>
          <div className="pt-2">
            <span className="font-bold">Website: </span>
            <span>hanoioffice.vn</span>
          </div>
          <div className="border-b border-gray-300 pt-8"></div>
          <div className="pt-6">
            <h2 className="font-bold text-3xl">TƯ VẤN & CHĂM SÓC KHÁCH HÀNG</h2>
            <div className="pt-6">
              <h3 className="font-bold text-2xl">Hotline 01:</h3>
              <div>
                <PrintOutlined  className="pr-3" />
                <span>Fax: +(84) 24 3795 9911</span>
              </div>
              <div>
                <PhoneOutlined  className="pr-3" />
                <span>Tel: +(84) 85 339 4567</span>
              </div>
              <div>
                <EmailOutlined  className="pr-3" />
                <span>Email: contact@hanoioffice.vn</span>
              </div> 
            </div>
            <div className="border-b border-gray-300 pt-3"></div>
            <div className="pt-6">
              <h3 className="font-bold text-2xl">Hotline 02:</h3>
              <div>
                <PhoneOutlined  className="pr-3" />
                <span>Tel: +(84) 904 388 909</span>
              </div>
              <div>
                <PrintOutlined  className="pr-3" />
                <span>Fax: +(84) 24 3795 9911</span>
              </div>
              <div>
                <EmailOutlined  className="pr-3" />
                <span>Email: contact@hanoioffice.vn</span>
              </div>
            </div>
            <div className="pt-10">
              <h4>Đừng quên theo dõi Hanoi Office tại:</h4>
              <div>
                <span className="font-bold">Facebook: </span>
                <a href="https://www.facebook.com/hanoioffice.vn" className="text-blue-500 font-bold">Hanoi Office </a>
                <span>hoặc </span>
                <a href="https://www.facebook.com/coworkingspaceHanoiOffice" className="text-blue-500 font-bold" >Coworking Space – Hanoi Office</a>
              </div>
              <div>
                <span className="font-bold">Twitter: </span>
                <a href="https://twitter.com/office_hanoi" className="text-blue-500 font-bold">Hanoi Office</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl">HỆ THỐNG CƠ SỞ HANOI OFFICE</h2>
          <div className="pt-6">
            <span>1. Quận Thanh Xuân: </span>
            <a className="text-blue-500" href="https://www.google.com/maps/place/Hanoi+Office/@21.0077001,105.8045824,14z/data=!4m8!1m2!2m1!1zSGFub2kgT2ZmaWNlIDIxIGzDqiB2xINuIGzGsMahbmc!3m4!1s0x3135ad90bdc697ef:0xaa9308cc6fc91083!8m2!3d21.0080607!4d105.8080925?hl=vi-VN" >Golden Palm, 21 Lê Văn Lương</a>
          </div>
          <div className="pt-2">
            <span>2. Quận Thanh Xuân: </span>
            <a className="text-blue-500" href="https://goo.gl/maps/o8WdBamt5qzvcqpx6">ZenTower, 12 Khuất Duy Tiến</a>
          </div>
          <div className="pt-2">
            <span>3. Quận Ba Đình: </span>
            <a className="text-blue-500" href="https://goo.gl/maps/V62k6M78Gdx5KFXj7" >VMQBuilding, 87 Nguyễn Thái Học</a>
          </div>
          <div className="pt-2">
            <span>4. Quận Cầu Giấy: </span>
            <a className="text-blue-500" href="https://g.page/vanphonggiarehanoi?share">Sannam Building, 78 Duy Tân</a>
          </div>
          <div className="pt-2">
            <span>5. Quận Hà Đông: </span>
            <a className="text-blue-500" href="https://g.page/vanphongchiasehanoi?share">HUD3 Tower, 121-123 Tô Hiệu</a>
          </div>
          <div className="pt-2">
            <span>6. Quận Hà Đông:  </span>
            <a className="text-blue-500" href="https://www.google.com/maps/place/Hanoi+Office+-+Coworking+Space/@20.9801197,105.786177,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ad9961d30fff:0xeb8de064953bc89!8m2!3d20.9801197!4d105.7883657?hl=vi-VN">Tòa nhà Sông Đà, 131 Trần Phú</a>
          </div>
          <div className="pt-2">
            <span>7. Quận Nam Từ Liêm:  </span>
            <a className="text-blue-500" href="https://g.page/vanphongdichvu?share">ATBuilding, ngõ 7, Lê Đức Thọ</a>
          </div>
          <div className="pt-2">
            <span>8. Quận Hoàng Mai:  </span>
            <a className="text-blue-500" href="https://www.google.com/maps/place/Hanoi+Office/@20.9954965,105.860627,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ad9d478d64df:0xb427f74de50783fd!8m2!3d20.9954965!4d105.8628157" >Helios Tower, 75 Tam Trinh</a>
          </div>
          <div className="border-b border-gray-300 pt-8"></div>
          <h2 className="font-bold text-3xl pt-4">GỬI YÊU CẦU CỦA BẠN</h2>
          <div>
            <div className="grid grid-cols-2 gap-14 ">
              <div className="pt-4">
                <div>
                  <label className="text-gray-600">Họ và tên:*</label>
                  <div>
                    <input
                      className="py-2 pl-2 w-full border border-gray-400"
                      id="username" type="text"/>
                  </div>
                </div>
                <div className="pt-4">
                  <label className="text-gray-600">Số điện thoại:*</label>
                  <div>
                    <input
                      className="py-2 pl-2 w-full border border-gray-400"
                      id="username" type="text"/>
                  </div>
                </div>
              </div>
              {/*tttt*/}
              <div className="pt-4">
                <div >
                  <label className="text-gray-600">Email:*</label>
                  <div>
                    <input
                      className="py-2 pl-2 w-full border border-gray-400"
                      id="username" type="text"/>
                  </div>
                </div>
                <div className="pt-4">
                  <label className="text-gray-600">Ngày họp:*</label>
                  <div>
                    <input
                      className="py-2 pl-2 w-full border border-gray-400"
                      id="username" type="date"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <label className="text-gray-600">Yêu cầu chi tiết:</label>
              <input
                className="py-2 pl-2 w-full border border-gray-400"
                id="username" type="text" />
            </div>
          </div>
          <div className="pt-4">
            <button className="bg-blue-500 font-bold rounded py-2 px-12 text-white text-sm hover:text-black hover:bg-white border hover:border-blue-500">GỬI</button>
          </div>
        </div>
      </div>
      <div className="pt-16"></div>
    </>
  );
};
export default Contact;