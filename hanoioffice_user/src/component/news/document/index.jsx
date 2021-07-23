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

const Document = () => {
  return (
    <>
      <div className="bg-gray-100 py-24 text-center">
        <h1 className="text-3xl font-bold">TÀI LIỆU</h1>
        <NavLink to="/" className="pt-4 text-xl">Home</NavLink>
        <span className="text-xl">  /  TÀI LIỆU</span>
      </div>
      <div className="pt-2 grid grid-cols-3 ml-80 mr-96">
        <div className="col-span-2">
          <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2021/07/sn-content-01-1-1024x657.png" alt="" />
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">CHUYỆN VĂN PHÒNG</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">“Thưởng thức” đại tiệc siêu sale giá văn phòng – Mừng sinh nhật 9 tuổi Hanoi Office</NavLink>
            <p className="pt-3">Chạm đến con số 9 tuổi đánh dấu cho chặng đường 9 năm hoạt động trong lĩnh vực cho thuê văn phòng tại Việt Nam, Hanoi Office luôn cảm thấy  ...</p>
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
            <img className="pb-3" src="https://hanoioffice.vn/wp-content/uploads/2021/07/giai-phap-giup-doanh-nghiep-kinh-doanh-hieu-qua-trong-mua-dich-covid-19-2.jpg" alt="" />
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">CHUYỆN VĂN PHÒNG</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Giải pháp giúp doanh nghiệp kinh doanh hiệu quả trong mùa dịch Covid 19</NavLink>
            <p className="pt-3">Theo thống kê, dịch Covid 19 đã khiến hàng nghìn doanh nghiệp sụp đổ, trở về vạch xuất phát với hai bàn tay trắng. Những doanh nghiệp trụ lại cũng ...</p>
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
            <img className="pb-3" src="https://hanoioffice.vn/wp-content/uploads/2021/06/kham-pha-tien-ich-uu-viet-tai-van-phong-cho-thue-hanoi-office-co-so-khuat-duy-tien-thanh-xuan-2.jpg" alt="" />
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">CHUYỆN VĂN PHÒNG</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Khám phá tiện ích ưu việt tại văn phòng cho thuê Hanoi Office: Cơ sở Khuất Duy Tiến, Thanh Xuân</NavLink>
            <p className="pt-3">Với gần 10 năm xây dựng và phát triển, đến nay Hanoi Office đã sở hữu tới 8 cơ sở văn phòng cho thuê nằm tại các vị trí đắc ...</p>
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
            <img className="pb-3" src="https://hanoioffice.vn/wp-content/uploads/2021/06/nam-giu-bi-quyet-dieu-hanh-doanh-nghiep-lam-viec-tu-xa-hieu-qua.jpg" alt="" />
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">CHUYỆN VĂN PHÒNG</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Nắm giữ bí quyết điều hành doanh nghiệp làm việc từ xa hiệu quả</NavLink>
            <p className="pt-3">Trong tình hình COVID - 19 đang diễn biến vô cùng phức tạp như hiện nay, nhiều doanh nghiệp đã tổ chức cho nhân viên làm việc từ xa để ...</p>
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
            <img className="pb-3" src="https://hanoioffice.vn/wp-content/uploads/2021/05/5-loi-ich-uu-viet-tu-mo-hinh-van-phong-chia-se-da-nang-2-1.jpg" alt="" />
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">CHUYỆN VĂN PHÒNG</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">5 Lợi ích ưu việt từ mô hình Văn phòng chia sẻ đa năng</NavLink>
            <p className="pt-3">Trong vài năm trở lại đây, mô hình Văn phòng chia sẻ đang ngày càng trở nên quen thuộc với các doanh nghiệp Việt Nam, đặc biệt là các doanh ...</p>
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
            <img className="pb-3" src="https://hanoioffice.vn/wp-content/uploads/2021/05/suc-nong-tu-dich-vu-van-phong-chia-se-quan-thanh-xuan-1.jpg" alt="" />
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Sức nóng từ dịch vụ văn phòng chia sẻ quận Thanh Xuân</NavLink>
            <p className="pt-3">Nằm tại một trong những quận thành tiềm năng nhất nhì Hà Nội, văn phòng chia sẻ quận Thanh Xuân của Hanoi Office luôn nằm trong top những địa điểm ...</p>
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
            <img className="pb-3" src="https://hanoioffice.vn/wp-content/uploads/2021/04/giam-20-gia-thue-van-phong-le-van-luong-2-1-scaled.jpg" alt="" />
            <NavLink to="/" className="text-xs hover:text-blue-500" >
              TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">GIẢM 20% giá thuê văn phòng “SANG CHẢNH” tại tòa 21 LÊ VĂN LƯƠNG</NavLink>
            <p className="pt-3">Nằm tại một trong những vị trí đắt giá bậc nhất quận Thanh Xuân, văn phòng cho thuê tại tòa The Golden Palm Tower, 21 Lê Văn Lương của Hanoi...</p>
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
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">thành lập văn phòng đại diện</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">thủ tục văn phòng đại diện</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Thành lập văn phòng đại diện Mỹ Đình cần những gì?</NavLink>
            <p className="pt-3">Sau khi hoàn tất các thủ tục đăng ký thành lập công ty theo đúng quy định của pháp luật. Doanh nghiệp có thể thực hiện các thủ tục thành ...</p>
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
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TIN TỨC</NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">Cho thuê văn phòng</NavLink>
            <span> , </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">Cho thuê văn phòng quận Nam Từ Liêm</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Dịch vụ Văn phòng ảo tại Mỹ Đình đang nở rộ như thế nào?</NavLink>
            <p className="pt-3">Dịch vụ Văn phòng ảo tại Mỹ Đình đang nở rộ như thế nào?Dịch vụ văn phòng ảo đang phát triển mạnh mẽ ở thị trường cho thuê văn phòng ...</p>
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
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">TÀI LIỆU</NavLink>
            <span> / </span>
            <NavLink to="/tai-lieu" className="text-xs hover:text-blue-500">thuế thu nhập cá nhân</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Hướng dẫn cá nhân tự quyết toán thuế thu nhập cá nhân</NavLink>
            <p className="pt-3">Đối tượng phải quyết toán- Có số thuế phải nộp thêm- Có thuế nộp thừa yêu cầu hoàn thuế hoặc bù trừ thuế.Hồ sơ khai thuế- Tờ khai quyết toán ...</p>
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
export default Document;