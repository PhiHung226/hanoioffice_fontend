import React from 'react';

import {ChevronRight} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';


const AllInclusiveOffice = () => {

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="my-4 mx-16">
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-tron-goi-1-1.jpg" alt=""/>
          </div>
        </div>
        <div className="my-36 mr-8">
          <h2 className="text-center text-3xl font-bold text-blue-500">CHO THUÊ VĂN PHÒNG TRỌN GÓI</h2>
          <h4 className="text-center border-b-2 border-fuchsia-600 font-bold">Cho thuê không gian làm việc
                        sang trọng, trọn gói tiện ích tại Hà Nội</h4>
          <div className="mt-4">
            <span className="text-center">Hanoi Office </span>
            <span className="font-bold text-center">cho thuê văn phòng trọn gói </span>
            <span className="text-center">đáp ứng đầy đủ tất cả các nhu cầu hoạt động của một doanh nghiệp: Địa chỉ Đăng ký</span>
            <p className="text-center">kinh doanh; Phòng làm việc chuyên nghiệp; Phòng họp – Phòng khách
                            sang trọng; Thiết bị văn phòng: Điện thoại bàn, máy fax,</p>
            <p className="text-center">máy in scan, photocopy, internet,…</p>
          </div>
          <div className="mt-10">
            <p className="text-red-400 font-bold text-xl"><ChevronRight url=""/>Tìm hiểu văn phòng trọn gói
                            là gì?</p>
          </div>
          <div className="">
            <p>Chọn một địa điểm</p>
            <select className="pl-8 pr-96 py-2 mr-2 border border-gray-300" placeholder="Tất cả địa điểm">
              <option value="">Tất cả địa điểm</option>
            </select>
            <button
              className="border border-blue-500 bg-blue-500 text-white px-32 py-1.5 max-w-max hover:bg-white hover:text-black">TÌM
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 mt-3 py-3">
        <div className="ml-52">
          <p className="font-bold text-white">Bạn đang tìm thuê văn phòng trọn gói tại Hà Nội giúp để tối ưu
                        90% chi phí vận hành?</p>
          <p className="font-bold text-white">Liên hệ Hanoi Office ngay!</p>
        </div>
        <div className="ml-48">
          <button
            className="ml-24 bg-white font-bold text-black border border-white hover:bg-blue-500 hover:text-white py-2 px-16">NHẬN
                        TƯ VẤN
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="font-bold text-2xl text-center">TẠI SAO NÊN CHỌN GIẢI PHÁP CHO THUÊ VĂN PHÒNG TRỌN GÓI
                    TẠI HANOI OFFICE?</h1>
        <div className="mt-3">
          <p className="text-center">Với ngân sách chỉ từ 4.000.000 VNĐ/tháng, bạn thuê được văn phòng ở
                        đâu?</p>
          <p className="text-center">1 tháng doanh nghiệp của bạn phải chi cho điện – nước – mạng bao nhiêu
                        tiền?</p>
          <p className="text-center">Bạn mất bao nhiêu tiền để đầu tư setup cho 1 văn phòng mới?</p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-4 mx-80 gap-3">
        <div>
          <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/12/7-01.png" alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">ĐẦY ĐỦ TIỆN ÍCH HIỆN ĐẠI & SANG TRỌNG</h3>
          <div className="pt-2 pl-3">
            <p>Hanoi Office được thiết kế chủ đạo với</p>
            <p>nội thất bằng gỗ tạo nên một không</p>
            <p>gian sang trọng và được trang bị đầy đủ</p>
            <p>tiện ích văn phòng cho bạn.</p>
          </div>
        </div>
        <div>
          <img className="mx-auto"
            src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-save-money-icon.png"
            alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">TÍNH PHÍ TRỌN GÓI - TỐI ƯU CHI PHÍ</h3>
          <div className="pt-2 pl-3">
            <p>Doanh nghiệp chỉ chi trả đúng phần</p>
            <p>diện tích mà mình sử dụng, nhưng</p>
            <p>được sử dụng toàn bộ không gian</p>
            <p>chung như: Phòng họp - Phòng khách</p>
          </div>
        </div>
        <div>
          <img className="mx-auto"
            src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-growth-icon.png" alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">TĂNG TRƯỞNG VÀ PHÁT TRIỂN DOANH NGHIỆP</h3>
          <div className="pt-2 pl-3">
            <p>Văn phòng trọn gói Hanoi Office tại các</p>
            <p>vị trí đắc địa tại Hà Nội, nơi hội tụ tất</p>
            <p>cả về kinh tế… là cơ hội giúp bạn mở</p>
            <p>rộng cơ hội giao thương</p>
          </div>
        </div>
        <div>
          <img className="mx-auto"
            src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-connect-business-icon.png"
            alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">CỘNG ĐỒNG KẾT NỐI DOANH NGHIỆP</h3>
          <div className="pt-2 pl-3">
            <p>Hanoi Office là một cộng đồng doanh</p>
            <p>nghiệp với 3000 tổ chức và 5000 cá</p>
            <p>nhân hiện đang sử dụng giải pháp văn</p>
            <p>phòng của chúng tôi.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-80 px-4 gap-4 pt-16">
        <div>
          <NavLink to=""><img
            src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-tron-goi-1.jpg" alt=""/></NavLink>
        </div>
        <div>
          <NavLink to=""> <img
            src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-phong-lam-viec-phong-hop.jpg" alt=""/></NavLink>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-80 px-4 gap-4 pt-2">
        <div>
          <NavLink to="">
            <img
              src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-van-phong-lam-viec-phong-khach.jpg" alt=""/>
          </NavLink>
        </div>
        <div>
          <NavLink to="">
            <img
              src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-van-phong-lam-viec-le-tan.jpg" alt=""/>
          </NavLink>
        </div>
      </div>
      <h3 className="font-bold mx-80 text-xl pt-4 border-b-2">TIẾT KIỆM 5 LOẠI CHI PHÍ KHI CHỌN THUÊ VĂN PHÒNG
                TRỌN GÓI HANOI OFFICE</h3>
      <div className="pt-10 grid grid-cols-2 px-80 mx-8 text-center">
        <div className="border border-dashed border-black">
          <div className="px-4">
            <svg className="w-64 h-48 mx-auto pt-6" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="blue"
                strokeWidth="1"
                strokeDasharray="50, 100"
              />
              <text className="text-xs percentage" x="10" y="20.35">50%</text>
            </svg>
            <h1 className="text-center font-bold pt-6">TIẾT KIỆM CHI PHÍ HOẠT ĐỘNG</h1>
            <p className="text-center pt-4">Văn Phòng Cho Thuê tại Hanoi Office hoàn toàn miễn phí điện -
                            nước - mạng</p>
            <p>giúp bạn tối ưu chi phí hoạt động</p>
          </div>
        </div>
        <div className="border border-dashed border-black">
          <svg className="w-64 h-48 mx-auto pt-6" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="blue"
              strokeWidth="1"
              strokeDasharray="100, 100"
            />
            <text className="text-xs percentage" x="4" y="20.35">100%</text>
          </svg>
          <h1 className="text-center font-bold pt-6">TIẾT KIỆM CHI PHÍ ĐẦU TƯ THIẾT BỊ</h1>
          <p className="text-center pt-4">Hanoi Office đã trang bị đầy đủ các thiết bị văn phòng: Máy in, máy
                        photocopy,</p>
          <p>máy fax, điện thoại bàn, tủ tài liệu, bàn, ghế...</p>
        </div>
      </div>
      <div className="pt-16 text-center">
        <h1 className="text-xl font-bold">TIẾT KIỆM CHI PHÍ CƠ HỘI</h1>
        <p>Hanoi Office không chỉ là cho thuê văn phòng trọn gói mà còn kiến tạo một cộng đồng doanh nghiệp,
                    giúp bạn tận dụng tối đa các cơ hội kinh doanh.</p>
      </div>
      <div className="pt-2 grid grid-cols-3 mx-72 pl-56">
        <div className="">
          <h3 className="text-blue-500 font-bold text-7xl pl-2">3000</h3>
          <div className="border-b-2 ml-16 mr-64 pr-4 pt-4"></div>
          <h3 className="font-bold pt-4">CÔNG TY & TỔ CHỨC</h3>
          <p className="pt-4 pl-10">Trong nước</p>
        </div>
        <div>
          <h3 className="text-blue-500 font-bold text-7xl pl-2">5000</h3>
          <div className="border-b-2 ml-16 mr-64 pr-4 pt-4"></div>
          <h3 className="font-bold pt-4 pl-12">CÁ NHÂN</h3>
          <p className="pt-4 pl-2">Trong và ngoài nước</p></div>
        <div>
          <h3 className="text-blue-500 font-bold text-7xl pl-6">322</h3>
          <div className="border-b-2 ml-16 mr-64 pr-4 pt-4"></div>
          <h3 className="font-bold pt-4 pl-6">ĐỐI TÁC QUỐC TẾ</h3>
          <p className="pt-4 pl-5">Trong và ngoài nước</p>
        </div>
      </div>
      <div className="pt-10 grid grid-cols-2 px-80 mx-8 text-center">
        <div className="border border-dashed border-black">
          <svg className="w-64 h-48 mx-auto pt-6" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="blue"
              strokeWidth="1"
              strokeDasharray="100, 100"
            />
            <text className="text-xs percentage" x="4" y="20.35">100%</text>
          </svg>
          <h1 className="text-center font-bold pt-6">NHÂN SỰ 0 ĐỒNG</h1>
          <p className="text-center pt-4">Bạn sẽ không phải bỏ chi phí để có một lễ tân xinh đẹp, bảo vệ 24/7,
                        nhân viên</p>
          <p>tạp vụ luôn giữ văn phòng sạch đẹp.</p>
        </div>
        <div className="border border-dashed border-black">
          <div className="px-4">
            <svg className="w-64 h-48 mx-auto pt-6" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="blue"
                strokeWidth="1"
                strokeDasharray="50, 100"
              />
              <text className="text-xs percentage" x="10" y="20.35">50%</text>
            </svg>
            <h1 className="text-center font-bold pt-6">DEAL HỜI TỪ HANOI OFFICE</h1>
            <p className="text-center pt-4">Giảm 50% tháng đầu tiên cho hợp đồng 06 tháng. Tặng thêm 01
                            tháng sử dụng</p>
            <p>không mất phí + Miễn phí ĐKKD khi ký hợp đồng 12 tháng.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 text-center pt-8">
        <div className="ml-80 pl-12 col-span-6 text-center">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-tron-goi-1-1.jpg" alt=""/>
        </div>
        <div className="text-left col-span-6 ml-6 mr-80">
          <div className="pt-6">
            <h1 className="font-bold text-center pb-4 text-center">ĐĂNG KÝ TƯ VẤN VĂN PHÒNG TRỌN GÓI</h1>
            <div className="grid grid-cols-2">
              <div className="inline-block mr-3">
                <label>Họ và tên:*</label>
                <input className="border border-gray-300 block pl-1.5 pr-28 py-1.5" type="text"/>
              </div>
              <div className="inline-block">
                <label>Email:*</label>
                <input className="border border-gray-300 block w-full pl-1.5 pr-28 py-1.5" type="text"/>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="mr-1.5">
                <label>Số điện thoại:*</label>
                <input className="border border-gray-300 block pl-1.5 pr-28 py-1.5" type="text"/>
              </div>
              <div className="ml-1">
                <label className="">Ngày hẹn:</label>
                <input className="border border-gray-300 block w-full pl-1.5 pr-2 py-1.5" type="date"/>
              </div>
            </div>
            <div className="pt-2">
              <label>Địa điểm bạn quan tâm:</label>
              <select className="border border-gray-300 block pr-28 py-1.5 w-full " type="text"
                placeholder="Chọn địa điểm">
                <option value="Chọn địa điểm">Chọn địa điểm</option>
                <option value="131 Trần Phú - Hà Đông">131 Trần Phú - Hà Đông</option>
                <option value="87 Nguyễn Thái Học - Ba Đình">87 Nguyễn Thái Học - Ba Đình</option>
                <option value="121-123 Tô Hiệu - Hà Đông">121-123 Tô Hiệu - Hà Đông</option>
                <option value="Lê Đức Thọ - Nam Từ Liêm">Lê Đức Thọ - Nam Từ Liêm</option>
                <option value="12 Khuất Duy Tiến - Thanh Xuân">12 Khuất Duy Tiến - Thanh Xuân</option>
                <option value="78 Duy Tân - Cầu Giấy">78 Duy Tân - Cầu Giấy</option>
              </select>
            </div>
            <div className="pt-2">
              <label>Yêu cầu chi tiết:</label>
              <input type="text" className="border border-gray-300 block w-full pl-1.5 py-1.5"/>
            </div>
            <div className="pt-2">
              <button
                className="border border-blue-500 bg-blue-500 px-10 py-2 text-white hover:bg-white hover:text-black">GỬI
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-12">
        <h1 className="text-2xl pt-12 font-bold text-center">DỊCH VỤ CHO THUÊ VĂN PHÒNG TRỌN GÓI TẠI HÀ NỘI VỚI
                    12 TIỆN ÍCH MIỄN PHÍ</h1>
        <p className="pt-2 text-center">Thuê văn phòng tại Hanoi Office bạn chỉ cần bỏ ra chi phí từ 4.000.000đ/
                    tháng để sử dụng trọn gói tiện ích: Phòng họp hiện đại, phòng khách sang trọng, điện - nước -</p>
        <p className="text-center">internet, trang thiết bị văn phòng.</p>
        <div className="grid grid-cols-4 pt-4 mx-80 pl-4 gap-2">
          <div>
            <h4 className="font-bold">1. PHÒNG KHÁCH SANG TRỌNG</h4>
            <p>Bạn được sử dụng phòng khách sang</p>
            <p>trọng hoàn toàn miễn phí trên toàn</p>
            <p>hệ thống của Hanoi Office.</p>
          </div>
          <div>
            <h4 className="font-bold">2. PHÒNG HỌP HIỆN ĐẠI</h4>
            <p>Phòng họp được trang bị đầy đủ trang</p>
            <p>thiết bị: Máy chiếu, tivi, bảng viết,...</p>
            <p>luôn sẵn sàng phục vụ bạn khi bạn cần.</p>
          </div>
          <div>
            <h4 className="font-bold">3. ĐỊA CHỈ ĐĂNG KÝ KINH DOANH</h4>
            <p>Bạn sẽ có 1 địa chỉ đăng ký kinh doanh</p>
            <p>ở các vị trí đắc địa tại trung tâm Hà</p>
            <p>Nội, thuận lợi di chuyển và giao thương.</p>
          </div>
          <div>
            <h4 className="font-bold">4. LỄ TÂN XINH ĐẸP</h4>
            <p>Nhân viên đại diện chuyên nghiệp và</p>
            <p>xinh đẹp sẽ xử lý những công việc</p>
            <p>trong phạm vi cho phép khi bạn vắng mặt.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 pt-4 mx-80 pl-4 gap-2">
          <div>
            <h4 className="font-bold">5. MIỄN PHÍ ĐIỆN - NƯỚC</h4>
            <p>Không lo về hóa đơn điện - nước tăng</p>
            <p>cao, không lo về sự cố bất thường khi</p>
            <p>thuê văn phòng Hanoi Office.</p>
          </div>
          <div>
            <h4 className="font-bold">6. INTERNET TỐC ĐỘ CAO</h4>
            <p>Được sử dụng miễn phí Internet tốc độ</p>
            <p>cao, không phải lo về giật - lag khiến</p>
            <p>công việc bị gián đoạn.</p>
          </div>
          <div>
            <h4 className="font-bold">7. MÁY IN - PHOTOCOPY - FAX</h4>
            <p>Điện thoại - Máy in - Máy photocopy -</p>
            <p>Máy fax: Đã được trang bị đầy đủ, đáp</p>
            <p>ứng tất cả nhu cầu của doanh nghiệp.</p>
          </div>
          <div>
            <h4 className="font-bold">8. NHẬN THƯ - BƯU PHẨM</h4>
            <p>Lễ tân sẽ giúp bạn nhận bưu thư, bưu</p>
            <p>phẩm và chuyển về địa chỉ bạn mong</p>
            <p>muốn. Luôn bảo mật - Đúng hẹn.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 pt-4 mx-80 pl-4 gap-2 pb-12">
          <div>
            <h4 className="font-bold">9. AN NINH 24/7</h4>
            <p>Hệ thống an ninh nghiêm ngặt với bảo</p>
            <p>về và CCTV hoạt động liên tục 24/7</p>
            <p>giúp bạn an tâm làm việc.</p>
          </div>
          <div>
            <h4 className="font-bold">10. NHÂN VIÊN HỖ TRỢ</h4>
            <p>Đội ngũ hỗ trợ tại Hanoi Office luôn sẵn</p>
            <p>sàng hỗ trợ bạn, chúng tôi sẽ không</p>
            <p>làm công việc bạn bị gián đoạn.</p>
          </div>
          <div>
            <h4 className="font-bold">11. DỊCH VỤ SUPPORT</h4>
            <p>Hanoi Office sẽ giải quyết toàn bộ các</p>
            <p>vấn đề của doanh nghiệp: Kế toán,</p>
            <p>Thuế, Marketing, Quản lý văn phòng...</p>
          </div>
          <div>
            <h4 className="font-bold">12. TẠP VỤ</h4>
            <p>Văn phòng của bạn sẽ luôn sạch sẽ và</p>
            <p>được dọn dẹp theo khung giờ bạn yêu</p>
            <p>cầu.</p>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl text-center pt-12">CHỌN GÓI THUÊ VĂN PHÒNG TRỌN GÓI PHÙ HỢP VÀ NHẬN BÁO
                GIÁ</h1>
      <div className="pt-16 mx-80">
        <span>Hanoi Office cung cấp dịch vụ </span>
        <span className="font-bold">cho thuê văn phòng hạng a tại Hà Nội </span>
        <span>giúp doanh nghiệp tiết kiệm đến 80% chi phí. Bởi chúng tôi đã trang bị đầy đủ thiết bị văn phòng: Bàn</span>
      </div>
      <div className="mx-80">
        <span>ghế, tủ tài liệu, máy in, máy photo, điện thoại bàn,… Bên cạnh đó, chỉ với </span>
        <span className="font-bold">giá thuê văn phòng hạng a tại Hà Nội </span>
        <span>Office cực rẻ. Bạn được sử dụng miễn phí điện, nước,</span>
      </div>
      <div className="mx-80">
        <span>internet tốc độ cao,… Vệ sinh hàng ngày, bảo vệ 24/7,… Tất cả tiện ích dịch vụ đều trọn gói. Bạn chỉ việc xách laptop đến và làm việc, còn lại đã có Hanoi Office lo!</span>
      </div>
      <div className="pt-3">
        <div className="mx-80">
          <span>Hanoi Office linh động trong việc </span>
          <NavLink to=""><span className="font-bold text-blue-500">cho thuê văn phòng. </span></NavLink>
          <span>Giá thuê văn phòng tại Hà Nội có thể theo giờ, theo ngày, theo tuần tùy theo nhu cầu của khách hàng. Qúy khách vui</span>
        </div>
        <div className="mx-80">
          <span>lòng liên hệ số </span>
          <span className="font-bold">Hotline: 085 339 4567 hoặc 0904 388 909 </span>
          <span>để nhận báo giá chi tiết.</span>
        </div>
      </div>
      <div className="pt-3">
        <div className="mx-80">
          <span>Giá thuê Văn phòng trọn gói </span>
          <span className="font-bold">chỉ từ 4.000.000 VNĐ/ tháng</span>
          <span>, tùy từng khu vực lựa chọn, vui lòng </span>
          <NavLink to=""><span className="font-bold text-blue-500 text-xl">LIÊN HỆ</span></NavLink>
        </div>
      </div>
      <div className="grid grid-cols-4 mx-64 pt-16">
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/02/bao-gia-van-phong-tron-goi-1-3.jpg"
            alt=""/>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/02/bao-gia-van-phong-tron-goi-2-2.jpg"
            alt=""/>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/02/bao-gia-van-phong-tron-goi-3-3.jpg"
            alt=""/>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/02/bao-gia-van-phong-tron-goi-4-2.jpg"
            alt=""/>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 mt-12 py-3">
        <div className="ml-64">
          <p className="font-bold text-white pt-3">Bạn đang tìm thuê văn phòng tại các quận nội thành Hà Nội?
                        Hãy để Hanoi Office giúp bạn!</p>
        </div>
        <div className="ml-48">
          <button
            className="ml-24 bg-white font-bold text-black border border-white hover:bg-blue-500 hover:text-white py-2 px-16">ĐĂNG
                        KÝ NHẬN TƯ VẤN
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="font-bold text-center text-2xl">TRẢI NGHIỆM KHÔNG GIAN VĂN PHÒNG TRỌN GÓI CHO THUÊ</h2>
      </div>
      <div className="text-center mt-16">
                Slide Ảnh
      </div>
      <div className="mt-12 bg-gray-200">
        <div className="py-12">
          <h3 className="font-bold text-center text-2xl">BẠN ĐANG CẦN TÌM THUÊ VĂN PHÒNG TRỌN GÓI Ở ĐÂU HÀ
                        NỘI?</h3>
          <p className="text-xl text-center">Hanoi Office cho thuê văn phòng tại các quận nội thành: Ba Đình,
                        Hà Đông, Thanh Xuân, Cầu Giấy, Nam Từ Liêm.</p>
          <p className="text-xl text-center">Hãy lựa chọn địa điểm thuận tiện nhất!</p>
          <div className="pt-12 grid grid-cols-6 text-center px-6 mx-80">
            <div className="">
              <NavLink to="">
                <img className="w-40 h-52 mx-auto"
                  src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-ba-dinh.jpg" alt=""/>
              </NavLink>
              <p className="font-bold text-xl">1 Cơ sở</p>
              <p className="font-bold text-xl">Quận Ba Đình</p>
              <p className="font-bold text-xl">Hà Nội</p>
            </div>
            <div className="">
              <NavLink to="">
                <img className="w-40 h-52 mx-auto"
                  src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-cau-giay.jpg" alt=""/>
              </NavLink>
              <p className="font-bold text-xl">1 Cơ sở</p>
              <p className="font-bold text-xl">Quận Cầu Giấy</p>
              <p className="font-bold text-xl">Hà Nội</p>
            </div>
            <div className="">
              <NavLink to="">
                <img className="w-40 h-52 mx-auto"
                  src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-ha-dong.jpg" alt=""/>
              </NavLink>
              <p className="font-bold text-xl">2 Cơ sở</p>
              <p className="font-bold text-xl">Quận Hà Đông</p>
              <p className="font-bold text-xl">Hà Nội</p>
            </div>
            <div className="">
              <NavLink to="">
                <img className="w-40 h-52 mx-auto"
                  src="https://hanoioffice.vn/wp-content/uploads/2020/12/quan-hoang-mai.jpg" alt=""/>
              </NavLink>
              <p className="font-bold text-xl">1 Cơ sở</p>
              <p className="font-bold text-xl">Quận Hoàng Mai</p>
              <p className="font-bold text-xl">Hà Nội</p>
            </div>
            <div className="">
              <NavLink to="">
                <img className="w-40 h-52 mx-auto"
                  src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-nam-tu-liem.jpg" alt=""/>
              </NavLink>
              <p className="font-bold text-xl">1 Cơ sở</p>
              <p className="font-bold text-xl">Quận Nam Từ Liêm</p>
              <p className="font-bold text-xl">Hà Nội</p>
            </div>
            <div className="">
              <NavLink to="">
                <img className="w-40 h-52 mx-auto"
                  src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-thanh-xuan.jpg" alt=""/>
              </NavLink>
              <p className="font-bold text-xl">2 Cơ sở</p>
              <p className="font-bold text-xl">Quận Thanh Xuân</p>
              <p className="font-bold text-xl">Hà Nội</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <h1 className="font-bold text-2xl pl-80 ml-6">TÌM HIỂU VỀ VĂN PHÒNG TRỌN GÓI</h1>
      </div>
      <div className="pt-8 mx-80 pl-6">
        <span>Dịch vụ </span>
        <span className="font-bold">“cho thuê văn phòng trọn gói” </span>
        <span>được du nhập vào Việt Nam năm 2006, được bùng nổ và phát triển vào giai đoạn năm 2013 đến nay. Là một trong những đơn vị</span>
      </div>
      <div className="mx-80 pl-6">
        <span>đầu tiên đưa văn phòng trọn gói về Việt Nam, Hanoi Office là một lá cờ đầu, một đơn vị tiên phong trong lĩnh vực cung cấp dịch vụ cho thuê văn phòng trọn gói tại Hà Nội.</span>
      </div>
      <div className="pt-4">
        <div className="mx-80 pl-6">
          <span>Đặc biệt, Hanoi Office còn cung cấp dịch vụ cho thuê văn phòng trọn gói giá rẻ linh hoạt theo giờ Hà Nội. Giá chỉ từ </span>
          <span className="font-bold">7.000 VNĐ/giờ/người </span>
          <span>bạn đã có một chỗ ngồi làm việc</span>
        </div>
        <div className="mx-80 pl-6">
          <span>linh hoạt, chuyên nghiệp và hiện đại. Hãy đến với Hanoi Office, chúng tôi sẽ đem đến cho các bạn một văn phòng chuyên nghiệp – hiện đại – sang trọng.</span>
        </div>
      </div>
      <div className="pt-4">
        <div className="mx-80 pl-6">
          <span>Với dịch vụ </span>
          <NavLink to=""><span className="font-bold text-blue-500">cho thuê văn phòng</span></NavLink>
          <span>này bạn hay doanh nghiệp của bạn chỉ cần tập trung toàn bộ sức mạnh và nguồn lực vào lĩnh vực kinh doanh chính của mình còn các vấn</span>
        </div>
        <div className="mx-80 pl-6">
          <span>đề phụ trợ đã có Hanoi Office thay bạn chịu trách nhiệm. Bạn hoàn toàn chủ động trong công việc kinh doanh!</span>
        </div>
      </div>
      <div className="pt-12">
        <h3 className="font-bold text-2xl pl-80 ml-6">Những câu hỏi thường gặp về giải pháp Văn phòng trọn
                    gói:</h3>
      </div>
      <div className="pt-3 pl-80 ml-6">
        <p>Văn phòng trọn gói là gì? Văn phòng chia sẻ là gì?</p>
        <p>Lợi ích của văn phòng trọn gói là gì?</p>
        <p>Share văn phòng làm việc có những ưu điểm gì?</p>
        <p>Tính chất pháp lý của Văn Phòng Trọn Gói?</p>
        <p>Doanh nghiệp nào phù hợp với Văn phòng trọn gói?</p>
        <p>Hanoi Office cho thuê văn phòng trọn gói ở đâu Hà Nội?</p>
        <p>Thuê văn phòng trọn gói tại Hanoi Office có phát sinh thêm chi phí không?</p>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 mt-12 py-3">
        <div className="ml-52">
          <p className="font-bold text-white pt-6">Bạn đang tìm giải pháp cho thuê văn phòng trọn gói tại Hà Nội? Hãy để Hanoi Office giúp bạn!</p>
        </div>
        <div className="ml-48">
          <button
            className="ml-24 bg-white font-bold text-black border border-white hover:bg-blue-500 hover:text-white my-3 py-2 px-16">NHẬN BÁO GIÁ
          </button>
        </div>
      </div>
    </>
  );
};
export default AllInclusiveOffice;