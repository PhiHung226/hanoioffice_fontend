import React from 'react';

import {
  CheckCircleOutline,
  CloudOutlined,
  FiberManualRecord,
  LocationOnOutlined, Public,
  RemoveRedEye
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const NguyenThaiHoc = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Nguyễn Thái Học Ba Đình</h1>
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
                      <span className="block text-xs font-extrabold">370 m2</span>
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
                      <span className="block text-xs font-extrabold">11 Phòng</span>
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
                      <span className="block text-xs font-extrabold">1 Sàn</span>
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
              <h2 className="font-bold text-2xl">HANOI OFFICE NGUYỄN THÁI HỌC BA ĐÌNH</h2>
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
              <span className="pl-1 text-sm border-r pr-4 py-2">856</span>

            </div>
            <div className="col-span-2 text-right pt-2">
              <span>Property ID: </span>
              <span className="font-bold">5</span>
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
                    <span className="font-bold">370 m2</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-san-van-phong-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-6">Số Sàn Văn Phòng:</span>
                    <span className="font-bold">1 Sàn</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-van-phong-ao-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Văn Phòng Ảo:</span>
                    <span className="font-bold pl-1">Khả Dụng</span>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-phong-lam-viec-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Phòng Làm Việc:</span>
                    <span className="font-bold">11 Phòng</span>
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
                    <span className="font-bold pl-5">1</span>
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
                    <span className="font-bold pl-2">Chỉ từ 7.500.000 đ/tháng</span>
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
                <div>
                  <span>Văn phòng chia sẻ quận Ba Đình – Hanoi Office nằm tại </span>
                  <span className="font-bold">tầng 2, tòa nhà Tòa nhà VMQ, 87 Nguyễn Thái Học,</span>
                </div>
                <div>
                  <span>Phường Điện Biên, Quận Ba Đình, thành phố Hà Nội. Đây là khu đất </span>
                  <span className="font-bold"> “VÀNG” </span>
                  <span>có vị trí vô cùng đắc địa, nằm</span>
                  <p>trong khu vực trung tâm – “đầu não” kinh tế, chính trị Thủ Đô từ thời Phong Kiến.</p>
                </div>
                <div className="pt-4">
                  <p>Cùng đó thừa hưởng chuỗi tiện ích hạng A, cùng nội thất trang thiết bị chất lượng, Hanoi Office chắc chắn là</p>
                  <p>nơi khơi nguồn cảm hứng, môi trường làm việc thoải mái, giúp các doanh nghiệp dễ dàng kết nối, giao lưu,</p>
                  <p>giao thương.</p>
                </div>
                <div className="pt-4">
                  <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7548527741967!2d105.83852358776153!3d21.02957903864816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b58c55555%3A0x10b73f1b1ee74810!2zSGFub2kgT2ZmaWNlIC0gVsSDbiBwaMOybmcgY2hpYSBz4bq7IC0gVsSDbiBwaMOybmcgdHLhu41uIGfDs2kgY2h1ecOqbiBuZ2hp4buHcA!5e0!3m2!1svi!2s!4v1626621844368!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">Tổng quan văn phòng cho thuê Ba Đình của Hanoi Office</h5>
                </div>
                <div className="pt-4">
                  <div>
                    <span>1. </span>
                    <span className="italic">Vị trí</span>
                  </div>
                  <div>
                    <span>2. </span>
                    <span className="italic">Sự khác biệt</span>
                  </div>
                  <div>
                    <span>3. </span>
                    <span className="italic">Quy mô – thiết kế</span>
                  </div>
                  <div>
                    <span>4. </span>
                    <span className="italic">Phù hợp đa nhu cầu</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">1. Đất “VÀNG”, vị trí đắc địa</h5>
                </div>
                <div className="pt-4">
                  <span>Hanoi Office – </span>
                  <span className="font-bold">Cho thuê văn phòng trọn gói tại Hà Nội </span>
                  <span>chuyên nghiệp nằm ở tầng 2, tòa nhà VMQ, 87</span>
                  <p>Nguyễn Thái Học, Phường Điện Biên, Quận Ba Đình, Hà Nội. Là khu đất “VÀNG” được nhiều người săn đón</p>
                  <p>để đầu tư, kinh doanh. Bởi tại đây có hội tụ tất cả về kinh tế, chính trị, địa điểm ăn uống, vui chơi, nhà hàng,</p>
                  <p>khách sạn, ngân hàng, trường học, bệnh viện,…</p>
                </div>
                <div className="pt-4">
                  <p>Điều này rất thuận tiện cho mọi giao dịch công việc, tiết kiệm thời gian di chuyển và đặc biệt, các doanh</p>
                  <p>nghiệp sẽ có nhiều cơ hội phát triển trong khu vực hoạt động kinh tế sôi động, trọng điểm của Hà Nội.</p>
                </div>
                <div className="pt-4">
                  <p>Văn phòng làm việc tại tòa nhà VMQ, 87 Nguyễn Thái Học của Hanoi Office là cầu nối gắn kết đến các vị</p>
                  <p>trí trọng điểm của Thủ Đô:</p>
                </div>
                <div className="pt-3">
                  <div >
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Ga Hà Nội: 750m</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Văn Miếu Quốc Tử Giám: 100m</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Lăng Bác: 1km</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Hoàng Thành Thăng Long: 750m</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Hồ Gươm: 1,9km</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Hồ Tây: 2km</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Bệnh viện Việt Đức: 1km</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Bệnh viện Đa khoa – Xanh Pôn: 350m</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Nhà Thờ Lớn Hà Nội: 1,5km</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Công viên Thống Nhất: 3,5km</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Cung Hữu Nghị Việt Xô: 1,5km</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Ngã Tư Sở: 5km</span>
                  </div>
                </div>
                <div className="pt-4 text-center font-bold">
                  <span className="text-red-600">Click nhận thông tin: </span>
                  <NavLink to="" className="text-blue-500">Văn phòng làm việc trọn gói tại Hanoi Office </NavLink>
                  <span>giảm tới 50% </span>
                </div>
                <div className="pt-4">
                  <img className="w-full mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ba-dinh-c1.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-red-600 text-center">ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h5>
                  <h5 className="font-bold text-red-600 text-center pt-3">CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG QUẬN BA ĐÌNH CỦA HANOI OFFICE</h5>
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
                  <h5 className="font-bold text-lg">2. Chất lượng dịch vụ ưu Việt làm nên thương hiệu Hanoi Office</h5>
                </div>
                <div className="pt-4">
                  <p>Ngoài sở hữu vị trí đất “VÀNG” vô cùng thuận tiện tại Nguyễn Thái Học, dịch vụ cho thuê văn phòng tại Ba</p>
                  <p>Đình của Hanoi Office gắn liền với chất lượng dịch vụ và tiện ích đi kèm:</p>
                </div>
                <div className="pt-4">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>100% hỗ trợ kỹ thuật miễn phí và điều khiển hệ thống</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Thiết kế chuyên nghiệp, hiện đại theo concept văn phòng doanh nghiệp hạng A</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Đội ngũ lễ tân chuyên nghiệp, nhiệt tình, chu đáo</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Dịch vụ biên – phiên dịch, soạn thảo văn bản khi có yêu cầu</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Dịch vụ hóa đơn điện tử, chữ ký số, bảo hiểm xã hội điện tử</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p>Luôn luôn đồng hành, thấu hiểu nhu cầu và mong muốn của Quý khách hàng là bước tiến giúp Hanoi Office</p>
                  <p>mang lại dịch vụ chất lượng cao hơn nữa.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">3. Thiết kế chuyên nghiệp, bắt kịp xu hướng</h5>
                </div>
                <div className="pt-4">
                  <p>Hanoi Office cho thuê văn phòng Ba Đình nằm tại Tòa nhà VMQ, 87 Nguyễn Thái Học, Phường Điện Biên,</p>
                  <p>Quận Ba Đình được xây dựng và thiết kế theo xu hướng hiện đại, chuyên nghiệp, rất phù hợp với các công</p>
                  <p>ty startup, công ty nhỏ, doanh nghiệp vừa và lớn.</p>
                </div>
                <div className="pt-4">
                  <img className="mx-auto w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ba-dinh-c2.jpg" alt="" />
                </div>
                <div>
                  <p>Thuê văn phòng hạng a với chất lượng xây dựng và thiết kế văn phòng trọn gói chuẩn quốc tế, dịch vụ bổ</p>
                  <p>sung, tiện ích đầy đủ, các gói cho thuê văn phòng tại Ba Đình của Hanoi Office mang đến cho quý khách</p>
                  <p>không gian làm việc chuyên nghiệp. Cùng sự bài trí nội thất hợp lý, có tính thẩm mỹ cao sẽ giúp mọi người</p>
                  <p>có thể tập trung làm việc, tối ưu hiệu suất.</p>
                  <p>Dưới đây là thông tin chi tiết về cơ sở tại quận Ba Đình của Hanoi Office</p>
                </div>
                <div className="pt-4">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tên tòa nhà: Tòa nhà VMQ</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Vị trí: Tầng 2, số 87 Nguyễn Thái Học, Phường Điện Biên, Quận Ba Đình, Hà Nội</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tiêu chuẩn tòa nhà: Thuộc Hạng B. Thiết kế văn phòng chuyên nghiệp hạng A</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Giờ hoạt động: Từ 8h00 – 21h00 T2-T6 và Thứ 7 từ 8h00 – 18h00, nghỉ Chủ nhật</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Hệ thống điều hòa: Hai chiều đạt tiêu chuẩn chất lượng</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Hệ thống điện: Khỏe, chịu được áp suất cao</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Trang thiết bị, nội thất: Được trang bị đầy đủ máy in, máy chiếu, bàn ghế, sofa, cây xanh…</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tiêu chuẩn khác: Đạt tiêu chuẩn PCCC,…</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">4. Văn phòng hiện đại đáp ứng đa dạng nhu cầu</h5>
                </div>
                <div className="pt-4">
                  <p>Hanoi Office cho thuê văn phòng tại Ba Đình là sự lựa chọn linh hoạt cho quý khách hàng bởi sự tích hợp 5</p>
                  <p>trong 1 dịch vụ văn phòng trọn gói. Dưới đây là chi tiết các dịch vụ cho thuê văn phòng của Hanoi Office:</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg italic">4.1. Văn phòng ảo</h5>
                </div>
                <div className="pt-4">
                  <span className="font-bold">Văn phòng ảo quận Ba Đình </span>
                  <span>cho thuê là dịch vụ giúp bạn tăng doanh thu và giảm chi phí bằng cách hiện diện</span>
                  <p>doanh nghiệp của mình tại một địa chỉ chuyên nghiệp và sang trọng. Hay nói một cách khác, văn phòng ảo</p>
                  <p>chính là dịch vụ cho thuê địa chỉ để: Làm văn phòng đại diện, văn phòng giao dịch, nơi nhận bưu thư – bưu</p>
                  <p>phẩm,…</p>
                </div>
                <div className="pt-4">
                  <span className="font-bold">Cho thuê văn phòng ảo quận Ba Đình </span>
                  <span>chỉ từ </span>
                  <span className="font-bold">650.000 VNĐ/tháng </span>
                  <span>bạn đã có một địa chỉ giao dịch tuyệt đẹp,</span>
                  <p>tạo ấn tượng tốt đối với khách hàng ngay trung tâm đầu não của thủ đô Hà Nội.</p>
                </div>
                <div className="pt-4">
                  <span>Ngại gì không book ngay một gói để nhận ưu đãi vàng chào năm mới Tân Sửu: Tặng đến </span>
                  <span className="font-bold text-red-500">2 tháng sử dụng miễn phí</span>
                  <span>khi đăng ký sử dụng gói BUSINESS trong 12 tháng hoặc </span>
                  <span className="font-bold text-red-500">tặng miễn phí đăng ký kinh doanh thành lập văn phòng đại diện.</span>
                </div>
                <div className="pt-8">
                  <h5 className="font-bold text-lg italic">4.2. Văn phòng trọn gói</h5>
                </div>
                <div className="pt-4">
                  <p>Quý khách chỉ việc mang laptop đến và bắt đầu công việc kinh doanh của mình. Mọi trang bị từ: Bàn, ghế,nước,</p>
                  <p>điện, wifi, in ấn, photo, lễ tân, phòng họp, phòng khách, IT, tạp vụ… đều đã được Hanoi Office chuẩn bị sẵn sàng</p>
                  <p>trong gói dịch vụ văn phòng trọn gói quận Ba Đình.</p>
                </div>
                <div className="pt-4">
                  <p>Đồng hành cùng doanh nghiệp vượt khó mùa dịch, Hanoi Office mang đến CTKM văn phòng trọn gói siêu lớn dành cho tất cả khách hàng của Hanoi Office:</p>
                </div>
                <div className="pt-8">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span className="text-red-600 font-bold">Giảm 50% phí thuê tháng đầu khi ký hợp đồng sử dụng trong 6 tháng</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span className="text-red-600 font-bold">Giảm 50% phí thuê 3 tháng đầu khi ký hợp đồng sử dụng 12 tháng</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ba-dinh-c3.jpg" alt="" />
                </div>
                <div className="pt-3">
                  <h5 className="font-bold text-lg italic">4.3 Thuê chỗ ngồi làm việc tại Ba Đình</h5>
                </div>
                <div className="pt-4">
                  <p>Không phải vất vả hay mất thời gian đi tìm, chọn lựa quán cafe như ý. Cũng chẳng cần đi đâu xa ngoài Ba Đình, chúng tôi Hanoi Office luôn có mặt. Bạn muốn có không gian làm việc riêng cho cá nhân với đầy đủ tiện ích để làm công tác khảo sát thị trường, tư vấn bán hàng,.. hoặc thay đổi không khí hãy đến với Hanoi Office.</p>
                </div>
                <div className="pt-4">
                  <span>Khi sử dụng vụ </span>
                  <span className="font-bold">thuê chỗ ngồi làm việc tại Ba Đình </span>
                  <span>bạn có thể lựa chọn thuê theo giờ, thuê theo gói chỗ ngồi</span>
                </div>
                <div>
                  <span>linh hoạt, hay gói chỗ ngồi cố định…. Tất cả đều linh hoạt tùy theo nhu cầu sử dụng của bạn. Mức giá </span>
                  <span className="font-bold">rất rẻ,chỉ</span>
                </div>
                <div>
                  <span className="font-bold">từ 80.000 VNĐ/ 4 giờ; 150.000 VNĐ/ngày. </span>
                  <span>Cơ hội nhận ngay</span>
                  <span className="font-bold"> 1000 giờ sử dụng miễn phí </span>
                  <span>khi thuê chỗ ngồi</span>
                  <p>làm việc linh hoạt tại Ba Đình Hanoi Office</p>
                </div>
                <div className="pt-2">
                  <img className="mx-auto w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ba-dinh-c4.jpg" alt="" />
                </div>
                <div className="pt-3 font-bold text-center">
                  <span>Tìm hiểu thêm: </span>
                  <span className="text-red-500">Cơ sở mới tinh, vô vàn khuyến mãi</span>
                  <span>: Thuê 1000 giờ tặng 1000 giờ chỉ có tại Hanoi Office –</span>
                  <NavLink to="" className="text-blue-500">Coworking Space siêu tiện ích</NavLink>
                </div>
                <div className="pt-8">
                  <h5 className="font-bold text-lg italic">4.4. Phòng họp cho thuê</h5>
                </div>
                <div className="pt-4">
                  <p>Nếu quý khách đang ở khu vực Hồ Hoàn Kiếm, Ngã Tư Sở, Đống Đa, Hai Bà Trưng tốt nhất hãy thuê phòng họp thường của Hanoi Office. Bởi đường đi di chuyển phù hợp và giá cả tốt hơn nhiều so với khu vực Phố Cổ.</p>
                </div>
                <div className="pt-4">
                  <span>Hơn nữa, </span>
                  <NavLink to="" className="text-blue-500 font-bold">phòng họp cho thuê </NavLink>
                  <span>quận Ba Đình của Hanoi Office đã setup trang thiết bị từ A-Z, bạn chỉ cần lên lịch và mời mọi người đến họp. Chi phí chỉ từ </span>
                  <span className="font-bold">200.000 VNĐ/giờ,</span>
                  <span> Giảm </span>
                  <span className="font-bold">10%</span>
                  <span> khi thuê </span>
                  <span className="font-bold">2 ngày, 40%</span>
                  <span> khi thuê </span>
                  <span className="font-bold">1 tuần.</span>
                </div>
                <div className="pt-4">
                  <p>Hanoi Office cam kết sử dụng trang thiết bị chất lượng như: Máy in, máy chiếu, lễ tân, mic, wifi, ánh sáng, máy ghi âm vì vậy sẽ giúp buổi họp của quý khách thành công tốt đẹp, bảo mật thông tin trọn vẹn.</p>
                </div>
                <div className="pt-2">
                  <img className="mx-auto w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ba-dinh-c5.jpg" alt="" />
                </div>
                <div className="pt-3">
                  <h5 className="font-bold text-lg italic">4.5. Phòng họp trực tuyến</h5>
                </div>
                <div className="pt-4">
                  <span>Hành trình từ công ty Start-up vài thành viên đến vận hành ra biển lớn tại các thành phố khác hoặc nước ngoài không thể thiếu đến những buổi họp trực tuyến dành cho các doanh nghiệp nhỏ và lớn. Dịch vụ cho thuê phòng họp – hội nghị – hội thảo trực tuyến của Hanoi Office cung cấp cho quý khách hàng không gian làm việc chuyên nghiệp chỉ từ</span>
                  <span className="font-bold"> 400.000 VNĐ/giờ; </span>
                  <span>Giảm </span>
                  <span className="font-bold"> 10% </span>
                  <span>khi thuê </span>
                  <span className="font-bold"> 2 ngày, 40% </span>
                  <span>khi thuê </span>
                  <span className="font-bold"> 1 tuần. </span>
                </div>
                <div className="pt-4">
                  <NavLink to="" className="font-bold text-blue-500">
                    Phòng họp trực tuyến
                  </NavLink>
                  <span> Hanoi Office giúp doanh nghiệp không cần gặp mặt trực tiếp mà vẫn kết nối doanh nghiệp mọi lúc, mọi nơi, giao lưu chia sẻ, học tập lẫn nhau và gắn kết tình hữu nghị. Chất lượng hệ thống âm thanh và hình ảnh cùng sự bảo mật thông tin toàn vẹn tại Hanoi Office sẽ làm quý khách hài lòng.</span>
                </div>
                <p className="font-bold italic">Quý khách cần hỗ trợ thêm hãy liên hệ:</p>
                <p>Hotline: 085.339.4567 – 0904.388.909</p>
                <p>Email: contact@hanoioffice.vn</p>
                <div className="pt-6 text-center">
                  <h4 className="font-bold text-red-600 text-2xl">BẢNG BÁO GIÁ CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG</h4>
                  <h4 className="font-bold text-red-600 text-2xl pt-4">TẠI CƠ SỞ NGUYỄN THÁI HỌC – BA ĐÌNH</h4>
                </div>
                <div className="pt-3">
                  <NavLink to="" >
                    <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/Nguyen-Thai-Hoc.png" alt="" />
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
                <div className="pt-6">
                  <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7548527741967!2d105.83852358776153!3d21.02957903864816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4b58c55555%3A0x10b73f1b1ee74810!2zSGFub2kgT2ZmaWNlIC0gVsSDbiBwaMOybmcgY2hpYSBz4bq7IC0gVsSDbiBwaMOybmcgdHLhu41uIGfDs2kgY2h1ecOqbiBuZ2hp4buHcA!5e0!3m2!1svi!2s!4v1626621844368!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                  <div className="grid grid-cols-2 pt-4 gap-3">
                    <div>
                      <LocationOnOutlined className="pr-3 text-sm" />
                      <span className="text-sm pr-12">Địa chỉ đầy đủ:</span>
                      <span className="font-bold">87 Nguyễn Thái Học, Văn Miếu, Đống Đa, Hà Nội, Vietnam</span>
                    </div>
                    <div>
                      <LocationOnOutlined className="pr-3 text-sm" />
                      <span className="text-sm pr-12">Địa chỉ:</span>
                      <span className="font-bold">Tầng 2 VMQ, 87 Nguyễn Thái Học</span>
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
export default NguyenThaiHoc;