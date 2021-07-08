import React from 'react';

import {
  CompareArrows,
  Devices,
  // eslint-disable-next-line no-unused-vars
  EditLocationOutlined, FiberManualRecord,
  FreeBreakfast,
  Group,
  Home,
  Room,
  VerifiedUser,
  Wifi,
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const MeetingRoom = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-16 pt-1">
        <div className="">
          <img className="w-full h-full"
            src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong.jpg" alt=""/>
        </div>
        <div className="py-24">
          <h1 className="text-center font-bold text-3xl">HANOI OFFICE - CHO THUÊ PHÒNG HỌP HIỆN ĐẠI</h1>
          <h3 className="text-center py-6 text-lg text-gray-600">Hãy đặt lịch thuê phòng họp phù hợp với nhu
                        cầu của bạn!</h3>
          <div className="pr-8 ">
            <div className="grid grid-cols-2 gap-14 ">
              <div className="pt-4">
                <div >
                  <span><p className="text-gray-600">Họ và Tên:*</p>
                  </span>
                  <div className="pt-4">
                    <input
                      className="shadow py-4 w-full text-gray-700"
                      id="username" type="text"/>
                  </div>
                </div>
                <div className="pt-4">
                  <span><p className="text-gray-600">Số điện Thoại:*</p>
                  </span>
                  <div className="pt-4">
                    <input
                      className="shadow py-4 w-full text-gray-700"
                      id="username" type="text"/>
                  </div>
                </div>
              </div>
              {/*tttt*/}
              <div className="pt-4">
                <div >
                  <span><p className="text-gray-600">Email:*</p>
                  </span>
                  <div className="pt-4">
                    <input
                      className="shadow py-4 w-full text-gray-700"
                      id="username" type="text"/>
                  </div>
                </div>
                <div className="pt-4">
                  <span><p className="text-gray-600">Ngày họp:*</p>
                  </span>
                  <div className="pt-4">
                    <input
                      className="shadow py-4 w-full text-gray-700"
                      id="username" type="date"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <span><p className="text-gray-600">Yêu cầu chi tiết:</p></span>
              <input
                className="shadow py-4 w-full text-gray-700"
                id="username" type="text" placeholder="Chọn địa điểm"/>
            </div>
          </div>

          <div className="pt-4">
            <button className="bg-blue-500 rounded py-2 px-12 text-white">GỬI</button>
          </div>
        </div>
      </div>
      {/*bg-blue*/}
      <div className="bg-blue-500 px-40">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <p className="text-white pl-24 py-10 font-bold text-2xl  ">Bạn đang tìm thuê phòng họp chuyên nghiệp – hiện đại và cần được tư vấn?
                            Hãy để Hanoi Office giúp bạn!</p>
          </div>
          <div className="py-10">
            <button className="ml-32 border font-bold border-white-500 bg-white text-black px-12  py-4 hover:bg-blue-500  rounded">GỌI CHO HÀ NỘI OFFICE</button>
          </div>

        </div>
      </div>

      <div className=" px-72 pt-16">
        <div className="text-4xl py-8 px-16">
          <p className=" inline-block ">CHO THUÊ PHÒNG HỌP HIỆN ĐẠI & PHÙ HỢP VỚI  </p>
          <p className="pl-2 inline-block font-bold ">MỌI NHU CẦU TẠI HÀ NỘI</p></div>
        <div className="text-xl text-gray-600">
          <p> Hanoi Office cho thuê phòng họp – Phòng hội nghị với trang thiết bị hiện đại, tiện nghi, nhiều phòng họp sức chứa khác nhau, máy chiếu hiện đại, màn hình 4K sắc nét, đàm thoại hội nghị đáp ứng đầy đủ mọi nhu cầu của khách hàng.</p>

          <p className="py-6">Tại Hanoi Office, bạn có thể hoàn toàn yên tâm rằng toàn bộ các hoạt động, thông tin cá nhân cũng như doanh nghiệp của bạn được bảo đảm bảo mật an toàn.</p>
          <p className="py-6">
                        Trong vô vàn lựa chọn khác nhau, chắc hẳn các doanh nghiệp đang rất băn khoăn nên thuê phòng họp như thế nào cho những buổi hội nghị khách hàng, đại hội cổ đông hay thuê phòng tổ chức hội thảo mang tính chuyên nghiệp.
          </p>
          <p>  Hãy đến với Hanoi Office – Dịch vụ cho thuê phòng họp đẹp tại Hà Nội để được tư vấn các mẫu phòng họp hiện đại nhất với chi phí tiết kiệm nhất cho những sự kiện quan trọng sắp tới của quý vị.</p>

        </div>

      </div>
      <div className="mx-auto">
        <img className="mx-auto w-2/4 h-full" src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-tai-ha-noi.jpg" alt=""/>
      </div>
      <div className="pt-12 pb-20">
        <div className="border-b-2">
          <h1 className="text-center font-bold text-2xl">HANOI OFFICE - CHO THUÊ PHÒNG HỌP VỚI 8 ƯU ĐIỂM NỔI BẬT</h1>
        </div>
        <div className="grid grid-cols-4 gap-4 px-64 mx-20 pt-8">
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <Room  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center text-xl font-bold">ĐỊA CHỈ KINH DOANH</p>
            <p className="text-left text-xl">Cho thuê địa chỉ đăng ký kinh doanh Hà Nội sang trọng và hiện đại ở những vị trí đắc địa nhất tại Thủ đô.</p>
          </div>
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <Group  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center font-bold text-xl">SỨC CHỨA ĐA DẠNG</p>
            <p className="text-left text-xl">Hanoi Office với hệ thống phòng họp với đa sức chứa, phù hợp với mọi quy mô nhân sự: Từ 1 đến 40 người tùy theo mục đích sử dụng.</p>
          </div>
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <CompareArrows  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center font-bold text-xl">PHÙ HỢP MỌI MỤC ĐÍCH</p>
            <p className="text-left text-xl">Nhân viên đại diện chuyên nghiệp và xinh đẹp sẽ xử lý những công việc trong phạm vi cho phép khi bạn vắng mặt.</p>
          </div>
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <Home  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center text-xl font-bold">KHÔNG GIAN HIỆN ĐẠI</p>
            <p className="text-left text-xl">Được sử dụng linh hoạt Phòng họp và Phòng khách sang trọng để tiếp khách trên toàn hệ thống của Hanoi Office.</p>
          </div>
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <Devices  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center font-bold text-xl">THIẾT BỊ VĂN PHÒNG</p>
            <p className="text-left text-xl">Cho thuê địa chỉ đăng ký kinh doanh Hà Nội sang trọng và hiện đại ở những vị trí đắc địa nhất tại Thủ đô.</p>
          </div>
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <VerifiedUser  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center font-bold text-xl">ĐỊA CHỈ KINH DOANH</p>
            <p className="text-left text-xl">Cho thuê địa chỉ đăng ký kinh doanh Hà Nội sang trọng và hiện đại ở những vị trí đắc địa nhất tại Thủ đô.</p>
          </div>
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <Wifi  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center font-bold text-xl">ĐỊA CHỈ KINH DOANH</p>
            <p className="text-left text-xl">Cho thuê địa chỉ đăng ký kinh doanh Hà Nội sang trọng và hiện đại ở những vị trí đắc địa nhất tại Thủ đô.</p>
          </div>
          <div className="">
            <div className="text-center">
              <span className="text-blue-500"> <FreeBreakfast  primary  url="" style={ { fontSize: 100 } } /></span>
            </div>
            <p className="text-center font-bold text-xl">ĐỊA CHỈ KINH DOANH</p>
            <p className="text-left text-xl">Cho thuê địa chỉ đăng ký kinh doanh Hà Nội sang trọng và hiện đại ở những vị trí đắc địa nhất tại Thủ đô.</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 px-40 ">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <p className="text-white pl-24 py-10 font-bold text-2xl  ">Bạn đang tìm thuê phòng họp chuyên nghiệp – hiện đại và cần được tư vấn?
                            Hãy để Hanoi Office giúp bạn!</p>
          </div>
          <div className="py-10">
            <button className="ml-32 border font-bold border-white-500 bg-white text-black px-12  py-4 hover:bg-blue-500  rounded">GỌI CHO HÀ NỘI OFFICE</button>
          </div>
        </div>
      </div>

      {/*  text-img*/}
      <div className="px-64 pt-8 text-center">
        <h1 className="text-xl font-bold border-b-2 text-2xl">HÌNH ẢNH PHÒNG HỌP CHO THUÊ TẠI HANOI OFFICE - THIẾT KẾ HIỆN ĐẠI & SANG TRỌNG</h1>

        <div className="grid grid-cols-2 gap-6 pt-8">
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-02.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-04.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-01.jpg" alt=""/>
          </div>
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-06.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-03.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-07.jpg" alt=""/>
          </div>
        </div>
      </div>
      {/*content*/}
      <div>
        <div className="px-64 py-8"><h1 className="text-3xl font-bold">HANOI OFFICE – CHO THUÊ PHÒNG HỌP ĐA DẠNG – ĐA SỨC CHỨA</h1></div>
        <div className="px-64 text-xl text-gray-800">
          <p>Hanoi Office cho thuê phòng họp trực tuyến – Phòng họp hội nghị được đặt trong tòa nhà văn phòng hiện đại, chất lượng dịch vụ hạng A, thiết kế bắt kịp xu hướng thời đại 5.0 giúp nâng tầm doanh nghiệp của bạn. Hình ảnh công ty của bạn sẽ trở nên chuyên nghiệp, có sức ảnh hưởng tới khách hàng và đối tác</p>
          <p className="py-2">Quý khách có thể lựa chọn được một phòng họp sang trọng đáp ứng đủ 4 tiêu chí cơ bản của 1 phòng họp đạt chuẩn với dịch vụ cho thuê phòng hội thảo tại Hà Nội của Hanoi Office, bao gồm:</p>
          <p>Đối tượng sử dụng đa dạng, bố cục hợp lý, màu sắc, ánh sáng hài hòa, cũng như nội thất tinh tế bên trong phòng họp.</p>
        </div>
      </div>

      <div className="py-4 px-64">
        <h1 className="text-2xl font-bold">Thiết kế phòng họp cho thuê phù hợp với nhiều đối tượng sử dụng</h1>
        <p className="text-gray-800 text-xl">Với sứ mệnh tối ưu chi phí cho các doanh nghiệp, đã thiết kế và cho thuê phòng hội thảo Hà Nội với giá vô cùng rẻ. Hanoi Office cho thuê phòng họp lớn nhỏ tại Hà Nội, với các phòng họp cho thuê phù hợp với đối tượng sau:</p>
        <div className="text-lg pt-4">
          <ul>
            <li><FiberManualRecord/> Giám đốc doanh nghiệp vừa & nhỏ</li>
            <li><FiberManualRecord/>Cá nhân vừa mới thành lập doanh nghiệp</li>
            <li><FiberManualRecord/>Chuyên viên tư vấn/ Nhóm dự án</li>
            <li><FiberManualRecord/>Công ty nước ngoài hoạt động trong thời gian thăm dò thị trường</li>
            <li><FiberManualRecord/>Các cá nhân/doanh nghiệp hay phải đi công tác.</li>
          </ul>
        </div>
      </div>
      <div className="px-64 pt-4">
        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/10/Phong-hop-cho-thue.jpg" alt=""/>
        <p  className="pt-11 text-xl text-gray-800">Khi quý khách hàng cần tổ chức những buổi hội nghị khách hàng, đại hội cổ đông, các hình thức meeting và đang tìm kiếm một địa điểm thuê phòng hội thảo ở Hà Nội chuyên nghiệp hãy liên hệ ngay cho Hanoi Office để được sử dụng dịch vụ cho thuê phòng họp thông minh, chuyên nghiệp với mức giá tiết kiệm nhất.</p>
        <h1 className="font-bold text-2xl py-4">Bố cục hài hòa giữa hiện đại và sang trọng</h1>
        <p className="text-xl">Một trong các tiêu chí quan trọng khác khi lựa chọn đơn vị cho thuê phòng họp chính là cách sắp xếp không gian.

                    Phòng họp cho thuê tại Hanoi Office đảm bảo sự tương tác giữa những người tham gia, giữa người thuyết trình diễn giả được thuận lợi nhất.

                    Đặc biệt, phòng họp do Hanoi Office cung cấp luôn có khoảng không gian dự liệu cần thiết cho các loại máy chiếu, hệ thống đàm thoại hội nghị, các thiết bị âm thanh, ánh sáng nhằm phục vụ và nâng cao chất lượng cuộc họp.</p>
        <h1 className="py-4 font-bold text-2xl">Ánh sáng và màu sắc</h1>

        <p className="text-xl">Tất cả các phòng họp của Hanoi Office đều được thiết kế màu sắc và ánh sáng hài hòa tốt nhất, tạo cảm giác dễ chịu, thoải mái đồng thời cũng không mất đi cảm giác nghiêm nghị của buổi họp</p>
        <h1 className="py-4 font-bold text-2xl">Nội thất phòng họp</h1>
        <p className="text-xl ">
                    Nội thất tại Hanoi Office được sắp xếp vị trí phù hợp, thể hiện sự tôn trọng, đảm bảo được các yếu tố thuận lợi nhất cho chủ tọa và người tham gia cuộc họp.
                    Bàn ghế mới 100%, sang trọng, hài hòa với văn phòng, phù hợp với mục đích sử dụng, đảm bảo được các yếu tố thuận lợi nhất cho chủ tọa và người tham gia cuộc họp.

                    Với dịch vụ cho thuê văn phòng chuyên nghiệp của Hanoi Office và đặc biệt là dịch vụ cho thuê Phòng họp, Quý khách hàng sẽ tiết kiệm được thời gian quản lý và chi phí đồng thời được sử dụng các dịch vụ chuyên nghiệp cho các hoạt động kinh doanh của mình.

                    Hanoi Office chính là sự lựa chọn hoàn hảo cho Quý khách hàng cần thuê phòng họp mang tính chuyên nghiệp, hiện đại với mức giá hợp lý nhất.

                    Vui lòng liên hệ ngay với chúng tôi qua Hotline: 085.339.4567 – 0904.388.909 để được hỗ trợ và báo giá cho thuê phòng họp tại Hà Nội chi tiết nhất!

                    Hệ thống phòng họp cho thuê của Hanoi Office:
        </p>

        <div className="pt-4">
          <ul>
            <li><NavLink to="" className="text-lg font-bold text-blue-500">1. Cho thuê phòng họp tại Cầu Giấy:</NavLink>  Tòa nhà Sannam, 78 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</li>
            <li><NavLink to="" className="text-lg font-bold text-blue-500">2. Cho thuê phòng họp tại Thanh Xuân:</NavLink>  Zen Tower,12 Khuất Duy Tiến, Thanh Xuân, Hà Nội</li>
            <li><NavLink to="" className="text-lg font-bold text-blue-500">3. Cho thuê phòng họp tại Hà Đông:</NavLink>  HUD3 Tower, 121-123 Tô Hiệu, Hà Đông, Hà Nội</li>
            <li><NavLink to="" className="text-lg font-bold text-blue-500">4. Cho thuê phòng họp tại Nam Từ Liêm:</NavLink> AT Building, 9 ngõ 7 Lê Đức Thọ, Nam Từ Liêm, Hà Nội</li>
            <li><NavLink to="" className="text-lg font-bold text-blue-500">5. Cho thuê phòng họp tại Ba Đình: </NavLink> VMQ Building, 87 Nguyễn Thái Học, Ba Đình, Hà Nội</li>
            <li><NavLink to="" className="text-lg font-bold text-blue-500">6. Cho thuê phòng họp tại Trần Phú Hà Đông:</NavLink> Tòa nhà Sông Đà,131 Trần Phú, Hà Đông, Hà Nội</li>

          </ul>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 px-64">
        <div className="text-center">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop.jpg" alt=""/>
          <h1 className="text-2xl font-bold">PHÒNG HỌP NHỎ (01-10 người)</h1>
          <h2 className="py-3 text-xl">Thuê ngay chỉ từ 200.000đ/giờ</h2>
          <p className="py-3 text-xl">Phù hợp thuê phòng họp với số lượng ít như: Họp với đối tác, họp nội bộ, họp cổ đông quy mô nhỏ,…</p>
          <div >
            <button className="rounded bg-blue-600 py-4 px-10 text-white font-bold hover:text-gray-700">ĐẶT LỊCH THUÊ NGAY</button>
          </div>
        </div>
        <div className="text-center">
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/02/phong-hop-cho-thue-1.jpg" alt=""/>
          <h1 className="text-2xl font-bold">PHÒNG HỌP TRUNG (10-20 người)</h1>
          <h2 className="py-3 text-xl">Thuê ngay chỉ từ 300.000đ/giờ</h2>
          <p className="py-3 text-xl">Phù hợp thuê phòng họp với số lượng nhân sự vừa phải: Họp với đối tác, họp nội bộ, họp cổ đông,…</p>
          <div >
            <button className="rounded bg-blue-600 py-4 px-10 text-white font-bold hover:text-gray-700">ĐẶT LỊCH THUÊ NGAY</button>
          </div>
        </div>
        <div className="text-center">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop.jpg" alt=""/>
          <h1 className="text-2xl font-bold">PHÒNG HỌP LỚN (trên 20 người)</h1>
          <h2 className="py-3 text-xl">Thuê ngay chỉ từ 400.000đ/giờ</h2>
          <p className="py-3 text-xl">Phù hợp thuê phòng họp với số lượng nhân sự lớn: Họp hội nghị khách hàng, hội thảo,…</p>
          <div >
            <button className="rounded bg-blue-600 py-4 px-10 text-white font-bold hover:text-gray-700">ĐẶT LỊCH THUÊ NGAY</button>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-center text-3xl pt-16 font-bold pb-8">TRẢI NGHIỆM KHÔNG GIAN PHÒNG HỌP CHO THUÊ HIỆN ĐẠI & CHUYÊN NGHIỆP</h1>
        <img className="mx-auto" src="https://cdn1.thietkevanphong.pro/wp-content/uploads/2020/02/vtc-phong-hop-lon.jpg" alt=""/>
      </div>

      <div className="grid grid-cols-2 px-64 pt-8">
        <div>
          <h1 className="font-bold text-xl">CÂU HỎI THƯỜNG GẶP KHI THUÊ VĂN PHÒNG LƯU ĐỘNG</h1>
          <h1 className="font-bold text-xl py-2">+ Tôi có thể làm ở những cơ sở nào?</h1>
          <h1 className="font-bold text-xl py-2">+ Thủ tục check in như thế nào</h1>
          <h1 className="font-bold text-xl py-2">+ Có giới hạn thời gian làm việc mỗi cơ sở không</h1>
        </div>
        <div>
          <img className="w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-2.jpg"  alt=""/>
        </div>
      </div>

      <div className="bg-blue-500 px-40 ">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <p className="text-white pl-24 py-10 font-bold text-2xl  ">Bạn đang tìm thuê phòng họp chuyên nghiệp – hiện đại và cần được tư vấn?
                            Hãy để Hanoi Office giúp bạn!</p>
          </div>
          <div className="py-10">
            <button className="ml-32 border font-bold border-white-500 bg-white text-black px-12  py-4 hover:bg-blue-500  rounded">GỌI CHO HÀ NỘI OFFICE</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MeetingRoom;