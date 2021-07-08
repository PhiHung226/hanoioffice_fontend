import React from 'react';

// eslint-disable-next-line no-unused-vars
import {
  BatteryCharging20Outlined,
  // eslint-disable-next-line no-unused-vars
  BeachAccessTwoTone,
  // eslint-disable-next-line no-unused-vars
  Email,
  FiberManualRecord,
  LocalAtm,
  Room,
  SyncAlt
} from '@material-ui/icons';

const ExchangeOffice = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 pt-6 pb-9 px-36">
        <div className="pl-24">
          <img className="w-full h-full mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong.jpg" alt=""/>
        </div>
        <div className="pt-12 px-24">
          <h1 className="text-center font-bold text-3xl">NHẬN TƯ VẤN VĂN PHÒNG LƯU ĐỘNG</h1>
          <h3 className="text-center py-6 text-lg text-gray-600">Đăng ký ngay để nhận tư vấn và báo giá chi tiết nhất.</h3>
          <div className="">
            <div>
              <span><p className="text-gray-600">Họ và Tên:*</p>
              </span>
              <input
                className="shadow py-4 w-full text-gray-700"
                id="username" type="text" />

            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div>
                <span><p className="text-gray-600">Email:*</p>
                </span>
                <input
                  className="shadow py-4 pr-32 w-full text-gray-700"
                  id="username" type="text" />
              </div>
              <div>
                <span><p className="text-gray-600">Số Điện Thoại:*</p>
                </span>
                <input
                  className="shadow py-4 pr-32 w-full text-gray-700"
                  id="username" type="text" />
              </div>

            </div>
          </div>
          <div className="">
            <span><p className="text-gray-600">Yêu cầu chi tiết:</p></span>
            <input
              className="shadow py-4 w-full text-gray-700"
              id="username" type="text" placeholder="Chọn địa điểm" />
          </div>
          <div className="pt-4">
            <button className="bg-blue-500 rounded py-2 px-12 text-white">ĐẶT LỊCH</button>
          </div>
        </div>
      </div>
      {/*bg-blue*/}
      <div className="bg-blue-500 px-40">
        <div>
          <p className="text-white pl-24 py-10 text-xl inline-block ">Bạn đang tìm thuê Văn Phòng Ảo Hà Nội và cần được tư vấn? Hãy để Hanoi Office giúp bạn!</p>
          <button className="ml-32 border border-white-500 bg-white text-black pl-14 pr-20 py-1.5 hover:bg-blue-500 inline-block rounded">GỌI CHO HÀ NỘI OFFICE</button>
        </div>
      </div>
      {/* bg-text*/}
      <div className="px-64">
        <h1 className="text-4xl pt-24 font-bold border-b-2">VĂN PHÒNG LƯU ĐỘNG LÀ GÌ?</h1>
        <p className="pt-4 text-xl ">Văn phòng lưu động là dịch vụ chia sẻ chỗ ngồi làm việc tại Hanoi Office – Một giải pháp hoàn toàn mới cho các cá nhân, tổ chức và doanh nghiệp hay phải đi công tác hoặc muốn thay đổi không gian làm việc để phù hợp với công việc sáng tạo.</p>
        <p  className="pt-4 text-xl">Đặc biệt, với gói thuê này, bạn sẽ nhận được “đặc quyền” tùy ý thay đổi chỗ ngồi làm việc trên hệ thống 08 cơ sở tại 06 quận trung tâm Hà Nội của Hanoi Office. Giá thành không đổi, không phát sinh chi phí, trọn gói chỉ với 2.500.000đ/tháng.</p>
      </div>
      <div >
        <img className="mx-auto bg-white pb-16" src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-3.jpg" alt=""/>
      </div>
      <div className="px-64">
        <h1 className="text-xl text-center font-bold border-b-2">TẠI SAO NÊN CHỌN KHÔNG GIAN VĂN PHÒNG LƯU ĐỘNG HANOI OFFICE?</h1>
        <div className="grid grid-cols-4 gap-2 pt-4 pb-20">
          <div>
            <div className="text-center">
              <span className="text-blue-500 "> <Room primary style={ { fontSize: 100 } } url=""/></span>
            </div>
            <p className="text-center text-xl font-bold">ĐỊA ĐIỂM ĐẮC ĐỊA</p>
            <p className="text-left text-lg">Gồm 8 cơ sở nằm tại trung tâm 6 quận lớn Hà Nội, các văn phòng Hanoi
                            Office đều được đặt tại vị trí đắc địa hàng đầu thủ đô.</p>
          </div>
          <div>
            <div className="text-center">
              <span className="text-blue-500 "> <SyncAlt primary style={ { fontSize: 100 } } url=""/></span>
            </div>
            <p className="text-center text-xl font-bold">LÀM VIỆC LINH HOẠT</p>
            <p className="text-left text-lg">Linh hoạt lựa chọn địa điểm làm việc, tiết kiệm tối đa thời gian di chuyển, giải quyết công việc mọi lúc, mọi nơi.</p>
          </div>
          <div>
            <div className="text-center">
              <span className="text-blue-500 "> <BatteryCharging20Outlined primary style={ { fontSize: 100 } } url=""/></span>
            </div>
            <p className="text-center text-xl font-bold">TIẾT KIỆM CÔNG SỨC</p>
            <p className="text-left text-lg">Không cần tốn công sức lắp đặt thiết bị, Hanoi Office sẽ cung cấp đầy đủ tiện ích văn phòng cho bạn. Bạn chỉ cần đến và làm việc.</p>
          </div>
          <div>
            <div className="text-center">
              <span className="text-blue-500 "> <LocalAtm primary style={ { fontSize: 100 } } url=""/></span>
            </div>
            <p className="text-center text-xl font-bold">TIẾT KIỆM CHI PHÍ</p>
            <p className="text-left text-lg">Chỉ 2.500.000 VNĐ/tháng, sở hữu 13 chỗ ngồi tại 8 văn phòng sang trọng - Tiết kiệm hơn đến 90% so với thuê chỗ ngồi theo giờ, ngày.</p>
          </div>

        </div>
      </div>
      {/*bg-blue*/}
      <div className="bg-blue-500 px-40">
        <div>
          <p className="text-white pl-24 py-10 text-xl inline-block ">Bạn đang tìm thuê Văn Phòng Ảo Hà Nội và cần được tư vấn? Hãy để Hanoi Office giúp bạn!</p>
          <button className="ml-32 border border-white-500 bg-white text-black pl-14 pr-20 py-1.5 hover:bg-blue-500 inline-block rounded">GỌI CHO HÀ NỘI OFFICE</button>
        </div>
      </div>

      {/*  text-img*/}
      <div className="px-64 pt-8 text-center">
        <h1 className="text-xl font-bold border-b-2 text-xl">TẠI SAO NÊN CHỌN KHÔNG GIAN VĂN PHÒNG LƯU ĐỘNG HANOI OFFICE?</h1>
        <span><p className="pt-4 text-lg">Khi bạn thuê Văn phòng lưu động Hanoi Office, chỉ 2.500.000 VNĐ/tháng, bạn sẽ được làm việc tại hệ thống 8 cơ sở văn phòng tại các quận trung tâm thành phố Hà Nội</p></span>

        <div className="grid grid-cols-2 gap-6 pt-8">
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
          </div>
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
            <img src="https://hanoioffice.vn/wp-content/uploads/2020/10/van-phong-luu-dong-6.jpg" alt=""/>
          </div>
        </div>
      </div>
      {/*text*/}
      <div className="px-64 py-12 ">
        <h2 className="text-3xl font-bold">“VĂN PHÒNG LƯU ĐỘNG” HANOI OFFICE – GIẢI PHÁP THÔNG MINH CHO DOANH NGHIỆP 5.0</h2>
      </div>

      {/*  text-content*/}
      <div className="px-64">
        <div>
          <h1 className="text-2xl font-bold">TIẾT KIỆM NGÂN SÁCH ƯU VIỆT</h1>
          <span><p className="text-xl pt-4 pb-16">Với dịch vụ “Văn Phòng Lưu Động”, bạn vừa được thay đổi không gian, vừa có cơ hội trải nghiệm để tìm cho mình một chỗ ngồi làm việc ưng ý, vừa được thỏa sức trang trí
            góc làm việc của mình theo sở thích lại vừa tiết kiệm được ngân sách chi trả cho mặt bằng.
Chỉ với 2.500.000đ/tháng, bạn đã sở hữu cho mình một chỗ ngồi làm việc sang – xịn – hiện đại tại 06 quận trung tâm Hà Nội.</p></span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">MÔI TRƯỜNG LÝ TƯỞNG</h1>
          <span><p className="text-xl pt-4 pb-16">Mang phong cách kiến trúc tươi trẻ, hiện đại nhưng không kém phần sang trọng, không gian văn phòng Hanoi Office là nơi lý tưởng để kiến tạo nên những ý tưởng táo bạo và hay ho.
Không đơn thuần chỉ là nơi làm việc, không gian văn phòng Hanoi Office còn là nơi kết nối cộng đồng doanh nghiệp, các freelancer trong nhiều lĩnh vực, ngành nghề.
Bạn hoàn toàn có cơ hội học hỏi, trao đổi kinh nghiệm và tìm kiếm khách hàng ngay tại nơi làm việc của mình.</p></span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">DỊCH VỤ TRỌN GÓI FULL TIỆN ÍCH</h1>
          <span><p className="text-xl pt-4">Khi bạn thuê dịch vụ “Văn Phòng Lưu Động” tại Hanoi Office, tất cả tiện ích văn phòng đều sẽ được chúng tôi cung cấp hoàn toàn miễn phí:</p></span>
          <h1 className="text-xl pt-4"> <FiberManualRecord/> ĐỊA CHỈ ĐĂNG KÝ KINH DOANH: Bạn sẽ có 1 địa chỉ đăng ký kinh doanh ở những vị trí đắc địa nhất nhì thủ đô. </h1>
          <h1 className="text-xl"> <FiberManualRecord/> PHÒNG KHÁCH SANG TRỌNG: Bạn được sử dụng phòng khách sang trọng để tiếp khách hoàn toàn không mất phí.</h1>
          <h1 className="text-xl"> <FiberManualRecord/>PHÒNG HỌP HIỆN ĐẠI: Phòng họp được trang bị đầy đủ trang thiết bị: Máy chiếu, tivi, bảng viết,… </h1>
          <h1 className="text-xl"> <FiberManualRecord/>MIỄN PHÍ ĐIỆN – NƯỚC – TRÀ – CAFE: Sử dụng điện, nước, trà, cafe,… hoàn toàn free. </h1>
          <h1 className="text-xl"> <FiberManualRecord/>INTERNET TỐC ĐỘ CAO: Bạn được sử dụng internet tốc độ cao miễn phí mọi lúc, mọi nơi tại Hanoi Office </h1>
          <h1 className="text-xl"> <FiberManualRecord/> MÁY IN – MÁY PHOTO – MÁY FAX: Đã được trang bị đầy đủ, phục vụ tối ưu cho công việc của bạn. </h1>
          <h1 className="text-xl"> <FiberManualRecord/> NHẬN/CHUYỂN TIẾP THƯ – BƯU PHẨM: Lễ tân sẽ giúp bạn nhận bưu thư, bưu phẩm và chuyển về địa chỉ bạn mong muốn. </h1>
          <h1 className="text-xl"> <FiberManualRecord/> HỖ TRỢ TƯ VẤN: Miễn phí tư vấn doanh nghiệp các vấn đề về Thuế, Kế toán, Tài chính, Luật doanh nghiệp,… </h1>
        </div>

      </div>
      <div className="pt-10 pb-2">
        <h1 className="px-64 text-3xl text-center font-bold">TRẢI NGHIỆM KHÔNG GIAN VĂN PHÒNG LƯU ĐỘNG HIỆN ĐẠI & CHUYÊN NGHIỆP</h1>
        <div className="pt-1">
          <img className="mx-auto " src="https://cdn.vietnambiz.vn/stores/news_dataimages/linhlt/042017/19/13/1636_DSC_3016.jpg" alt=""/>
        </div>
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
      {/*bg-blue*/}
      <div className="bg-blue-500 px-40">
        <div>
          <p className="text-white pl-24 py-10 text-xl inline-block ">Bạn đang tìm thuê Văn Phòng Ảo Hà Nội và cần được tư vấn? Hãy để Hanoi Office giúp bạn!</p>
          <button className="ml-32 border border-white-500 bg-white text-black pl-14 pr-20 py-1.5 hover:bg-blue-500 inline-block rounded">GỌI CHO HÀ NỘI OFFICE</button>
        </div>
      </div>
    </>
  );
};
export default ExchangeOffice;