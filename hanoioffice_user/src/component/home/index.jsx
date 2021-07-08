import React from 'react';

import {
  BusinessCenter, EventSeat, MeetingRoomRounded, Money, YouTube
} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 py-3">
        <div className="py-36">
          <h1 className="text-blue-800 font-bold text-center text-xl">HANOI OFFICE – COWORKING SPACE: GIẢI
                        PHÁP CHO THUÊ VĂN PHÒNG THÔNG MINH</h1>
          <h1 className="text-blue-800 font-bold text-center text-xl">MINH</h1>
          <span className="pl-16 font-bold text-center">Kiến tạo </span>
          <span className="text-center pr-10">không gian Văn Phòng Cho Thuê – Coworking Space hiện đại và chuyên nghiệp,xây dựng cộng đồng doanh</span>
          <span className="pl-52 text-center"> nghiệp năng động và đầy nhiệt huyết,</span>
          <span className="font-bold text-center"> Hanoi Office – Success in all your Plans!</span>
          <div className="grid grid-cols-5 gap-2 py-3">
            <div className="pl-10 border-r text-center">
              <p className="text-center"><EventSeat/></p>
              <span className="pt-3">Chỗ ngồi làm việc</span>
            </div>
            <div className="border-r text-center">
              <p className="text-center"><MeetingRoomRounded/></p>
              <span className="pt-3">Phòng Họp</span>
            </div>
            <div className="border-r text-center">
              <p className="text-center"><MeetingRoomRounded/></p>
              <span className="pt-3">Phòng Họp Trực Tuyến</span>
            </div>
            <div className="border-r text-center">
              <p><BusinessCenter/></p>
              <span className="pt-3">Văn Phòng Ảo</span>
            </div>
            <div className="text-center">
              <p><BusinessCenter/></p>
              <span className="pt-3">Văn Phòng Cho Thuê</span>
            </div>
          </div>
          <div>
            <div>
              <label className="">Chọn một địa điểm</label>
              <label className="pl-72">Nhu cầu sử dụng</label>
            </div>
            <select name="branch" placeholder="Tất cả các địa điểm" className="border py-3 pl-4 pr-52">
              <option value="">Tất cả các địa điểm</option>
              <option value="">QUẬN BA ĐÌNH</option>
              <option value="">QUẬN CẦU GIẤY</option>
              <option value="">QUẬN HÀ ĐÔNG</option>
              <option value="">QUẬN HOÀNG MAI</option>
              <option value="">QUẬN NAM TỪ LIÊM</option>
              <option value="">QUẬN THANH XUÂN</option>
            </select>
            <select name="nhucau" placeholder="Nhu cầu sử dụng" className="border ml-4 py-3 pl-4 pr-48">
              <option value="">Nhu cầu sử dụng</option>
              <option value="">Cá nhân</option>
              <option value="">Thuê cho 2 đến 3 người</option>
              <option value="">Thuê cho 4 đến 5 người</option>
              <option value="">Thuê cho 5 đến 10 người</option>
              <option value="">Trên 10 người</option>
            </select>
            <button className="mx-3 border bg-blue-500 text-white font-bold py-3 px-8">TÌM</button>
          </div>
        </div>
        <div>
          <h1>Slide Ảnh</h1>
        </div>
      </div>
      <div className="bg-blue-500 py-6">
        <div className="grid grid-cols-2 gap-2">
          <div className="pl-20 mr-36">
            <p className="font-bold text-white">Bạn đang tìm thuê văn phòng và chưa tìm được giải pháp phù
                            hợp và tối ưu?</p>
            <p className="font-bold text-white">Hãy để Hanoi Office – Coworking Space giúp bạn!</p>
          </div>
          <div>
            <button className="border border-white bg-gray-200 px-4 py-3 ml-96 hover:bg-blue-500">GỌI CHO
                            HANOI OFFICE NGAY!
            </button>
          </div>
        </div>
      </div>
      <div className="text-center pt-10">
        <h1 className="inline-block pr-1.5 text-2xl">06 GIẢI PHÁP CHO THUÊ VĂN PHÒNG</h1>
        <h1 className="font-bold inline-block text-2xl">TẠI HANOI OFFICE COWORKING SPACE</h1>
      </div>
      <div className="grid grid-cols-9 pt-16">
        <div className="ml-80 col-span-3">
          <NavLink to="">
            <img className="w-72 h-60"
              src="https://hanoioffice.vn/wp-content/uploads/2020/09/va%CC%86n-pho%CC%80ng-a%CC%89o.jpg"
              alt=""/>
            <p className="font-bold text-center">VĂN PHÒNG ẢO</p>
          </NavLink>
          <p>Bạn sẽ được sử dụng văn phòng ảo ở Hà Nội để: làm văn phòng đại diện, địa chỉ giao dịch, tiếp đối
                        tác – khách hàng, địa chỉ nhận bưu thư…</p>
        </div>
        <div className="col-span-2 mr-24 ml-12 ">
          <NavLink to="">
            <img className="w-72 h-60"
              src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-van-phong-lam-viec.jpg"
              alt=""/>
            <p className="font-bold text-center">VĂN PHÒNG TRỌN GÓI</p>
          </NavLink>
          <p>Bạn sẽ sở hữu: 1 phòng làm việc riêng, phòng họp – phòng khách sang trọng, thiết bị văn phòng
                        hiện đại,… Và không lo đóng phí điện – nước, internet.</p>
        </div>
        <div className="mr-56 col-span-4 pt-36">
          <h1 className="font-bold text-xl">KHÔNG GIAN VĂN PHÒNG CHO THUÊ SANG TRỌNG & LỊCH LÃM</h1>
          <p className="text-center">Hanoi Office đem đến giải pháp không gian văn phòng làm việc sang trọng
                        và lịch</p>
          <p className="text-center">thiệp, giải pháp của Hanoi Office sẽ giúp bạn có những ngày làm việc hiệu
                        quả</p>
          <p className="text-center">trong không gian văn phòng làm việc riêng mà không bị làm phiền.</p>
          <div className="text-center pt-3">
            <button
              className="border-2 border-blue-400 bg-blue-500 text-white font-bold px-12 py-3 hover:bg-white hover:text-black">THUÊ
                            VĂN PHÒNG
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-9 pt-16">
          <div className="ml-56 pt-36 col-span-5">
            <h1 className="font-bold text-xl text-center">CHỖ NGỒI LÀM VIỆC CHUYÊN NGHIỆP PHÙ HỢP VỚI MỌI
                            NHU CẦU</h1>
            <h1 className="font-bold text-xl text-center">CỦA BẠN</h1>
            <p className="text-center">Chỗ ngồi làm việc trong một không gian chung mở nhưng vẫn đảm bảo
                            tính riêng</p>
            <p className="text-center">tư (vách ngăn – bàn làm việc riêng) và bảo mật (tủ tài liệu riêng).
                            Chi phí phù hợp</p>
            <p className="text-center">mà bạn vẫn được sử dụng đầy đủ tất cả các tiện ích từ Hanoi
                            Office.</p>
            <div className="text-center pt-3">
              <button
                className="border-2 border-blue-400 bg-blue-500 text-white font-bold px-12 py-3 hover:bg-white hover:text-black">THUÊ
                                CHỖ NGỒI
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <NavLink to="">
              <img className="w-72 h-60"
                src="https://hanoioffice.vn/wp-content/uploads/2020/08/Va%CC%86n-pho%CC%80ng-lu%CC%9Bu-do%CC%A3%CC%82ng.jpg"
                alt=""/>
              <p className="font-bold pl-12">VĂN PHÒNG LƯU ĐỘNG</p>
            </NavLink>
            <div>
              <p className="pr-16">Bạn có thể sử dụng không gian văn phòng trên toàn bộ hệ thống Hanoi
                                Office. Phù hợp với nhu cầu liên tục di chuyển tại trung tâm Hà Nội.</p>
            </div>
          </div>
          <div className="col-span-2">
            <NavLink to="">
              <img className="w-72 h-60"
                src="https://hanoioffice.vn/wp-content/uploads/2020/08/cho-thue-van-phong-lam-viec.jpg"
                alt="" />
              <p className="font-bold text-center pr-32">CHỖ NGỒI LÀM VIỆC</p>
            </NavLink>
            <p className="pr-28">Bạn chỉ phải trả tiền cho một chỗ ngồi làm việc nhưng lại được sử dụng đầy
                            đủ tiện ích văn phòng, thiết bị hiện đại trong một không gian yên tĩnh.</p>
          </div>

        </div>
      </div>
      <div className="grid grid-cols-9 pt-16">
        <div className="ml-80 col-span-3">
          <NavLink to="">
            <img className="w-72 h-60"
              src="https://hanoioffice.vn/wp-content/uploads/2020/08/phong-hop-cho-thue.jpg" alt=""/>
            <p className="font-bold text-center">PHÒNG HỌP CHO THUÊ</p>
          </NavLink>
          <p>Phòng họp có sức chứa từ 10-30 người sẽ phù hợp với các nhu cầu khác nhau của bạn. Được trang bị
                        đầy đủ thiết bị hiện đại trong không gian sang trọng.</p>
        </div>
        <div className="col-span-2 mr-24 ml-12 ">
          <NavLink to="">
            <img className="w-72 h-60"
              src="https://hanoioffice.vn/wp-content/uploads/2020/08/phong-hop-truc-tuyen.jpg" alt=""/>
            <p className="font-bold text-center">PHÒNG HỌP TRỰC TUYẾN</p>
          </NavLink>
          <p>Cho thuê phòng họp giá rẻ – hội nghị trực tuyến tại Hà Nội với công nghệ âm thanh, video call
                        hiện đại, sắc nét với chi phí chỉ từ 400.000đ/giờ.</p>
        </div>
        <div className="mr-48 col-span-4 pt-36">
          <h1 className="font-bold text-xl">2 GIẢI PHÁP PHÒNG HỌP CHO THUÊ HIỆN ĐẠI PHÙ HỢP MỌI MỤC</h1>
          <h1 className="font-bold text-xl text-center">ĐÍCH</h1>
          <p className="text-center">Hanoi Office trang bị những thiết bị tối tân và hiện đại nhất cho không
                        gian phòng</p>
          <p className="text-center">họp, ngoài ra Hanoi Office còn có thể setup phòng họp trực tuyến tại
                        chính cơ sở</p>
          <p className="text-center">của bạn đem đến tính chủ động và linh hoạt.</p>
          <div className="text-center pt-3">
            <button
              className="border-2 border-blue-400 bg-blue-500 text-white font-bold px-12 py-3 hover:bg-white hover:text-black">THUÊ
                            PHÒNG HỌP
            </button>
          </div>
        </div>
      </div>
      <div className="text-center pt-10">
        <h1 className="inline-block pr-1.5 text-2xl">TẠI SAO NÊN CHỌN KHÔNG GIAN</h1>
        <h1 className="font-bold inline-block text-2xl">CHO THUÊ VĂN PHÒNG TẠI HANOI OFFICE COWORKING SPACE</h1>
      </div>
      <div className="grid grid-cols-5 text-center pt-20">
        <div className="text-right pl-96 pr-10 text-justify col-span-2">
          <div>
            <span className="text-blue-500 pr-2"><YouTube className="mb-2"/></span>
            <span className="font-bold text-xl">CHUYÊN NGHIỆP</span>
            <p className="text-justify">Xây dựng một hình ảnh doanh nghiệp chuyên</p>
            <p className="text-justify">nghiệp trong mắt đối tác của bạn thông qua</p>
            <p className="text-justify">không gian văn phòng cho thuê hiện đại của</p>
            <p className="text-justify">Hanoi Office.</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><YouTube className="mb-2"/></span>
            <span className="font-bold text-xl">KẾT NỐI</span>
            <p className="text-justify">Giải pháp cho thuê Văn phòng công ty thông</p>
            <p className="text-justify">minh - Văn phòng chia sẻ tạo nên một cộng</p>
            <p className="text-justify">đồng các doanh nghiệp trong và ngoài nước,</p>
            <p className="text-justify">mở ra những cơ hội kết nối mới.</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><YouTube className="mb-2"/></span>
            <span className="font-bold text-xl">LINH HOẠT</span>
            <p className="text-justify">Hanoi Office cho thuê văn phòng trọn gói linh</p>
            <p className="text-justify">hoạt thời gian với 4 hình thức: Theo giờ, theo</p>
            <p className="text-justify">ngày, theo tuần và theo tháng.</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><YouTube className="mb-2"/></span>
            <span className="font-bold text-xl">AN TÂM</span>
            <p className="text-justify">Luôn sát cánh, hỗ trợ các doanh nghiệp như</p>
            <p className="text-justify">một người bạn đồng hành tận tâm. Bạn sẽ </p>
            <p className="text-justify">thực sự an tâm khi thuê văn phòng thông </p>
            <p>minh tại Hanoi Office.</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><YouTube className="mb-2"/></span>
            <span className="font-bold text-xl">HIỆN ĐẠI</span>
            <p className="text-justify text-s">Hanoi Office được trang bị những trang thiết bị</p>
            <p className="text-justify text-s">văn phòng hiện đại hàng đầu Việt Nam, giúp</p>
            <p className="text-justify text-s">bộ máy của bạn hoạt động trơn tru hơn. </p>
          </div>
        </div>
        <div className="col-span-1">
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/08/hanoi-office-cho-thue-van-phong.jpg"
            alt=""/>
        </div>
        <div className="text-left col-span-2 pl-10">
          <div className="">
            <span className="text-blue-500 pr-2"><Money className="mb-2"/></span>
            <span className="font-bold text-xl">TIẾT KIỆM</span>
            <p className="text-justify text-s">Hanoi Office tin rằng văn phòng chia sẻ sẽ giúp</p>
            <p className="text-justify text-s">bạn tiết kiệm nhiều thời gian quản lý và chi phí</p>
            <p className="text-justify text-s">hoạt động. Đem lại những giá trị cốt lõi cho </p>
            <p>bạn!</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><Money className="mb-2"/></span>
            <span className="font-bold text-xl">ƯU ĐÃI</span>
            <p className="text-justify text-s">Luôn có những chính sách ưu đãi với các gói </p>
            <p className="text-justify text-s">dịch vụ cho thuê Văn Phòng công ty thông </p>
            <p className="text-justify text-s">minh - Coworking Space tại Hà Nội cho những</p>
            <p>khách hàng thân thiết.</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><Money className="mb-2"/></span>
            <span className="font-bold text-xl">HIỆU QUẢ</span>
            <p className="text-justify ">Giải pháp cho thuê văn phòng chia sẻ - văn</p>
            <p className="text-justify ">phòng thông minh giúp doanh nghiệp lựa chọn</p>
            <p className="text-justify ">dịch vụ phù hợp để đạt hiệu quả tốt nhất.</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><Money className="mb-2"/></span>
            <span className="font-bold text-xl">DỊCH VỤ HỖ TRỢ</span>
            <p className="">Cho thuê văn phòng coworking tư vấn thành</p>
            <p className="">lập Doanh nghiệp, thiết kế website, kế toán,</p>
            <p className="">biên - phiên dịch, soạn thảo văn bản, chữ ký số,</p>
            <p>hóa đơn điện tử, BHXH điện tử...</p>
          </div>
          <div className="pt-2">
            <span className="text-blue-500 pr-2"><Money className="mb-2"/></span>
            <span className="font-bold text-xl">RIÊNG TƯ - BẢO MẬT</span>
            <p className="text-justify ">Không gian văn phòng Hanoi Office được thiết</p>
            <p className="text-justify ">kế riêng tư cho từng doanh nghiệp. Camera an</p>
            <p className="text-justify ">ninh và Bảo vệ 24/7 giúp bạn an toàn tuyệt đối.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-8">
        <div className="ml-96">
          <div className="pb-2">
            <div className="pb-2">
              <span className="font-bold">TIỆN ÍCH</span>
              <span className="font-bold ml-16 pl-96">100%</span>
            </div>
            <div className="bg-blue-500 h-2"></div>
          </div>
          <div className="pb-2">
            <div className="pb-2">
              <span className="font-bold">TỐI ƯU CHI PHÍ</span>
              <span className="font-bold ml-20 pl-80">90%</span>
            </div>
            <div className="bg-blue-500 h-2 w-11/12"></div>
          </div>
          <div className="pb-2">
            <div className="pb-2">
              <span className="font-bold mr-8 pr-64">TRANG THIẾT BỊ VĂN PHÒNG</span>
              <span className="font-bold">100%</span>
            </div>
            <div className="bg-blue-500 h-2"></div>
          </div>
          <div className="pb-2">
            <div className="pb-2">
              <span className="font-bold">HỆ SINH THÁI</span>
              <span className="font-bold ml-6 pl-96">100%</span>
            </div>
            <div className="bg-blue-500 h-2"></div>
          </div>
          <div className="pb-2">
            <div className="pb-2">
              <span className="font-bold mr-10 pr-72">KHÁCH HÀNG HÀI LÒNG</span>
              <span className="font-bold">90%</span>
            </div>
            <div className="bg-blue-500 h-2 w-11/12"></div>
          </div>
        </div>
        <div className="text-left pl-8">
          <div>
            <span className="font-bold">Hanoi Office </span>
            <span>đem đến các giải pháp dịch vụ cho thuê văn phòng như: </span>
            <span className="font-bold">Văn phòng</span>
            <p className="font-bold">ảo – Văn phòng trọn gói – Văn phòng chia sẻ – Chỗ ngồi làm việc – Phòng
                            họp</p>
            <span className="font-bold">Coworking Space </span>
            <span>giúp bạn tối ưu 80% chi phí nhưng vẫn có được một không gian</span>
            <p>và môi trường làm việc văn phòng chuyên nghiệp.</p>
          </div>
          <div className="pt-3">
            <span>Đến với </span>
            <span className="font-bold">Hanoi Office </span>
            <span>bạn sẽ được tận hưởng dịch vụ </span>
            <span className="font-bold">cho thuê văn phòng tại Hà</span>
            <p className="font-bold ">Nội <span className="">hoàn hảo và những trải nghiệm tốt nhất. Không những được thiết kế bởi</span>
            </p>
            <p className="inline-block">các kiến trúc sư hàng đầu,</p>
            <p className="font-bold inline-block">văn phòng cho thuê</p>
            <span>còn được trang bị bởi những thiết</span>
            <p>bị văn phòng hiện đại nhất.</p>
          </div>
          <div className="pt-3">
            <span className="font-bold">Hanoi Office Coworking Space </span>
            <span>sẽ hỗ trợ mọi nhu cầu của Doanh nghiệp bạn khi</span>
            <p>cần, cùng bạn tiến tới thành công!</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 text-center pt-8">
        <div className="ml-80 pl-12 col-span-6 text-center pt-48">
          <h1 className="font-bold text-center text-lg">ĐĂNG KÝ TƯ VẤN GIẢI PHÁP KHÔNG GIAN VĂN PHÒNG CHO
                        THUÊ</h1>
          <div className="pt-4">
            <p className="text-center">Hãy điền thông tin và yêu cầu của bạn, các chuyên viên Hanoi Office
                            sẽ liên hệ và</p>
            <p className="text-center">tư vấn chi tiết cho bạn về giải pháp không gian văn phòng thuê
                            Coworking Space</p>
            <p className="text-center">Hà Nội</p>
          </div>
        </div>
        <div className="text-left col-span-6 ml-6 mr-80">
          <div className="">
            <img className="mx-auto pb-4"
              src="https://hanoioffice.vn/wp-content/uploads/2020/10/cho-thue-van-phong-chi-tu-7000-vnd.png" alt="" />
            <div className="grid grid-cols-2">
              <div className="inline-block mr-3">
                <label>Họ và tên:*</label>
                <input className="border border-gray-300 block pl-1.5 pr-28 py-1.5" type="text"/>
              </div>
              <div className="inline-block">
                <label>Email:*</label>
                <input className="border border-gray-300 block pl-1.5 pr-28 py-1.5" type="text"/>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="mr-3">
                <label>Số điện thoại:*</label>
                <input className="border border-gray-300 block pl-1.5 pr-28 py-1.5" type="text"/>
              </div>
              <div>
                <label className="">Lựa chọn giải pháp:</label>
                <select className="border border-gray-300 block pr-28 py-1.5" type="text"
                  placeholder="Văn Phòng Trọn Gói">
                  <option value="">Văn Phòng Trọn Gói</option>
                  <option value="">Chỗ Ngồi Làm Việc</option>
                  <option value="">Văn Phòng Lưu Động</option>
                  <option value="">Văn Phòng Ảo</option>
                  <option value="">Phòng Họp</option>
                  <option value="">Phòng Họp Trực Tuyến</option>
                </select>
              </div>
            </div>
            <div>
              <label>Yêu cầu chi tiết:</label>
              <textarea className="block border border-gray-300 pl-1.5 pr-56"
                placeholder="Hãy nhập yêu cầu chi tiết của bạn vào đây..." cols="50"
                rows="10"></textarea>
            </div>
            <div className="pt-2">
              <button
                className="border border-blue-500 bg-blue-500 px-16 py-2 text-white hover:bg-white hover:text-black">GỬI
                                YÊU CẦU
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-10">
        <h1 className="inline-block pr-1.5 text-2xl">DỊCH VỤ</h1>
        <h1 className="font-bold inline-block text-2xl">HỖ TRỢ DOANH NGHIỆP</h1>
      </div>
      <div className="grid grid-cols-4 text-center gap-4 px-80 pt-12">
        <div>
          <NavLink to=""><img
            src="https://hanoioffice.vn/wp-content/uploads/2020/10/bao-hiem-xa-hoi-dien-tu-400x230.png" alt="" /></NavLink>
          <h1 className="font-bold text-center">BẢO HIỂM XÃ HỘI ĐIỆN TỬ</h1>
          <p className="text-gray-400 text-center">Cung cấp phần mềm BHXH điện tử với</p>
          <p className="text-gray-400 text-center">10+ tiện ích,giúp các doanh nghiệp rút</p>
          <p className="text-gray-400 text-center">ngắn thời gian và linh hoạt.</p>
        </div>
        <div>
          <NavLink to=""><img src="https://hanoioffice.vn/wp-content/uploads/2020/10/chu-ky-so-400x230.png" alt="" /></NavLink>
          <h1 className="font-bold text-center">CHỮ KÝ SỐ</h1>
          <p className="text-gray-400 text-center">Hỗ trợ doanh nghiệp đăng ký chữ ký số</p>
          <p className="text-gray-400 text-center">(token), kích hoạt và hướng dẫn sử</p>
          <p className="text-gray-400 text-center">dụng chi tiết.</p>
        </div>
        <div>
          <NavLink to=""><img
            src="https://hanoioffice.vn/wp-content/uploads/2020/10/hoa-don-dien-tu-400x230.png" alt="" /></NavLink>
          <h1 className="font-bold text-center">HÓA ĐƠN ĐIỆN TỬ</h1>
          <p className="text-gray-400 text-center">Hanoi Office sẽ tư vấn và giúp bạn làm</p>
          <p className="text-gray-400 text-center">mọi thủ tục để tạo hóa đơn điện tử cho</p>
          <p className="text-gray-400 text-center">doanh nghiệp</p>
        </div>
        <div>
          <NavLink to=""><img
            src="https://hanoioffice.vn/wp-content/uploads/2020/10/thanh-lap-doanh-nghiep-400x230.png" alt="" /></NavLink>
          <h1 className="font-bold text-center">THÀNH LẬP DOANH NGHIỆP</h1>
          <p className="text-gray-400 text-center">Hanoi Office sẽ tư vấn và giúp bạn xử</p>
          <p className="text-gray-400 text-center">lý mọi thủ tục để thành lập một doanh</p>
          <p className="text-gray-400 text-center">nghiệp trong thời gian nhanh nhất.</p>
        </div>
      </div>
      <div className="text-center pt-10">
        <h1 className="inline-block pr-1.5 text-2xl">KHÁM PHÁ KHÔNG GIAN VR 360</h1>
        <h1 className="font-bold inline-block text-2xl">VĂN PHÒNG CHO THUÊ TẠI HANOI OFFICE</h1>
      </div>
      <div className="text-center py-3">Slide Ảnh</div>
      <div className="bg-blue-500 py-6">
        <div className="grid grid-cols-3 gap-2">
          <div className="pl-20 mr-24 pl-24 col-span-2">
            <p className="font-bold text-white">Bạn chưa tìm được văn phòng cho thuê tại Hà Nội phù hợp? Hãy
                            để Hanoi Office – Coworking</p>
            <p className="font-bold text-white">Space giúp bạn!</p>
          </div>
          <div className="col-span-1">
            <button className="border border-white bg-gray-200 ml-48 px-4 py-3 ml-96 hover:bg-blue-500">NHẬN
                            TƯ VẤN
            </button>
          </div>
        </div>
      </div>
      <div className="text-center pt-10">
        <h1 className="inline-block pr-1.5 text-2xl">HÃY LỰA CHỌN MỘT ĐỊA CHỈ</h1>
        <h1 className="font-bold inline-block text-2xl">CHO THUÊ VĂN PHÒNG TẠI HÀ NỘI THUẬN TIỆN NHẤT</h1>
      </div>
      <div className="pt-4">
        <p className="text-center text-gray-500">Văn phòng cho thuê Hanoi Office Coworking Space được đặt tại
                    các vị trí giao thông đi lại thuận tiện, ở những địa chỉ tập trung nhiều công ty lớn và các ngân
                    hàng. Chúng</p>
        <p className="text-center text-gray-500">tôi sẽ giúp bạn tận dụng được tối đa các cơ hội kinh doanh của
                    mình.</p>
      </div>
      <div className="pt-16 grid grid-cols-6 text-center px-6 mx-80">
        <div className="">
          <NavLink to="">
            <img className="w-40 h-52 mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-ba-dinh.jpg" alt="" />
          </NavLink>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Ba Đình</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <NavLink to="">
            <img className="w-40 h-52 mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-cau-giay.jpg" alt="" />
          </NavLink>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Cầu Giấy</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <NavLink to="">
            <img className="w-40 h-52 mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-ha-dong.jpg" alt="" />
          </NavLink>
          <p className="font-bold text-xl">2 Cơ sở</p>
          <p className="font-bold text-xl">Quận Hà Đông</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <NavLink to="">
            <img className="w-40 h-52 mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/12/quan-hoang-mai.jpg" alt="" />
          </NavLink>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Hoàng Mai</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <NavLink to="">
            <img className="w-40 h-52 mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-nam-tu-liem.jpg" alt="" />
          </NavLink>
          <p className="font-bold text-xl">1 Cơ sở</p>
          <p className="font-bold text-xl">Quận Nam Từ Liêm</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
        <div className="">
          <NavLink to="">
            <img className="w-40 h-52 mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/06/quan-thanh-xuan.jpg" alt="" />
          </NavLink>
          <p className="font-bold text-xl">2 Cơ sở</p>
          <p className="font-bold text-xl">Quận Thanh Xuân</p>
          <p className="font-bold text-xl">Hà Nội</p>
        </div>
      </div>
      <div className="pt-3">
        <img className="mx-auto" src="https://static.vncommerce.com/maps/600x250/T%E1%BA%A7ng+6,T%C3%B2a+Nh%C3%A0+Vi%E1%BB%87t+%C3%81,9+Ph%E1%BB%91+Duy+T%C3%A2n,Qu%E1%BA%ADn+C%E1%BA%A7u+Gi%E1%BA%A5y,H%C3%A0+N%E1%BB%99i,Vi%E1%BB%87t+Nam.png" 
          alt="" />
      </div>
      <div className="text-center pt-16">
        <h1 className="inline-block pr-1.5 text-2xl">GIỚI THIỆU VỀ</h1>
        <h1 className="font-bold inline-block text-2xl">HANOI OFFICE</h1>
      </div>
      <div className="pt-3">
        <p className="text-center text-xl">Dịch vụ cho thuê Văn Phòng Ảo - Phòng Làm Việc Riêng - Chỗ Ngồi Làm Việc - Phòng Họp - Coworking Space tại Hà Nội</p>
      </div>
      <div className="pt-10 text-center">
        <span className="font-bold italic">Hanoi Office – Mô hình Coworking Space </span>
        <span className="italic"> tiên phong trong lĩnh vực cho</span>
        <p className="italic">thuê Văn phòng ảo – Văn phòng trọn gói – Coworking Space ở Hà Nội</p>
        <p className="italic">nói riêng và Việt Nam nói chung. Chúng tôi sẽ đem đến cho quý khách</p>
        <p className="italic">hàng những dịch vụ và trải nghiệm tốt nhất. Vì chúng tôi hiểu bạn, luôn</p>
        <p className="italic">bên bạn và cùng bạn đi tới Thành công!</p>
      </div>
      <div className="pt-3 text-center">
        <span className="italic">Giải pháp </span>
        <span className="font-bold italic">Cho thuê văn phòng – Coworking Space tại Hà Nội </span>
        <span className="italic">kiến tạo</span>
        <p className="italic">cho bạn một không gian làm việc chuyên nghiệp, hiện đại và sáng tạo,</p>
        <p className="italic">xây dựng cộng đồng doanh nghiệp tiên phong và đứng đầu.</p>
      </div>
      <div className="pt-3 text-center">
        <span className="font-bold italic">Hãy đến Hanoi Office – Coworking Space và trải nghiệm ngay!</span>
      </div>
      <div className="pt-10 text-center pb-16">
        <button className="border border-blue-500 bg-blue-500 text-white px-16 py-2 hover:bg-white hover:text-black">THUÊ VĂN PHÒNG</button>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 py-3">
        <div className="ml-52">
          <p className="font-bold">Bạn đang tìm thuê văn phòng thông minh – Coworking Space tại Hà Nội? Hãy để Hanoi Office</p>
          <p className="font-bold">– Coworking Space giúp bạn!</p>
        </div>
        <div className="ml-48">
          <button className="ml-24 text-white border border-black hover:bg-white hover:text-black py-2 px-16">GỢI Ý ĐỊA ĐIỂM</button>
        </div>
      </div>
      <div className="pt-4">
        <h1 className="font-bold text-2xl text-center">TIN TỨC</h1>
      </div>
      <div className="pt-4">
        <div className="grid grid-cols-4 gap-2 mx-96">
          <div>
            <NavLink to="" title="Tin Tức">
              <img className="w-72 h-48" src="https://hanoioffice.vn/wp-content/uploads/2021/06/van-phong-cho-thue-quan-ha-dong-day-du-tien-ich-chi-tu-650000-VND-thang-2.jpg" 
                alt="" />
            </NavLink>
          </div>
          <div>
            <NavLink to="" title="Tin Tức">
              <img className="w-72 h-48" src="https://hanoioffice.vn/wp-content/uploads/2021/06/kham-pha-tien-ich-uu-viet-tai-van-phong-cho-thue-hanoi-office-co-so-khuat-duy-tien-thanh-xuan-2.jpg" 
                alt="" />
            </NavLink>
          </div>
          <div>
            <NavLink to="" title="Tin Tức">
              <img className="w-72 h-48" src="https://hanoioffice.vn/wp-content/uploads/2021/06/nam-giu-bi-quyet-dieu-hanh-doanh-nghiep-lam-viec-tu-xa-hieu-qua.jpg" alt="" />
            </NavLink>
          </div>
          <div>
            <NavLink to="" title="Tin Tức">
              <img className="w-72 h-48" src="https://hanoioffice.vn/wp-content/uploads/2021/05/5-loi-ich-uu-viet-tu-mo-hinh-van-phong-chia-se-da-nang-2-1.jpg" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="text-center pt-3">
        Slide Ảnh
      </div>
    </>
  );
};
export default Home;