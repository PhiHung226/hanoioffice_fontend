import React from 'react';

import {
  CheckCircleOutline,
  CloudOutlined,
  FiberManualRecord,
  Public,
  RemoveRedEye,
  RoomOutlined
} from '@material-ui/icons';
import {NavLink} from
  'react-router-dom';

const LeVanLuong = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Lê Văn Lương</h1>
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
                      <span className="block text-xs font-extrabold">700m2</span>
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
                      <span className="block text-xs font-extrabold">30 Phòng</span>
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
      <div className="pt-8 grid grid-cols-8 gap-4 mx-80 ">
        <div className="col-span-6">
          <div className="grid grid-cols-6">
            <div className="col-span-4">
              <h2 className="font-bold text-2xl">HANOI OFFICE LÊ VĂN LƯƠNG</h2>
            </div>
            <div className="col-span-2 text-right pt-2">
              <span className="text-sm bg-blue-500 px-2 text-white rounded">CHUYÊN NGHIỆP - HIỆN ĐẠI</span>
            </div>
          </div>
          <div className="grid grid-cols-6 pb-10 border-b-2 ">
            <div className="col-span-4 pt-2">
              <NavLink to="">
                <span className="text-blue-500 text-xs pl-4 pr-4 border-r py-2">1</span>
              </NavLink>
              <RemoveRedEye className="text-gray-300 inline-block pl-3 pb-1" />
              <span className="pl-1 text-sm border-r pr-4 py-2">759</span>
            </div>

            <div className="col-span-2 text-right pt-2">
              <span>Property ID: </span>
              <span className="font-bold">7</span>
            </div>
          </div>
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
                  <span className="font-bold">700m2</span>
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
                  <span className="font-bold">30 Phòng</span>
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
                  <span className="font-bold pl-3">Chỉ từ 900.000 đ/tháng</span>
                </div>
              </div>
              <div className="pt-3">
                <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-cho-ngoi-lam-viec-dark.png" alt="" />
                <div className="inline-block">
                  <span className="pr-12">Văn Phòng Riêng</span>
                  <span className="font-bold pl-2">Chỉ từ 6.500.000 đ/tháng</span>
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
                  <span className="font-bold">Chỉ 2.000.000 đ/tháng</span>
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
                  <span className="font-bold">Chỉ từ 1.200.000 đ/tháng</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 pt-8"></div>
          {/* text-content/*/}
          <div className="grid grid-cols-7 py-10 gap-4">
            <div className="cols-span-1">
              <h1 className="text-lg font-bold">GIỚI THIỆU</h1>
            </div>
            <div className="col-span-6">
              <div className="">
                <b>Dịch vụ cho thuê văn phòng Lê Văn Lương của Hanoi Office </b>
                <span >
                là giải pháp toàn diện cho những doanh nghiệp, freelancer đang tìm kiếm một địa điểm làm việc đắc địa,
                một văn phòng đúng gu cho những người “sành điệu” – Sang trọng, chuyên nghiệp và đạt tầm quốc tế
                </span>
              </div>
              <div className="py-3 text-2xl font-medium">
                <b>TRẢI NGHIỆM LÀM VIỆC “THƯỢNG HẠNG” TẠI GOLDEN PALM – VĂN PHÒNG CAO CẤP CỦA HANOI OFFICE  </b>
              </div>
              <div className="pt-4 pb-6">
                <span>Cùng với những tiện ích sẵn có của tòa nhà và sự đầu tư kỹ lưỡng về mọi mặt của Hanoi Office, dịch vụ cho thuê văn phòng Lê Văn Lương – quận Thanh Xuân chắc chắn sẽ trở thành cái tên vàng trong làng văn
                  phòng cho thuê tại Hà Nội, hứa hẹn sẽ mang đến không gian làm việc đẳng cấp bậc nhất mà bạn không thể bỏ lỡ.</span>
              </div>
              <h3><b className="text-2xl">VỊ TRÍ ĐẸP BẬC NHẤT THỦ ĐÔ</b></h3>
              <div className="pt-4">
                <span className="">Dịch vụ cho thuê văn phòng Lê Văn Lương của Hanoi Office nằm tại tầng 5 – tòa nhà Golden Palm, ngay mặt đường lớn Lê Văn Lương kéo dài.
                  Nằm ngay vị trí ngã 4, nút giao giữa khu vực Đường Láng – Lê Văn Lương – </span>
                <p>Láng Hạ – Nguyễn Ngọc Vũ.</p>
              </div>
              <div >
                <span className="">Golden Palm sở hữu một vị trí đắc địa, hội tụ nhiều tiện ích đồng bộ hoàn hảo,
                  kết nối thuận tiện với toàn bộ hệ thống trường học, bệnh viện, siêu thị, công viên hiện đại tại Hà Nội.
                  Golden Palm Tower gần các tuyến phố lớn như : Nguyễn Chí Thanh, Trần Duy Hưng, Phạm Hùng, Trung Hòa, Cầu Giấy.. </span>
              </div>
              <div className="pt-3 pb-4" >
                <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/11/phong-rieng-cho-thue-le-van-luong.jpg" alt=""/>
              </div>
              <div>
                <p className="">
                  <span>
                    <strong>Coworking Space Lê Văn Lương </strong>
                    chiếm ưu thế tuyệt đối về vị trí đẹp bậc nhất của khu vực nội thành Hà Nội. Không chỉ thuận tiện cho việc đi lại mà còn tọa lạc ngay trung tâm kinh tế mới
                    của Quận Thanh Xuân – Là điều kiện thuận lợi để các doanh nghiệp dễ dàng hội nhập dòng giao thương.
                  </span>
                </p>
              </div>
              <ul className="pt-4 pb-8">
                <li><FiberManualRecord  style={ { fontSize: 10 } }/>  Nằm trên trục đường hướng trung tâm thành phố</li>
                <li><FiberManualRecord  style={ { fontSize: 10 } }/> Hai mặt tiếp giáp đường 40m rộng rãi di chuyển</li>
                <li><FiberManualRecord  style={ { fontSize: 10 } }/> Nằm tại cửa ngõ của KĐT Dương Nội Nam Cường</li>
              </ul>
              <div className="pt-6">
                <h3>
                  <b className="text-xl">TỔ HỢP TIỆN ÍCH ĐẲNG CẤP</b>
                </h3>
              </div>

              <div className="pt-3">
                <p className="">Golden Palm Tower là tòa nhà hỗn hợp gồm trung tâm thương mại, văn phòng cho thuê
                    và căn hộ cao cấp thiết kế sang trọng. Bởi vậy, ngay trong phạm vi tòa nhà đã là một tổ hợp các tiện
                    ích đẳng cấp bao gồm: Tầng hầm rộng rãi, Trường học, Nhà hàng, Siêu thị, Phòng gym,…</p>
                <p className="pt-3">Kế thừa những tiện ích có sẵn của tòa nhà cùng với sự đầu tư chỉn chu, tỉ mỉ của Hanoi Office, dịch vụ cho thuê văn phòng Lê Văn Lương
                    là sự hiện diện hoàn hảo của một không gian làm việc mang phong thái và đẳng cấp quốc tế. </p>
              </div>
              <div className="pt-2">
                <img src="https://hanoioffice.vn/wp-content/uploads/2020/11/coworking-spaces-le-van-luong.jpg" alt=""/>
                <p className="text-center font-bold italic pt-2">
                  <span >Đừng bỏ lỡ: Ưu đãi thuê 1 tặng 1 – </span>
                  <NavLink to="" className="text-blue-500" >Tặng đến 1000 giờ làm việc tại quận Ba Đình </NavLink>
                  <span>– Duy nhất 30 khách hàng!</span>
                </p>
              </div>
              <div>
                <span className="pt-4">
                    Với cơ sở mới này, Hanoi Office vẫn giữa nguyên đặc trưng làm nên thương hiệu của mình
                    là sự cầu toàn trong từng dịch vụ. Khi sử dụng bất kỳ gói thuê nào của dịch vụ cho thuê
                    văn phòng Lê Văn Lương, bạn đều sẽ được
                </span>
                <p> tận hưởng mọi tiện ích văn phòng ưu việt nhất; được hỗ trợ, tư vấn bởi những nhân viên chuyên nghiệp nhất;</p>
                <span>mọi hoạt động đều gói gọn trong một hệ sinh thái hoàn hảo.</span>
              </div>
              <h3 className="pb-4 pt-10">
                <b className="text-2xl">THIẾT KẾ SANG TRỌNG</b>
              </h3>
              <div className="text-lg pb-10">
                <p className="">Là một phần trong tổng thể hệ thống văn phòng Hanoi Office, bởi vậy cơ sở văn phòng cho thuê tại
                    Lê Văn Lương vẫn mang đậm phong cách thiết kế theo xu hướng tối giản đặc trưng. </p>
                <p className=" py-4">Tuy nhiên, nếu văn phòng cơ sở Hà Đông là điển hình cho không gian văn phòng xanh,
                    văn phòng tại Cầu giấy, Nam Từ Liêm mang đậm phong thái hiện đại, văn phòng tại Khuất Duy Tiến là sự độc
                    đáo giữa xu hướng truyền thống pha chút trẻ trung và văn phòng Ba Đình thiên về sự cổ điển thì
                    tại Lê Văn Lương lại toát lên sự sang trọng và đẳng cấp ngay khi mới bước vào.</p>
                <p >Với “thần thái” chuyên nghiệp toát ra ngay từ thiết kế, đây chắc chắn là không gian làm việc
                    lý tưởng cho bất kỳ ai: Từ các doanh nghiệp trẻ, startup
                    đến các doanh nghiệp lớn và cả những Freelancer tự do ưa thích sự mới mẻ, sáng tạo.</p>
              </div>
              <h3>
                <b className="text-2xl ">
                    HỆ THỐNG DỊCH VỤ HOÀN HẢO
                </b>
              </h3>
              <p className="py-4 text-lg">Với dịch vụ cho thuê văn phòng Lê Văn Lương, Hanoi Office cung
                  cấp đa dạng các dịch vụ bao gồm 5 dịch vụ chính và nhiều dịch vụ phụ khác. Cụ thể:</p>
              <h4>
                <b className="text-xl">1. Dịch vụ cho thuê Văn phòng trọn gói </b>
              </h4>
              <p className="text-lg py-4">Nếu bạn là một đội, nhóm hay là cả một doanh nghiệp và bạn đang tìm kiếm một nơi làm việc “sang chảnh” với mức chi phí “hạt dẻ” thì gói thuê Văn Phòng Trọn Gói của
                  Dịch vụ cho thuê Văn phòng Lê Văn Lương của Hanoi Office chắc chắn là một giải pháp toàn diện.</p>
              <div>
                <img src="https://hanoioffice.vn/wp-content/uploads/2020/11/phong-rieng-cho-thue-le-van-luong-2.jpg" alt=""/>
              </div>
              <div className="pt-4 text-lg">
                <span>
                    Với mức giá trọn gói chỉ từ
                </span>
                <b> 6.500.000 VNĐ/ tháng </b>
                <span>, bạn sẽ nhận được một trải nghiệm hoàn toàn mới bao gồm: 1 không gian văn phòng lý tưởng, 1 hệ sinh thái đầy đủ tiện nghi,
                  1 đội ngũ nhân viên luôn sẵn sàng support và một môi trường làm việc năng động, kích thích sáng tạo.</span>
                <div className="py-4">
                  <span >Đặc biệt, chỉ duy nhất trong tháng 3 này, khi sử dụng văn phòng trọn gói của dịch vụ cho thuê Văn phòng Lê Văn Lương – Hanoi Office,
                    bạn sẽ nhận được ưu đãi lên đến 50% giá thuê văn phòng – MỨC ƯU ĐÃI CHƯA TỪNG CÓ!</span>
                </div>
                <h4 className="text-xl">
                  <b>2. Dịch vụ cho thuê chỗ ngồi làm việc</b>
                </h4>
                <div className="text-lg pt-3">
                  <span className="">
                    Với thiết kế văn phòng mở và sở hữu nhiều hướng view “vàng”. Dịch vụ cho thuê văn phòng Lê Văn
                    Lương sẽ là điểm đến phù hợp cho những ai đang tìm kiếm một không gian năng động,
                    thoáng đãng, kích thích sự sáng tạo nhưng vẫn đảm bảo sự yên tĩnh để tập trung cả ngày dài.
                  </span>
                  <div className="py-4">
                    <span>Book chỗ ngồi tại Coworking Space Lê Văn Lương ngay hôm nay để nhận ưu đãi THUÊ 1 TẶNG 1 – TẶNG LÊN ĐẾN
                      1000 GIỜ làm việc miễn phí chỉ dành tặng cho 30 khách hàng may mắn nhất trong tháng 6 này!</span>
                  </div>
                </div>

                <h4 className="text-xl">
                  <b>3. Dịch vụ cho thuê Văn phòng ảo</b>
                </h4>
                <div className="pt-4">
                  <span>
                  Một văn phòng giao dịch, văn phòng đại diện đắc địa và tiện nghi,
                  một địa chỉ nhận bưu thư bưu phẩm chuyên nghiệp, một đội ngũ lễ tân xinh đẹp,
                  trẻ trung và một không gian sang trọng để tiếp khách,
                  hội họp là những gì mà gói thuê Văn Phòng Ảo của dịch vụ cho thuê văn Lê Văn Lương mang đến cho bạn.
                  </span></div>
                <div className="py-4">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/11/cho-thue-van-phong-ao-le-van-luong.jpg" alt=""/>
                  <div className="pt-2">
                    <p className="text-center">
                      <span className="pt-2 text-xl font-bold">
                    Xem ngay: Coworking Space trung tâm quận Hà Đông – Siêu tiện ích – Ưu đãi X2!</span>
                    </p>
                    <p className="pt-4"> <span>Với mức giá chỉ từ 900.000 VNĐ/ tháng, TẶNG thêm đến 2 tháng sử dụng MIỄN PHÍ Hanoi Office tự tin sẽ
                      mang đến một văn phòng với những trải nghiệm hoàn hảo nhất, ấn tượng nhất và tiết kiệm nhất!</span></p>
                  </div>
                </div>
                <h4 className="text-xl">
                  <b>4. Dịch vụ cho thuê phòng họp</b>
                </h4>
                <div className="py-4 text-lg">
                  <p><span>Chỉ từ 200.000 VNĐ/ giờ, sở hữu ngay phòng họp sang trọng, đầy
                   đủ thiết bị hiện đại tại một văn phòng hạng A. Chắc chắn đây sẽ là một khoản đầu tư xứng đáng dành cho
                   những đội, nhóm hay doanh nghiệp muốn gây ấn tượng với khách hàng mà vẫn vô cùng tiết kiệm.</span></p>
                </div>
                <h4 className="text-xl">
                  <b>5. Dịch vụ cho thuê phòng họp trực tuyến</b>
                </h4>
                <div className="pt-4 pb-2 text-xl">
                  <p>Không cần tốn tiền đầu tư trang thiết bị, không cần tốn sức setup cả một phòng họp kỳ công,
                      chỉ từ 400.000 VNĐ/ giờ, Hanoi Office sẽ cung cấp cho bạn một giải pháp làm việc làm việc thông minh và toàn diện.
                      Giải quyết công việc kịp thời, nắm bắt cơ hội mọi lúc, xóa bỏ mọi rào cản khoảng cách với dịch vụ
                      cho thuê phòng họp trực tuyến tại Hanoi Office.</p>
                </div>
                <div>
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/11/phong-hop-cho-thue-le-van-luong.jpg" alt=""/>
                </div>
                <p className="pt-4 text-lg"><span>
                    Ngoài ra, Hanoi Office còn cung cấp thêm nhiều dịch vụ
                    phụ khác, đồng hành và hỗ trợ bạn tối ưu trong công việc: Tư vấn thuế, tài chính,
                    kế toán, hỗ trợ ĐKKD, TLDN, soạn thảo văn bản, biên – phiên dịch,… với mức chi phí vô cùng rẻ!
                </span></p>
                <p className="text-lg py-8 ">
                  <span>Còn chần chừ gì nữa, liên hệ ngay hotline</span><b> 085.339.4567 – 0904.388.909</b>
                  <span> click chat inbox để nhận tư vấn và báo giá ưu đãi ngay hôm nay!</span>
                </p>

                <div className="text-4xl font-extrabold text-center text-red-600">
                  <h2><b>BÁO GIÁ CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG</b></h2>
                  <h2 className="pt-4"><b>TẠI CƠ SỞ GOLDEN PALM – 21 LÊ VĂN LƯƠNG</b></h2>
                </div>
                <div>
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/11/LVL.png" alt=""/>
                  <p className="text-center">------------------------------</p>
                </div>
                <div className="pb-8">
                  <div className="text-center text-red-600 font-extrabold text-lg ">
                    <h4>ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h4>
                    <h4>CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG LÊ VĂN LƯƠNG – QUẬN THANH XUÂN CỦA HANOI OFFICE</h4>
                  </div>
                  {/*nhập email*/}
                  <div className="grid grid-cols-12 gap-2 pt-2">
                    <div className="col-span-6">Họ và tên:*<br/>
                      <input type="text" className="w-full border-2 border-gray-300 py-3 rounded"/>

                    </div>
                    <div className="col-span-6">Email:*<br/>
                      <input type="text" className="w-full border-2 border-gray-300 py-3 rounded"/>
                    </div>
                  </div>
                  {/*nhập email*/}
                  <div className="grid grid-cols-12 gap-2 pt-2">
                    <div className="col-span-6">Số điện thoại:*<br/>
                      <input type="text" className="w-full border-2 border-gray-300 py-3 rounded"/>

                    </div>
                    <div className="col-span-6">Lựa chọn giải pháp:*<br/>
                      <input type="text" className="w-full border-2 border-gray-300 py-3 rounded"/>
                    </div>
                  </div>
                  <div>
                      Yêu cầu chi tiết<br/>
                    <textarea className="w-full border-2 border-gray-300 py-3 rounded pb-72"
                      placeholder="Hãy nhập yêu cầu chi tiết của bạn vào đây..."></textarea>
                  </div>
                  <div>
                    <input type="submit" value="Gửi yêu cầu" className="bg-blue-500 py-4 px-10 text-white font-bold rounded"/>
                  </div>
                </div>
                {/*Tiện ích*/}
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
                        <h5 className="font-bold">TẦNG 5</h5>
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
                <div className="py-10">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7899771476042!2d105.80759165312749!3d21.007077761058323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad90bdc697ef%3A0xaa9308cc6fc91083!2sHanoi%20Office!5e0!3m2!1svi!2s!4v1626623877795!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                </div>
                <div className="grid grid-cols-2 gap-2 border-b-2 pb-4">
                  <div className="">
                    <span className="grid grid-cols-3 ">
                      <span className="col-span-1"><RoomOutlined/> Địa chỉ đầy đủ:</span>
                      <span className="col-span-2 text-center font-bold">
                      21 Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội, Vietnam</span>
                    </span>
                    <span className="grid grid-cols-3 pt-3 ">
                      <span className="col-span-1 "><CloudOutlined/>ZIP Code:</span>
                      <span className="col-span-2 text-center font-bold">
                      	100000</span>
                    </span>
                  </div>
                  <div className="">
                    <span className="grid grid-cols-3 ">
                      <span className="col-span-1"><RoomOutlined/> Địa chỉ :</span>
                      <span className="col-span-2 text-center font-bold">
                     	Tầng 5, 21 Lê Văn Lương</span>
                    </span>
                    <span className="grid grid-cols-3 pt-8 ">
                      <span className="col-span-1 "><Public/> Quốc gia:</span>
                      <span className="col-span-2 text-center font-bold">
                      	VN</span>
                    </span>
                  </div>
                </div>
                <div className="pt-6">
                  <h5 className="font-bold">Có Thể Bạn Quan Tâm</h5>
                </div>
                <div className="pt-4">
                  <NavLink to="">
                    <img className="w-64" src="https://hanoioffice.vn/wp-content/uploads/2020/11/phong-rieng-cho-thue-le-van-luong.jpg" alt="" />
                    <h3 className="pt-3 font-bold">HANOI OFFICE THANH XUÂN</h3>
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
        <div className="col-span-2">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/12/dich-vụ-cho-thuê-văn-phòng-tại-Hà-Nội.gif" alt="" />
          <h1 className="text-lg font-bold pt-12">
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

      {/*<div className="pt-8 grid grid-cols-8 gap-4 mx-80">*/}
      {/*  <div className="col-span-2" >*/}
      {/*       1*/}
      {/*  </div>*/}
      {/*  <div className="col-span-6" >*/}
      {/*    2*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
export default LeVanLuong;