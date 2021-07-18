import React from 'react';

import {
  CheckCircleOutline,
  CloudOutlined,
  FiberManualRecord,
  LocationOnOutlined, Public,
  RemoveRedEye
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const TamChinh = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Tam Trinh</h1>
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
                      <span className="block text-xs font-extrabold">150 m2</span>
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
                      <span className="block text-xs font-extrabold">Sang trọng</span>
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
              <h2 className="font-bold text-2xl">HANOI OFFICE TAM TRINH – HOÀNG MAI</h2>
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
              <span className="pl-1 text-sm border-r pr-4 py-2">719</span>

            </div>
            <div className="col-span-2 text-right pt-2">
              <span>Property ID: </span>
              <span className="font-bold">8</span>
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
                    <span className="font-bold">150 m2</span>
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
                    <span className="font-bold pl-1"></span>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-phong-lam-viec-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-12">Phòng Làm Việc:</span>
                    <span className="font-bold">Sang trọng</span>
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
                    <span className="font-bold pl-5"></span>
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
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-co-working-space-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-4">Chỗ Ngồi Làm Việc</span>
                    <span className="font-bold">Chỉ từ 700.000 VNĐ/tháng</span>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div>
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/uploads/2020/06/icon-van-phong-tron-goi-dark.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-2">Trụ Sở Doanh Nghiệp</span>
                    <span className="font-bold">Chỉ 800.000 VNĐ/tháng</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-300 pt-8"></div>
            <div className="grid grid-cols-7 pt-8">
              <div className="col-span-1">
                <h5 className="font-bold">GIỚI THIỆU</h5>
              </div>
              <div className="col-span-6 pl-4">
                <span>Dịch vụ </span>
                <span className="font-bold">cho thuê văn phòng quận Hoàng Mai </span>
                <span>với mô hình văn phòng kết hợp cà phê độc đáo. Là giải pháp</span>
                <p>hiệu quả cho các doanh nghiệp, freelancer đang tìm kiếm một địa chỉ làm việc hoàn hảo. Không gian văn</p>
                <p>phòng cho thuê tại đây hứa hẹn sẽ không làm bạn thất vọng.</p>
                <div className="pt-4">
                  <img className="mx-auto w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/12/cho-thue-van-phong-tam-trinh-2.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-2xl">Khám phá chỗ ngồi làm việc kết hợp mô hình cà phê sang trọng</h5>
                  <h5 className="font-bold text-2xl">và đẳng cấp</h5>
                </div>
                <div className="pt-6">
                  <div>
                    <p>Hanoi Office – cái tên không còn xa lạ trên thị trường cho thuê văn phòng chuyên nghiệp và hiện đại. Khác</p>
                    <p>với các thiết kế văn phòng tại các cơ sở trước, Hanoi Office Hoàng Mai là mô hình mới lạ được tạo nên bởi</p>
                    <p>sự kết hợp độc đáo giữa văn phòng làm việc và quán cà phê.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <p>Cùng Hanoi Office khám phá những đặc điểm thú vị tại cơ sở này.</p>
                </div>
                <div className="pt-6">
                  <h5 className="font-bold text-xl">Cho thuê văn phòng quận Hoàng Mai kết hợp quán cà phê cực “chill”</h5>
                </div>
                <div className="pt-6">
                  <p>Bạn nghĩ sao khi được làm việc trong một mô hình văn phòng kết hợp với quán cà phê? Đây là một trải nghiệm</p>
                  <p>rất thú vị và đáng thử. Không còn là những mô hình văn phòng truyền thống rập khuôn, bí bách và tách biệt.Với</p>
                  <p>cách thiết kế thông minh, văn phòng Hanoi Office tại quận Hoàng Mai vẫn tạo nên sự riêng tư,yên tĩnh và giúp</p>
                  <p>bạn tập trung trong công việc.</p>
                </div>
                <div className="pt-2">
                  <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/12/cho-thue-cho-ngoi-lam-viec-quan-hoang-mai-2-01.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <p>Tại văn phòng cho thuê quận Hoàng Mai của Hanoi Office bạn được hòa mình vào không gian làm việc cực</p>
                  <p>chill. Với những món đồ uống đa dạng tươi ngon, sẽ giúp bạn giải tỏa tinh thần trong một ngày dài làm việc.</p>
                </div>
                <div className="pt-6">
                  <h5 className="font-bold text-xl">Vị trí đắc địa</h5>
                </div>
                <div className="pt-6">
                  <p>Tọa lạc tại tầng 1 tòa nhà Helios số 75 Tam Trinh, quận Hoàng Mai. Là một vị trí vô cùng thuận lợi cho các</p>
                  <p>doanh nghiệp. Văn phòng cho thuê quận Hoàng Mai nằm tại khu vực dân cư đông đúc và nhộn nhịp, đầy đủ</p>
                  <p>tiện ích.</p>
                </div>
                <div className="pt-3">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Nằm gần ngã tư Tam Trinh – Cầu Mai Động</span>
                </div>
                <div className="pt-1">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Cách hồ Hoàn Kiếm 15 phút chạy xe</span>
                </div>
                <div className="pt-1">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Tòa nhà gần các khu đô thị lớn như: Time City, Hòa Bình Green City</span>
                </div>
                <div className="pt-1">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Gần các trường đại học lớn: Xây Dựng, Bách Khoa, Kinh tế quốc dân, Kinh tế kỹ thuật công nghiệp…</span>
                </div>
                <div className="pt-1">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Cách bệnh viện Thanh Nhàn 2,5 km</span>
                </div>
                <div className="pt-1">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Giao thông thuận lợi: Cách cầu Vĩnh Tuy 3,2 km, cách cầu Thanh Trì 4 km…</span>
                </div>
                <div className="pt-1">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span>Cách trung tâm thương mại Aeon Mall Long Biên 10 phút chạy xe</span>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-xl">Tổ hợp tiện ích cao cấp</h5>
                </div>
                <div className="pt-4">
                  <p>Tòa nhà Helios được thiết kế theo mô hình chung cư hiện đại, trẻ trung mang đến nhiều tiện ích và sự thoải</p>
                  <p>mái cho người sử dụng. Được xây dựng với tổ hợp thương mại, siêu thị, văn phòng và nhà ở. Gồm 3 tầng</p>
                  <p>hầm sử dụng làm chỗ để xe, kết hợp nhiều dịch vụ như phòng tập gym, bể bơi bốn mùa với phòng xông hơi,</p>
                  <p>spa…</p>
                </div>
                <div className="pt-2">
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/12/cho-thue-van-phong-tam-trinh.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <p>Thừa hưởng những tiện ích sẵn có của tòa nhà, Hanoi Office cung cấp dịch vụ cho thuê văn phòng quận</p>
                  <p>Hoàng Mai với thiết kế đơn giản nhưng đem lại nhiều công năng sử dụng nhất. Còn gì thích hơn khi xung</p>
                  <p>quanh nơi làm việc là những tiện ích giúp bạn giải tỏa stress và relax sau một ngày làm việc mệt mỏi.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">Sử dụng dịch vụ phòng họp, phòng khách trên toàn bộ hệ thống văn phòng cho thuê của</h5>
                  <h5 className="font-bold text-lg">Hanoi Office</h5>
                </div>
                <div className="pt-4">
                  <p>Đặc biệt, khi bạn sử dụng dịch vụ cho thuê văn phòng quận Hoàng Mai tại Hanoi Office. Bạn sẽ được sử</p>
                  <p>dụng phòng họp, phòng khách trên toàn hệ thống văn phòng của chúng tôi, bao gồm 7 cơ sở tại các quận</p>
                  <p>trung tâm thành phố Hà Nội:</p>
                </div>
                <div className="pt-6">
                  <div>
                    <span className="italic font-bold text-lg">1.</span>
                    <NavLink to="" className="text-blue-600 text-lg" >Văn phòng cho thuê quận Thanh Xuân</NavLink>
                    <span>: Tòa nhà Zen Tower, số 12 Khuất Duy Tiến</span>
                  </div>
                  <div>
                    <span className="italic font-bold text-lg">2.</span>
                    <NavLink to="" className="text-blue-600 text-lg" >Văn phòng cho thuê tại Lê Văn Lương</NavLink>
                    <span>: Tòa nhà Golden Palm, số 21 Lê Văn Lương</span>
                  </div>
                  <div>
                    <span className="italic font-bold text-lg">3.</span>
                    <NavLink to="" className="text-blue-600 text-lg" >Văn phòng cho thuê quận Cầu Giấy</NavLink>
                    <span>: Tòa nhà Sannam, số 78 Duy Tân</span>
                  </div>
                  <div>
                    <span className="italic font-bold text-lg">4.</span>
                    <NavLink to="" className="text-blue-600 text-lg" >Văn phòng cho thuê quận Nam Từ Liêm</NavLink>
                    <span>: Tòa nhà AT Building số 9 ngõ 7 Lê Đức Thọ</span>
                  </div>
                  <div>
                    <span className="italic font-bold text-lg">5.</span>
                    <NavLink to="" className="text-blue-600 text-lg" >Văn phòng cho thuê quận Ba Đình</NavLink>
                    <span>: Tòa nhà VMQ, số 87 Nguyễn Thái Học</span>
                  </div>
                  <div>
                    <span className="italic font-bold text-lg">6.</span>
                    <NavLink to="" className="text-blue-600 text-lg" >Văn phòng cho thuê tại Trần Phú, Hà Đông</NavLink>
                    <span>: Tòa nhà Sông Đà, số 131 Trần Phú</span>
                  </div>
                  <div>
                    <span className="italic font-bold text-lg">7.</span>
                    <NavLink to="" className="text-blue-600 text-lg" >Văn phòng cho thuê quận Hà Đông</NavLink>
                    <span>: Tòa nhà HUD3, số 121-123 Tô Hiệu</span>
                  </div>
                </div>
                <div className="pt-6">
                  <h5 className="font-bold text-lg">Cho thuê văn phòng quận Hoàng Mai với các gói dịch vụ hấp dẫn</h5>
                </div>
                <div className="pt-4">
                  <span>Đến với </span>
                  <span className="font-bold">văn phòng cho thuê quận Hoàng Mai </span>
                  <span>bạn sẽ cảm nhận dịch vụ </span>
                  <span className="font-bold">“ít nhưng chất”.</span>
                  <span>Với 2 gói dịch vụ hấp</span>
                  <p>dẫn sau.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">1. Gói đăng ký trụ sở doanh nghiệp</h5>
                </div>
                <div className="pt-4">
                  <p>Trụ sở đăng ký kinh doanh là nơi thể hiện phong cách riêng, tính chuyên nghiệp cũng là bộ mặt của từng</p>
                  <p>doanh nghiệp hiện nay. Sử dụng gói đăng ký trụ sở doanh nghiệp tại quận Hoàng Mai với văn phòng sang –</p>
                  <p>xịn – mịn giúp doanh nghiệp ghi điểm tuyệt đối với khách hàng và đối tác. Cải thiện niềm tin và hình ảnh của</p>
                  <p>công ty.</p>
                </div>
                <div className="pt-4">
                  <p>Dịch vụ đăng ký trụ sở doanh nghiệp tại Hanoi Office chuyên nghiệp, nhanh chóng, tiện lợi với mức giá vô</p>
                  <p>cùng tốt so với những tòa nhà khác. Hanoi Office hỗ trợ tư vấn các thủ tục đăng ký thành lập doanh nghiệp</p>
                  <p>được thực hiện nhanh chóng, chính xác, tiết kiệm thời gian, chi phí cho khách hàng. Thủ tục hồ sơ được</p>
                  <p>hoàn thành đúng thời gian đảm bảo khách hàng sẽ hài lòng.</p>
                </div>
                <div className="pt-2">
                  <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/12/cho-thue-van-phong-tam-trinh-2.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <p>Chỉ với 800.000VNĐ/tháng bạn có ngay địa chỉ làm trụ sở công ty chuyên nghiệp. Cùng rất nhiều ưu đãi hấp</p>
                  <p>dẫn nhân dịp khai trương.</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold italic">Chương trình khuyến mãi:</h5>
                </div>
                <div className="pt-4">
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Tặng 3 voucher cho đồ ăn/uống bất kỳ tại Station Coffee.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Giảm giá 20% đồ uống toàn bộ menu với khách hàng Hanoi Office tại Station Coffee.</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Miễn phí 3 tiếng sử dụng phòng họp/tháng trên toàn hệ thống văn phòng Hanoi Office</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Miễn phí 8 lượt (4 tiếng) sử dụng khu vực phòng khách/tháng trên toàn hệ thống văn phòng Hanoi Office</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Miễn phí 80 trang in/photo khổ A4 đen trắng</span>
                  </div>
                  <div>
                    <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                    <span>Miễn phí 5 ngày làm việc/ tháng</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold text-lg">2. Dịch vụ cho thuê chỗ ngồi làm việc</h5>
                </div>
                <div className="pt-4">
                  <p>Bạn là một freelancer? Là nhóm dự án hay nghiên cứu thị trường? Bạn cần một chỗ ngồi làm việc đáp ứng</p>
                  <p>đầy đủ các tiêu chí: Chỗ ngồi yên tĩnh, có không gian riêng, có view check in đẹp và ảo diệu, giá tốt… Hãy thử</p>
                  <p>ngay dịch vụ cho thuê chỗ ngồi làm việc tại Hoàng Mai.</p>
                </div>
                <div className="pt-2">
                  <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/12/cho-thue-van-phong-tam-trinh-3.jpg" alt="" />
                </div>
                <div className="pt-4">
                  <p>Hanoi Office cung cấp 2 gói dịch vụ cho thuê chỗ ngồi làm việc bao gồm:</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold">Chỗ ngồi linh hoạt</h5>
                </div>
                <div className="pt-4">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span className="text-blue-600 font-bold italic">Chỗ ngồi linh hoạt gói 60 giờ</span>
                  <span>: Giá chỉ </span>
                  <span className="text-red-600 font-bold">500.000 </span>
                  <span className="font-bold">VNĐ/tháng</span>
                </div>
                <div className="pt-4">
                  <span className="font-bold italic">Khuyến mãi: </span>
                  <p>+ Tặng 2 voucher cho đồ ăn/uống bất kỳ tại Station Coffee.</p>
                  <p>+ Giảm giá 20% đồ uống toàn bộ menu với khách hàng Hanoi Office tại Station Coffee. </p>
                </div>
                <div className="pt-4">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span className="text-blue-600 font-bold italic">Chỗ ngồi linh hoạt gói 200 giờ</span>
                  <span>: Giá chỉ </span>
                  <span className="text-red-600 font-bold">4.000 </span>
                  <span className="font-bold">VNĐ/tháng</span>
                </div>
                <div className="pt-4">
                  <span className="font-bold italic">Khuyến mãi: </span>
                  <p>+ Tặng 5 voucher cho đồ ăn/uống bất kỳ tại Station Coffee.</p>
                  <p>+ Giảm giá 20% đồ uống toàn bộ menu với khách hàng Hanoi Office tại Station Coffee.  </p>
                  <p>+ Tặng thêm 200 giờ cho 3 tháng tiếp theo</p>
                </div>
                <div className="pt-4">
                  <h5 className="font-bold">Chỗ ngồi cố định</h5>
                </div>
                <div className="pt-4">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span className="text-blue-600 font-bold italic">Chỗ ngồi cố định không lấy địa chỉ đăng ký kinh doanh</span>
                  <span>: Giá chỉ </span>
                  <span className="text-red-600 font-bold">700.000 </span>
                  <span className="font-bold">VNĐ/tháng</span>
                </div>
                <div className="pt-4">
                  <span className="font-bold italic">Khuyến mãi: </span>
                  <p>+ Tặng 5 voucher cho đồ ăn/uống bất kỳ tại Station Coffee.</p>
                  <p>+ Giảm giá 20% đồ uống toàn bộ menu với khách hàng Hanoi Office tại Station Coffee. </p>
                  <p>+ Miễn phí 5 tiếng sử dụng phòng họp/tháng trên toàn hệ thống văn phòng Hanoi Office</p>
                  <p>+ Miễn phí 16 lượt (8 tiếng) sử dụng khu vực phòng khách/tháng trên toàn hệ thống văn phòng Hanoi Office</p>
                  <p>+ Miễn phí 80 trang in/photo khổ A4 đen trắng</p>
                </div>
                <div className="pt-4">
                  <FiberManualRecord className="w-6 pr-3 pb-0.5" />
                  <span className="text-blue-600 font-bold italic">Chỗ ngồi cố định có lấy địa chỉ đăng ký kinh doanh</span>
                  <span>: Giá chỉ </span>
                  <span className="text-red-600 font-bold">1.000.000 </span>
                  <span className="font-bold">VNĐ/tháng</span>
                </div>
                <div className="pt-4">
                  <span className="font-bold italic">Khuyến mãi: </span>
                  <p>+ Tặng 6 voucher cho đồ ăn/uống bất kỳ tại Station Coffee.</p>
                  <p>+ Giảm giá 20% đồ uống toàn bộ menu với khách hàng Hanoi Office tại Station Coffee. </p>
                  <p>+ Miễn phí 5 tiếng sử dụng phòng họp/tháng trên toàn hệ thống văn phòng Hanoi Office</p>
                  <p>+ Miễn phí 16 lượt (8 tiếng) sử dụng khu vực phòng khách/tháng trên toàn hệ thống văn phòng Hanoi Office</p>
                  <p>+ Miễn phí 80 trang in/photo khổ A4 đen trắng</p>
                </div>
                <div className="pt-4">
                  <p>Cho thuê văn phòng quận Hoàng Mai với mô hình văn phòng và cafe kết hợp là sự lựa chọn tuyệt vời cho các</p>
                  <p>dự án kinh doanh, phát triển công ty tiết kiệm chi phí và linh hoạt nhất. </p>
                </div>
                <div className="pt-4">
                  <span>Liên hệ ngay với Hanoi Office qua </span>
                  <span className="font-bold">Hotline 085.339.4567 – 0904.388.909 </span>
                  <span>để nhận tư vấn, báo giá nhanh và</span>
                  <p>chính xác nhất!</p>
                </div>
                <div className="pt-4 text-center">
                  <h5 className="font-bold text-red-600 text-2xl">BẢNG BÁO GIÁ CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG</h5>
                  <h5 className="font-bold text-red-600 text-2xl pt-3">TẠI CƠ SỞ TAM TRINH – HOÀNG MAI</h5>
                  <NavLink to="">
                    <img src="https://hanoioffice.vn/wp-content/uploads/2020/12/Tam-Trinh.png" alt="" />
                  </NavLink>
                </div>
                <div className="pt-4 text-center">
                  --------------------------------------------------
                </div>
                <div className="pt-6">
                  <div className="text-center">
                    <h5 className="font-bold text-red-600 text-xl">ĐĂNG KÝ NHẬN TƯ VẤN VÀ BÁO GIÁ</h5>
                    <h5 className="font-bold text-red-600 text-xl pt-3">CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG QUẬN HOÀNG MAI CỦA HANOI OFFICE</h5>
                  </div>
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
                          <h5 className="font-bold">TẦNG 1</h5>
                        </div>
                        <div className="text-right col-span-3">
                          <span className="text-sm">DIỆN TÍCH: </span>
                          <span className="font-bold pr-2 text-sm"> </span>
                          <span className="text-sm">PHÒNG LÀM VIỆC:  </span>
                          <span className="font-bold pr-2 text-sm"> </span>
                          <span className="text-sm">CHỖ NGỒI: </span>
                          <span className="font-bold text-sm"></span>
                        </div>
                      </div>
                      <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/floorplan.png" alt="" />
                    </div>
                  </div>
                  <div className="pt-6 border-b border-gray-300"></div>
                  <div className="pt-6">
                    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.53499132198164!2d105.8626366434166!3d20.995459762691276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad9d478d64df%3A0xb427f74de50783fd!2sHanoi%20Office!5e0!3m2!1svi!2s!4v1626621081317!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                    <div className="grid grid-cols-2 pt-4 gap-3">
                      <div>
                        <LocationOnOutlined className="pr-3 text-sm" />
                        <span className="text-sm pr-12">Địa chỉ đầy đủ:</span>
                        <span className="font-bold">75 Đường Tam Trinh, Vĩnh Tuy, Hai Bà Trưng, Hà Nội, Vietnam</span>
                      </div>
                      <div>
                        <LocationOnOutlined className="pr-3 text-sm" />
                        <span className="text-sm pr-12">Địa chỉ:</span>
                        <span className="font-bold">Tầng 1 Helios Tower 75 Tam Trinh</span>
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
export default TamChinh;