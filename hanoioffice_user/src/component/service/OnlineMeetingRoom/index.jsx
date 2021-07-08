import React, {useState} from 'react';

import {
  AccessTime,
  AttachMoneySharp,
  Autorenew, BusinessCenterSharp, FiberManualRecord,
  LocationOn,
  SecuritySharp,
  SkipNext,
  Smartphone,
  SyncAltSharp,
  Toc
} from
  '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const OnlineMeetingRoom = () => {
  const [activeStatus, setActiveStatus] = useState(1);
  return (
    <>
      <div className="grid grid-cols-2 gap-16 pt-1">
        <div className="">
          <img className="w-full h-full"
            src="https://hanoioffice.vn/wp-content/uploads/2020/09/phong-hop-truc-tuyen-hien-dai.jpg" alt=""/>
        </div>
        <div className="py-24 ">
          <h1 className="text-center font-bold text-3xl">ĐẶT LỊCH THUÊ PHÒNG HỌP TRỰC TUYẾN</h1>
          <h3 className="text-center py-6 text-lg text-gray-600">Hãy đặt lịch thuê phòng họp trực tuyến phù hợp với nhu cầu của bạn!</h3>
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
                      className="shadow py-4 w-full text-gray-700 pr-3"
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
      <div className="bg-blue-500 px-40">
        <div className="grid grid-cols-3 mx-24">
          <div className="col-span-2 pt-6">
            <p className="text-white font-bold text-lg">Tính chất công việc yêu cầu bạn thường xuyên phải có các cuộc họp từ xa? Khoảng cách địa lý</p>
            <p className="text-white font-bold text-lg"  >là yếu tố chính khiến công việc của bạn bị cản trở và trì trệ?</p>
            <p className="text-white font-bold text-lg"  >Đừng lo, hãy để Hanoi Office giúp bạn!</p>
          </div>
          <div className="ml-24 py-10 col-span-1">
            <button className="border font-bold border-white-500 bg-white text-black px-24  py-4 px-12 text-xs hover:bg-blue-500  rounded">GỌI CHO HÀ NỘI OFFICE</button>
          </div>

        </div>
      </div>
      <div className="pt-12 text-center">
        <span className="font-bold text-3xl">DỊCH VỤ PHÒNG HỌP TRỰC TUYẾN </span>
        <span className="text-3xl">- GIẢI PHÁP TỐI ƯU CHO CÔNG VIỆC</span>
      </div>
      <div className="pt-3 text-center">
        <span className="font-bold">Phòng họp trực tuyến – Hội nghị truyền hình </span>
        <span>là giải pháp tối ưu giúp bạn giải quyết công việc một cách nhanh chóng, kịp thời mà không phải lo lắng về thời gian, chi phí</span>
        <p>hay rào cản của địa lý và khoảng cách không gian.</p>
      </div>
      <div className="pt-3 text-center">
        <span>Với các thiết bị phòng họp trực tuyến hiện đại có khả năng truyền tải âm thanh và hình ảnh giữa nhiều địa điểm khác nhau thông qua hệ thống internet toàn cầu, LAN,</span>
        <p>WAN, hệ thống này sẽ kết nối các thành viên trong cuộc họp, hội nghị, hội thảo với nhau bằng những hình ảnh và âm thanh chân thực nhất.</p>
      </div>
      <div className="pt-3 text-center">
        <span>Chỉ với một vài thao tác đơn giản, bạn đã có thể thiết lập nhanh một không gian, một phiên làm việc với nhân viên, đối tác hay khách hàng của mình ở bất kỳ đâu, bất kỳ</span>
        <p>lúc nào.</p>
      </div>
      <div className="pt-12">
        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/08/phog-hop-truc-tuyen-2.jpg" alt="" />
      </div>
      <div className="pt-4 text-center">
        <span className="font-bold">Dịch vụ cho thuê Phòng họp trực tuyến – Hội nghị truyền hình của Hanoi Office </span>
        <span>là dịch vụ cung cấp cho người dùng không gian làm việc chuyên nghiệp, cho phép kết nối</span>
        <p>tới nhiều đối tác trong và ngoài nước, khách hàng từ xa mà không phải gặp mặt trực tiếp.</p>
      </div>
      <div className="pt-3 text-center">
        <span>Sử dụng dịch vụ Phòng họp trực tuyến tại Hanoi Office, bạn sẽ nhận được mọi tiện ích tuyệt vời nhất, phục vụ tối ưu cho công việc văn phòng và cuộc họp của mình.</span>
      </div>
      <div className="pt-3 text-center">
        <p>Dịch vụ Hội nghị trực tuyến còn cho phép mọi người kết nối, chia sẻ, giao lưu và học tập lẫn nhau trong môi trường làm việc năng động, chuyên nghiệp. Nắm bắt được xu</p>
        <p>thế hội nhập quốc tế, mở rộng kinh doanh sang nhiều thị trường, nhiều quốc gia khác nhau của các doanh nghiệp, Hanoi Office tin chắc rằng, phòng họp trực tuyến sẽ là</p>
        <p>lựa chọn tuyệt vời cho doanh nghiệp bạn!</p>
      </div>
      <div className="pt-12 mx-80 px-2 ">
        <h3 className="font-bold">GIẢI QUYẾT MỌI VẤN LO VỀ RÀO CẢN ĐỊA LÝ, CHI PHÍ VÀ THỜI GIAN VỚI 11 ƯU THẾ CỦA DỊCH VỤ</h3>
        <div className="border border-b border-gray-300"></div>
      </div>
      <div className="pt-4">
        <div className="grid grid-cols-4 mx-96">
          <div>
            <div className="text-center"><AccessTime primary  url="" style={ { fontSize: 50,color: '#dd3333' } } /></div>
            <h4 className="text-center font-bold pt-3">TIẾT KIỆM THỜI GIAN</h4>
            <div className="pl-6">
              <p>Thời gian là tiền bạc.Sử dụng dịch</p>
              <p>vụ Phòng họp trực tuyến sẽ giúp</p>
              <p>bạn tiết kiệm tối đa thời gian đi lại,</p>
              <p>công sức và tiền bạc set-up một</p>
              <p>phòng họp trực tuyến hiện đại,đầy</p>
              <p>đủ tiện ích.</p>
            </div>
          </div>
          <div>
            <div className="text-center"><AttachMoneySharp primary  url="" style={ { fontSize: 50,color: '#dd3333' } } /></div>
            <h4 className="text-center font-bold pt-3">TIẾT KIỆM CHI PHÍ</h4>
            <div className="pl-6">
              <p>Cắt giảm triệt để chi phí đi lại, chi</p>
              <p>phí set - up, đầu tư trang thiết bị</p>
              <p>để đưa một phòng họp trực tuyến</p>
              <p>vào hoạt động. Dịch vụ Phòng</p>
              <p>họp trực tuyến sẽ giúp bạn tiết</p>
              <p>kiệm đến 80% chi phí.</p>
            </div>
          </div>
          <div>
            <div className="text-center"><LocationOn primary  url="" style={ { fontSize: 50,color: '#dd3333' } } /></div>
            <h4 className="text-center font-bold pt-3">XÓA BỎ KHOẢNG CÁCH</h4>
            <div className="pl-6">
              <p>Phòng họp trực tuyến sẽ kết nối</p>
              <p>các thành viên trong cuộc họp</p>
              <p>của bạn bằng những hình ảnh và</p>
              <p>âm thanh chân thực nhất. Bạn có</p>
              <p>thể làm việc mọi lúc, mọi nơi mà</p>
              <p>không phải lo lắng về rào cản địa</p>
              <p>lý.</p>
            </div>
          </div>
          <div>
            <div className="text-center">
              <SkipNext primary  url="" style={ { fontSize: 50,color: '#dd3333' } } />
            </div>
            <h4 className="text-center font-bold pt-3">XỬ LÝ KỊP THỜI</h4>
            <div className="pl-6">
              <p>Nhanh chóng, kịp thời trong mọi</p>
              <p>tình huống: Tổ chức cuộc họp, hội</p>
              <p>nghị, hội thảo ngay tức thì, vận</p>
              <p>hành đơn giản, dễ dàng, giúp bạn</p>
              <p>tận dụng được tối đa các cơ hội</p>
              <p>hợp tác và kinh doanh</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mx-96 pt-6">
          <div>
            <div className="text-center"><Toc primary  url="" style={ { fontSize: 50,color: '#dd3333' } } /></div>
            <h4 className="text-center font-bold pt-3">LƯU TRỮ CUỘC HỌP</h4>
            <div className="pl-6">
              <p>Toàn bộ nội dung cuộc họp sẽ được lưu trữ trực tuyến trên điện tử đám</p>
              <p>mây hoặc bản mềm. Bất kỳ khi nào bạn cũng có thể xem lại nội dung</p>
              <p>cuộc họp mà không cần phải ghi chép cồng kềnh và tốn thời gian</p>
            </div>
          </div>
          <div>
            <div className="text-center">
              <SecuritySharp primary  url="" style={ { fontSize: 50,color: '#dd3333' } } />
            </div>
            <h4 className="text-center font-bold pt-3">AN TOÀN & BẢO MẬT</h4>
            <div className="pl-6">
              <p>Phòng họp được thiết kế với hệ thống tường, kính cách âm tốt đồng thời</p>
              <p>tất cả thông tin, nội dung về cuộc họp, đều do bạn kiểm soát. Chỉ những</p>
              <p>ai được cho phép mới có quyền truy cập vào đám mây của bạn.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mx-96 pt-6">
          <div>
            <div className="text-center"><SyncAltSharp primary  url="" style={ { fontSize: 50,color: '#dd3333' } } /></div>
            <h4 className="text-center font-bold pt-3">KHÔNG BỎ LỠ CƠ HỘI</h4>
            <div className="pl-6">
              <p>Giải quyết nhanh chóng, kịp thời</p>
              <p>các công việc cần thiết và cấp</p>
              <p>bách như: Quyết định đầu tư, ký</p>
              <p>hợp đồng, thương thảo… giúp bạn</p>
              <p>tận dụng tối đa cơ hội kinh </p>
              <p>doanh.</p>
            </div>
          </div>
          <div>
            <div className="text-center"><Autorenew primary  url="" style={ { fontSize: 50,color: '#dd3333' } } /></div>
            <h4 className="text-center font-bold pt-3">GIÚP BẠN VẬN HÀNH</h4>
            <div className="pl-6">
              <p>Công cụ hỗ trợ đắc lực cho việc</p>
              <p>đào tạo, hướng dẫn, chỉ dẫn và</p>
              <p>các thao tác nghiệp vụ... kịp thời</p>
              <p>và ngay lập tức, giúp bộ máy của</p>
              <p>bạn hoạt động trơn tru.</p>
            </div>
          </div>
          <div>
            <div className="text-center"><Smartphone primary  url="" style={ { fontSize: 50,color: '#dd3333' } } /></div>
            <h4 className="text-center font-bold pt-3">TRỰC TUYẾN MỌI NƠI</h4>
            <div className="pl-6">
              <p>Nếu có nhu cầu, Hanoi Office sẽ</p>
              <p>giúp phát trực tuyến trên website,</p>
              <p>mạng xã hội... và tất cả các</p>
              <p>phương tiện truyền thông khác,</p>
              <p>giúp bạn phủ sóng rộng rãi.</p>
            </div>
          </div>
          <div>
            <div className="text-center">
              <BusinessCenterSharp primary  url="" style={ { fontSize: 50,color: '#dd3333' } } />
            </div>
            <h4 className="text-center font-bold pt-3">CHUYÊN NGHIỆP</h4>
            <div className="pl-6">
              <p>Phòng họp trực tuyến tạo nên</p>
              <p>điểm nhấn về phong cách làm</p>
              <p>việc chuyên nghiệp, đẳng cấp, ghi</p>
              <p>điểm tuyệt đối bởi sự đầu tư chỉn</p>
              <p>chu, bài bản và nghiêm túc.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 text-center">
        <span className="text-3xl">LỰA CHỌN GIẢI PHÁP </span>
        <span className="font-bold text-3xl">PHÒNG HỌP TRỰC TUYẾN PHÙ HỢP NHẤT</span>
      </div>
      <div className="pt-24">
        <div className="grid grid-cols-2 mx-96 gap-8">
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop.jpg" alt="" />
            <div className="pt-3 text-center">
              <h3 className="font-bold text-xl">HỌP TRỰC TUYẾN TẠI HANOI OFFICE</h3>
              <p className="pt-3">Thuê ngay chỉ từ 400.000đ/giờ</p>
              <p className="pt-6">Gói cơ bản (1 tiếng): 400.000 đ/tiếng.</p>
              <p>Gói nâng cao (tối thiểu 4 tiếng): Chiết khấu 10%.</p>
              <div className="pt-8">
                <button className="bg-blue-500 px-12 py-2 rounded text-white border hover:bg-white hover:border-blue-500 hover:text-black ">ĐẶT LỊCH THUÊ NGAY</button>
              </div>
            </div>
          </div>
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-hop-trung.jpg" alt="" />
            <div className="pt-3 text-center">
              <h3 className="font-bold text-xl">HỌP TRỰC TUYẾN TẠI VĂN PHÒNG BẠN</h3>
              <p className="pt-3">Thuê ngay chỉ từ 300.000đ/giờ</p>
              <p className="pt-6">Gói cơ bản tối thiểu 4 tiếng: 1.100.000 đ/4 tiếng</p>
              <p>Gói nâng cao (8 tiếng): 2.000.000 đ/8 tiếng</p>
              <div className="pt-8">
                <button className="bg-blue-500 px-12 py-2 rounded text-white border hover:bg-white hover:border-blue-500 hover:text-black ">ĐẶT LỊCH KHẢO SÁT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 text-center">
        <span className="text-3xl">TRẢI NGHIỆM KHÔNG GIAN </span>
        <span className="font-bold text-3xl">PHÒNG HỌP TRỰC TUYẾN CHUYÊN NGHIỆP & HIỆN ĐẠI</span>
      </div>
      <div className="pt-3">
        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/09/phong-hop-truc-tuyen-hien-dai.jpg" alt="" />
      </div>
      <div className="pt-10">
        <div className="grid grid-cols-3 bg-blue-500">
          <div className="col-span-2 pt-10 ml-48">
            <p className="font-bold text-xl text-white">Bạn đang tìm một đơn vị cho thuê phòng họp trực tuyến uy tín, chuyên nghiệp? Hãy để Hanoi</p>
            <p className="font-bold text-xl text-white">Office giúp bạn!</p>
          </div>
          <div className="ml-24 py-10 col-span-1">
            <button className="border font-bold bg-white px-24 py-3 text-xs hover:bg-blue-500 hover:text-white hover:border-white rounded">GỌI CHO HÀ NỘI OFFICE</button>
          </div>
        </div>
      </div>
      <div className="pt-12 text-center">
        <span className="text-3xl">TÌM HIỂU VỀ DỊCH VỤ </span>
        <span className="font-bold text-3xl">CHO THUÊ PHÒNG HỌP TRỰC TUYẾN - HANOI OFFICE</span>
      </div>
      <div className="pt-12 mx-80 px-2">
        <h3 className="font-bold">TẠI SAO BẠN NÊN THUÊ PHÒNG HỌP TRỰC TUYẾN?</h3>
        <div className="border border-b border-gray-300"></div>
      </div>
      <div className="pt-3 mx-80 px-2">
        <p>Tại sao bạn nên chọn dịch vụ Cho thuê phòng họp trực tuyến – Hội nghị truyền hình tại Hanoi Office mà không phải nơi nào khác? Với 5 lý do sau đây, chắc chắn bạn sẽ</p>
        <p>hoàn toàn bị thuyết phục!</p>
      </div>
      <div className="mx-auto container py-8 px-10 flex items-center justify-center w-full ml-72">
        <ul className="w-full hidden md:flex items-center pb-2 border-b border-gray-200">
          <li onClick={ () => setActiveStatus(1) } className={ activeStatus === 1 ? 'py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-indigo-700' : 'py-2 px-4 cursor-pointer  bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600' }>
            1.CÔNG NGHỆ ÂM THANH
          </li>
          <li onClick={ () => setActiveStatus(2) } className={ activeStatus === 2 ? 'py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700' : 'py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600' }>
            2.CÔNG NGHỆ HÌNH ẢNH
          </li>
          <li onClick={ () => setActiveStatus(3) } className={ activeStatus === 3 ? 'py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700' : 'py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600' }>
            3.KHÔNG GIAN SANG TRỌNG
          </li>
          <li onClick={ () => setActiveStatus(4) } className={ activeStatus === 4 ? 'py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700' : 'py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600' }>
            4.INTERNET TỐC ĐỘ CAO
          </li>
          <li onClick={ () => setActiveStatus(5) } className={ activeStatus === 5 ? 'py-2 px-4 cursor-pointer bg-indigo-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-indigo-700' : 'py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-indigo-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600' }>
            5.TIỆN ÍCH ƯU VIỆT
          </li>
        </ul>
        <div className="md:hidden relative w-11/12 mx-auto bg-white rounded">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={ 24 } height={ 24 } viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
            <option selected className="text-sm text-gray-600">

            </option>
            <option className="text-sm text-gray-600"></option>
            <option className="text-sm text-gray-600"></option>
            <option className="text-sm text-gray-600"></option>
            <option className="text-sm text-gray-600"></option>
          </select>
        </div>
      </div>
      <div className="pt-12 mx-80 px-2">
        <h3 className="font-bold text-lg">DỊCH VỤ CHO THUÊ PHÒNG HỌP TRỰC TUYẾN - MEETING ROOM PHÙ HỢP VỚI ĐỐI TƯỢNG NÀO?</h3>
        <div className="border border-b border-gray-300"></div>
      </div>
      <div className="pt-3 mx-80 px-2">
        <span className="font-bold">Có phải bạn đang là: </span>
      </div>
      <div className="pt-3 mx-80 px-2"> 
        <div>
          <FiberManualRecord className="w-6 pr-3 pb-0.5" />
          <span>Thành viên của các doanh nghiệp cần tham gia các cuộc họp, hội nghị, giao ban, trao đổi công việc của các đơn vị nội bộ có vị trí địa lý xa nhau.</span>
        </div>
        <div>
          <FiberManualRecord className="w-6 pr-3 pb-0.5" />
          <span>Thành viên của các nhóm làm việc chung cần trao đổi thông tin và tài liệu.</span>
        </div>
        <div>
          <FiberManualRecord className="w-6 pr-3 pb-0.5" />
          <span>Giáo viên – Giảng viên dạy học trực tuyến từ xa (E-Learning).</span>
        </div>
        <div>
          <FiberManualRecord className="w-6 pr-3 pb-0.5" />
          <span>Giám đốc, người đứng đầu doanh nghiệp cần liên lạc và trao đổi trực tiếp với các đối tác nước ngoài hay trong nước một cách nhanh chóng.</span>
        </div>
        <div>
          <FiberManualRecord className="w-6 pr-3 pb-0.5" />
          <span>Các công việc và lĩnh vực khác cần trao đổi thông tin, hình ảnh giữa các điểm liên lạc với nhau là khá xa, không thuận lợi cho việc đi lại để trực tiếp gặp mặt nhau trao đổi</span>
          <p>công việc.</p>
        </div>
      </div>
      <div className="pt-4 mx-80  px-2">
        <p className="text-lg">Hanoi Office cần bạn! Nếu bạn đang tìm kiếm giải pháp văn phòng thông minh, tiết kiệm và chuyên nghiệp, mô hình phòng họp trực tuyến tại Hanoi Office</p>
        <p className="text-lg">chắc chắn là sự lựa chọn lý tưởng nhất.</p>
      </div>
      <div className="pt-4 mx-80 px-2">
        <span className="text-lg">Đừng ngại liên hệ với chúng tôi ngay qua </span>
        <span className="font-bold">Hotline: 085.339.4567 – 0904.388.909.</span>
      </div>
      <div className="pt-4 mx-80 px-2">
        <h3 className="font-bold">Hệ thống Phòng họp trực tuyến của Hanoi Office cho Quý khách hàng chọn lựa:</h3>
      </div>
      <div className="pt-3 mx-80 px-2">
        <span>1. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Lê Văn Lương</NavLink>
        <span>: Golden Palm, 21 Lê Văn Lương, Thanh Xuân, Hà Nội</span>
      </div>
      <div className="mx-80 px-2">
        <span>2. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Thanh Xuân</NavLink>
        <span>: Zen Tower, 12 Khuất Duy Tiến, Thanh Xuân, Hà Nội</span>
      </div>
      <div className="mx-80 px-2">
        <span>3. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Hà Đông</NavLink>
        <span>: HUD3 Tower,121-123 Tô Hiệu, Hà Đông, Hà Nội</span>
      </div>
      <div className="mx-80 px-2">
        <span>4. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Trần Phú Hà Đông</NavLink>
        <span>: Tòa nhà Sông Đà, 131 Trần Phú, Hà Đông, Hà Nội</span>
      </div>
      <div className="mx-80 px-2">
        <span>5. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Nam Từ Liêm</NavLink>
        <span>: AT Building, 9 ngõ 7 Lê Đức Thọ, Nam Từ Liêm, Hà Nội</span>
      </div>
      <div className="mx-80 px-2">
        <span>6. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Ba Đình</NavLink>
        <span>: VMQ Building, 87 Nguyễn Thái Học, Ba Đình, Hà Nội</span>
      </div>
      <div className="mx-80 px-2">
        <span>7. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Cầu Giấy</NavLink>
        <span>: Tòa nhà Sannam, 78 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</span>
      </div>
      <div className="mx-80 px-2">
        <span>8. </span>
        <NavLink to="" className="font-bold text-blue-500">Cho thuê phòng họp trực tuyến tại Hoàng Mai</NavLink>
        <span>: Tòa nhà Helios, 75 Tam Trinh, Hoàng Mai, Hà Nội</span>
      </div>
      <div className="pt-4 mx-80 px-2">
        <h3 className="text-lg">Hanoi Office tự tin là lựa chọn phù hợp nhất, đảm bảo sẽ làm bạn hài lòng bởi chất lượng dịch vụ ưu việt hàng đầu!</h3>
      </div>
      <div className="pt-8">
        <div className="grid grid-cols-3 bg-blue-500">
          <div className="col-span-2 pt-10 ml-48">
            <p className="font-bold text-xl text-white">Bạn đang tìm một đơn vị cho thuê phòng họp trực tuyến uy tín, chuyên nghiệp? Hãy để Hanoi</p>
            <p className="font-bold text-xl text-white">Office giúp bạn!</p>
          </div>
          <div className="ml-24 py-10 col-span-1">
            <button className="border font-bold bg-white px-24 py-3 text-xs hover:bg-blue-500 hover:text-white hover:border-white rounded">GỌI CHO HÀ NỘI OFFICE</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OnlineMeetingRoom;