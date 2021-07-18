import React from 'react';

import {
  CheckCircleOutline,
  CloudOutlined,
  FiberManualRecord,
  LocationOnOutlined, Public,
  RemoveRedEye
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const DuyTan = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Duy Tân</h1>
      </div>
      <div className="pt-6 border-b border-gray-300"></div>
      <div className="pt-8">
        <div className="grid grid-cols-8 gap-4 mx-80">
          <div className="col-span-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="border-l border-gray-400 box-content">
                <div className="pl-4">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1">
                      <img src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-size-large.png" alt="" />
                    </div>
                    <div className="col-span-4 pl-4">
                      <span className="block text-sm text-gray-600">Diện Tích:</span>
                      <span className="block text-xs font-extrabold">800 m2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-l border-gray-400 box-content">
                <div className="pl-4">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1">
                      <img src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-van-phong-tron-goi-dark.png" alt="" />
                    </div>
                    <div className="col-span-4 pl-4">
                      <span className="block text-sm text-gray-600">Phòng Làm Việc:</span>
                      <span className="block text-xs font-extrabold">37 Phòng</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-l border-gray-400 box-content">
                <div className="pl-4">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1">
                      <img src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-cho-ngoi-lam-viec-dark.png" alt="" />
                    </div>
                    <div className="col-span-4 pl-4">
                      <span className="block text-sm text-gray-600">Chỗ Ngồi:</span>
                      <span className="block text-xs font-extrabold">Linh Hoạt + Cố Định</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-l border-gray-400 box-content">
                <div className="pl-4">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1">
                      <img src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-van-phong-ao-dark.png" alt="" />
                    </div>
                    <div className="col-span-4 pl-4">
                      <span className="block text-sm text-gray-600">Văn phòng ảo:</span>
                      <span className="block text-xs font-extrabold">3 Sàn</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-2">
            <NavLink to="">
              <span className="bg-blue-400 py-2 px-16 rounded text-white hover:bg-white hover:text-black border hover:border-blue-500">Đặt Lịch Tham Quan</span>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="pt-8 border-b border-gray-300"></div>
      <div className="pt-8 grid grid-cols-8 gap-4 mx-80">
        <div className="col-span-6">
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <h2 className="font-bold text-2xl">HANOI OFFICE DUY TÂN</h2>
            </div>
            <div className="col-span-2 text-right pt-2">
              <span className="text-sm bg-blue-500 px-2 text-white rounded">CHUYÊN NGHIỆP - HIỆN ĐẠI</span>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-4 pt-2">
              <NavLink to="">
                <span className="text-blue-500 text-xs pl-4 pr-4 border-r py-2">1</span>
              </NavLink>
              <RemoveRedEye className="text-gray-300 inline-block pl-3 pb-1" />
              <span className="pl-1 text-sm border-r pr-4 py-2">1026</span>

            </div>
            <div className="col-span-2 text-right pt-2">
              <span>Property ID: </span>
              <span className="font-bold">1</span>
            </div>
          </div>
          <div className="pt-10">
            <div className="border-b border-gray-300"></div>
            <div className="grid grid-cols-7 pt-8">
              <div className="col-span-1">
                <h5 className="font-bold">THÔNG TIN</h5>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-property-size.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Tổng Diện Tích:</span>
                    <span className="font-bold">800 m2</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-san-van-phong-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-6">Số Sàn Văn Phòng:</span>
                    <span className="font-bold">3 Sàn</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-van-phong-ao-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Văn Phòng Ảo:</span>
                    <span className="font-bold pl-1">Tiện Lợi</span>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-phong-lam-viec-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Phòng Làm Việc:</span>
                    <span className="font-bold">37 Phòng</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-cho-ngoi-lam-viec-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-6">Chỗ Ngồi Làm Việc:</span>
                    <span className="font-bold pl-1">Linh Hoạt + Cố Định</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-phong-hop-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-16">Phòng Họp:</span>
                    <span className="font-bold pl-5">Từ 2 đến 30 người</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 pt-8"></div>
            <div className="grid grid-cols-7 pt-8">
              <div className="col-span-1">
                <h5 className="font-bold">CHI PHÍ THUÊ</h5>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-van-phong-ao-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-16">Văn Phòng Ảo</span>
                    <span className="font-bold pl-3">Chỉ từ 650.000 đ/tháng</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-cho-ngoi-lam-viec-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Văn Phòng Riêng</span>
                    <span className="font-bold pl-2">Chỉ từ 6.000.000 đ/tháng</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-hop-trung-tuyen-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-4">Phòng Họp Trực Tuyến</span>
                    <span className="font-bold">Chỉ từ 400.000 đ/giờ</span>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-co-working-space-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-6">Chỗ Ngồi Làm Việc</span>
                    <span className="font-bold">Chỉ từ 1.500.000 đ/tháng</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-phong-hop-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-16">Phòng Họp</span>
                    <span className="font-bold pl-4">Chỉ từ 200.000 đ/giờ</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-van-phong-tron-goi-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-2">Trụ Sở Doanh Nghiệp</span>
                    <span className="font-bold">Chỉ từ 800.000 VNĐ/ tháng</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 pt-8"></div>
            <div className="grid grid-cols-7 pt-8">
              <div className="col-span-1">
                <h5 className="font-bold">GIỚI THIỆU</h5>
              </div>
              <div className="col-span-6">
                <p>Văn phòng chia sẻ tại Cầu Giấy của Hanoi Office tọa lạc trên tầng 6 – tầng 7 – tầng 8 tòa nhà Sannam, 78 Duy Tân. Nằm trong khu đô thị thuộc khu đô thị Dịch Vọng Hậu, Cầu Giấy, Hà Nội. Đây là một trong những khu đô thị hiện đại, có tốc độ phát triển rất nhanh tại quận Cầu Giấy, Hà Nội.</p>
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.16129493146036!2d105.78300481856613!3d21.031287921707804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8fe6212079%3A0xd65f64c19a84118d!2sHanoi%20Office!5e0!3m2!1svi!2s!4v1626486285382!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                <div className="pt-4">
                  <h5 className="font-bold text-2xl">TẠI SAO BẠN NÊN CHỌN VĂN PHÒNG TẠI PHỐ DUY TÂN – CẦU</h5>
                  <h5 className="font-bold text-2xl">GIẤY</h5>
                </div>
                <div className="pt-4">
                  <span>Khi bạn muốn tìm dịch vụ </span>
                  <span className="font-bold">cho thuê văn phòng khu vực Cầu Giấy </span>
                  <span>thì phố Duy Tân là một lựa chọn hàng đầu không thể bỏ qua. Bởi đây là con phố được mệnh danh là phố văn phòng tại Hà Nội, và với 4 lý do sau đây sẽ thuyết phục được bạn làm việc tại phố Duy Tân:</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">1. Vị trí địa lý rất thuận lợi</h5>
                </div>
                <div className="pt-4">
                  <NavLink to="" className="text-blue-500 font-bold">
                    Văn phòng cho thuê quận Cầu Giấy
                  </NavLink>
                  <span> của Hanoi Office nằm trong khu vực địa lý đắc địa, là nơi giao nhau của nhiều tuyến đường lớn, với rất nhiều các khu cao ốc, văn phòng, và các địa điểm công cộng. Tại đây nhu cầu </span>
                  <p>chia sẻ văn phòng, chia sẻ không gian làm việc sẽ dễ dàng, đơn giản hơn và thuận tiện hơn trong việc giao </p>
                  <span>dịch của bạn. Chính vì vậy, Hanoi Office khẳng định với </span>
                  <span className="font-bold">dịch vụ cho thuê văn phòng Cầu Giấy </span>
                  <span>khách hàng</span>
                  <p>có thể tận dụng tối đa tất cả các dịch vụ mà không cần phải di chuyển quá xa, không tốn nhiều thời gian.</p>
                </div>
                <div className="pt-4 font-bold text-center italic">
                  Tham khảo ngay:
                  <NavLink to="" className="text-red-500"> Coworking Space tại Hà Nội </NavLink>
                  – Cho thuê chỉ từ 650k/tháng – Tiện ích bất ngờ
                </div>
                <div className="pt-4">
                  <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-duy-tan-01.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-red-600 text-center">ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h5>
                  <h5 className="font-bold text-red-600 text-center pt-3">CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG QUẬN CẦU GIẤY CỦA HANOI OFFICE</h5>
                </div>
                <div className="pt-8">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label>Họ và tên:*</label>
                      <input className="block border border-gray-300 py-2 w-full pl-2" type="text" />
                    </div>
                    <div>
                      <label>Email:*</label>
                      <input className="block border border-gray-300 py-2 w-full pl-2" type="text" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label>Số điện thoại:*</label>
                      <input className="block border border-gray-300 py-2 w-full pl-2" type="text" />
                    </div>
                    <div>
                      <label>Lựa chọn giải pháp:</label>
                      <select className="block border border-gray-300 py-2 w-full" type="text" placeholder="Văn Phòng Trọn Gói">
                        <option value="Văn Phòng Trọn Gói">Văn Phòng Trọn Gói</option>
                        <option value="Chỗ Ngồi Làm Việc">Chỗ Ngồi Làm Việc</option>
                        <option value="Văn Phòng Lưu Động">Văn Phòng Lưu Động</option>
                        <option value="Văn Phòng Ảo">Văn Phòng Ảo</option>
                        <option value="Phòng Họp">Phòng Họp</option>
                        <option value="Phòng Họp Trực Tuyến">Phòng Họp Trực Tuyến</option>
                      </select>
                    </div>
                  </div>
                  <div className="pb-2">
                    <label>Yêu cầu chi tiết:</label>
                    <textarea className="block border border-gray-300 py-2 pl-2 w-full" type="text" placeholder="Hãy nhập yêu cầu chi tiết của bạn vào đây..." rows="10"/>
                  </div>
                  <input type="submit" value="GỬI YÊU CẦU" className="font-bold text-white py-3 px-12 bg-blue-600 text-xs border rounded hover:text-black hover:bg-white hover:border-blue-600" />
                </div>
                <div className="pt-4">
                  <h5 className="text-lg font-bold">2. Mạng lưới giao thông rất thuận tiện</h5>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Dịch vụ </span>
                    <span className="font-bold">cho thuê văn phòng ở Cầu Giấy </span>
                    <span>của Hanoi Office nằm trong khu vực có nhiều trục đường lớn: Phạm</span>
                    <p>Văn Đồng, Cầu Giấy, Hồ Tùng Mậu, Khuất Duy Tiến – Phạm Hùng, đường vành đai 3, Xuân Thủy,…</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tập trung nhiều nhà hàng, khách sạn, cơ quan Chính phủ, bệnh viện, trường học lớn: Viện Huyết học – Truyền</span>
                    <p>máu Trung ương, Đại học Quốc gia Hà Nội, Học viện Báo chí và Tuyên truyền, Bộ Nội vụ, Thanh tra Chính Phủ,…</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Bao gồm khu tổ hợp các tòa nhà cao ốc văn phòng hiện đại: Sannam, FPT, Việt Á Tower, Lotus Building, Zodiac,</span>
                    <p>FLC Tower…</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tập trung nhiều địa chỉ giao dịch của các ngân hàng lớn như: Vietinbank, Vietcombank, BIDV, Agribank,…</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tập trung nhiều chợ, siêu thị, trung tâm mua sắm: Chợ Mỹ Đình, Metro, Media Mart, VinMart,…</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tập trung các địa điểm quan trọng như bến xe Mỹ Đình, Trung tâm hội nghị Quốc Gia, công viên Cầu Giấy, Bưu</span>
                    <p>điện Cầu Giấy, Sân bay Quốc tế Nội Bài,…</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Từ Hanoi Office, khách hàng dễ dàng di chuyển bằng các phương tiện công cộng như bus, taxi, grab, uber và</span>
                    <p>các loại phương tiện khác.</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Ngoài ra, khu phố Duy Tân có diện tích mặt đường tương đối rộng, thông thoáng, bố trí rất nhiều vị trí gửi đỗ</span>
                    <p>xe oto, xe máy.</p>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-duy-tan-02.jpg" alt="" />
                </div>
                <div className="pt-3">
                  <h5 className="font-bold">3. Thiết kế xây dựng hiện đại và dịch vụ tòa nhà chuyên nghiệp</h5>
                </div>
                <div className="pt-4">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Tòa nhà có tổng diện tích 5280m2, bao gồm 10 tầng nổi và 1 tầng hầm được sử dụng làm bãi đỗ xe thông</span>
                  <p>thoáng.</p>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Bộ phận quản lý và bộ phận vệ sinh của Tòa nhà Sannam làm việc chuyên nghiệp nhằm giữ môi trường làm</span>
                  <p>việc sạch sẽ, nâng cao chất lượng tòa nhà.</p>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Hanoi Office – cho thuê văn phòng chia sẻ tại tòa nhà Sannam quận Cầu Giấy có hệ thống cơ sở vật chất và</span>
                  <p>trang thiết bị được đầu tư đồng bộ với thang máy tốc độ cao, điều hòa trung tâm thông minh, hệ thống điện dự</p>
                  <p>phòng, hệ thống camera an ninh 24/7, hệ thống phòng cháy chữa cháy đạt chuẩn.</p>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Toàn bộ diện tích tầng hầm và diện tích rộng trước tòa nhà được sử dụng làm bãi đỗ xe, giúp cho việc di chuyển</span>
                  <p>của nhân viên và khách hàng đến giao dịch được thuận lợi, an toàn.</p>
                </div>
                <div className="pt-3">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-duy-tan-03.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <h5 className="text-2xl font-bold">TỔNG QUAN VỀ HANOI OFFICE CẦU GIẤY</h5>
                </div>
                <div className="pt-4">
                  <div>
                    <span>Ngày nay việc tìm dịch vụ </span>
                    <span className="font-bold">cho thuê nhà làm văn phòng Q.Cầu Giấy </span>
                    <span>vô cùng khó khăn với nhiều doanh nghiệp. Thấu hiểu những vấn đề này văn phòng chia sẻ tại Cầu Giấy của Hanoi Office đã ra mắt. Đáp ứng toàn bộ nhu cầu của doanh nghiệp từ không gian, thiết bị, giá thành hợp lý.</span>
                  </div>
                  <div>
                    <span>Văn phòng cho thuê của Hanoi Office tọa lạc tại tầng 6-7-8 tòa nhà Sannam. Tầm nhìn từ văn phòng được thiết kế ở vị trí phù hợp, thông thoáng.</span>
                  </div>
                  <div>
                    <span>Sử dụng dịch vụ văn phòng chia sẻ của Hanoi Office sẽ giúp bạn nâng cao hình ảnh công ty, doanh nghiệp và</span>
                    <div>
                      <span>chính bạn. Hanoi Office cam kết </span>
                      <span className="font-bold">cho thuê văn phòng giá rẻ Cầu Giấy</span>
                      <span> đáp ứng được tất cả mong muốn của bạn với mức giá ưu đãi nhất.</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-duy-tan-04.jpg" alt="" />
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span className="font-bold">Coworking Space Cầu Giấy </span>
                  <span>có diện tích sàn là 480m2, có thể phân chia linh hoạt thành các diện tích cho thuê</span>
                  <p>văn phòng nhỏ từ 5m2 trở lên, đáp ứng nhu cầu đặt văn phòng của từng doanh nghiệp.</p>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Thiết kế văn phòng đáp ứng được các tiêu chí cơ bản của 1 phòng văn đạt chuẩn,bao gồm: Vị trí, bố cục hợp</span>
                  <p>lý; màu sắc, ánh sáng hài hòa; nội thất tinh tế; đội ngũ nhân viên tận tình, chu đáo; cung cấp nhiều gói dịch vụ đa dạng; giá cả cạnh tranh, tiết kiệm.</p>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Hanoi Office liên tục trang bị các thiết bị văn phòng hiện đại: Máy in, fax, máy photo, máy chiếu (projector) sắc</span>
                  <p>nét và có độ phân giải cao, hệ thống đàm thoại hội nghị, loa mic, ánh sáng, wifi – internet tốc độ cao, giấy, bút,…</p>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Hanoi Office Cầu Giấy ngoài dịch vụ cho thuê văn phòng chia sẻ tại Hà Nội còn cung cấp đầy đủ các loại hình</span>
                  <p>dịch vụ văn phòng: Văn phòng ảo, Văn phòng trọn gói (Chỗ ngồi làm việc – Phòng làm việc riêng), Phòng họp cho</p>
                  <p>thuê.</p>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Đặc biệt, không giới hạn số lượng nhân sự làm việc với khách hàng thuê phòng làm việc riêng tại Hanoi Office</span>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Giờ hoạt động: Làm việc miễn phí đến 21:00 từ T2-T6, Thứ 7 đến 18:00, nghỉ CN</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-2xl">CÁC GIẢI PHÁP CHO THUÊ VĂN PHÒNG TẠI CẦU GIẤY</h5>
                </div>
                <div className="pt-4">
                  <span className="text-lg">Đến với Hanoi Office cơ sở Cầu Giấy bạn sẽ có thể lựa chọn các gói dịch vụ đa dạng như sau:</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">Dịch vụ cho thuê văn phòng ảo quận Cầu Giấy</h5>
                </div>
                <div className="pt-4">
                  <span className="font-bold">Văn phòng ảo Cầu Giấy </span>
                  <span>là loại hình dịch vụ cho thuê văn phòng 0m2 dùng để làm đăng ký kinh doanh, làm</span>
                  <p>văn phòng đại diện, thành lập doanh nghiệp, văn phòng giao dịch,… chi phí chỉ từ 650.000 VNĐ/tháng.</p>
                </div>
                <div className="pt-4">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/cho-thue-van-phong-ao-cau-giay.jpg" alt="" />
                </div>
                <div className="pt-1">
                  <p>Hanoi Office có 3 gói dịch vụ tương ứng với 3 mức giá khác nhau cho quý khách hàng thoải mái chọn lựa.</p>
                </div>
                <div className="pt-3">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Gói ECONOMY: Chỉ từ 650.000/tháng.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Gói STANDARD: Chỉ từ 900.000tháng.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Gói BUSINESS: Chỉ từ 1.200.000/tháng.</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">Cho thuê Văn phòng trọn gói tại Cầu Giấy</h5>
                </div>
                <div className="pt-4">
                  <p>Là tất cả các dịch vụ và tiện ích liên quan đến văn phòng của bạn sẽ được bên cho thuê hỗ trợ trọn gói. Bạn chỉ việc mang lap top của mình đến và làm việc. Không phải giải quyết những thủ tục rườm rà, không cần quan tâm đến những khoản chi nhỏ lẻ vì giá thuê phòng đã bao gồm tất cả.</p>
                </div>
                <div>
                  <span>Hanoi Office – </span>
                  <NavLink to="" className="font-bold text-blue-500">cho thuê văn phòng trọn gói</NavLink>
                  <span> phố Duy Tân có 2 loại dịch vụ: Chỗ ngồi làm việc và phòng làm việc riêng. Tất cả các tiện ích đính kèm của 2 loại hình này đều giống nhau nhưng chỉ khác 1 điều là ở giá thành.</span>
                </div>
                <div className="pt-1">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/cho-thue-van-phong-tron-goi-duy-tan.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <span>Đối với dịch vụ </span>
                  <span className="font-bold">cho thuê chỗ ngồi làm việc Cầu Giấy </span>
                  <span>– Coworking Duy Tân: có chỗ ngồi cố định và chỗ ngồi linh hoạt, bạn sẽ được cung cấp bàn, ghế, tủ đựng hồ sơ riêng. Vị trí được tách biệt với các bên khác bằng ngăn cabin.</span>
                </div>
                <div>
                  <p>Khi thuê chỗ ngồi làm việc hay phòng làm việc riêng thì bạn đều sẽ được sử dụng không gian tiếp khách chung, phòng họp cho thuê, trà, nước miễn phí, cùng các chi phí tiện ích trọn gói khác….</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">Cho thuê Phòng họp tại Duy Tân – Cầu Giấy</h5>
                </div>
                <div className="pt-5">
                  <span>Có 2 loại phòng họp cho thuê: Phòng họp thường và phòng họp trực tuyến. Về hình thức, 2 kiểu phòng họp này có sự khác nhau về trang thiết bị nên giá thành cũng khác nhau. Phòng họp thường sẽ có chi phí thấp hơn nhưng chỉ có các thiết bị như: Máy chiếu, tivi, bảng viết, micro, loa…</span>
                </div>
                <div className="pt-4">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/cho-thue-phong-hop-tai-duy-tan.jpg" alt="" />
                </div>
                <div className="pt-2">
                  <p>Còn phòng họp trực tuyến sẽ phải set-up nhiều hơn cùng với các thiết bị đầu – cuối, 2 màn hình để theo dõi,… nên chi phí sẽ cao hơn chút so với phòng họp thường.</p>
                  <p>Về cơ bản dịch vụ cho thuê văn phòng phố Duy Tân của Hanoi Office bao gồm 3 gói dịch vụ văn phòng chính như trên. Thêm vào đó là các tiện ích dịch vụ miễn phí kèm theo. Quý khách hàng chỉ cần xách laptop đến và làm việc, còn lại đã có Hanoi Office lo.</p>
                  <p>Nếu bạn đang có ý định tìm thuê văn phòng chia sẻ tại Cầu Giấy, hãy liên hệ ngay Hanoi Office để được báo giá ưu đãi nhất.</p>
                </div>
                <div className="pt-12 text-center">
                  <h4 className="font-bold text-red-600 text-2xl">BẢNG BÁO GIÁ CHI TIẾT CÁC DỊCH VỤ</h4>
                  <h4 className="font-bold text-red-600 text-2xl pt-4">CHO THUÊ VĂN PHÒNG TẠI CƠ SỞ SANNAM – CẦU GIẤY</h4>
                </div>
                <div className="pt-3">
                  <NavLink to="" >
                    <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/BAO-GIA-CAU-GIAY.png" alt="" />
                  </NavLink>
                </div>
                <div className="pt-6 border-b border-gray-300"></div>
                <div className="grid grid-cols-7 pt-6">
                  <div className="col-span-1">
                    <h5 className="font-bold text-lg">TIỆN ÍCH</h5>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Bãi Đỗ Xe</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Chuyển Hướng Cuộc Gọi</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Lễ Tân Chuyên Nghiệp</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Máy Photocopy</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Pantry</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Tổng Đài Nội Bộ</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Bảo Vệ 24/7</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Địa Chỉ ĐKKD</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Máy Fax</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Nhận - Chuyển Thư</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Phòng Họp</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Tổng Đài Viên</span>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Biển Tên Công Ty</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Internet Tốc Độ Cao</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Máy In</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Nhân Viên Đại Diện</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Phòng Khách</span>
                    </div>
                    <div>
                      <CheckCircleOutline className="text-sm pr-3" />
                      <span>Tư Vấn Pháp Lý</span>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-b border-gray-300"></div>
                <div className="grid grid-cols-7 pt-6">
                  <div className="col-span-1">
                    <h5 className="font-bold text-lg">LAYOUT</h5>
                  </div>
                  <div className="col-span-6">
                    <div className="grid grid-cols-4">
                      <div className="col-span-1">
                        <h5 className="font-bold">TẦNG 6</h5>
                      </div>
                      <div className="text-right col-span-3">
                        <span className="text-sm">DIỆN TÍCH: </span>
                        <span className="font-bold pr-2 text-sm">330M2 </span>
                        <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                        <span className="font-bold pr-2 text-sm">10 </span>
                        <span className="text-sm">CHỖ NGỒI: </span>
                        <span className="font-bold text-sm">LINH HOẠT</span>
                      </div>
                    </div>
                    <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2017/10/property-floorplan.png" alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-7 pt-6">
                  <div className="col-span-1">
                    <h5 className="font-bold text-lg"></h5>
                  </div>
                  <div className="col-span-6">
                    <div className="grid grid-cols-4">
                      <div className="col-span-1">
                        <h5 className="font-bold">TẦNG 7</h5>
                      </div>
                      <div className="text-right col-span-3">
                        <span className="text-sm">DIỆN TÍCH: </span>
                        <span className="font-bold pr-2 text-sm">340M2 </span>
                        <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                        <span className="font-bold pr-2 text-sm">10 </span>
                        <span className="text-sm">CHỖ NGỒI: </span>
                        <span className="font-bold text-sm">LINH HOẠT</span>
                      </div>
                    </div>
                    <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2017/10/property-floorplan.png" alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-7 pt-6">
                  <div className="col-span-1">
                    <h5 className="font-bold text-lg"></h5>
                  </div>
                  <div className="col-span-6">
                    <div className="grid grid-cols-4">
                      <div className="col-span-1">
                        <h5 className="font-bold">TẦNG 8</h5>
                      </div>
                      <div className="text-right col-span-3">
                        <span className="text-sm">DIỆN TÍCH: </span>
                        <span className="font-bold pr-2 text-sm">330M2 </span>
                        <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                        <span className="font-bold pr-2 text-sm">10 </span>
                        <span className="text-sm">CHỖ NGỒI: </span>
                        <span className="font-bold text-sm">SANG TRỌNG</span>
                      </div>
                    </div>
                    <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2017/10/property-floorplan.png" alt="" />
                  </div>
                </div>
                <div className="pt-6 border-b border-gray-300"></div>
                <div className="pt-8">
                  <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.16129493146036!2d105.78300481856613!3d21.031287921707804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8fe6212079%3A0xd65f64c19a84118d!2sHanoi%20Office!5e0!3m2!1svi!2s!4v1626486285382!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                  <div className="grid grid-cols-2 pt-4 gap-3">
                    <div>
                      <LocationOnOutlined className="pr-3 text-sm" />
                      <span className="text-sm pr-12">Địa chỉ đầy đủ:</span>
                      <span className="font-bold">78 Phố Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Vietnam</span>
                    </div>
                    <div>
                      <LocationOnOutlined className="pr-3 text-sm" />
                      <span className="text-sm pr-12">Địa chỉ:</span>
                      <span className="font-bold">	Tầng 6,7,8 Sannam, 78 Duy Tân</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 pt-4 gap-3">
                    <div>
                      <CloudOutlined className="pr-3 text-sm" />
                      <span className="text-sm pr-12">ZIP Code:</span>
                      <span className="font-bold">100000</span>
                    </div>
                    <div>
                      <Public className="pr-3 text-sm" />
                      <span className="text-sm pr-12">Quốc gia:</span>
                      <span className="font-bold">VN</span>
                    </div>
                  </div>
                  <div className="pt-6 border-b border-gray-300"></div>
                  <div className="pt-6">
                    <h5 className="font-bold">Có Thể Bạn Quan Tâm</h5>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <NavLink to="">
                        <img className="w-64 h-36" src="https://hanoioffice.vn/wp-content/uploads/2020/12/cho-thue-van-phong-quan-hoang-mai.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE TAM TRINH – HOÀNG MAI</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN HOÀNG MAI – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                    <div>
                      <NavLink to="">
                        <img className="w-64 h-36" src="https://hanoioffice.vn/wp-content/uploads/2020/11/phong-rieng-cho-thue-le-van-luong.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE LÊ VĂN LƯƠNG</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN THANH XUÂN – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                    <div>
                      <NavLink to="">
                        <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/06/zen-tower-hanoi-office-2.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE THANH XUÂN</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN THANH XUÂN – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                    <div>
                      <NavLink to="">
                        <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/06/toa-nha-at-building-hanoi-office-cs4-2.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE MỸ ĐÌNH</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN NAM TỪ LIÊM – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <NavLink to="">
                        <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/06/toa-nha-hud3-hanoi-office-3.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE TÔ HIỆU</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN HÀ ĐÔNG – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                    <div>
                      <NavLink to="">
                        <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/06/hanoi-office-song-da-building.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE TRẦN PHÚ</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN HÀ ĐÔNG – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                    <div>
                      <NavLink to="">
                        <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/06/toa-nha-sannam-hanoi-office-1.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE DUY TÂN</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN CẦU GIẤY – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                    <div>
                      <NavLink to="">
                        <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/06/vmq-building-hanoi-office.jpg" alt="" />
                        <h3 className="pt-3 font-bold text-xs">HANOI OFFICE BA ĐÌNH</h3>
                        <div>
                          <p className="text-gray-300 text-sm">QUẬN BA ĐÌNH – Hà Nội,</p>
                          <p className="text-gray-300 inline-block text-sm">VN</p>
                          <span className="text-gray-300 text-sm"> 100000</span>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/12/dich-vụ-cho-thuê-văn-phòng-tại-Hà-Nội.gif" alt="" />
          <h1 className="text-lg font-bold pt-10">
            ĐĂNG KÝ TƯ VẤN DỊCH VỤ
          </h1>
          <div className="pt-4">
            <input className="border border-gray-300 px-2 py-2 w-36 mr-3 rounded"  type="text" placeholder="Địa chỉ Email" />
            <input className="border border-gray-300 px-2 py-2 w-32 rounded" type="text" placeholder="Số điện thoại" />
          </div>
          <div className="pt-3">
            <input type="submit"  className="w-full bg-blue-400 py-2 px-8 rounded text-white hover:bg-white hover:text-black border hover:border-blue-500" value="ĐĂNG KÝ"/>
          </div>
        </div>
      </div>
    </>
  );
};
export default DuyTan;