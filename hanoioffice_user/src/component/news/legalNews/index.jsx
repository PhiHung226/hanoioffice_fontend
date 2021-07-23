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

const LegalNews = () => {
  return (
    <>
      <div className="bg-gray-100 py-24 text-center">
        <h1 className="text-3xl font-bold">BẢN TIN PHÁP LUẬT</h1>
        <NavLink to="/" className="pt-4 text-xl">Home </NavLink>
        <span className="text-xl">  /  BẢN TIN PHÁP LUẬT</span>
      </div>
      <div className="pt-2 grid grid-cols-3 ml-80 mr-96">
        <div className="col-span-2">
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
                            TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            văn phòng đại diện
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Văn phòng đại diện: Chức năng và thủ tục làm văn phòng đại diện</NavLink>
            <p className="pt-3">Văn phòng đại diện là xu hướng của rất nhiều doanh nghiệp trong và ngoài nước trong nền kinh tế thị trường với môi trường cạnh tranh gay gắt như ...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            hoạch toán thuế môn bài
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Hướng dẫn cách hạch toán nộp thuế môn bài theo TT200 và TT133</NavLink>
            <p className="pt-3">Thuế môn bài là loại thuế thu theo năm, được tính vào khoản chi phí quản lý doanh nghiệp. Bút toán hạch toán nộp thuế môn bài được quy định ...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            thành lập công ty
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Checklist công việc cần làm sau khi thành lập công ty trong năm 2020</NavLink>
            <p className="pt-3">Công ty mới thành lập cần phải làm những gì? Đó là những lo lắng, băn khoăn của hầu hết các chủ doanh nghiệp mới thành lập công ty. Dưới ...</p>
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
            <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2019/03/van-phong-dai-dien-co-phai-nop-thue-mon-bai-khong.jpg" alt="" />
          </div>
          <div className="pt-16">
            <NavLink to="/" className="text-xs hover:text-blue-500" >
                            TRANG CHỦ
            </NavLink>
            <span> / </span>
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            thuế môn bài
            </NavLink>
            <span> , </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            văn phòng đại diện
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Văn phòng đại diện có phải nộp thuế môn bài không?</NavLink>
            <p className="pt-3">Văn phòng đại diện có phải nộp thuế môn bài không? Đây là mối quan tâm của rất nhiều doanh nghiệp khi thành lập các văn phòng đại diện để ...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            thuế của văn phòng đại diện
            </NavLink>
            <span> , </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            văn phòng đại diện
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Văn phòng đại diện phải nộp những loại thuế nào?</NavLink>
            <p className="pt-3">Văn phòng đại diện phải nộp những loại thuế nào? Trong nhiều năm trở lại đây nhiều đơn vị và doanh nghiệp trong và ngoài nước đang lựa chọn giải ...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Một vài điểm mới của các Nghị định có hiệu lực từ 01/01/2019</NavLink>
            <p className="pt-3">Hanoi Office đã tổng hợp các điểm mới của các Nghị định nổi bật sẽ có hiệu lực bắt đầu từ 01/01/2018. Các doanh nghiệp nên chú ý để thực...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            thuế tiêu thụ đặc biệt
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Thuế tiêu thụ đặc biệt sẽ tăng từ năm 2018 với nhiều loại hàng hóa</NavLink>
            <p className="pt-3">Những hàng hóa đặc biệt như rượu, xe mô tô sẽ có sự tăng đột biến về mức thuế trong năm 2018. Điều này được dựa theo Luật Thuế tiêu ...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            Bản tin pháp luật
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Người phụ nữ gốc Việt là thủ phạm khiến nền nông nghiệp Úc điêu đứng</NavLink>
            <p className="pt-3">Một phụ nữ gốc Việt tên My Ut Trinh (50 tuổi) đã bị cảnh sát Australia bắt giữ với cáo buộc nhét kim khâu vào các quả dâu tây được ...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <span> / </span>
            <NavLink to="" className="text-xs hover:text-blue-500" >
                            thuế môn bài
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">Thông tin mới nhất về mức thuế môn bài 2018 cho văn phòng đại diện</NavLink>
            <p className="pt-3">Nhằm giúp người nộp thuế thực hiện đúng Quy định pháp luật về lệ phí môn bài, Hanoi Office giới thiệu với các bạn một số quy định mới nhất ...</p>
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
            <NavLink to="/ban-tin-phap-luat" className="text-xs text-gray-300 hover:text-blue-500">
                            BẢN TIN PHÁP LUẬT
            </NavLink>
            <NavLink to="" className="block font-bold pt-2 text-3xl">13 thủ tục hành chính mới về hải quan</NavLink>
            <p className="pt-3">Bộ Tài chính vừa công bố 30 thủ tục hành chính trong lĩnh vực hải quan thuộc phạm vi chức năng quản lý nhà nước của Bộ Tài chính được...</p>
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
export default LegalNews;