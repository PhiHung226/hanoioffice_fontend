import React from 'react';

import {ChevronRight, FiberManualRecord} from '@material-ui/icons';

const WorkingSeat = () => {
  return (
    <>
      <div className="bg-gray-500">
        <div className="grid grid-cols-2 gap-2">
          {/*<div> </div>*/}
          <div className="mt-20 mb-24 mr-5 pl-2">
            <h2 className="text-white text-center text-3xl font-bold">CHỖ NGỒI LÀM VIỆC CHO THUÊ</h2>
            <h4 className="text-white text-center border-b-2 border-white font-medium ">Không gian chỗ ngồi làm việc tràn đầy năng lượng thỏa sức sáng tạo.</h4>
            <div className="mt-4">
              <p className="text-white">Cho thuê chỗ ngồi làm việc tại Hà Nội là một dịch vụ chia sẻ chỗ ngồi làm việc, một giải pháp hoàn toàn mới cho các cá nhân, tổ chức và doanh nghiệp muốn có không gian làm việc hiện đại, đầy đủ các tiện ích văn phòng nhưng lại muốn tiết kiệm chi phí một cách tối đa. Tại sao lại vậy?</p>
            </div>
            <div className="mt-10">
              <p className="text-red-400"><ChevronRight  url=""/>Chương trình khuyến mại tháng 3, xem chi tiết!</p>
            </div>
            <div className="pb-20">
              <p className="text-white">Chọn một địa điểm</p>
              <select className="pl-8 pr-96 py-2 mr-2" placeholder="Tất cả địa điểm">
                <option value="">Tất cả địa điểm</option>
                <option value="">QUẬN BA ĐÌNH</option>
                <option value="">QUẬN CẦU GIẤY</option>
                <option value="">QUẬN HÀ ĐÔNG</option>
                <option value="">QUẬN HOÀNG MAI</option>
                <option value="">QUẬN NAM TỪ LIÊM</option>
                <option value="">QUẬN THANH XUÂN</option>
              </select>
              <button className="border border-blue-500 bg-blue-500 text-white pl-16 pr-20 py-1.5 max-w-max hover:bg-gray-600">TÌM</button>
            </div>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            <div>
              <img src="" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 py-6">
        <div className="ml-52">
          <p className="font-bold text-white pt-1">Bạn đang cần tư vấn để thuê chỗ ngồi làm việc tốt nhất? Hãy để Hanoi Office giúp bạn!</p>
        </div>
        <div className="ml-48">
          <button
            className="ml-24 bg-white font-bold text-black border border-white hover:bg-blue-500 hover:text-white py-2 px-16 text-xs">GỌI ĐIỆN CHO HANOI OFFICE
          </button>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="font-bold text-3xl text-center">4 LÝ DO NÊN CHỌN CHỖ NGỒI LÀM VIỆC TẠI HANOI OFFICE</h1>
        <div className="mt-3">
          <p className="text-center">Chỉ từ 800.000 VNĐ/tháng bạn sẽ có một không gian làm việc sáng tạo tràn đầy năng lương.</p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-4 mx-80 gap-3">
        <div>
          <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/12/7-01.png" alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">KHÔNG GIAN SÁNG TẠO & NĂNG LƯỢNG</h3>
          <div className="pt-2 pl-6">
            <p>Không  gian  làm  việc  mở, trẻ</p>
            <p>trung, hiện đại nhưng vẫn đảm</p>
            <p>bảo sự riêng tư, yên tĩnh cho bạn</p>
            <p>toàn tâm - toàn ý làm việc!</p>
          </div>
        </div>
        <div>
          <img className="mx-auto"
            src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-save-money-icon.png"
            alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">CHỖ NGỒI LÀM VIỆC GIÁ RẺ - TỐI ƯU CHI PHÍ</h3>
          <div className="pt-2 pl-3">
            <p>Chỉ từ 7.000 VNĐ/ giờ, bạn đã có</p>
            <p>thể sở hữu ngay văn phòng hạng</p>
            <p>A với full 15+ tiện ích ưu việt nhất</p>
            <p>- SIÊU TIẾT KIỆM!</p>
          </div>
        </div>
        <div>
          <img className="mx-auto"
            src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-growth-icon.png" alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">ĐẠT HIỆU QUẢ LÀM VIỆC CAO NHẤT</h3>
          <div className="pt-2 pl-3">
            <p>Hanoi Office kiến tạo không gian</p>
            <p>cho thuê chỗ ngồi làm việc sáng</p>
            <p>tạo sẽ giúp bạn đạt hiệu quả làm</p>
            <p>việc tốt nhất.</p>
          </div>
        </div>
        <div>
          <img className="mx-auto"
            src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-connect-business-icon.png"
            alt=""/>
          <h3 className="font-bold text-center pt-6 text-xl">CỘNG ĐỒNG KẾT NỐI DOANH NGHIỆP</h3>
          <div className="pt-2 pl-3">
            <p>Làm việc trong không gian chung</p>
            <p>tại Hanoi office là cơ hội để các</p>
            <p>doanh nghiệp, cá nhân cùng giao</p>
            <p>lưu, kết nối và chia sẻ.</p>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-20 mx-96 pl-36">
        <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-cho-ngoi-lam-viec.jpg" alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold">TIẾT KIỆM CHI PHÍ CƠ HỘI</h1>
        <p>Không chỉ là thuê chỗ ngồi làm việc - Hanoi Office còn là một cộng đồng doanh nghiệp, giúp bạn mở rộng cơ hội hợp tác với các doanh nghiệp trong và ngoài nước.</p>
        <div className="border-b-2 border-gray-300 mx-80"></div>
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
          <p className="text-center pt-4">Dịch vụ cho thuê chỗ ngồi làm việc - Hanoi Office sẽ cung cấp cho bạn đội ngũ</p>
          <p className="text-center">nhân viên lễ tân trẻ trung, chuyên nghiệp; nhân viên tạp vụ, bảo vệ 24/7 với chi</p>
          <p className="text-center">phí 0 đồng.</p>
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
            <p className="text-center">không mất phí + Miễn phí ĐKKD khi ký hợp đồng 12 tháng khi thuê chỗ ngồi</p>
            <p className="text-center">làm việc cố định sang trọng, hiện đại, full tiện ích tại Hanoi Office.</p>
          </div>
        </div>
      </div>
      <div className="font-bold ml-80 text-xl pt-12 pl-4">
        CÁC TIỆN ÍCH KHI SỬ DỤNG DỊCH VỤ THUÊ CHỖ NGỒI LÀM VIỆC TẠI HANOI OFFICE
      </div>
      <div className="border-b-2 border-gray-300 mx-80 px-12"></div>
      <div className="pt-4 mx-96">
        <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-ngoi-lam-viec-8-tien-ich.jpg" alt="" />
      </div>
      <div className="pt-20">
        <h3 className="font-bold text-2xl text-center">CHỌN GÓI THUÊ CHỖ NGỒI LÀM VIỆC PHÙ HỢP VÀ NHẬN BÁO GIÁ</h3>
      </div>
      <div className="pt-4 grid grid-cols-4 mx-96 gap-6">
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/bao-gia-cho-ngoi-lam-viec-theo-gio.jpg" alt="" />
          <p className="text-center font-bold">THUÊ THEO GIỜ</p>
          <p className="text-center pt-3">Chỉ từ 50.000đ/ 4 giờ</p>
          <div className="pt-9 pb-9 text-center">
            <a href="">
              <span className="text-xs font-bold text-white border rounded hover:border-blue-500 hover:text-black hover:bg-white bg-blue-500 py-3 px-12">NHẬN BÁO GIÁ</span>
            </a>
          </div>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/bao-gia-cho-ngoi-lam-viec-theo-ngay.jpg" alt="" />
          <p className="text-center font-bold">THUÊ THEO NGÀY</p>
          <p className="text-center pt-3">Chỉ từ 80.000đ/ ngày</p>
          <div className="pt-9 pb-9 text-center">
            <a href="">
              <span className="text-xs font-bold text-white border rounded hover:border-blue-500 hover:text-black hover:bg-white bg-blue-500 py-3 px-12">NHẬN BÁO GIÁ</span>
            </a>
          </div>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/bao-gia-cho-ngoi-lam-viec-theo-tuan.jpg" alt="" />
          <p className="text-center font-bold">THUÊ THEO TUẦN</p>
          <p className="text-center pt-3">Chỉ từ 390.000đ/ tuần</p>
          <div className="pt-9 pb-9 text-center">
            <a href="">
              <span className="text-xs font-bold text-white border rounded hover:border-blue-500 hover:text-black hover:bg-white bg-blue-500 py-3 px-12">NHẬN BÁO GIÁ</span>
            </a>
          </div>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/bao-gia-cho-ngoi-lam-viec-theo-thang.jpg" alt="" />
          <p className="text-center font-bold">THUÊ THEO THÁNG</p>
          <p className="text-center pt-3">Chỉ từ 1.200.000đ/ tháng</p>
          <div className="pt-9 pb-9 text-center">
            <a href="">
              <span className="text-xs font-bold text-white border rounded hover:border-blue-500 hover:text-black hover:bg-white bg-blue-500 py-3 px-12">NHẬN BÁO GIÁ</span>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 text-center pt-8">
        <div className="ml-80 pl-12 col-span-6 text-center">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/cho-ngoi-lam-viec-1.jpg" alt=""/>
        </div>
        <div className="text-left col-span-6 ml-6 mr-80 py-16">
          <div className="pt-6">
            <div className="text-center pb-4">
              <span className="text-xl">ĐĂNG KÝ TRẢI NGHIỆM </span>
              <span className="font-bold text-xl">CHỖ NGỒI LÀM VIỆC CHO THUÊ</span>
            </div>
            <div className="grid grid-cols-2">
              <div className="inline-block mr-3">
                <label>Họ và tên:*</label>
                <input className="border border-gray-300 block pl-1.5 pr-20 py-1.5" type="text"/>
              </div>
              <div className="inline-block">
                <label>Email:*</label>
                <input className="border border-gray-300 block w-full pl-1.5 pr-28 py-1.5" type="text"/>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="mr-1.5">
                <label>Số điện thoại:*</label>
                <input className="border border-gray-300 block pl-1.5 pr-20 py-1.5" type="text"/>
              </div>
              <div className="">
                <label>Số lượng chỗ ngồi cần thuê:</label>
                <select className="border border-gray-300 block pr-28 py-1.5 w-full " type="text"
                  placeholder="Cá nhân" >
                  <option value="Cá nhân">Cá nhân</option>
                  <option value="Từ 2-3 nhân sự">Từ 2-3 nhân sự</option>
                  <option value="Từ 4-6 nhân sự">Từ 4-6 nhân sự</option>
                  <option value="Từ 7-10 nhân sự">Từ 7-10 nhân sự</option>
                  <option value="Trên 10 nhân sự">Trên 10 nhân sự</option>
                </select>
              </div>
            </div>
            <div className="pt-2">
              <label>Yêu cầu chi tiết:</label>
              <input type="text" className="border border-gray-300 block w-full pl-1.5 py-1.5"/>
            </div>
            <div className="pt-2">
              <button
                className="border rounded border-blue-500 bg-blue-500 px-16 py-2 text-white hover:bg-white hover:text-black">GỬI
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 py-6">
        <div className="ml-52">
          <p className="font-bold text-white text-lg pt-1">Bạn đang tìm thuê chỗ ngồi làm việc tại Hà Nội? Hãy để Hanoi Office giúp bạn!</p>
        </div>
        <div className="ml-48">
          <button
            className="ml-24 bg-white font-bold text-black border border-white hover:bg-blue-500 hover:text-white py-2 px-16 text-xs">GỌI ĐIỆN CHO HANOI OFFICE
          </button>
        </div>
      </div>
      <div className="pt-16">
        <h3 className="text-center font-bold text-3xl">BẠN ĐANG CẦN TÌM THUÊ CHỖ NGỒI LÀM VIỆC Ở ĐÂU HÀ NỘI?</h3>
        <p className="text-center text-xl pt-2">Hanoi Office Coworking cho thuê chỗ ngồi làm việc tiện ích tại các quận nội thành: Ba Đình, Hà Đông, Thanh Xuân, Cầu Giấy, Nam Từ Liêm, Hoàng Mai.</p>
        <p  className="text-center text-xl">Hãy lựa chọn địa điểm thuận tiện nhất!</p>
      </div>
      <div className="pt-12 grid grid-cols-6 text-center px-6 mx-80">
        <div className="">
          <a href="">
            <img className="w-40 h-52 mx-auto"
              src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-ba-dinh.jpg"/>
          </a>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Ba Đình</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <a href="">
            <img className="w-40 h-52 mx-auto"
              src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-cau-giay.jpg"/>
          </a>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Cầu Giấy</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <a href="">
            <img className="w-40 h-52 mx-auto"
              src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-ha-dong.jpg"/>
          </a>
          <p className="font-bold text-xl">2 Cơ sở</p>
          <p className="font-bold text-xl">Quận Hà Đông</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <a href="">
            <img className="w-40 h-52 mx-auto"
              src="https://hanoioffice.vn/wp-content/uploads/2020/12/quan-hoang-mai.jpg"/>
          </a>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Hoàng Mai</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <a href="">
            <img className="w-40 h-52 mx-auto"
              src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-nam-tu-liem.jpg"/>
          </a>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Nam Từ Liêm</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <a href="">
            <img className="w-40 h-52 mx-auto"
              src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-thanh-xuan.jpg"/>
          </a>
          <p className="font-bold text-xl">2 Cơ sở</p>
          <p className="font-bold text-xl">Quận Thanh Xuân</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
      </div>
      <div className="pt-16">
        <h3 className="text-center text-3xl font-bold">DỊCH VỤ CHO THUÊ CHỖ NGỒI LÀM VIỆC TẠI HÀ NỘI</h3>
        <h4 className= "font-bold text-xl pl-80 ml-8 pt-6">COWORKING SPACE HANOI – DỊCH VỤ CHO THUÊ CHỖ LÀM VIỆC CỦA THỜI ĐẠI XÃ HỘI 5.0?</h4>
        <div className="pt-6 pl-80 ml-8">
          <p>Coworking Space Hanoi là một không gian làm việc chung tại Hà Nội, trong đó tất cả các cá nhân, tổ chức thuê Coworking Space cùng ngồi làm việc trong một không</p>
          <p>gian văn phòng chung, cùng chia sẻ các tiện ích, chia sẻ công việc, các ý tưởng nhưng mỗi thành viên vẫn độc lập trong các công việc của mình.</p>
        </div>
        <div className="pt-6 pl-80 ml-8">
          <span>Hanoi Office chuyên cung cấp các dịch vụ Cho thuê “Chỗ ngồi làm việc, văn phòng ảo, văn phòng đại diện, văn phòng làm việc, chỗ ngồi làm việc, phòng họp…” </span>
          <span className="font-bold">Giá rẻ – Uy</span>
          <div>
            <span className="font-bold">tín số 1 Hà Nội. Với gần 10 năm kinh nghiệm, </span>
            <span>Hanoi Office sẽ là lựa chọn hoàn hảo nhất cho khách hàng. </span>
            <span className="font-bold">Ưu đãi VÀNG dịch vụ Cho thuê chỗ ngồi làm việc của Hanoi</span>
            <p className="font-bold">Office:</p>
          </div>
        </div>
        <div className="pt-6 pl-80 ml-8">
          <div>
            <FiberManualRecord className="w-6 pr-3 pb-0.5" />
            <span>Giá tốt nhất tại Hà Nội trọn gói </span>
            <span className="font-bold">chỉ từ 7.000 VNĐ/giờ – 800.000 VNĐ/tháng </span>
            <span>bạn đã có một chỗ ngồi lý tưởng, full tiện ích.</span>
          </div>
          <div>
            <FiberManualRecord className="w-6 pr-3 pb-0.5" />
            <span className="font-bold">Thuê 1 tặng 1: Tặng 1000h làm việc miễn phí </span>
            <span>khi thuê gói 1000 giờ khi sử dụng dịch vụ chỗ ngồi linh hoạt tại 8 cơ sở đắc địa của Hanoi Office</span>
          </div>
          <div>
            <FiberManualRecord className="w-6 pr-3 pb-0.5" />
            <span className="font-bold">Giảm 50% </span>
            <span>phí thuê văn phòng tháng đầu cho hợp đồng 06 tháng; Giảm 50% phí thuê văn phòng tháng đầu + Tặng thêm 1 tháng sử dụng miễn phí cho hợp đồng 12 tháng khi sử</span>
            <p>dụng dịch vụ Chỗ ngồi cố định tại cơ sở Trần Phú, Tô Hiệu, Khuất Duy Tiến</p>
          </div>
          <div>
            <FiberManualRecord className="w-6 pr-3 pb-0.5" />
            <span>Giảm 50% phí thuê văn phòng 03 tháng đầu cho hợp đồng 12 khi sử dụng dịch vụ Chỗ ngồi cố định tại Nguyễn Thái Học và Lê Văn Lương</span>
          </div>
          <div>
            <FiberManualRecord className="w-6 pr-3 pb-0.5" />
            <span>Sử dụng </span>
            <span className="font-bold">văn phòng hạng A </span>
            <span>với hơn 15+ tiện ích dịch vụ văn phòng (Lễ tân chuyên nghiệp, bảo vệ 24/7, máy in – máy fax – máy chiếu, internet tốc độ cao, tổng đài nhận và</span>
            <p>chuyển tiếp cuộc gọi…)</p>
          </div>
          <div>
            <FiberManualRecord className="w-6 pr-3 pb-0.5" />
            <span className="font-bold">Chỗ ngồi làm việc hợp phong thủy</span>
            <span>với vị trí trung tâm Hà Nội – Giáp mặt các tuyến đường trọng điểm, thuận tiện di chuyển đi lại.</span>
          </div>
        </div>
        <div className="pt-6 pl-80 ml-8">
          <span className="font-bold">Hãy GỌI NGAY cho chúng tôi để nhận tư vấn tốt nhất! HOTLINE: </span>
          <a href="" className="font-bold text-blue-500">
            085.339.4567
          </a>
          <span className="font-bold"> - </span>
          <a href="" className="font-bold text-blue-500">
            0904.388.909
          </a>
          <span className="italic"> Chỗ ngồi làm việc chuẩn 5 sao Hanoi Office</span>
        </div>
      </div>
      <div className="pt-2 mx-96 pl-48">
        <img src="https://hanoioffice.vn/wp-content/uploads/2020/09/cho-ngoi-lam-viec-n1.jpg" alt="" />
      </div>
      <div className="pt-2 pl-80 ml-8">
        <span>Khi lựa chọn dịch vụ chia sẻ chỗ ngồi làm việc tại Hanoi Office, khách hàng của chúng tôi chỉ phải trả chi phí đúng với số lượng chỗ ngồi sử dụng thực tế </span>
        <span className="font-bold">(Chỉ từ 800.000</span>
      </div>
      <div className="pt-2 pl-80 ml-8">
        <span className="font-bold">VNĐ/tháng/Chỗ ngồi) </span>
        <span>nhưng lại được dùng toàn bộ không gian và thiết bị văn phòng chung.</span>
      </div>
      <div className="pt-3 pl-80 ml-8">
        <h5 className="font-bold italic">Tiện ích và tối ưu là những gì dịch vụ cho thuê chỗ ngồi làm việc đem lại? Vậy dịch vụ này là gì?</h5>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <h5 className="font-bold text-2xl">CHO THUÊ CHỖ NGỒI LÀM VIỆC LÀ…</h5>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <span>Một dịch vụ chia sẻ không gian văn phòng làm việc chung kèm theo đầy đủ các tiện ích văn phòng hiện đại nhưng vẫn đảm bảo tính riêng tư cho mỗi cá nhân ngồi làm</span>
        <p>việc.</p>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <span>Nói một cách đơn giản bạn có thể hiểu là khi </span>
        <span className="font-bold">thuê chỗ ngồi làm việc </span>
        <span>(văn phòng chia sẻ) thì bạn sẽ được ngồi làm việc trong một không gian </span>
        <span className="font-bold">chỗ ngồi làm việc theo</span>
      </div>
      <div className="pl-80 ml-8">
        <span className="font-bold">phong thủy </span>
        <span>với thiết kế thông minh. Đầy đủ các tiện ích văn phòng, đồng nghiệp của bạn có thể sẽ là nhân viên của nhiều công ty khác nhau.</span>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <span className="font-bold text-red-600">Tham khảo ngay những giải pháp văn phòng thông minh khác tại Hanoi Office:</span>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <div>
          <a href="">
            <span className="font-bold">1.</span>
            <span className="font-bold text-blue-700">Văn phòng ảo</span>
          </a>
        </div>
        <div className="pt-2">
          <a href="">
            <span className="font-bold">2.</span>
            <span className="font-bold text-blue-700">Cho thuê văn phòng trọn gói</span>
          </a>
        </div>
        <div className="pt-2">
          <a href="">
            <span className="font-bold">3.</span>
            <span className="font-bold text-blue-700">Cho thuê phòng họp</span>
          </a>
        </div>
        <div className="pt-2">
          <a href="">
            <span className="font-bold">4.</span>
            <span className="font-bold text-blue-700">Phòng họp trực tuyến</span>
          </a>
        </div>
      </div>
      <div className="pt-6 pl-80 ml-8">
        <h3 className="font-bold text-2xl">DỊCH VỤ CHO THUÊ CHỖ NGỒI LÀM VIỆC TẠI HANOI OFFICE</h3>
      </div>
      <div className="pt-6 pl-80 ml-8">
        <span className="font-bold">Kinh doanh cho thuê chỗ ngồi làm việc giá rẻ </span>
        <span>từ năm 2013, Hanoi Office luôn tự hào là doanh nghiệp tiên phong. Với nhiều năm kinh nghiệm trong lĩnh vực này, chúng tôi</span>
        <div>
          <span>luôn đem đến chất lượng dịch vụ hàng đầu tới khách hàng với chi phí tiết kiệm nhất </span>
          <span className="font-bold">(Chỉ từ 800.000 VNĐ/tháng).</span>
        </div>
      </div>
      <div className="pt-6 pl-80 ml-8">
        <h3 className="font-bold text-xl">Chúng tôi có 2 hình thức cho thuê chỗ ngồi làm việc tại Hà Nội</h3>
      </div>
      <div className="pt-6 pl-80 ml-8">
        <span className="font-bold">Thuê chỗ ngồi làm việc tại Hanoi Office </span>
        <span>đem đến cho doanh nghiệp rất nhiều sự lựa chọn. Có 2 loại hình cho thuê chỗ ngồi làm việc để các cá nhân, tổ chức và doanh</span>
        <p>nghiệp có thể lựa chọn tùy theo mục đích và nhu cầu sử dụng. Đó là:</p>
      </div>
      <div className="pt-6 pl-80 ml-8">
        <p>1. Chỗ ngồi làm việc cố định: Là một vị trí làm việc ổn định mà khách hàng thuê có thời hạn cố định và sử dụng toàn thời gian.</p>
        <p>2. Chỗ ngồi làm việc linh hoạt: Là một vị trí làm việc mà khách hàng thuê theo giờ thay vì toàn thời gian.</p>
      </div>
      <div className="pt-2 mx-96 pl-48">
        <img src="https://hanoioffice.vn/wp-content/uploads/2020/09/cho-ngoi-lam-viec-n2.jpg" alt="" />
      </div>
      <div className="pt-8 mx-80 pl-8">
        <span className="font-bold text-red-500">Bất ngờ chưa</span>
        <span className="font-bold">: Chỉ từ 7.000Đ/giờ đã có ngay </span>
        <a href="" className="font-bold text-blue-500">
          chỗ ngồi làm việc cho thuê tại hệ thống văn phòng 8 cơ sở thuộc trung tâm Hà Nội
        </a>
        <span className="font-bold"> – Yên tâm an cư lập nghiệp</span>
      </div>
      <div className="pt-8 pl-80 ml-8">
        <span>Hanoi Office hy vọng sẽ mang lại cho quý khách hàng dịch vụ </span>
        <span className="font-bold">thuê chỗ ngồi làm việc cá nhân </span>
        <span>tiện nghi với đầy đủ các trang thiết bị sử dụng chung/riêng và không gian</span>
        <p>làm việc chuyên nghiệp.</p>
      </div>
      <div className="pt-3 pl-80 ml-8">
        <span>Đặc biệt, khi kết hợp đồng thời giữa thuê chỗ ngồi làm việc và các dịch vụ văn phòng ảo, doanh nghiệp sẽ có ngay một văn phòng tiện nghi và hiện đại, phù hợp cho tổ</span>
        <p>chức của mình với chi phí tiết kiệm nhất. Thực tế, có rất nhiều văn phòng đại diện nước ngoài đã lựa chọn mô hình này và hoạt động rất hiệu quả.</p>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <h3 className="font-bold">Hanoi Office cho thuê chỗ ngồi làm việc và đem đến cho bạn tất cả các tiện ích văn phòng</h3>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <span>Không gian làm việc tại Hanoi Office có đầy đủ các thiết bị văn phòng cho một doanh nghiệp hoạt động. Chọn Hanoi Office là bạn đã chọn một cho mình một nơi làm việc</span>
        <div>
          <span>tiện nghi. </span>
          <span className="font-bold">Chuyển chỗ ngồi làm việc </span>
          <span>đến đây để tận hưởng các tiện ích của chúng tôi giúp bạn làm việc hiệu quả, chuyên nghiệp hơn:</span>
        </div>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <p>1. Bàn ghế và tủ đựng hồ sơ cá nhân.</p>
        <p>2. <span className="font-bold">Cho thuê chỗ ngồi văn phòng</span> miễn phí tiền điện, miễn phí điều hoà trung tâm.</p>
        <p>3. Miễn phí sử dụng Internet tốc độ cao.</p>
        <p>4. Miễn phí sử dụng khu vực tiếp khách chung (Lounge), khu vực sử dụng đồ uống chung (Pantry).</p>
        <p>5. Hỗ trợ phòng họp tiếp khách.</p>
        <p>6. Lễ tân, nhân viên đại diện doanh nghiệp chuyên nghiệp.</p>
        <p>7. Biên phiên dịch cuộc họp, phiên dịch tài liệu.</p>
        <p>8. Sử dụng máy in, máy photo copy, máy fax…</p>
        <p>9. Hỗ trợ về kế toán, báo cáo thuế, báo cáo Tài chính cuối năm.</p>
        <p>10. Hỗ trợ Marketing online, thiết kế website…</p>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <span>Ngoài ra, bạn có thể sử dụng kết hợp dịch vụ văn phòng ảo để có được một văn phòng làm việc hoàn thiện, đáp ứng nhu cầu kinh doanh của mình.</span>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <h3 className="font-bold text-lg">Lựa chọn đơn vị cho thuê chỗ ngồi làm việc nào trên địa bàn Hà Nội?</h3>
      </div>
      <div className="pt-4 pl-80 ml-8">
        <p>Đáp ứng nhu cầu của các khách hàng năng động. Hanoi Office luôn có sẵn thuê chỗ ngồi làm việc cho freelancer, doanh nghiệp tại các tòa nhà văn phòng trên địa bàn</p>
        <p>Hà Nội. Chúng tôi có những không gian văn phòng hiện đại và chuyên nghiệp tại các địa điểm khác nhau. Hãy lựa chọn chỗ ngồi làm việc tại nơi phù hợp nhất tại những</p>
        <p>địa điểm sau:</p>
      </div>
      <div className="pt-3 pl-80 ml-8">
        <span>1. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Lê Văn Lương</a>
        <span>: Golden Palm, 21 Lê Văn Lương, Thanh Xuân, Hà Nội</span>
      </div>
      <div className="pl-80 ml-8">
        <span>2. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Thanh Xuân</a>
        <span>: Zen Tower, 12 Khuất Duy Tiến, Thanh Xuân, Hà Nội</span>
      </div>
      <div className="pl-80 ml-8">
        <span>3. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Hà Đông</a>
        <span>: HUD3 Tower,121-123 Tô Hiệu, Hà Đông, Hà Nội</span>
      </div>
      <div className="pl-80 ml-8">
        <span>4. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Trần Phú Hà Đông</a>
        <span>: Tòa nhà Sông Đà, 131 Trần Phú, Hà Đông, Hà Nội</span>
      </div>
      <div className="pl-80 ml-8">
        <span>5. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Nam Từ Liêm</a>
        <span>: AT Building, 9 ngõ 7 Lê Đức Thọ, Nam Từ Liêm, Hà Nội</span>
      </div>
      <div className="pl-80 ml-8">
        <span>6. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Ba Đình</a>
        <span>: VMQ Building, 87 Nguyễn Thái Học, Ba Đình, Hà Nội</span>
      </div>
      <div className="pl-80 ml-8">
        <span>7. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Cầu Giấy</a>
        <span>: Tòa nhà Sannam, 78 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</span>
      </div>
      <div className="pl-80 ml-8">
        <span>8. </span>
        <a href="" className="font-bold text-blue-500">Cho thuê chỗ ngồi làm việc tại Hoàng Mai</a>
        <span>: Tòa nhà Helios, 75 Tam Trinh, Hoàng Mai, Hà Nội</span>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 py-6">
        <div className="ml-52">
          <p className="font-bold text-white pt-1">Bạn đang tìm thuê chỗ ngồi làm việc tại các quận nội thành Hà Nội? Hãy để Hanoi Office giúp</p>
          <p className="font-bold text-white pt-1">bạn!</p>
        </div>
        <div className="ml-48">
          <button
            className="ml-24 bg-white font-bold text-black border border-white hover:bg-blue-500 hover:text-white py-3 px-16 text-xs mt-2">TÌM CHỖ NGỒI LÀM VIỆC
          </button>
        </div>
      </div>
    </>
  );
};
export default WorkingSeat;