import React from 'react';

import {
  Facebook, FavoriteBorder,
  Instagram,
  KeyboardArrowRight,
  Mail,
  PersonOutline,
  Phone,
  Pinterest,
  Twitter
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const Recruitment = () => {
  return (
    <>
      <div className="bg-gray-100 py-24 text-center">
        <h1 className="text-3xl font-bold">TUYỂN DỤNG</h1>
        <NavLink to="/" className="pt-4 text-xl">Home </NavLink>
        <span className="text-xl">  /  TUYỂN DỤNG</span>
      </div>
      <div className="pt-2 grid grid-cols-3 ml-80 mr-96">
        <div className="col-span-2">
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs text-gray-300 hover:text-blue-500">
              TIN TỨC
            </NavLink>
            <span> , </span>
            <NavLink to="/tuyen-dung" className="text-xs text-gray-300 hover:text-blue-500">
              TUYỂN DỤNG
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">HANOI OFFICE TUYỂN DỤNG KẾ TOÁN TỔNG HỢP</NavLink>
            <p className="pt-3">Hanoi Office tuyển dụng Kế Toán Tổng Hợp- Số lượng: 2- Thời gian làm việc: Giờ hành chính, nghỉ chiều T7 và Chủ nhật hàng tuần.- Giới tính: Nữ- Độ ...</p>
            <div className="pt-6">
              <NavLink to="" className="text-blue-500">Đọc thêm <KeyboardArrowRight className="text-xs" /> </NavLink>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="pt-4 grid grid-cols-2">
              <div>
                <Facebook className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Twitter className="text-gray-500 hover:text-blue-500 mx-2 " style={ { fontSize:15 } } />
                <Instagram className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Pinterest className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
              </div>
              <div className="text-right">
                <NavLink to="">
                  <FavoriteBorder className="text-blue-500 hover:text-black mx-2 "  style={ { fontSize:15 } } />
                  <span className="text-blue-500 hover:text-black text-sm"> 0</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tuyen-dung" className="text-xs text-gray-300 hover:text-blue-500">
              TUYỂN DỤNG
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs text-gray-300 hover:text-blue-500">
              tuyển dụng
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Hanoi Office tuyển dụng nhân viên Hành Chính Tổng Hợp</NavLink>
            <p className="pt-3">Là một trong những Doanh nghiệp tiên phong trong lĩnh vực cho thuê Văn phòng ảo - Văn phòng trọn gói - Văn phòng chia sẻ - Văn phòng thông ...</p>
            <div className="pt-6">
              <NavLink to="" className="text-blue-500">Đọc thêm <KeyboardArrowRight className="text-xs" /> </NavLink>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="pt-4 grid grid-cols-2">
              <div>
                <Facebook className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Twitter className="text-gray-500 hover:text-blue-500 mx-2 " style={ { fontSize:15 } } />
                <Instagram className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Pinterest className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
              </div>
              <div className="text-right">
                <NavLink to="">
                  <FavoriteBorder className="text-blue-500 hover:text-black mx-2 "  style={ { fontSize:15 } } />
                  <span className="text-blue-500 hover:text-black text-sm"> 0</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tuyen-dung" className="text-xs text-gray-300 hover:text-blue-500">
              TUYỂN DỤNG
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs text-gray-300 hover:text-blue-500">
              tuyển dụng
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">HANOI OFFICE TUYỂN DỤNG NHÂN VIÊN TẠP VỤ VĂN PHÒNG</NavLink>
            <p className="pt-3">Với nhu cầu phát triển thị trường và kinh doanh, Hanoi Office cần tuyển dụng vị trí:TUYỂN DỤNG NHÂN VIÊN TẠP VỤ VĂN PHÒNG Chức vụ: Nhân viên Hình thức làm việc: ...</p>
            <div className="pt-6">
              <NavLink to="" className="text-blue-500">Đọc thêm <KeyboardArrowRight className="text-xs" /> </NavLink>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="pt-4 grid grid-cols-2">
              <div>
                <Facebook className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Twitter className="text-gray-500 hover:text-blue-500 mx-2 " style={ { fontSize:15 } } />
                <Instagram className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Pinterest className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
              </div>
              <div className="text-right">
                <NavLink to="">
                  <FavoriteBorder className="text-blue-500 hover:text-black mx-2 "  style={ { fontSize:15 } } />
                  <span className="text-blue-500 hover:text-black text-sm"> 0</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tuyen-dung" className="text-xs text-gray-300 hover:text-blue-500">
              TUYỂN DỤNG
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs text-gray-300 hover:text-blue-500">
              tuyển dụng
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">HANOI OFFICE TUYỂN DỤNG NHÂN VIÊN THU NGÂN</NavLink>
            <p className="pt-3">Với nhu cầu phát triển thị trường và kinh doanh, Hanoi Office cần tuyển dụng vị trí:TUYỂN DỤNG NHÂN VIÊN THU NGÂN Chức vụ: Nhân viên Hình thức làm việc: Toàn thời ...</p>
            <div className="pt-6">
              <NavLink to="" className="text-blue-500">Đọc thêm <KeyboardArrowRight className="text-xs" /> </NavLink>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="pt-4 grid grid-cols-2">
              <div>
                <Facebook className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Twitter className="text-gray-500 hover:text-blue-500 mx-2 " style={ { fontSize:15 } } />
                <Instagram className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Pinterest className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
              </div>
              <div className="text-right">
                <NavLink to="">
                  <FavoriteBorder className="text-blue-500 hover:text-black mx-2 "  style={ { fontSize:15 } } />
                  <span className="text-blue-500 hover:text-black text-sm"> 0</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tuyen-dung" className="text-xs text-gray-300 hover:text-blue-500">
              TUYỂN DỤNG
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs text-gray-300 hover:text-blue-500">
              tuyển dụng
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">HANOI OFFICE TUYỂN NHÂN VIÊN HÀNH CHÍNH – KINH DOANH (PV ĐI LÀM LUÔN)</NavLink>
            <p className="pt-3">Hanoi Office cần tuyển dụng:NHÂN VIÊN HÀNH CHÍNH - KINH DOANH Chức vụ: Nhân viên Hình thức làm việc:- Fulltime: 3 nhân viên- Part time: 4 nhân viên MÔ TẢ CÔNG VIỆC Làm việc  ...</p>
            <div className="pt-6">
              <NavLink to="" className="text-blue-500">Đọc thêm <KeyboardArrowRight className="text-xs" /> </NavLink>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="pt-4 grid grid-cols-2">
              <div>
                <Facebook className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Twitter className="text-gray-500 hover:text-blue-500 mx-2 " style={ { fontSize:15 } } />
                <Instagram className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Pinterest className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
              </div>
              <div className="text-right">
                <NavLink to="">
                  <FavoriteBorder className="text-blue-500 hover:text-black mx-2 "  style={ { fontSize:15 } } />
                  <span className="text-blue-500 hover:text-black text-sm"> 0</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tuyen-dung" className="text-xs text-gray-300 hover:text-blue-500">
              TUYỂN DỤNG
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs text-gray-300 hover:text-blue-500">
              tuyển dụng
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">HANOI OFFICE TUYỂN DỤNG CTV DIGITAL MARKETING</NavLink>
            <p className="pt-3">Apply ngay nếu bạn muốn tìm cho mình 1 nơi làm việc chuyên nghiệp mà bạn được thỏa sức sáng tạo và phát triển bản thân!⛔️ MÔ TẢ CÔNG VIỆC-  ...</p>
            <div className="pt-6">
              <NavLink to="" className="text-blue-500">Đọc thêm <KeyboardArrowRight className="text-xs" /> </NavLink>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="pt-4 grid grid-cols-2">
              <div>
                <Facebook className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Twitter className="text-gray-500 hover:text-blue-500 mx-2 " style={ { fontSize:15 } } />
                <Instagram className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
                <Pinterest className="text-gray-500 hover:text-blue-500 mx-2 "  style={ { fontSize:15 } } />
              </div>
              <div className="text-right">
                <NavLink to="">
                  <FavoriteBorder className="text-blue-500 hover:text-black mx-2 "  style={ { fontSize:15 } } />
                  <span className="text-blue-500 hover:text-black text-sm"> 0</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="border border-gray-200 mx-4">
            <div className="py-4 px-4">
              <h3 className="font-bold text-center">GIẢI PHÁP KHÔNG GIAN VĂN PHÒNG</h3>
              <div className="bg-blue-500 mt-4">
                <div className="px-3 py-3">
                  <div>
                    <img className="inline-block w-8 mb-2 mr-1" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-van-phong-ao-light.png" alt="" />
                    <NavLink to="/van-phong-ao" className="font-bold text-sm text-white" >Văn Phòng Ảo</NavLink>
                  </div>
                  <div>
                    <img className="inline-block w-8 mb-2 mr-1" src="https://hanoioffice.vn/wp-content/uploads/2017/10/type-5-img-light.png" alt="" />
                    <NavLink to="/van-phong-tron-goi" className="font-bold text-sm text-white" >Văn Phòng Trọn Gói</NavLink>
                  </div>
                  <div>
                    <img className="inline-block w-8 mb-2 mr-1" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-co-working-space-light.png" alt="" />
                    <NavLink to="/cho-ngoi-lam-viec" className="font-bold text-sm text-white" >Chỗ Ngồi Làm Việc</NavLink>
                  </div>
                  <div>
                    <img className="inline-block w-8 mb-2 mr-1" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-phong-hop-light.png" alt="" />
                    <NavLink to="/phong-hop" className="font-bold text-sm text-white" >Phòng Họp Cho Thuê</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 mx-4 mt-4">
            <div className="py-4 px-4">
              <h3 className="font-bold">TƯ VẤN DỊCH VỤ</h3>
              <div className="bg-blue-500 mt-4">
                <div className="px-3 py-3">
                  <div>
                    <PersonOutline className="text-white mb-1 mr-1 w-3" />
                    <h4 className="inline-block text-white text-base font-bold">HOTLINE 01</h4>
                  </div>
                  <div>
                    <Phone className="text-white mb-1 mr-1 w-3" />
                    <a href="tel:+84853394567" className="font-bold text-sm text-white" >(+84) 853 394 567</a>
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white">Skype </span>
                    <span to="" className="font-bold text-sm text-white" >live:2e0d085a60741ff4</span>
                  </div>
                  <div>
                    <Mail className="text-white mb-1 mr-1 w-3" />
                    <a href="mailto:contact@hanoioffice.vn" className="font-bold text-sm text-white" >contact@hanoioffice.vn</a>
                  </div>
                  <div className="border border-b border-white my-3 "></div>
                  <div>
                    <PersonOutline className="text-white mb-1 mr-1 w-3" />
                    <h4 className="inline-block text-white text-base font-bold">HOTLINE 02</h4>
                  </div>
                  <div>
                    <Phone className="text-white mb-1 mr-1 w-3" />
                    <a href="tel:+84904388909" className="font-bold text-sm text-white" >(+84) 904 388 909</a>
                  </div>
                  <div>
                    <span className="font-bold text-xs text-white">Skype </span>
                    <span to="" className="font-bold text-sm text-white" >live:.cid.6c7dfe63a917820d</span>
                  </div>
                  <div>
                    <Mail className="text-white mb-1 mr-1 w-3" />
                    <a href="mailto:contact@hanoioffice.vn" className="font-bold text-sm text-white" >contact@hanoioffice.vn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Recruitment;