import React from 'react';

import {
  AllInbox,
  ChevronRight,
  CompareArrows, ContactPhone,
  Devices,
  EditLocationOutlined,
  Email, FormatListBulleted,
  FreeBreakfast, HeadsetMic,
  ImportContacts, LocalCafe, MeetingRoomSharp, PermPhoneMsg,
  Person, PersonAdd,
  Security, Send,
  Wifi
}
  from '@material-ui/icons';



const VirtualOffice = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-2">
          {/*<div> </div>*/}
          <div className="bg-gray-500 mt-20 mb-24 mr-5 pl-2">
            <h2 className="text-white text-center text-3xl font-bold">CHO THUÊ VĂN PHÒNG ẢO</h2>
            <h4 className="text-white text-center border-b-2 border-fuchsia-600 font-medium ">Một địa chỉ kinh doanh chuyên nghiệp ở vị trí đắc địa tại Thủ đô Hà Nội</h4>
            <div className="mt-4">
              <p className="text-white text-center">Giải pháp Cho Thuê Văn Phòng Ảo sẽ giúp bạn tạo dựng hình ảnh chuyên nghiệp và hiện đại. Dịch vụ Văn Phòng Ảo của
                            Hanoi Office giải quyết toàn bộ nhu cầu của mọi doanh nghiệp và sẽ giúp do
                            anh nghiệp tận dụng được tối đa các cơ hội kinh doanh.</p>
            </div>
            <div className="mt-10">
              <p className="text-red-500"><ChevronRight  url=""/> Tìm hiểu Văn phòng ảo là gì?</p>
            </div>
            <div className="pb-20">
              <p>Chọn một địa điểm</p>
              <select className="pl-8 pr-96 py-2 mr-2" placeholder="Tất cả địa điểm">
                <option value="">Tất cả địa điểm</option>
              </select>
              <button className="border border-blue-500 bg-blue-500 text-white pl-16 pr-20 py-1.5 max-w-max hover:bg-gray-600">TÌM</button>
            </div>
          </div>
          <div className="">
            <div>
              <img src="https://hanoioffice.vn/wp-content/uploads/2020/09/cho-thue-van-phong-ao.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-700">
        <div>
          <p className="text-white pl-24 py-10 text-xl inline-block ">Bạn đang tìm thuê Văn Phòng Ảo Hà Nội và cần được tư vấn? Hãy để Hanoi Office giúp bạn!</p>
          <button className="ml-32 border border-blue-500 bg-white text-black pl-14 pr-20 py-1.5 hover:bg-blue-700 inline-block">GỌI CHO HÀ NỘI OFFICE</button>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold ">TẠI SAO NÊN THUÊ VĂN PHÒNG ẢO TẠI HANOI OFFICE?</h1>
        <p className="text-center ">Bạn muốn doanh nghiệp của mình ở vị trí đắc địa, thuận lợi và sang trọng?</p>
        <p  className="text-center">Bạn cũng muốn sử dụng trọn gói tiện ích văn phòng MIỄN PHÍ?</p>
        <p  className="text-center">Bạn muốn sử dụng Phòng họp, Phòng khách sang trọng? Hay bạn muốn một nhân viên đại diện doanh nghiệp, một điện thoại viên chuyên nghiệp?</p>
        <p className="text-center">Giải pháp cho thuê văn phòng ảo có giúp được bạn không?</p>
      </div>

      <div >
        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/09/cho-thue-van-phong-ao.jpg" alt=""/>
      </div>
      <div>
        <h1 className="pl-24 text-xl border-b-2 font-bold text">HANOI OFFICE - CHO THUÊ VĂN PHÒNG ẢO FULL TIỆN ÍCH</h1>
      </div>
      {/*item slide*/}
      <div className="grid grid-cols-4 gap-2 px-40 mx-20 pt-8">
        <div className="">
          <div className="text-center">
            <span className="text-blue-500"> <EditLocationOutlined primary  url=""/></span>
          </div>
          <p className="text-center font-bold">ĐỊA CHỈ KINH DOANH</p>
          <p className="text-left">Cho thuê địa chỉ đăng ký kinh doanh Hà Nội sang trọng và hiện đại ở những vị trí đắc địa nhất tại Thủ đô.</p>
        </div>
        <div className="">
          <div className="text-center">
            <span className="text-blue-500"> <Email primary  url=""/></span>
          </div>
          <p className="text-center font-bold">NHẬN THƯ & BƯU PHẨM</p>
          <p className="text-left">Hanoi Office sẽ nhận thư tín và bưu phẩm thay bạn sau đó sẽ chuyển tiếp đến địa chỉ được yêu cầu đúng hẹn.</p>
        </div>
        <div className="">
          <div className="text-center">
            <span className="text-blue-500"> <Person /> </span>
          </div>
          <p className="text-center font-bold">NHÂN VIÊN ĐẠI DIỆN</p>
          <p className="text-left">Nhân viên đại diện chuyên nghiệp và xinh đẹp sẽ xử lý những công việc trong phạm vi cho phép khi bạn vắng mặt.</p>
        </div>
        <div className="">
          <div className="text-center">
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <span className="text-blue-500"> <MeetingRoomSharp primary  url=""/></span>
          </div>
          <p className="text-center font-bold">KHÔNG GIAN HIỆN ĐẠI</p>
          <p className="text-left">Được sử dụng linh hoạt Phòng họp và Phòng khách sang trọng để tiếp khách trên toàn hệ thống của Hanoi Office.</p>
        </div>

      </div>
      {/*items slide*/}

      <div className="grid grid-cols-4 gap-2 px-40 mx-20 pt-8">
        <div className="">
          <div className="text-center">
            <span className="text-blue-500"> <Devices primary  url=""/></span>
          </div>
          <p className="text-center font-bold">THIẾT BỊ VĂN PHÒNG</p>
          <p className="text-left">Được sử dụng các thiết bị văn phòng hiện đại: Máy in, fax, máy photocopy, điện thoại hệ thống…</p>
        </div>
        <div className="">
          <div className="text-center">
            <span className="text-blue-500"> <Security primary  url=""/></span>
          </div>
          <p className="text-center font-bold">DỊCH VỤ AN NINH 24/7</p>
          <p className="text-left">Dịch vụ an ninh 24/7, dịch vụ vệ sinh hàng ngày giúp bạn an tâm hơn để phát triển doanh nghiệp.</p>
        </div>
        <div className="">
          <div className="text-center">
            <span className="text-blue-500"> <Wifi  /> </span>
          </div>
          <p className="text-center font-bold">INTERNET TỐC ĐỘ CAO</p>
          <p className="text-left">Văn phòng ảo trang bị internet tốc độ cao tại toàn bộ không gian văn phòng Hanoi Office.</p>
        </div>
        <div className="">
          <div className="text-center">
            <span className="text-blue-500"> <FreeBreakfast  primary  url=""/></span>
          </div>
          <p className="text-center font-bold">TRÀ VÀ NƯỚC MIỄN PHÍ</p>
          <p className="text-left">Hanoi Office cung cấp trà và nước miễn phí cho toàn bạn và quý khách hàng của bạn.</p>
        </div>

      </div>
      <div>
        <h1 className="pl-24 text-xl border-b-2 font-bold text text-center  pt-8">KHÔNG CHỈ LÀ THUÊ VĂN PHÒNG ẢO MÀ BẠN CÒN THAM GIA VÀO CỘNG ĐỒNG DOANH NGHIỆP</h1>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-8">
        <div className="pl-24">
          <img className="w-full h-full" src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-ao-cho-thue.jpg" alt=""/>
        </div>
        <div className="pt-8">
          <h1 className="text-center font-bold">ĐĂNG KÝ TƯ VẤN VĂN PHÒNG ẢO</h1>
          <div className="grid grid-cols-2 gap-2 ">
            <div>
              <span><p>Họ và Tên:*</p>
              </span>
              <input
                className="shadow py-2 pr-32 text-gray-700"
                id="username" type="text" />
              <span><p>Số điện thoại:*</p>
              </span>
              <input
                className="shadow py-2 pr-32  text-gray-700"
                id="username" type="text" />
            </div>
            <div>
              <span><p>Email:*</p>
              </span>
              <input
                className="shadow py-2 pr-32 text-gray-700"
                id="username" type="text" />
              <span><p>Ngày hẹn:*</p>
              </span>
              <input
                className="shadow py-2 pr-32  text-gray-700"
                id="username" type="text" />
            </div>
          </div>
          <div className="">
            <span><p>Địa điểm bạn quan tâm:</p></span>
            <input
              className="shadow py-2 w-10/12 text-gray-700"
              id="username" type="text" placeholder="Chọn địa điểm" />
          </div>

          <div className="">
            <span><p>Yêu cầu chi tiết:</p></span>
            <input
              className="shadow py-2 w-10/12 text-gray-700"
              id="username" type="text" placeholder="Chọn địa điểm" />
          </div>
          <div className="pt-4">
            <button className="bg-blue-700 py-2 px-16 text-white">GỬI</button>
          </div>
        </div>
      </div>
      {/*// gói chọn phòng*/}
      <div>
        <div className="text-center font-extrabold text-2xl">
          <h1>HÃY LỰA CHỌN GÓI VĂN PHÒNG ẢO CHO THUÊ PHÙ HỢP VỚI BẠN</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 px-40 mx-20">
          <div>
            <img className="h-full w-96" src="https://hanoioffice.vn/wp-content/uploads/2021/06/VPA-ECONOMY.png" alt=""/>
          </div>
          <div>
            <img className="h-full w-96" src="https://hanoioffice.vn/wp-content/uploads/2021/06/VPA-ECONOMY.png" alt=""/>
          </div>
          <div>
            <img className="h-full w-96" src="https://hanoioffice.vn/wp-content/uploads/2021/06/VPA-ECONOMY.png" alt=""/>
          </div>
        </div>
      </div>
      {/*//tiện ích*/}
      <div>
        <div className="pl-32">
          <h1 className="font-bold text-lg">12 TIỆN ÍCH KHI SỬ DỤNG DỊCH VỤ CHO THUÊ VĂN PHÒNG ẢO TẠI HANOI OFFICE:</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="pl-32">
            <p><CompareArrows className="text-blue-500"/> Sử dụng địa chỉ văn phòng giao dịch</p>
            <p> <ImportContacts className="text-blue-500"/> Địa chỉ chi nhánh, văn phòng đại diện</p>
            <p> <Person className="text-blue-500"/>Lễ tân, tiếp khách</p>
            <p> <Email className="text-blue-500"/> Tiếp nhận thư/bưu phẩm</p>
            <p> <Send className="text-blue-500"/> Chuyển tiếp thư/bưu phẩm</p>
            <p> <AllInbox className="text-blue-500"/>Tư vấn đăng ký kinh doanh</p>

          </div>
          <div>
            <div className="">
              <p> <LocalCafe className="text-blue-500" /> Nước uống (café, trà, nước)</p>
              <p> <PersonAdd className="text-blue-500" /> Nhân viên đại diện doanh nghiệp</p>
              <p> <ContactPhone className="text-blue-500" /> Số fax chung</p>
              <p> <PermPhoneMsg className="text-blue-500" /> Điện thoại viên trả lời cuộc gọi</p>
              <p> <HeadsetMic className="text-blue-500" />	Tổng đài nội bộ và chuyển cuộc gọi</p>
              <p> <FormatListBulleted className="text-blue-500" />Tư vấn đăng ký thuế ban đầu</p>
            </div>
          </div>
        </div>
        <div className="pl-32">
          <h2 className="font-bold">GHI CHÚ:</h2>
          <p>– Số lượng/thời lượng dịch vụ được quy định theo mỗi tháng, không có giá trị quy đổi hay cộng dồn cho các tháng sau.</p>

          <p>  – Giá trên chưa bao gồm VAT </p>

          <p>   – Tiện ích sử dụng trong giờ hành chính</p>

          <p>   – Sử dụng tiện ích trên tất cả các cơ sở của Hanoi Office</p>

          <p>    – Giá trên áp dụng cho Doanh nghiệp vốn Việt Nam, Doanh nghiệp vốn nước ngoài vui lòng ” Liên hệ“.</p>

          <p>   – Văn phòng phẩm phụ trội thanh toán theo thực tế sử dụng.</p>

          <p>   – Cước điện thoại thanh toán thực tế theo hóa đơn nhà cung cấp.</p>

          <p>   – Phí chuyển tiếp thư/ bưu phẩm theo yêu cầu sẽ thanh toán theo thực tế.</p>

          <p>   – Sử dụng phòng họp báo trước 24h; sử dụng khu vực tiếp khách chung báo trước 24h.</p>
        </div>
      </div>
      <div className="bg-blue-700">
        <div>
          <p className="text-white pl-24 py-10 text-xl inline-block ">Bạn đang tìm thuê Văn Phòng Ảo Hà Nội và cần được tư vấn? Hãy để Hanoi Office giúp bạn!</p>
          <button className="ml-32 border border-blue-500 bg-white text-black pl-14 pr-20 py-1.5 hover:bg-blue-700 inline-block">GỌI CHO HÀ NỘI OFFICE</button>
        </div>
      </div>
      {/*titil khám phá văn phòng*/}
      <div className="py-20">
        <h1 className="text-center font-bold text-2xl">KHÁM PHÁ VĂN PHÒNG ẢO CHO THUÊ TẠI HANOI OFFICE</h1>
      </div>
      {/*ảnh */}
      <div className="pb-8">
        <img className="mx-auto" src="https://langmaster.edu.vn/public/files/editor-upload/images/3-chu-de-tieng-anh-van-phong-pho-bien-nhat-1.jpg" alt=""/>
      </div>
      {/*  buttom*/}
      <div className="bg-gray-200 px-40 pb-8">
        <div >
          <h1 className="pt-16 font-bold text-xl border-b-2">TÌM HIỂU VỀ VĂN PHÒNG ẢO</h1>
        </div>
        <div>
          <p className="text-basic">Dịch Vụ Cho Thuê Văn Phòng Ảo tại sao lại có thể đáp ứng được tất cả mong muốn của các doanh nghiệp? Tại sao doanh nghiệp lại cần đến một Văn Phòng Ảo? 5 lý do sau đây sẽ giải thích những thắc mắc này:</p>
          <div className="grid grid-cols-5 border-b-2">
            <div>
              <p className="text-sm">1.TIẾT KIỆM TỐI ĐA CHI PHÍ</p>
            </div>
            <div>
              <p className="text-sm">2.TRỤ SỞ DOANH NGHIỆP</p>
            </div>
            <div>
              <p className="text-sm">3.THÔNG TIN LIÊN LẠC</p>
            </div>
            <div>
              <p className="text-sm">4.XÂY DỰNG HÌNH ẢNH</p>
            </div>
            <div>
              <p className="text-sm">5.NẮM BẮT CƠ HỘI</p>
            </div>
          </div>
          <div><p>
            <div>
              <p>Dịch vụ Văn Phòng Ảo tại Hà Nội tức là bạn có thể thuê địa chỉ mở công ty để có thể giảm thiểu chi phí vận hành một cách tối đa. Giải pháp Văn Phòng Ảo sẽ giúp doanh nghiệp, Start-up tối ưu được 80% chi phí vận hành, chi phí đầu tư ban đầu (chi phí cố định) và cả chi phí cơ hội. Tại sao vậy?

                            Sử dụng dịch vụ cho thuê Văn Phòng Ảo tại Hà Nội, bạn sẽ không phải đầu tư một khoản chi phí lớn để thuê văn phòng theo kiểu truyền thống.</p>
            </div></p></div>
        </div>
      </div>
      {/*  tittle buttom*/}
      <div className="px-40 py-8"> <h1 className="font-bold text-2xl">NHỮNG CÂU HỎI THƯỜNG GẶP VỀ GIẢI PHÁP CHO THUÊ VĂN PHÒNG ẢO</h1> </div>

      <div className="px-40 py-8 bg-gray-200 text-2xl">
        <div><h1>+ Văn phòng ảo là gì? </h1></div>
        <div><h1>+ Văn phòng ảo là gì? </h1></div>
        <div><h1>+ Văn phòng ảo là gì? </h1></div>
        <div><h1>+ Văn phòng ảo là gì? </h1></div>
        <div><h1>+ Văn phòng ảo là gì? </h1></div>
      </div>
      <div className="bg-blue-700">
        <div>
          <p className="text-white pl-24 py-10 text-xl inline-block ">Bạn đang tìm thuê Văn Phòng Ảo Hà Nội và cần được tư vấn? Hãy để Hanoi Office giúp bạn!</p>
          <button className="ml-32 border border-blue-500 bg-white text-black pl-14 pr-20 py-1.5 hover:bg-blue-700 inline-block">GỌI CHO HÀ NỘI OFFICE</button>
        </div>
      </div>
    </>
  );
};
export default VirtualOffice;