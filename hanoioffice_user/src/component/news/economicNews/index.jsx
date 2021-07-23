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

const EconomicNews = () => {
  return (
    <>
      <div className="bg-gray-100 py-24 text-center">
        <h1 className="text-3xl font-bold">BẢN TIN KINH TẾ</h1>
        <NavLink to="/" className="pt-4 text-xl">Home</NavLink>
        <span className="text-xl">  /  BẢN TIN KINH TẾ</span>
      </div>
      <div className="pt-2 grid grid-cols-3 ml-80 mr-96">
        <div className="col-span-2">
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
                            TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Tăng lương 2020: Các khoản tiền sẽ tăng theo lương</NavLink>
            <p className="pt-3">Lương cơ sở năm 2020 sẽ tăng lên 1,6 triệu đồng/tháng sẽ kéo theo rất nhiều thay đổi liên quan đến tiền lương, phụ cấp, trợ cấp bảo hiểm xã ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500">BẢO HIỂM Y TẾ</NavLink>
            <span> , </span>
            <NavLink to="" className="text-xs hover:text-blue-500">Cần thuê văn phòng</NavLink>
            <span> , </span>
            <NavLink to="" className="text-xs hover:text-blue-500">thuế thu nhập cá nhân</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Từ 01/7/2019, thay đổi quyền lợi đóng Bảo hiểm y tế với NLĐ nếu đóng đủ 05 năm liên tục</NavLink>
            <p className="pt-3">Theo quy định của pháp luật hiện hành, người lao động (NLĐ) có thời gian tham gia bảo hiểm y tế 05 năm liên tục trở lên và có số  ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500">pháp lý doanh nghiệp</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Những công việc doanh nghiệp cần phải làm vào cuối năm 2020</NavLink>
            <p className="pt-3">Thời điểm cuối năm luôn là khoảng thời gian bận rộn đối với các doanh nghiệp bởi phải hoàn thành và tổng kết các công việc còn lại của năm...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Các công việc kế toán cần làm từ tháng 12/2016 đến tháng 03/2017</NavLink>
            <p className="pt-3">Kính gửi Quý Doanh nghiệp!Cuối năm là thời điểm Các Doanh nghiệp khẩn trương hoàn tất các Công việc còn dang dở trong năm, cũng là thời điểm Bộ phận ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Đã cắt giảm hàng loạt thủ tục thuế, hải quan</NavLink>
            <p className="pt-3">Ngày 2/12, Bộ Tài chính cho biết trong năm 2016, ngành thuế và hải quan đã tích cực sửa đổi, cắt giảm các thủ tục hành chính, tạo thêm điều ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Tin vui cho doanh nghiệp dùng web tên miền .vn</NavLink>
            <p className="pt-3">Từ năm 2017, giảm 40% lệ phí đăng ký tên miền quốc gia .vn Theo quy định tại Thông tư 208/2016/TT-BTC của Bộ Tài chính ban hành ngày 10/11/2016, trong đó ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Hướng dẫn hoàn thuế GTGT chưa khấu trừ hết 12 tháng liên tục</NavLink>
            <p className="pt-3">Tổng cục Thuế khẳng định, cơ quan thuế thực hiện hoàn thuế đối với trường hợp cơ sở kinh doanh có số thuế giá trị gia tăng (GTGT) chưa được ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Thay đổi mã vùng điện thoại cố định VNPT từ 11/02/2017</NavLink>
            <p className="pt-3">Việc chuyển đổi mã vùng viễn thông sẽ diễn ra trong ba giai đoạn, bắt đầu từ tháng 2/2017 và kết thúc vào tháng 7 năm sau.Theo quyết định số ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500">thuế thu nhập cá nhân</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Lưu ý quyết toán thuế TNCN đối với tổ chức chi trả thu nhập</NavLink>
            <p className="pt-3">Ngành Thuế cả nước đang vào mùa quyết toán thuế. Các cơ quan thuế đang tích cực hướng dẫn, hỗ trợ, tạo thuận lợi tối đa cho người nộp thuế ...</p>
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
            <NavLink to="/ban-tin-kinh-te" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN KINH TẾ
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500">thuế thu nhập cá nhân</NavLink>
            <span> , </span>
            <NavLink to="" className="text-xs hover:text-blue-500">thuế thu nhập doanh nghiệp</NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Hướng dẫn quyết toán thuế thu nhập doanh nghiệp và thuế thu nhập cá nhân năm 2016</NavLink>
            <p className="pt-3">PHẦN A: QUYẾT TOÁN THUẾ THU NHẬP DOANH NGHIỆPI. Các căn cứ pháp lý để xác định số thuế TNDN phải nộp khi quyết toán thuế TNDN năm 2016 như ...</p>
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
export default EconomicNews;