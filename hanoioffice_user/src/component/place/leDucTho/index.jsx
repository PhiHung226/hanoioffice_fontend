import React from 'react';

import {
  CheckCircleOutline,
  CloudOutlined,
  FiberManualRecord,
  // eslint-disable-next-line no-unused-vars
  LocationOnOutlined,
  Public,
  RemoveRedEye, RoomOutlined
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const LeDucTho = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl">Hà Nội Office - Lê Đức Thọ</h1>
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
                      <span className="block text-xs font-extrabold">850m2</span>
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
                      <span className="block text-xs font-extrabold">17 Phòng</span>
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
                      <span className="block text-xs font-extrabold">7 Sàn</span>
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
              <h2 className="font-bold text-2xl">HANOI OFFICE MỸ ĐÌNH</h2>
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
              <span className="pl-1 text-sm border-r pr-4 py-2">851</span>

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
                    <span className="font-bold">850m2</span>
                  </div>
                </div>
                <div className="pt-3">
                  <img className="w-6 inline-block pr-3" src="https://hanoioffice.vn/wp-content/plugins/mkdf-real-estate/assets/img/icon-san-van-phong-asset.png" alt="" />
                  <div className="inline-block">
                    <span className="pr-6">Số Sàn Văn Phòng:</span>
                    <span className="font-bold">7 Sàn</span>
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
                    <span className="font-bold">17 Phòng</span>
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
                    <span className="font-bold pl-5">	2</span>
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
                  {/*<NavLink to="" className="font-bold text-blue-600">*/}
                  {/*  Văn phòng cho thuê quận Thanh Xuân*/}
                  {/*</NavLink>*/}
                  {/*<span> nằm trên </span>*/}
                  {/*<NavLink to= "" className="text-blue-600">*/}
                  {/*  tầng 6, 7, 11, 14 tòa nhà Zen Tower, số 12 Khuất Duy Tiến,*/}
                  {/*</NavLink>*/}
                </div>
                <div>
                  <p>Dịch vụ thuê văn phòng tại Nam Từ Liêm của Hanoi Office
                                        tại tòa nhà AT Building thuộc quận Nam Từ Liêm là “sự lựa chọn thông minh”
                                        dành cho các công ty Start-up, công ty nhỏ, doanh nghiệp vừa và lớn. Thừa hưởng chuỗi tiện
                                        ích hạng A, cùng nội thất trang thiết bị chất lượng, dịch vụ cho thuê văn phòng quận Nam Từ Liêm chắc chắn
                                        là nơi khơi nguồn cảm hứng, làm việc thoải mái, kết nối giao lưu với hàng ngàn doanh nghiệp.</p>
                </div>

                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.3049733278377!2d105.77087865547509!3d21.035275224500822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345582686d9c39%3A0xb2cac3c720612c37!2zSGFub2kgT2ZmaWNlIC0gVsSDbiBwaMOybmcg4bqjbyAtIFbEg24gcGjDsm5nIGNoaWEgc-G6uyAtIEFUIEJ1aWxkaW5n!5e0!3m2!1svi!2s!4v1626620729628!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                <h2  className = "font-bold text-2xl pt-3"> Tổng quan Văn phòng cho thuê Nam Từ Liêm của Hanoi Office: </h2>
                <div className="pt-4">
                  <ul className="italic">
                    <li>
                                            1. Vị trí
                    </li>
                    <li>
                                            2. Sự khác biệt
                    </li>
                    <li>
                                            3. Quy mô – thiết kế
                    </li>
                    <li>
                                            4. Phù hợp đa nhu cầu
                    </li>
                    <li>
                                            5. Dịch vụ bổ sung
                    </li>
                  </ul>
                </div>
                <h5 className="font-bold pt-8 text-2xl">1. Vị trí thuận lợi</h5>
                <div className="pt-4">
                  <span>Hanoi Office</span> <b>cho thuê văn phòng tại Nam Từ Liêm</b><span> nằm trong khu vực thuộc quận Nam Từ Liêm.
                    Là nơi hội tụ với những yếu tố về kinh tế, giao thông, cơ sở hạ tầng hiện đại với nhiều khu cao ốc,
                    văn phòng. Bên cạnh đó, các địa điểm đồ uống, nhà hàng, khách sạn, ngân hàng, trường học, bệnh viện cũng nằm ngay
                    khu vực <b>cho thuê văn phòng tại</b> Nam Từ Liêm của Hanoi Office “chưa đến 1km”.
                    Đặc biệt, chỗ làm việc tại tòa nhà AT Building – Địa chỉ<b>cho thuê văn phòng đường Lê Đức Thọ</b> của Hanoi
                    Office là cầu nối gắn kết đến các vị trí trung tâm thủ đô, giúp bạn di chuyển dễ dàng.</span>
                </div>
                <div className="py-4">
                  <ul className="italic">
                    <li><FiberManualRecord style={ { fontSize: 10 } }/>    Ngã tư Mai Dịch – Cầu Giấy – 2,5km</li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/> Sân vận động Mỹ Đình – 2km</li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/>Bến xe Mỹ Đình – 1,5km</li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/> Đại lộ Thăng Long – 4km</li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/> Big C Thăng Long – 6km</li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/> Công viên Thủ Lệ – 5km</li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/>Hồ Tây – 6km</li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/> Đường đua F1: 3km</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xl text-center"> <em>   Tìm hiểu ngay: Hanoi Office sale sốc tất
                                        cả các dịch vụ văn phòng – <NavLink to="" className="text-blue-600" >
                                            Coworking Space trọn gói tiện ích chỉ</NavLink> từ 7k/giờ
                  </em>
                  </p>
                  <div className="py-4">
                    <img className="w-full" src="
                  https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-03.jpg" alt="" />
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

                  </div>
                  <div className="font-bold pt-4 text-2xl">
                    <h2>2. SỰ KHÁC BIỆT ĐI LIỀN VỚI CHẤT LƯỢNG PHỤC VỤ</h2>
                    <img className="mx-auto pt-4" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-04.jpg" alt=""/>

                  </div>
                  <p className="pb-4">Ngoài sở hữu vị trí vô cùng
                                        thuận tiện cho thuê văn phòng Lê Đức Thọ. Dịch vụ cho thuê văn phòng tại Nam
                                        Từ Liêm của Hanoi Office gắn liền với chất lượng phục vụ và tiện ích đi kèm:</p>
                  <ul>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/> <span className="pl-3"> 100% hỗ trợ kỹ thuật miễn phí và điều khiển hệ thống</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3"> Thiết kế chuyên nghiệp, hiện đại theo concept doanh nghiệp</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3"> Đội ngũ lễ tân chu đáo – tận tình – tươi vui – chuyên nghiệp</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3"> Dịch vụ biên – phiên dịch, soạn thảo văn bản khi có yêu cầu </span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3"> Dịch vụ hóa đơn điện tử, chữ ký số</span></li>
                  </ul>
                  <p className="py-4">Luôn luôn đồng hành, thấu hiểu nhu cầu và mong muốn của quý khách hàng là bước tiến giúp Hanoi Office ngày một thành công.</p>
                  <h2 className="font-bold pt-4 text-2xl">3. QUY MÔ LỚN – THIẾT KẾ CHUYÊN NGHIỆP</h2>

                  <p className="py-4">Dịch vụ thuê văn phòng tại Nam Từ Liêm của Hanoi Office nằm tại <NavLink to="" className="text-blue-600" > AT Building,
                                        đường Lê Đức Thọ, P. Mỹ Đình, Q. Nam Từ Liêm</NavLink> được xây dựng và thiết kế theo xu hướng hiện đại
                                        – chuyên nghiệp, rất phù hợp với các công ty Startup, công ty nhỏ, doanh nghiệp vừa và lớn.</p>
                  <p>Thay vì phải tìm <b>dịch vụ cho thuê nhà làm văn phòng quận Nam Từ Liêm</b> hay<b> thuê chung cư làm
                                        văn phòng tại Mỹ Đình</b> với chi phí đầu tư và setup ban đầu lớn. Đến với Hanoi Office bạn sở hữu văn
                                        phòng làm việc với chất lượng xây dựng và thiết kế văn phòng trọn gói chuẩn quốc tế, dịch vụ bổ sung, tiện ích đầy đủ.
                                        Các gói cho thuê văn phòng tại Nam Từ Liêm của Hanoi Office mang đến cho quý khách không gian làm việc chuyên nghiệp.
                                        Cùng sự bài trí nội thất hợp lý, có tính thẩm mỹ cao sẽ giúp mọi người có thể tập trung làm việc, tối ưu hiệu suất.</p>
                  <img src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-09.jpg" alt=""/>
                  <div className="text-center text-gray-600 pt-2 italic">
                    <strong><em>Nhận ngay ưu đãi: Hot Deal: Thuê 1 được 1 – Thuê 1 được 1
                                            – Tặng ngay 1000 giờ làm việc miễn phí
                                            Coworking Space tại <NavLink to="" className="text-blue-600 hover:border-b-2">Hanoi Office cơ sở Ba Đình</NavLink> </em>
                    </strong>
                  </div>
                  <h2 className="font-bold py-3 text-2xl">DỊCH VỤ THUÊ VĂN PHÒNG TẠI NAM TỪ LIÊM</h2>
                  <p>Dưới đây là các thông tin tại tòa nhà cho thuê văn phòng Lê Đức Thọ:</p>
                  <ul>
                    <li><FiberManualRecord className="" style={ { fontSize: 10 } }/><span className="pl-3">Tên tòa nhà: AT Building – Cho thuê văn phòng tại Nam Từ Liêm chuyên nghiệp</span> </li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3"> Vị trí: Số 9 Ngõ 7 đường Lê Đức Thọ, P. Mỹ Đình 2, Q. Nam Từ Liêm, TP Hà Nội.</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/> <span className="pl-3">Thông tin tầng: Gồm 8 tầng, trong đó có 02 tầng của Hanoi Office.</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Tầng 1 khu vực đồ uống, cafe </span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Tầng 2,3,4,5,6,8 khu vực Văn phòng làm việc</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Tiêu chuẩn tòa nhà: Thuộc Hạng B. Thiết kế hạng A</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Hướng: Tây Nam</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Tổng diện tích sàn: 1.000m2 và 125m2/sàn</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Chiều cao trần: 2m8</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Bãi đỗ xe: Sức chứa 50 ô tô, 100 xe máy</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Thang máy: Trọng tải tối đa 10 người, tốc độ nhanh & chất lượng cao</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Số thang bộ: 1</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Chiều rộng hành lang: 1m4</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Giờ hoạt động: Từ 8h00 – 21h00 T2-T6 và Thứ 7 từ 8h00 – 18h00, nghỉ Chủ nhật</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Hệ thống điều hòa: Mát lạnh, đạt tiêu chuẩn chất lượng</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Hệ thống điện: Khỏe, chịu được áp suất cao</span></li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Hệ thống trang thiết bị: Được trang bị đầy đủ máy in, máy chiếu, bàn ghế… </span> </li>
                    <li><FiberManualRecord style={ { fontSize: 10 } }/><span className="pl-3">Tiêu chuẩn khác: Đạt tiêu chuẩn PCCC, giấy chứng nhận QSD đất, Giấy phép sử dụng.</span></li>
                  </ul>
                  <div>
                    <h2 className="font-bold py-3 text-2xl">4. PHÙ HỢP ĐA NHU CẦU, ĐA CHỨC NĂNG</h2>
                    <p>Được tích hợp 5 trong 1 – Hanoi Office cho thuê văn phòng tại Nam Từ Liêm là sự lựa chọn linh hoạt cho quý khách hàng.</p>

                    <h4 className="py-4 text-xl">
                      <strong><em>
                                                4.1. Văn phòng ảo
                      </em></strong>
                    </h4>
                    <p>Theo số liệu Tổng cục thống kê doanh nghiệp cho biết: Năm 2018, 2019 số doanh nghiệp mới thành lập có khoảng
                                            100.000 doanh nghiệp/năm. Cùng với đó các dịch vụ cho thuê văn phòng ảo tại các quận Hà Nội tăng nhanh chóng.</p>
                    <img className="w-full" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-05.jpg" alt=""/>
                    <div className="text-center text-gray-600 pt-2 italic">
                      <strong><em>Xem ngay:
                        <NavLink to="" className="text-blue-600 hover:border-b-2">Văn phòng ảo </NavLink>giá rẻ tại Hà Nội chỉ từ 650.000 VNĐ/tháng
                                                – Mức giá chỉ có tại Hanoi Office! </em>
                      </strong>
                    </div>
                    <p>Văn phòng ảo thường được dùng để đăng ký kinh doanh, hoặc làm văn phòng đại diện mà bạn không cần có mặt ở văn phòng 24/7.
                                            Giá gói thuê văn phòng ảo của dịch vụ cho thuê văn phòng tại Nam Từ Liêm siêu tiết kiệm, chỉ từ 650.000 VNĐ/tháng. Với gói này bạn sẽ được sử dụng: phòng họp, phòng khách để họp hành,
                                            tiếp khách, in name card, làm địa chỉ đăng ký kinh doanh, tiếp khách, tạo hình ảnh văn phòng chuyên nghiệp và lịch sự.</p>
                    <h4 className="py-4 text-xl">
                      <strong><em>
                                                4.2. Văn phòng trọn gói
                      </em></strong>
                    </h4>
                    <p><b>Tìm văn phòng cho thuê ở Mỹ Đình</b> chưa bao giờ dễ dàng đến thế. Quý khách chỉ việc mang laptop đến và bắt đầu công việc kinh doanh của mình. Mọi trang bị từ: Bàn, ghế, nước, điện, wifi, in ấn, photo, lễ tân, phòng họp,
                                            phòng khách, IT, tạp vụ… đều đã được Hanoi Office chuẩn bị sẵn sàng trong gói dịch vụ văn phòng trọn gói này.</p>
                    <img className="w-full py-4" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-02.jpg" alt=""/>
                    <h4 className="py-4 text-xl">
                      <strong><em>
                                                4.3. Phòng họp cho thuê
                      </em></strong>
                    </h4>

                    <p className="pt-6">Nếu quý khách đang ở khu vực Hồ Tùng Mậu, Mỹ Đình, Cầu Giấy, dịch vụ cho thuê phòng
                                            họp tại Mỹ Đình chắc chắn là sự lựa chọn tối ưu nhất. Chúng tôi đã chuẩn bị mọi nội thất, setup trang thiết bị từ A-Z,
                                            bạn chỉ cần lên lịch và mời mọi người đến họp. Hanoi Office cam kết sử dụng trang thiết bị chất lượng như: máy in, máy chiếu, lễ tân, mic, wifi,
                                            ánh sáng, máy ghi âm vì vậy sẽ giúp buổi họp của quý khách thành công tốt đẹp, bảo mật thông tin trọn vẹn.</p>
                    <img className="w-full py-4" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-07.jpg" alt=""/>
                    <blockquote className="text-center"><p><em>
                      <strong>Tìm hiểu thêm:</strong>
                      <strong><NavLink to="" className="text-blue-600 hover:border-b-2"> Coworking space tại Hà Nội </NavLink>cho thuê full tiện ích – siêu hiện đại </strong>
                      <strong><span className="text-red-500">Giá chỉ từ 7.000 vnđ/giờ</span></strong>

                    </em></p></blockquote>
                    <h4 className="py-4 text-xl">
                      <strong><em>
                                                4.4. Cho thuê chỗ ngồi làm việc
                      </em></strong>
                    </h4>
                    <p>Không phải vất vả hay mất thời gian đi tìm, chọn lựa quán cafe như ý, cũng chẳng cần đi đâu xa ngoài Nam Từ Liêm, chúng tôi Hanoi Office luôn có mặt.
                      <b> Bạn muốn thuê văn phòng khu vực Mỹ Đình</b> có không gian làm việc riêng cho cá nhân với đầy đủ tiện ích để làm công tác khảo sát thị trường, tư vấn bán hàng,.. hoặc thay đổi không khí hãy đến với Coworking Space Mỹ Đình của Hanoi Office.

                                            Bạn có thể thuê theo giờ, thuê theo gói chỗ ngồi linh hoạt, hay gói chỗ ngồi cố định…. Tất cả đều linh hoạt tùy theo nhu cầu sử dụng của bạn.
                      <b> Coworking Space Mỹ Đình</b> với mức giá rất rẻ, chỉ từ 7.000 VNĐ/giờ.

                      <b> Thuê văn phòng ở Mỹ Đình</b> vừa tiết kiệm chi phí, lại được giao lưu kết nối với các doanh nhân, đồng nghiệp, tội gì không trải nghiệm.</p>

                    <img className="w-full py-4" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh.jpg" alt=""/>
                    <blockquote className="text-center"><p><em>
                      <strong>Tìm hiểu thêm:</strong>
                      <strong><NavLink to="" className="text-blue-600 hover:border-b-2"> Hệ thống 8 Coworking Space </NavLink>“Vàng” trong làng văn phòng Hà Nội- </strong>
                      <strong><span className="text-red-500"> Ưu đãi đến 50% giá thuê </span></strong>
                    </em></p></blockquote>
                    <h4 className="py-4 text-xl">
                      <strong><em>
                                                4.5. Phòng họp trực tuyến
                      </em></strong>
                    </h4>

                    <img className="w-full py-4" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-08.jpg" alt=""/>
                    <blockquote className="text-center"><p><em>
                      <strong>Tìm hiểu thêm: Cập nhật ngay</strong>
                      <strong><NavLink to="" className="text-blue-600 hover:border-b-2"> văn phòng cho thuê tại Hà Nội  </NavLink>giá rẻ – Tại đây! </strong>

                    </em></p></blockquote>
                    <p className="pt-4">Hành trình từ công ty Start-up vài thành viên đến vận hành ra biển lớn tại các thành phố khác hoặc nước ngoài không thể thiếu đến những buổi họp trực tuyến dành cho các doanh nghiệp nhỏ và lớn. Dịch vụ cho thuê phòng họp của Hanoi Office cung cấp cho quý khách hàng không gian làm việc chuyên nghiệp.

                                            Không cần gặp mặt trực tiếp mà vẫn kết nối doanh nghiệp mọi lúc, mọi nơi, giao lưu chia sẻ, học tập lẫn nhau và gắn kết tình hữu nghị. Chất lượng hệ thống âm thanh và hình ảnh cùng sự bảo mật thông tin toàn vẹn tại Hanoi Office sẽ làm quý khách hài lòng.</p>
                    <h4 className="py-4 text-xl">
                      <strong><em>
                                                5. DỊCH VỤ BỔ SUNG THÔNG MINH
                      </em></strong>
                      <img className="w-full py-4" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-cho-thue-my-dinh-06.jpg" alt=""/>
                    </h4>
                    <p>Thay vì thuê nhà làm văn phòng tại Mỹ Đình với nhiều chi phí lại không có nhiều tiện ích đi kèm như cà phê, trà, văn phòng phẩm,…. Đến với Hanoi Office bạn hoàn toàn được sử dụng tiện ích đạt tiêu chuẩn quốc tế mà không phải tốn thêm một đồng chi phí nào.

                                            Bên cạnh đó, sử dụng dịch vụ cho thuê văn phòng tại Nam Từ Liêm quý khách dễ dàng tìm thấy và sử dụng các tiện ích khác như: Y tế, ngân hàng, giáo dục, phòng tập, nhà hàng, công viên vui chơi giải trí có thể di chuyển trong bán kính 1-2 km từ tòa nhà AT Building.</p>

                    <div className="pt-12 text-center">
                      <h4 className="font-bold text-red-600 text-2xl">BẢNG BÁO GIÁ CÁC DỊCH VỤ CHO THUÊ VĂN PHÒNG</h4>
                      <h4 className="font-bold text-red-600 text-2xl pt-4">TẠI CƠ SỞ AT BUILDING – LÊ ĐỨC THỌ</h4>
                    </div>
                    <div className="pt-3">
                      <NavLink to="" >
                        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/My-Dinh.png" alt="" />
                      </NavLink>
                    </div>
                    <div className="pt-3">
                     ----------------------------------------
                      <p className="font-bold italic">Quý khách cần hỗ trợ thêm hãy liên hệ:</p>
                      <p className="font-bold" >Hotline: 085.339.4567 – 0904.388.909</p>
                      <p className="font-bold">Email: contact@hanoioffice.vn</p>
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
                    <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.3049733278377!2d105.77087865547509!3d21.035275224500822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345582686d9c39%3A0xb2cac3c720612c37!2zSGFub2kgT2ZmaWNlIC0gVsSDbiBwaMOybmcg4bqjbyAtIFbEg24gcGjDsm5nIGNoaWEgc-G6uyAtIEFUIEJ1aWxkaW5n!5e0!3m2!1svi!2s!4v1626620729628!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
                    <div className="grid grid-cols-2 gap-2 border-b py-6">
                      <div className="">
                        <span className="grid grid-cols-3 ">
                          <span className="col-span-1"><RoomOutlined/> Địa chỉ đầy đủ:</span>
                          <span className="col-span-2 text-center font-bold">
                      21 Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội, Vietnam</span>
                        </span>
                        <span className="grid grid-cols-3 pt-3 ">
                          <span className="col-span-1 "><CloudOutlined/> ZIP Code:</span>
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
export default LeDucTho;