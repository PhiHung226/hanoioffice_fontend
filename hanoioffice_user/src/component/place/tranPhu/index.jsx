import React from 'react';

import {
  CheckCircleOutline,
  CloudOutlined,
  FiberManualRecord,
  LocationOnOutlined, Public,
  RemoveRedEye
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const TranPhu = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Trần Phú</h1>
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
                      <span className="block text-xs font-extrabold">461 m2</span>
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
                      <span className="block text-xs font-extrabold">19 Phòng</span>
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
              <h2 className="font-bold text-2xl">HANOI OFFICE TRẦN PHÚ</h2>
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
              <span className="pl-1 text-sm border-r pr-4 py-2">742</span>

            </div>
            <div className="col-span-2 text-right pt-2">
              <span>Property ID: </span>
              <span className="font-bold">6</span>
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
                    <span className="font-bold">461 m2</span>
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
                    <span className="font-bold pl-1">Tiện Lợi</span>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-phong-lam-viec-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Phòng Làm Việc:</span>
                    <span className="font-bold">19 Phòng</span>
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
                    <span className="font-bold pl-5">Từ 10 đến 12 người</span>
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
                  <span>Hanoi Office – Dịch vụ </span>
                  <NavLink to="" className="text-blue-500 italic font-bold">cho thuê văn phòng tại Trần Phú </NavLink>
                  <span>ở địa chỉ Tầng 6 tòa nhà Sông Đà, 131 Trần Phú, Hà</span>
                  <p>Đông, Hà Nội. Tòa nhà Sông Đà nằm ở vị trí siêu trung tâm, rất tiện lợi cho việc kinh doanh của các doanh</p>
                  <p>nghiệp. Tòa nhà nằm ngay mặt tiền đường Trần Phú (cách đoạn Nguyễn Trãi 200m), cách Royal City chỉ 5</p>
                  <p>phút, cách Vành Đai 3 Khuất Duy Tiến chỉ 300m, rất tiện đi lại. Bên cạnh tòa nhà là Đại học Kiến Trúc, đối</p>
                  <p>diện là Học viện Công nghệ Bưu Chính Viễn Thông và cách 100m là đường vào khu đô thị Văn Quán.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-2xl">Hanoi Office – Văn phòng chia sẻ tại Hà Đông – Tổ hợp không</h5>
                  <h5 className="font-bold text-2xl">gian văn phòng hiện đại xen lẫn truyền thống</h5>
                </div>
                <div className="pt-4">
                  <p>Một địa chỉ văn phòng cho thuê tốt cần rất nhiều yếu tố từ bối cảnh chung, giao thông, nội thất thiết kế và</p>
                  <p>các tiện ích dịch vụ văn phòng. Hai địa điểm văn phòng chia sẻ tại Hà Đông của Hanoi Office đều nằm ở tổ</p>
                  <p>hợp văn phòng, đáp ứng được mọi nhu cầu với mọi phong cách khác nhau của mọi doanh nghiệp.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-2xl">Toàn cảnh dịch vụ thuê văn phòng Hà Đông của Hanoi Office</h5>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">1. Vị trí đắc địa</h5>
                </div>
                <div className="pt-3">
                  <img  className="mx-auto w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-tran-phu-02.jpg" alt="" />
                </div>
                <div className="pt-3 italic text-center font-bold">
                  Xem ngay: Cập nhật
                  <NavLink to="" className="text-blue-500"> báo giá các dịch vụ cho thuê văn phòng quận Hà Đông của </NavLink>
                  Hanoi Office mới nhất!
                </div>
                <div className="pt-4">
                  <p>Yếu tố vị trí địa lý được coi là một trong những nhân tố quan trọng hàng đầu, quyết định đến sự thành công</p>
                  <p>của một doanh nghiệp. Đây là một trong những điểm ưu thế của văn phòng chia sẻ Hà Đông – Hanoi Office</p>
                  <p>so với các địa chỉ cho thuê văn phòng khác. Bởi Văn phòng cho thuê quận Hà Đông của Hanoi Office nằm</p>
                  <p className="font-bold">địa điểm trung tâm của quận:</p>
                </div>
                <div className="pt-4">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Nằm tại vị trí trung tâm quận Hà Đông, giao thông thuận tiện, Hanoi Office tin rằng quý vị có thể dễ dàng tìm </span>
                    <span>ra vị trí của chúng tôi tại: </span>
                    <span className="font-bold">131 Trần Phú.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Gần chợ Hà Đông, Trung tâm mua sắm Melinh plaza hay khu đô thị Huyndai Hillstate, bệnh viện 103, khu đô</span>
                    <p>thị Văn Phú, khu đô thị Xa La, khu đô thị Văn Quán, Trung tâm hành chính quận Hà Đông, Ga tàu điện Metro Hà Đông….</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Chính bản thân </span>
                    <span className="font-bold">tòa nhà Sông Đà </span>
                    <span>hiện tại đã tự tạo thành một tổ hợp gồm nhà ở, văn phòng và dịch vụ </span>
                    <p>thương mại như: Siêu thị, nhà hàng…</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Xung quanh toà nhà có các chi nhánh ngân hàng: Vietinbank, Vietcombank, BIDV, Agribank,…</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>HUD3 Tower gần các trường đại học hàng đầu như Đại học Kiến Trúc, Học viện Công nghệ Bưu Chính Viễn</span>
                    <p>Thông, Đại học An Ninh, Học Viện Quân Y…</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">2. Mạng lưới giao thông đồng bộ, thuận tiện</h5>
                </div>
                <div className="pt-3">
                  <img className="w-full mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-tran-phu-01.jpg" alt="" />
                </div>
                <div className="pt-3 text-center italic font-bold">
                  <span>Nhận ngay ưu đãi: Hot deal – Thuê 1 được 1 – Tặng ngay 1000 giờ làm việc MIỄN PHÍ tại </span>
                  <NavLink to="" className="text-blue-500" >Coworking Space cơ sở Ba Đình</NavLink>
                </div>
                <div className="pt-6">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Cho thuê Văn phòng tại Trần Phú – Hà Đông, cách đoạn Nguyễn Trãi 200m, cách Royal City chỉ 5 phút. Cách</span>
                    <p>Vành Đai 3 Khuất Duy Tiến chỉ 300m, rất tiện đi lại. Sát Đại học Kiến Trúc, đối diện học viện Bưu Chính Viễn Thông.</p>
                    <p>Cách đường vào khu đô thị Văn Quán 100m.</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Đi về trung tâm Thành Phố chỉ mất thêm 15 phút đi tàu điện cao tốc, 20 phút đi xe bus, hoặc 15 phút để đi xe</span>
                    <p>trên các trục đường lớn Nguyễn Trãi, Lê Văn Lương.</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Cùng với hệ thống trục đường chính Nguyễn Xiển, Vành Đai 3, Phạm Hùng làm nên sự thuận tiện khi kết nối</span>
                    <p>tòa nhà Sông Đà tới các đầu nút giao thông của thành phố: Bến xe Hà Đông, bến xe Mỹ Đình, bến xe Giáp Bát, Sân bay Nội Bài.</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Cùng các trung tâm hành chính và thể thao cấp quốc gia: Trung Tâm Hội Nghị Quốc Gia, Sân Vận Động Quốc</span>
                    <p>Gia Mỹ Đình. Và các đô thị mới Pháp Vân, Linh Đàm, Định Công, Mễ trì, Từ Liêm…</p>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Giao thông ở khu vực Hà Đông này có thể nói là rất thông thoáng, ít tắc nghẽn kể cả trong giờ cao điểm</span>
                  </div>
                  <div className="pt-4">
                    <h5 className="font-bold text-xl">3. Văn phòng thiết kế hiện đại và sang trọng</h5>
                  </div>
                  <div className="pt-4">
                    <p>Tòa nhà hỗn hợp Sông Đà – Hà Đông được xây dựng trên diện tích 4420 m2 tại Km 10 đường Nguyễn Trãi,</p>
                    <p>Q. Hà Đông, do Công ty cổ phần Đô thị Sông Đà làm chủ đầu tư.</p>
                  </div>
                  <div className="pt-4">
                    <p>Trục Nguyễn Trãi – Trần Phú là tuyến đường chính nối quận Hà Đông với các quận trung tâm Hà Nội, cũng</p>
                    <p>như đi các tỉnh Hòa Bình, Sơn La. Từ vị trí tòa nhà rất dễ dàng kết nối với các khu đô thị lân cận như: Xa La,</p>
                    <p>Văn Quán, Bắc Hà… Với vị trí đẹp nằm trên mặt đường rộng, tòa nhà sẽ là sự lựa chọn thích hợp cho mọi</p>
                    <p>khách hàng.</p>
                  </div>
                  <div className="pt-4">
                    <span>Tòa nhà hỗn hợp gồm </span>
                    <span className="font-bold">02 tầng hầm </span>
                    <span> và </span>
                    <span className="font-bold">34 tầng nổi </span>
                    <span>trong đó:</span>
                    <p>Diện tích đất: 4420 m2</p>
                    <p>Diện tích xây dựng: 2590 m2</p>
                    <p>– 02 tầng hầm mỗi tầng rộng 2710 m2 để sử dụng cho đỗ ô tô, xe máy</p>
                    <p>– Từ tầng 1 – 5 sử dụng làm trung tâm thương mại – Siêu thị – Dịch vụ</p>
                    <p>– Từ tầng 6 – 8 sử dụng làm văn phòng cho thuê</p>
                    <p>– Từ tầng 9 trở lên là căn hộ cao cấp.</p>
                  </div>
                  <div className="pt-2">
                    <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-tran-phu-03.jpg" alt="" />
                  </div>
                  <div className="pt-3 font-bold text-center italic">
                    Cập nhật ưu đãi ngay: Sở hữu văn phòng “sang – xịn” tại
                    <NavLink to="" className="text-blue-500" > 08 cơ sở đắc địa của Hanoi Office </NavLink>
                    chỉ còn 4 triệu/ tháng
                  </div>
                  <div className="pt-3">
                    <span className="font-bold">Dịch vụ Cho thuê Văn phòng tại quận Hà Đông nằm tại tầng 6,</span>
                    <span> tòa nhà Sông Đà. Theo góc nhìn phong thủy,</span>
                    <p>số 6 là lộc, khách hàng thuê văn phòng tại tầng 6 sẽ mang đến nhiều tài lộc, vượng khí, may mắn cho doanh</p>
                    <p>nghiệp. Không chỉ thế, với thiết kế hạng A, chất lượng dịch vụ 5 sao chắc chắn sẽ đem lại sự hài lòng cho</p>
                    <p>Quý khách hàng.</p>
                    <h5 className="text-red-600 font-bold">Chương trình khuyến mãi khủng tại Hanoi Office:</h5>
                  </div>
                  <div className="pt-3">
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span className="text-red-600 font-bold">HĐ 6 tháng: Giảm 50% giá thuê tháng đầu</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span className="text-red-600 font-bold">HĐ 12 tháng: Giảm 50% giá thuê tháng đầu + Tặng thêm 1 tháng + Free ĐKKD/Chuyển trụ sở</span>
                  </div>
                  <div className="pt-3 text-center text-lg">
                    ----------------------------------------
                  </div>
                  <div className="pt-4">
                    <h5 className="font-bold text-red-600 text-center">ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h5>
                    <h5 className="font-bold text-red-600 text-center pt-3">CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG TRẦN PHÚ CỦA HANOI OFFICE</h5>
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
                    <div className="pt-4">
                      <h5 className="font-bold text-lg">4. Hanoi Office – Văn phòng chia sẻ tại Trần Phú, Hà Đông – Sự hoà trộn giữa phong cách</h5>
                      <h5 className="font-bold text-lg">hiện đại và truyền thống</h5>
                    </div>
                    <div className="pt-4">
                      <span>Vị trí không gian văn phòng chia sẻ tại Hà Đông của Hanoi Office nằm tại</span>
                      <span className="font-bold"> tầng 6 (Tòa nhà Sông Đà) </span>
                      <span>với tầm</span>
                      <p>nhìn mở, bao quát được toàn bộ cảnh quan xung quanh, thiết kế theo phong cách hiện đại, năng động bao</p>
                    </div>
                    <div>
                      <span>gồm không gian </span>
                      <NavLink to="" className="font-bold text-blue-500">
                        Coworking Space
                      </NavLink>
                      <span> và đồng thời vẫn có khu văn phòng truyền thống dành cho những doanh</span>
                      <p>nghiệp cần sự chuyên nghiệp.</p>
                    </div>
                    <div className="pt-4">
                      Nội thất và cơ sở vật chất được đầu tư kỹ lưỡng từ màu sắc đến chất lượng sang trọng.
                    </div>
                    <div className="pt-3">
                      <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-tran-phu-04.jpg" alt="" />
                    </div>
                    <div className="pt-2">
                      <p>Đến với dịch vụ cho thuê văn phòng tại Hà Đông của Hanoi Office, đội ngũ nhân viên nhiệt tình, tận tâm sẽ</p>
                      <p>giúp đỡ khách hàng.</p>
                    </div>
                    <div className="pt-4">
                      <p>Hanoi Office đầu tư đầy đủ các loại trang, thiết bị văn phòng mới nhất: Wifi – Internet tốc độ cao, hệ thống</p>
                      <p>điều hòa âm trần, Máy in, fax, máy photo, Máy chiếu (projector) công nghệ mới nhất, hệ thống đàm thoại hội</p>
                      <p>nghị, loa mic, giấy, bút,…</p>
                    </div>
                    <div className="pt-4">
                      <p>Với dịch vụ cho thuê văn phòng tại Hà Đông chuyên nghiệp và đầy đủ như vậy nhưng mức giá của văn phòng</p>
                      <p>tại Hanoi Office vô cùng tốt so với những toà nhà khác trong tầm giá.</p>
                    </div>
                    <div className="pt-4">
                      <p>Đặc biệt, không giới hạn số lượng nhân sự làm việc với khách hàng thuê Phòng làm việc riêng tại Hanoi</p>
                      <p>Office</p>
                    </div>
                    <div className="pt-4">
                      <p>Giờ hoạt động: Từ 8h00 – 21h00 T2-T6 và Thứ 7 từ 8h00 – 18h00, nghỉ Chủ nhật</p>
                    </div>
                    <div className="pt-4">
                      <p>Văn phòng chia sẻ quận Hà Đông của Hanoi Office toạ lạc ngay tại vị trí trung tâm kinh tế, chính trị, thương</p>
                      <p>mại và văn hoá của quận Hà Đông. Trong dự án mở rộng khu đô thị kinh tế mới, chắc chắn đây sẽ là một</p>
                      <p>điểm sáng về sự phát triển.</p>
                    </div>
                    <div className="pt-4">
                      <p>Thuê văn phòng khu vực Trần Phú – Hà Đông là sự lựa chọn tuyệt vời cho các dự án kinh doanh, phát triển</p>
                      <span>công ty. Liên hệ ngay với Hanoi Office qua </span>
                      <span className="font-bold">hotline </span>
                      <span className="font-bold text-red-600">085.339.4567 – 0904.388.909 </span>
                      <span>để chúng tôi có thể đáp</span>
                      <p>ứng tất cả các yêu cầu của doanh nghiệp bạn.</p>
                    </div>
                    <div className="pt-12 text-center">
                      <h4 className="font-bold text-red-600 text-2xl">BẢNG BÁO GIÁ CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG</h4>
                      <h4 className="font-bold text-red-600 text-2xl pt-4">TẠI CƠ SỞ TRẦN PHÚ – HÀ ĐÔNG</h4>
                    </div>
                    <div className="pt-3">
                      <NavLink to="" >
                        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/Tran-Phu.png" alt="" />
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
                            <span className="font-bold pr-2 text-sm"></span>
                            <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                            <span className="font-bold pr-2 text-sm"></span>
                            <span className="text-sm">CHỖ NGỒI: </span>
                            <span className="font-bold text-sm"></span>
                          </div>
                        </div>
                        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/floorplan.png" alt="" />
                      </div>
                    </div>
                    <div className="pt-6 border-b border-gray-300"></div>
                    <div className="pt-24">
                      <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329.273935965266!2d105.78833589813539!3d20.98023410249942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad030eb29561%3A0x7cd86f4a31fcabad!2sHanoi%20Office!5e0!3m2!1svi!2s!4v1626621656490!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                      <div className="grid grid-cols-2 pt-4 gap-3">
                        <div>
                          <LocationOnOutlined className="pr-3 text-sm" />
                          <span className="text-sm pr-12">Địa chỉ đầy đủ:</span>
                          <span className="font-bold">Tòa nhà CC Sông Đà Hà Đông, 131 Trần Phú, P. Văn Quán, Hà Đông, Hà Nội, Vietnam</span>
                        </div>
                        <div>
                          <LocationOnOutlined className="pr-3 text-sm" />
                          <span className="text-sm pr-12">Địa chỉ:</span>
                          <span className="font-bold">Tầng 6, 131 Trần Phú</span>
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
                          <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/06/toa-nha-hud3-hanoi-office-3.jpg" alt="" />
                          <h3 className="pt-3 font-bold">HANOI OFFICE TÔ HIỆU</h3>
                          <div>
                            <p className="text-gray-300">QUẬN HÀ ĐÔNG – Hà Nội, VN</p>
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
export default TranPhu;