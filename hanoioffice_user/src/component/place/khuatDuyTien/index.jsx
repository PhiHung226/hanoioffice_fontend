import React from 'react';

import {
  CheckCircleOutline, CloudOutlined,
  FiberManualRecord,
  LocationOnOutlined,
  Public,
  RemoveRedEye
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const KhuatDuyTien = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Khuất Duy Tiến</h1>
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
                      <span className="block text-xs font-extrabold">2000 m2</span>
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
                      <span className="block text-xs font-extrabold">70 Phòng</span>
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
                      <span className="block text-xs font-extrabold">4 Sàn</span>
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
              <h2 className="font-bold text-2xl">HANOI OFFICE KHUẤT DUY TIẾN</h2>
            </div>
            <div className="col-span-2 text-right pt-2">
              <span className="text-sm bg-blue-500 px-2 text-white rounded">CHUYÊN NGHIỆP - HIỆN ĐẠI</span>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-4 pt-2">
              <NavLink to="">
                <span className="text-blue-500 text-xs pl-4 pr-4 border-r py-2">0</span>
              </NavLink>
              <RemoveRedEye className="text-gray-300 inline-block pl-3 pb-1" />
              <span className="pl-1 text-sm border-r pr-4 py-2">1124</span>

            </div>
            <div className="col-span-2 text-right pt-2">
              <span>Property ID: </span>
              <span className="font-bold">2</span>
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
                    <span className="font-bold">2000 m2</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-san-van-phong-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-6">Số Sàn Văn Phòng:</span>
                    <span className="font-bold">4 Sàn</span>
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
                    <span className="font-bold">70 Phòng</span>
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
                    <span className="font-bold pl-5">Từ 2 đến 40 người</span>
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
                    <span className="font-bold pl-2">Chỉ từ 5.000.000 đ/tháng</span>
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
                    <span className="font-bold">Chỉ từ 1.200.000 đ/tháng</span>
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
                  <NavLink to="" className="font-bold text-blue-600">
                    Văn phòng cho thuê quận Thanh Xuân
                  </NavLink>
                  <span> nằm trên </span>
                  <NavLink to= "" className="text-blue-600">
                    tầng 6, 7, 11, 14 tòa nhà Zen Tower, số 12 Khuất Duy Tiến,
                  </NavLink>
                </div>
                <div>
                  <p>đây là một trong những tòa nhà văn phòng đẹp nhất phía Tây thủ đô Hà Nội. Zen Tower thuộc khu vực trung</p>
                  <p>tâm kinh tế, chính trị mới – khu đô thị Mỹ Đình với các hoạt động kinh doanh, buôn bán sôi động từ các doanh</p>
                  <p>nghiệp lớn, nhỏ trong và ngoài nước.</p>
                </div>
                <h3 className="font-bold text-2xl pt-4">TRẢI NGHIỆM LÀM VIỆC CHUYÊN NGHIỆP TẠI VĂN PHÒNG CHO THUÊ QUẬN THANH XUÂN</h3>
                <p className="pt-4">Một địa chỉ văn phòng cho thuê tốt cần rất nhiều yếu tố từ bối cảnh chung, giao thông, nội thất và các dịch</p>
                <p>vụ văn phòng. Văn phòng cho thuê quận Thanh Xuân chính là một văn phòng kiểu mẫu, với đầy đủ cả 4 yếu</p>
                <p>tố trên:</p>
                <img className="mx-auto pt-2" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-thanh-xuan.jpg" alt="" />
                <blockquote className="pt-3 text-center italic">
                  <p>
                    <em>
                      <strong>Cập nhật ngay:
                        <NavLink to=""  className = "text-blue-600"> Báo giá dịch vụ cho thuê văn phòng quận Thanh Xuân </NavLink>
                    của Hanoi Office
                      </strong>
                    </em>
                  </p>
                </blockquote>
                <h5 className="font-bold pt-8 text-lg">1. Vị trí thuận lợi</h5>
                <div className="pt-4">
                  <p>Đối với các doanh nghiệp, yếu tố vị trí địa lý có thể coi là một trong những nhân tố hàng đầu quyết định rất lớn</p>
                  <p className="inline-block">đến sự thành công của một doanh nghiệp. Đây cũng là một trong những điểm nhấn ưu thế của </p>
                  <span className="font-bold"> văn phòng cho</span>
                </div>
                <div>
                  <span className="font-bold">thuê quận Thanh Xuân </span>
                  <span>của Hanoi Office so với các địa chỉ </span>
                  <span className="font-bold">cho thuê văn phòng tại quận Thanh Xuân </span>
                  <span>Hà Nội</span>
                  <p>khác.</p>
                </div>
                <div className="pt-2">
                  <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-thanh-xuan-03.jpg" alt="" />
                  <div className="text-center pt-2 italic">
                    <strong>
                    Đừng bỏ lỡ:
                      <NavLink to="" className="text-blue-600" > Cho thuê Văn phòng trọn gói </NavLink>
                    full tiện ích –
                      <span>Giá siêu rẻ – Dịch vụ hạng sang – Đẳng cấp chuyên nghiệp tại Hanoi Office</span>
                    </strong>
                  </div>
                  <div className="pt-4">
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span className="font-bold">Coworking space Thanh Xuân </span>
                      <span>tọa lạc trong khu vực giao nhau của các trục đường lớn, có vị trí chiến lược: Đại</span>
                      <p>lộ Thăng Long, Khuất Duy Tiến – Phạm Hùng, đường vành đai 3, Ngã Tư Sở, Lê Văn Lương, Láng, Trường Chinh,…</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Nằm gần các địa điểm công cộng, các trường đại học danh tiếng, các văn phòng của Nhà nước: Đại học Khoa</span>
                      <p>học Xã hội và Nhân văn, Đại học Hà Nội, Bệnh viện Bộ Xây dựng, Chi cục Thuế Thanh Xuân,…</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Nằm trong trục đường tập trung nhiều nhà cao tầng, khu văn phòng lớn: Royal City, Grand Plaza, Thăng Long</span>
                      <p>Number One, Tổng Công ty Xây dựng Sông Đà,…</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Tập hợp toàn bộ các địa chỉ giao dịch của tất cả các ngân hàng: Vietinbank, Vietcombank, BIDV, Agribank,…</span>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Nhiều siêu thị, trung tâm mua sắm danh tiếng đều có chi nhánh tại đây: Chợ Nhân Chính, Big C Thăng Long, TB</span>
                      <p>Mart, Bách hóa Thanh Xuân…</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Tọa lạc gần các khu vực giải trí, tổ chức sự kiện lớn: Trung tâm hội nghị Quốc Gia, công viên Nhân Chính, cung</span>
                      <p>Thể thao dưới nước, Sân vận động Mỹ Đình,…</p>
                    </div>
                  </div>
                  <h5 className="font-bold pt-4 text-lg">2. Mạng lưới giao thông hiện đại, thông thoáng</h5>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Các phương tiện công cộng như bus, taxi, grab, uber và các loại phương tiện khác được bố trí dày đặc quanh</span>
                    <p>khu vực văn phòng của Hanoi Office.</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Hơn nữa, Văn phòng cho thuê quận Thanh Xuân nằm tại tòa nhà Zen Tower – vị trí ngã tư Khuất Duy Tiến – </span>
                    <p>Nguyễn Trãi nên có diện tích mặt đường rất rộng, phân làn xe rõ ràng, mật độ giao thông cao nhưng rất thông</p>
                    <p>thoáng. Khu vực này là địa điểm vô cùng lý tưởng, đặc biệt với các doanh nghiệp muốn bắt đầu kinh doanh, cần</p>
                    <p>tìm kiếm khách hàng.</p>
                  </div>
                  <h5 className="font-bold pt-4 text-lg">3. Văn phòng thiết kế hiện đại và dịch vụ chuyên nghiệp</h5>
                  <img className="mx-auto pt-4" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-thanh-xuan-01.jpg" alt="" />
                  <div className="text-center pt-3 italic">
                    <strong>Xem thêm:
                      <NavLink to="" className="text-blue-600" > Cho thuê văn phòng trọn gói tại Trần Phú</NavLink>
                    </strong>
                  </div>
                  <div className="pt-4">
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Coworking space Thanh Xuân nằm tại tòa nhà Zen Tower được thiết kế và xây dựng bởi đội ngũ kiến trúc sư</span>
                    <p>trình độ chuyên môn cao. Thiết kế thành các khu riêng biệt với 1 tầng hầm, 14 tầng nổi và 1 tầng tum, tổng diện</p>
                    <p>tích xây dựng ước chừng khoảng hơn 1200 m2.</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tòa nhà được đầu tư và quản lý theo tiêu chuẩn quốc tế bởi chính chủ đầu tư. Vì vậy, việc hỗ trợ và tiếp cận</span>
                    <p>giữa đơn vị thuê và đơn vị cho thuê được hỗ trợ tối đa và đáp ứng về mọi mặt. Luôn có đội ngũ dọn vệ sinh và</p>
                    <p>giám sát viên để bảo đảm cảnh quan chung, khu vực vệ sinh và các văn phòng sạch sẽ, khô thoáng.</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Khu tầng hầm được xây dựng quy mô, phân chia khu vực rõ ràng, được lắp đặt hệ thống camera giám sát an</span>
                    <p>ninh hoạt động liên tục để đảm bảo an toàn cho khu vực trông giữ xe của cả tòa nhà.</p>
                  </div>
                  <h5 className="font-bold pt-4 text-lg">4. Văn phòng cho thuê quận Thanh Xuân của Hanoi Office: Cảnh quan đẹp – Mức giá hợp lý</h5>
                  <div className="pt-4">
                    <p>Gói thuê văn phòng chia sẻ của Văn phòng cho thuê quận Thanh Xuân tại Hà Nội là gì? Có những ưu điểm gì</p>
                    <p>khiến nhiều người lựa chọn đến thế. Trước khi tìm hiểu kỹ các dịch vụ văn phòng chia sẻ của Hanoi Office,bạn</p>
                    <p>cần hiểu rõ về văn phòng chia sẻ nói chung.</p>
                  </div>
                  <img className="mx-auto pt-2" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-thanh-xuan-02.jpg" alt="" />
                  <h5 className="font-bold pt-3 text-lg italic">Văn phòng chia sẻ là gì?</h5>
                  <div className="pt-4">
                    <p>Văn phòng chia sẻ (Share Office) hay còn được biết đến như hình thức cho thuê văn phòng trọn gói, là dịch</p>
                    <p>vụ chia sẻ chỗ ngồi làm việc, phù hợp với các doanh nghiệp đang tìm kiếm không gian làm việc linh hoạt.</p>
                  </div>
                  <div>
                    <p>Mô hình văn phòng chia sẻ mang lại ý nghĩa rất cao: Bạn chỉ mất chi phí thuê diện tích làm việc, ngoài ra sẽ</p>
                    <p>được sử dụng các tiện ích phòng họp hiện đại, phòng khách, lễ tân, sử dụng các thiết bị văn phòng hiện đại:</p>
                    <p>Máy fax, photo, máy in,… Dịch vụ văn phòng chia sẻ cung cấp là trọn gói, bạn chỉ việc xách laptop đến và làm</p>
                    <p>việc thôi.</p>
                  </div>
                  <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-thanh-xuan-04.jpg" alt="" />
                  <div className="text-center pt-3 italic">
                    <strong>Tham khảo thêm:
                      <NavLink to="" className="text-blue-600" > 8 Cơ sở đắc địa của Hanoi Office </NavLink>
                      chỉ từ 4 triệu đồng/ tháng
                    </strong>
                  </div>
                  <h5 className="font-bold pt-6 text-lg italic">Dịch vụ văn phòng chia sẻ của Hanoi Office</h5>
                  <div className="pt-4">
                    <p>Trải nghiệm văn phòng cho thuê quận Thanh Xuân Hanoi Office – Văn phòng chia sẻ nằm tại tầng 6+7+11+14,</p>
                    <p>tòa nhà Zen Tower, số 12 Khuất Duy Tiến. Với tầm nhìn mở, bao quát toàn bộ khu vực Thanh Xuân.Diện tích sàn</p>
                    <p>của văn phòng tại Hanoi Office là 600m2, được thiết kế với hơn 20 phòng làm việc với : với văn phòng lớn và</p>
                    <span className="font-bold">văn phòng nhỏ cho thuê quận Thanh Xuân </span>
                    <span>và 2 phòng họp lớn, có thể đáp ứng tất cả các nhu cầu đặt văn </span>
                    <p>phòng của từng doanh nghiệp.</p>
                  </div>
                  <div className="pt-4">
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Thiết kế văn phòng cho thuê quận Thanh Xuân theo xu hướng hiện đại, cao cấp. Khu văn phòng được đầu tư</span>
                      <p>kỹ càng vào việc thiết kế màu sắc, bố cục các phòng làm việc; nội thất sang trọng.</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Ngoài ra,  Hanoi Office – cho thuê văn phòng chia sẻ Hà Nội luôn có đội ngũ nhân viên nhiệt tình, tận tâm giúp</span>
                      <p>đỡ khách hàng; đi kèm với các gói dịch vụ hấp dẫn, bao gồm nhiều tiện ích khác nhau.</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Mức giá của văn phòng cho thuê tại Hanoi Office rất hợp lý so với chất lượng dịch vụ văn phòng hạng A mà</span>
                      <p>Hanoi Office cung cấp</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Hanoi Office đầu tư đầy đủ các loại trang, thiết bị văn phòng mới nhất: Wifi – Internet tốc độ cao, hệ thống</span>
                      <p>điều hòa âm trần, Máy in, fax, máy photo, Máy chiếu (projector) công nghệ mới nhất, hệ thống đàm thoại hội</p>
                      <p>nghị, loa mic, giấy, bút,…</p>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Đặc biệt, không giới hạn số lượng nhân sự làm việc với khách hàng thuê Phòng làm việc riêng tại Hanoi Office</span>
                    </div>
                    <div>
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Giờ hoạt động: Từ 8h00 – 21h00 T2-T6 và Thứ 7 từ 8h00 – 18h00, nghỉ Chủ nhật</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h5 className="font-bold text-red-600 text-center">ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h5>
                    <h5 className="font-bold text-red-600 text-center pt-3">CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG QUẬN THANH XUÂN CỦA HANOI OFFICE</h5>
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
                    <div>
                      <span>Hanoi Office </span>
                      <span className="font-bold">cho thuê văn phòng chia sẻ giá rẻ tại Thanh Xuân, </span>
                      <span>tọa lạc ngay tại trung tâm kinh tế, chính trị,</span>
                      <p>thương mại và văn hóa ở phía Tây Hà Nội. Những năm gần đây, khu vực này đang trở thành một điểm sáng</p>
                      <p className="inline-block">trong bức tranh kinh tế của thành phố Hà Nội. Dịch vụ</p>
                      <span className="font-bold"> thuê văn phòng giá rẻ quận Thanh Xuân</span>
                      <span>phù hợp với</span>
                      <p>các doanh nghiệp:</p>
                    </div>
                    <div className="pt-4">
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Tìm địa chỉ </span>
                      <span className="font-bold">cho thuê văn phòng Khuất Duy Tiến</span>
                    </div>
                    <div className="pt-1">
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Tìm địa chỉ </span>
                      <span className="font-bold">cho thuê văn phòng Ngụy Như Kon Tum</span>
                    </div>
                    <div className="pt-1">
                      <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                      <span>Tìm địa chỉ </span>
                      <span className="font-bold">cho thuê văn phòng Nguyễn Xiển</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p>Ngoài dịch vụ cho thuê văn phòng chia sẻ, tại quận Thanh Xuân, Hanoi Office còn cung cấp nhiều dịch vụ</p>
                    <p>chính khác như: cho thuê văn phòng ảo quận Thanh Xuân, cho thuê văn phòng nhỏ tại Thanh Xuân, cho thuê</p>
                    <p>phòng họp quận Thanh Xuân, cho thuê phòng hội thảo tại quận thanh xuân,…</p>
                  </div>
                  <div className="pt-4">
                    <p>Lựa chọn một vị trí tuyệt vời là phương án thông minh để bắt đầu kinh doanh khởi nghiệp. Hanoi Office – Địa</p>
                    <p>chỉ cho thuê văn phòng tại Thanh Xuân tự hào khi có thể đáp ứng tất cả các yêu cầu trên, với mục tiêu hỗ trợ</p>
                    <p>tối đa cho khách hàng.</p>
                  </div>
                  <div className="pt-4">
                    <span>Nếu bạn cũng đang có nhu cầu </span>
                    <span className="font-bold">thuê văn phòng khu vực Thanh Xuân </span>
                    <span>thì còn chần chờ gì nữa mà không liên</span>
                    <p>hệ ngay với chúng tôi. Đơn vị cung cấp dịch vụ cho thuê văn phòng chất lượng với giá tốt.</p>
                  </div>
                  <div className="pt-4">
                    <span>Liên hệ ngay hotline </span>
                    <span className="font-bold">085.339.4567 – 0904.388.909 </span>
                    <span>hoặc click </span>
                    <span className="font-bold">chat inbox </span>
                    <span>để nhận tư vấn và báo giá ưu đãi</span>
                    <p>ngay hôm nay!</p>
                  </div>
                  <div className="pt-12 text-center">
                    <h4 className="font-bold text-red-600 text-2xl">BẢNG BÁO GIÁ CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG</h4>
                    <h4 className="font-bold text-red-600 text-2xl pt-4">TẠI CƠ SỞ ZEN TOWER – 12 KHUẤT DUY TIẾN</h4>
                  </div>
                  <div className="pt-3">
                    <NavLink to="" >
                      <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/Khuat-Duy-Tien.png" alt="" />
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
                          <span className="font-bold pr-2 text-sm">500M2 </span>
                          <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                          <span className="font-bold pr-2 text-sm">30 </span>
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
                          <span className="font-bold pr-2 text-sm">480M2 </span>
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
                          <h5 className="font-bold">TẦNG 11</h5>
                        </div>
                        <div className="text-right col-span-3">
                          <span className="text-sm">DIỆN TÍCH: </span>
                          <span className="font-bold pr-2 text-sm">500M2 </span>
                          <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                          <span className="font-bold pr-2 text-sm">33 </span>
                          <span className="text-sm">CHỖ NGỒI: </span>
                          <span className="font-bold text-sm">SANG TRỌNG</span>
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
                          <h5 className="font-bold">TẦNG 14</h5>
                        </div>
                        <div className="text-right col-span-3">
                          <span className="text-sm">DIỆN TÍCH: </span>
                          <span className="font-bold pr-2 text-sm">500M2 </span>
                          <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                          <span className="font-bold pr-2 text-sm">32 </span>
                          <span className="text-sm">CHỖ NGỒI: </span>
                          <span className="font-bold text-sm">HIỆN ĐẠI</span>
                        </div>
                      </div>
                      <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2017/10/property-floorplan.png" alt="" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/coworking-space-quan-thanh-xuan.jpg" alt="" />
                  </div>
                  <div className="pt-24">
                    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.4902729566048!2d105.80206319980998!3d20.99329856337879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ade115d15caf%3A0x381db5a1f8ae21ac!2zSGFub2kgT2ZmaWNlIC0gVsSDbiBwaMOybmcg4bqjbyAtIFbEg24gcGjDsm5nIGNoaWEgc-G6uw!5e0!3m2!1svi!2s!4v1626622237416!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                    <div className="grid grid-cols-2 pt-4 gap-3">
                      <div>
                        <LocationOnOutlined className="pr-3 text-sm" />
                        <span className="text-sm pr-12">Địa chỉ đầy đủ:</span>
                        <span className="font-bold">12 Khuất Duy Tiến, Thanh Xuân Bắc, Thanh Xuân, Hà Nội, Vietnam</span>
                      </div>
                      <div>
                        <LocationOnOutlined className="pr-3 text-sm" />
                        <span className="text-sm pr-12">Địa chỉ:</span>
                        <span className="font-bold">Tầng 6-7-11-14 ZenTower 12 Khuất Duy Tiến</span>
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
                    <div className="pt-4">
                      <NavLink to="">
                        <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/11/phong-rieng-cho-thue-le-van-luong.jpg" alt="" />
                        <h3 className="pt-3 font-bold">HANOI OFFICE LÊ VĂN LƯƠNG</h3>
                        <div>
                          <p className="text-gray-300">QUẬN THANH XUÂN – Hà Nội,</p>
                          <p className="text-gray-300 inline-block">VN</p>
                          <span className="text-gray-300"> 100000</span>
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
export default KhuatDuyTien;