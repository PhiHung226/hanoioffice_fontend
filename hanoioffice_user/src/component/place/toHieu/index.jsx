import React from 'react';

import {
  CheckCircleOutline,
  CloudOutlined,
  FiberManualRecord,
  LocationOnOutlined, Public,
  RemoveRedEye
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const ToHieu = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Tô Hiệu</h1>
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
                      <span className="block text-xs font-extrabold">1350 m2</span>
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
                      <span className="block text-xs font-extrabold">54 Phòng</span>
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
              <h2 className="font-bold text-2xl">HANOI OFFICE TÔ HIỆU</h2>
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
              <span className="pl-1 text-sm border-r pr-4 py-2">1006</span>

            </div>
            <div className="col-span-2 text-right pt-2">
              <span>Property ID: </span>
              <span className="font-bold">3</span>
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
                    <span className="font-bold">1350 m2</span>
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
                    <span className="font-bold">54 Phòng</span>
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
                    <span className="font-bold pl-5">Từ 2 đến 60 người</span>
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
                    <span className="font-bold pl-2">Chỉ từ 4.000.000 đ/tháng</span>
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
                    <span className="font-bold">Chỉ từ 800.000 đ/tháng</span>
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
                    <span className="font-bold">Chỉ từ 650.000 VNĐ/ tháng</span>
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
                <div className="italic">
                  <span>Hanoi Office – Dịch vụ văn phòng trọn gói – Cho thuê văn phòng chia sẻ tại Hà Đông tại </span>
                  <span className="font-bold">Tầng 4 toà nhà HUD3 Tower, 121-123 Tô Hiệu, Hà Đông, Hà Nội.</span>
                  <span> Đây là toà nhà cao ốc hiện đại có vị trí đắc địa tại khu vực Hà Đông. Với việc tăng trưởng kinh tế nhanh cũng như địa giới hành chính Thủ đô được mở rộng, HUD3 Tower đã đi tiên phong và đáp ứng được nhu cầu nhà ở, văn phòng làm việc, dịch vụ thương mại, siêu thị… tại quận Hà Đông, đồng thời trở thành điểm nhấn độc nhất kiến trúc cảnh quan trên trục đường Tô Hiệu.</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-2xl">Hanoi Office – Văn phòng chia sẻ tại Tô Hiệu, Hà Đông – Tổ hợp không gian văn phòng hiện đại xen lẫn truyền thống</h5>
                </div>
                <div className="pt-4">
                  <span>Một địa chỉ văn phòng cho thuê tốt cần rất nhiều yếu tố từ bối cảnh chung, giao thông, nội thất thiết kế và các tiện ích dịch vụ văn phòng. Hai địa điểm văn phòng chia sẻ tại Hà Đông của Hanoi Office đều nằm ở tổ hợp văn phòng đáp ứng được mọi nhu cầu với mọi phong cách khác nhau của mọi doanh nghiệp.</span>
                </div>
                <div className="pt-2">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ha-dong-a0.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-red-600 text-center">ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h5>
                  <h5 className="font-bold text-red-600 text-center pt-3">CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG TÔ HIỆU – HÀ ĐÔNG CỦA HANOI OFFICE</h5>
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
                  <h5 className="font-bold text-2xl">Toàn cảnh dịch vụ thuê văn phòng Tô Hiệu – Hà Đông của Hanoi Office:</h5>
                </div>
                <div className="pt-4">
                  <span>Nếu bạn đang tìm kiếm địa chỉ cho thuê văn phòng tại quận Hà Đông thì nhất định không thể bỏ qua văn phòng chia sẻ tại Hanoi Office. Điều gì gây nên sức hút mạnh với các doanh nghiệp như vậy? Cùng chúng tôi tìm hiểu toàn cảnh về dịch vụ cho thuê văn phòng Hà Đông ngay sau đây.</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">1. Vị trí đắc địa</h5>
                </div>
                <div className="pt-4">
                  <span>Yếu tố vị trí địa lý được coi là một trong những nhân tố quan trọng hàng đầu quyết định đến sự thành công của một doanh nghiệp. Đây là một trong những ưu thế vượt bậc của văn phòng chia sẻ Hà Đông – Hanoi Office so với các địa chỉ cho thuê văn phòng khác.</span>
                </div>
                <div className="pt-2">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ha-dong-a1.jpg" alt="" />
                </div>
                <div className="pt-3">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Nằm tại vị trí trung tâm quận Hà Đông, giao thông thuận tiện, Hanoi Office tin rằng quý vị có thể dễ dàng tìm ra vị trí của chúng tôi tại</span>
                    <span className="font-bold"> 121-123 Tô Hiệu, Hà Đông.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Gần chợ Hà Đông, Trung tâm mua sắm Melinh plaza hay khu đô thị Huyndai Hillstate, bệnh viện 103, khu đô thị Văn Phú, khu đô thị Xa La, khu đô thị Văn Quán, Trung tâm hành chính quận Hà Đông, Ga tàu điện Metro Hà Đông….</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Chính bản thân </span>
                    <span className="font-bold">tòa nhà HUD3 Tower </span>
                    <span>hiện tại đã tự tạo thành một tổ hợp gồm nhà ở, văn phòng và dịch vụ thương mại như: Siêu thị, nhà hàng…</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Xung quanh toà nhà có các chi nhánh ngân hàng: Vietinbank, Vietcombank, BIDV, Agribank,…</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Nằm gần các địa điểm công cộng, gần các trường học lâu đời và có tiếng của Hà Đông như Tiểu học Lê Lợi, tiểu học Nguyễn Trãi, Nguyễn Du… trung học Lê Hồng Phong, Yên Phúc, Nguyễn Huệ, Lê Quý Đôn…</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">2. Mạng lưới giao thông đồng bộ, thuận tiện và hiện đại</h5>
                </div>
                <div className="pt-4">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Từ HUD3 Tower chỉ đi 200 m trên đường Tô Hiệu đã ra tới trục đường chính Quốc lộ 6 – Quang Trung – Nguyễn Trãi.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Đi về trung tâm Thành Phố chỉ mất thêm 15 phút đi tàu điện cao tốc, 20 phút đi xe bus, hoặc 15 phút để đi xe trên các trục đường lớn Nguyễn Trãi, Lê Văn Lương.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Cùng với hệ thống trục đường chính Nguyễn Xiển, Vành Đai 3, Phạm Hùng làm nên sự thuận tiện khi kết nối chung HUD3 Tower, tòa nhà Sông Đà tới các đầu nút giao thông của thành phố: Bến xe Hà Đông, bến xe Mỹ Đình, bến xe Giáp Bát, Sân bay Nội Bài.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Cùng các trung tâm hành chính và thể thao cấp quốc gia: Trung Tâm Hội Nghị Quốc Gia, Sân Vận Động Quốc Gia Mỹ Đình. Và các đô thị mới Pháp Vân, Linh Đàm, Định Công, Mễ trì, Từ Liêm…</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Giao thông ở khu vực Hà Đông này có thể nói là rất thông thoáng, kể cả ở trong giờ cao điểm thì các phương tiện vẫn có thể di chuyển chậm đều, không bị tắc nghẽn.</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">3. Văn phòng thiết kế hiện đại và sang trọng</h5>
                </div>
                <div className="pt-4">
                  <span>Toà nhà HUD3 Tower được thiết kế và xây dựng bởi đội ngũ kiến trúc sư có trình độ chuyên môn cao đến từ chính Công ty CP đầu tư và xây dựng HUD3. Bao gồm: 02 tầng hầm, 5 tầng trung tâm thương mại dịch vụ và 25 tầng của căn hộ chung cư, tổng diện tích sàn xây dựng khoảng 49.000 m2.</span>
                </div>
                <div className="pt-4 italic text-center font-bold">
                  <span className="text-red-500">Đừng bỏ lỡ</span>
                  <span>: Trọn gói tiện ích –</span>
                  <NavLink to="">
                    Văn phòng hạng A tại Cầu Giấy
                  </NavLink>
                  <span> chỉ từ 650k/tháng</span>
                </div>
                <div className="pt-4">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ha-dong-a2.jpg" alt="" />
                </div>
                <div className="pt-6">
                  <span>HUD3 Tower được đầu tư và quản lý theo tiêu chuẩn quốc tế bởi chính chủ đầu tư. Vì vậy, việc hỗ trợ và tiếp cận giữa đơn vị thuê và đơn vị cho thuê được hỗ trợ tối đa và đáp ứng về mọi mặt. Luôn có đội ngũ dọn vệ sinh và giám sát viên để bảo đảm cảnh quan chung, khu vực vệ sinh và các văn phòng sạch sẽ, khô thoáng.</span>
                </div>
                <div className="pt-4">
                  <span>02 tầng hầm được xây dựng quy mô, tổng diện tích mặt sàn lên đến 5.100m2.Có sức chứa hơn 500 ô tô và xe máy. Được phân chia khu vực rõ ràng, được lắp đặt hệ thống camera giám sát an ninh hoạt động liên tục để đảm bảo an toàn cho khu vực trông giữ xe của toà nhà.</span>
                </div>
                <div className="pt-4">
                  <h5 className="text-red-500 italic font-bold">Chương trình khuyến mãi tại Hanoi Office:</h5>
                  <div className="pt-4">
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span className="text-red-500 italic font-bold">HĐ 6 tháng: Giảm 50% giá thuê tháng đầu</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span className="text-red-500 italic font-bold">HĐ 12 tháng: Giảm 50% giá thuê tháng đầu + Tặng thêm 1 tháng + Free ĐKKD/Chuyển trụ sở</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">4. Hanoi Office – Văn phòng chia sẻ tại Tô Hiệu, Hà Đông – Sự hoà trộn giữa phong cách hiện đại và truyền thống</h5>
                </div>
                <div className="pt-4">
                  <span>Hanoi Office cho thuê văn phòng Hà Đông nằm tại </span>
                  <span className="font-bold text-sm">tầng 4 (HUD3 Tower)</span>
                  <span> với tầm nhìn mở, bao quát được toàn bộ cảnh quan xung quanh, thiết kế theo phong cách hiện đại, năng động bao gồm không gian coworking và đồng thời vẫn có khu văn phòng truyền thống dành cho những doanh nghiệp cần sự chuyên nghiệp.</span>
                </div>
                <div className="pt-3">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ha-dong-a3.jpg" alt="" />
                  <p className="text-center italic">Nội thất và cơ sở vật chất được đầu tư kỹ lưỡng từ màu sắc đến chất lượng sang trọng.</p>
                </div>
                <div className="pt-4 font-bold italic text-center">
                  <span className="text-red-500">Tìm hiểu ngay</span>
                  <NavLink to="" className="text-blue-500" >
                   : Coworking Space tại Hà Nội
                  </NavLink>
                  – Cho thuê chỉ từ 7k/giờ
                </div>
                <div className="pt-4">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Đến với dịch vụ cho thuê văn phòng tại Hà Đông của Hanoi Office, đội ngũ nhân viên nhiệt tình, tận tâm sẽ giúp đỡ khách hàng.</span>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span className="font-bold">Coworking Space Hà Đông </span>
                  <span> tại Hanoi Office được đầu tư đầy đủ các loại trang, thiết bị văn phòng mới nhất: Wifi – Internet tốc độ cao, hệ thống điều hòa âm trần, Máy in, fax, máy photo, Máy chiếu (projector) công nghệ mới nhất, hệ thống đàm thoại hội nghị, loa mic, giấy, bút,…</span>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Với dịch vụ cho thuê văn phòng tại Hà Đông chuyên nghiệp và đầy đủ như vậy nhưng mức giá của văn phòng tại Hanoi Office vô cùng tốt so với những toà nhà khác trong lĩnh vực.</span>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Đặc biệt, không giới hạn số lượng nhân sự làm việc với khách hàng thuê Phòng làm việc riêng tại Hanoi Office</span>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Giờ hoạt động: Từ 8h00 – 21h00 T2-T6 và Thứ 7 từ 8h00 – 18h00, nghỉ Chủ nhật</span>
                </div>
                <div>
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Văn phòng chia sẻ quận Hà Đông của Hanoi Office toạ lạc ngay tại vị trí trung tâm kinh tế, chính trị, thương mại và văn hoá của quận Hà Đông. Trong dự án mở rộng khu đô thị kinh tế mới, chắc chắn đây sẽ là một điểm sáng về sự phát triển.</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">5. Các gói dịch vụ văn phòng cho thuê đa dạng</h5>
                </div>
                <div className="pt-4">
                  <span>Hanoi Office cho thuê văn phòng tại Tô Hiệu Hà Đông là sự lựa chọn linh hoạt cho quý khách hàng bởi sự tích hợp 5 trong 1 dịch vụ văn phòng trọn gói. Dưới đây là chi tiết các dịch vụ cho thuê văn phòng của Hanoi Office:</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">5.1 Cho thuê văn phòng ảo quận Hà Đông</h5>
                </div>
                <div className="pt-4">
                  <span className="font-bold">Văn phòng ảo tại Hà Đông </span>
                  <span> cho thuê là dịch vụ giúp bạn tăng doanh thu và giảm chi phí bằng cách hiện diện doanh nghiệp của mình tại một địa chỉ chuyên nghiệp và sang trọng. Hay nói một cách khác,</span>
                  <span className="font-bold"> dịch vụ cho thuê văn phòng ảo tại Hà Đông </span>
                  <span>chính là dịch vụ cho thuê địa chỉ để: Làm văn phòng đại diện, văn phòng giao dịch, nơi nhận bưu thư – bưu phẩm,…</span>
                </div>
                <div className="pt-4">
                  <span>Chỉ từ </span>
                  <span className="font-bold">650.000 VNĐ/tháng </span>
                  <span>sở hữu </span>
                  <span className="font-bold">văn phòng ảo Hà Đông </span>
                  <span>trong tầm tay. Bạn đã có một địa chỉ giao dịch tuyệt đẹp, tạo ấn tượng tốt đối với khách hàng ngay vị trí đẹp của thủ đô Hà Nội.</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">5.2 Cho thuê văn phòng trọn gói quận Hà Đông</h5>
                </div>
                <div className="pt-4">
                  <span>Với gói dịch vụ cho thuê thuê văn phòng trọn gói tại quận Hà Đông. Bạn không cần phải đầu tư một khoản tiền</span>
                  <p>lớn để thiết kế và mua trang bị cho văn phòng. Đến với Hanoi Office tất cả đã được set up hoàn hảo. Bạn chỉ việc</p>
                  <p>mang máy tính đến và làm việc. Với dịch vụ cho thuê văn phòng trọn gói tại quận Hà Đông mọi trang bị đã được</p>
                  <p>chuẩn bị đầy đủ: Từ bàn, ghế, nước, điện, wifi, in ấn, photo, lễ tân, phòng họp, phòng khách, IT, tạp vụ…</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">5.3 Cho thuê chỗ ngồi làm việc tại quận Hà Đông</h5>
                </div>
                <div className="pt-4">
                  <span className="font-bold">Coworking Space Hà Đông </span>
                  <span>là một không gian làm việc chuyên nghiệp với đầy đủ các dịch vụ tiện ích đi kèm. Giá</span>
                  <p>thuê cực ưu đãi là những đặc điểm nổi bật của dịch vụ cho thuê chỗ ngồi làm việc quận Hà Đông cơ sở thuộc Ha</p>
                  <p>noi Office. Góc ngồi cực chill giúp bạn tập trung trong công việc mà chẳng cảm thấy nhàn chán. Liên hệ ngay với</p>
                  <p>chúng tôi để có chỗ ngồi như ý.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">5.4 Dịch vụ cho thuê phòng họp quận Hà Đông</h5>
                </div>
                <div className="pt-4">
                  <span>Phòng họp cho thuê quận Hà Đông với trang thiết bị phòng họp tối tân nhất. Đáp ứng đầy đủ các nhu cầu của</span>
                  <p>doanh nghiệp. Với hệ thống: Máy chiếu, màn chiếu, loa mic, wifi ánh sáng,…hiện đại và đảm bảo bảo mật thông</p>
                  <p>tin.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">5.5 Cho thuê phòng họp trực tuyến quận Hà Đông</h5>
                </div>
                <div className="pt-4">
                  <span>Không cần gặp mặt trực tiếp mà vẫn kết nối doanh nghiệp mọi lúc, mọi nơi, giao lưu chia sẻ, học tập lẫn nhau và gắn kết tình hữu nghị. Chất lượng hệ thống âm thanh và hình ảnh cùng sự bảo mật thông tin toàn vẹn tại Hanoi Office quận Hà Đông sẽ làm quý khách hài lòng.</span>
                </div>
                <div className="pt-4">
                  <span className="font-bold">Thuê địa điểm làm văn phòng tại Hà Đông </span>
                  <span>là sự lựa chọn tuyệt vời cho các dự án kinh doanh, phát triển công ty. Liên hệ ngay với Hanoi Office qua </span>
                  <span className="font-bold">hotline 085.339.4567 – 0904.388.909</span>
                  <span> để chúng tôi có thể đáp ứng tất cả các yêu cầu của doanh nghiệp bạn.</span>
                </div>
                <div className="pt-12 text-center">
                  <h4 className="font-bold text-red-600 text-2xl">BẢNG BÁO GIÁ CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG</h4>
                  <h4 className="font-bold text-red-600 text-2xl pt-4">TẠI CƠ SỞ TÔ HIỆU – HÀ ĐÔNG</h4>
                </div>
                <div className="pt-3">
                  <NavLink to="" >
                    <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/To-Hieu.png" alt="" />
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
                        <h5 className="font-bold">TẦNG 4</h5>
                      </div>
                      <div className="text-right col-span-3">
                        <span className="text-sm">DIỆN TÍCH: </span>
                        <span className="font-bold pr-2 text-sm">1350M2 </span>
                        <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                        <span className="font-bold pr-2 text-sm">54 </span>
                        <span className="text-sm">CHỖ NGỒI: </span>
                        <span className="font-bold text-sm">LINH HOẠT</span>
                      </div>
                    </div>
                    <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/floorplan.png" alt="" />
                  </div>
                </div>
                <div className="pt-6 border-b border-gray-300"></div>
                <div className="pt-8">
                  <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269.0272900158381!2d105.77752286733691!3d20.966676099326897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345305d4e33827%3A0x9bf731a9d980db9!2sHanoi%20Office!5e0!3m2!1svi!2s!4v1626495071910!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                  <div className="grid grid-cols-2 pt-4 gap-3">
                    <div>
                      <LocationOnOutlined className="pr-3 text-sm" />
                      <span className="text-sm pr-12">Địa chỉ đầy đủ:</span>
                      <span className="font-bold">121, 123 Đ. Tô Hiệu, P. Nguyễn Trãi, Hà Đông, Hà Nội, Vietnam</span>
                    </div>
                    <div>
                      <LocationOnOutlined className="pr-3 text-sm" />
                      <span className="text-sm pr-12">Địa chỉ:</span>
                      <span className="font-bold">	Tầng 4, 121 - 123 Tô Hiệu</span>
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
                      <h3 className="pt-3 font-bold">HANOI OFFICE TRẦN PHÚ</h3>
                      <div>
                        <span className="text-gray-300">QUẬN HÀ ĐÔNG – Hà Nội, </span>
                        <span className="text-gray-300 inline-block">VN</span>
                        <p className="text-gray-300"> 100000</p>
                      </div>
                    </NavLink>
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
export default ToHieu;