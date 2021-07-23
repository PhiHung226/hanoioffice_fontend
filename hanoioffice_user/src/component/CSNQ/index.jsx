import React from 'react';

import {Business, DoneOutline, Language, VpnKeyOutlined} from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

const CSNQ = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="pl-4 pt-2">
          <img  className="rounded-3xl" src="https://hanoioffice.vn/wp-content/uploads/2020/06/van-phong-chia-se-tai-ha-dong-a2.jpg" alt="" />
        </div>
        <div className="text-center my-auto">
          <h1 className="font-bold text-2xl">CHÍNH SÁCH NHƯỢNG QUYỀN THƯƠNG HIỆU CỦA HANOI OFFICE</h1>
          <h3 className="font-bold text-xl">ĐĂNG KÝ NGAY ĐỂ BIẾT THÔNG TIN CHI TIẾT!</h3>
          <div className="border-b border px-4"></div>
          <p className="pt-4">Bạn đang có mặt bằng văn phòng nhưng chưa khai thác hiệu quả?</p>
          <p className="pt-2">Bạn đam mê kinh doanh nhưng không có kinh nghiệm để xây dựng một thương hiệu hoàn toàn mới?</p>
          <p className="pt-2 font-bold text-lg">HÃY TRỞ THÀNH ĐỐI TÁC NHƯỢNG QUYỀN THƯƠNG HIỆU CỦA HANOI OFFICE NGAY!</p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 py-8">
        <div className="ml-52">
          <p className="font-bold text-white">Bạn muốn đăng ký trở thành đối tác nhượng quyền thương hiệu của Hanoi Office và cần được</p>
          <p className="font-bold text-white">tư vấn? Hãy để Hanoi Office giúp bạn!</p>
        </div>
        <div className="ml-48 mt-2">
          <NavLink to=""
            className="ml-24 bg-white font-bold text-black border border-white hover:bg-blue-500 hover:text-white py-2 px-16 rounded text-sm">
                        GỌI CHO HANOI OFFICE
          </NavLink>
        </div>
      </div>
      <div className="pt-16 text-center font-bold text-lg">
        <h3>Tham gia chương trình Nhượng quyền thương hiệu tại Hanoi Office, bạn sẽ ngay lập tức được sở hữu cho riêng mình một đơn vị kinh doanh với</h3>
        <h3>thương hiệu uy tín, sản phẩm kinh doanh hiệu quả, được hỗ trợ các quy trình và cách thức vận hành doanh nghiệp tối ưu. Không tốn công sức,</h3>
        <h3>tiền bạc và thời gian để xây dựng một thương hiệu hoàn toàn mới, đây chính là cơ hội sinh lời lớn cho bạn!</h3>
      </div>
      <div className="pt-8">
        <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2021/06/nhuong-11111-1.png" alt="" />
      </div>
      <div className="pt-8">
        <h2 className="font-bold text-xl text-center">TẠI SAO NÊN CHỌN HANOI OFFICE LÀ ĐỐI TÁC NHƯỢNG QUYỀN THƯƠNG HIỆU CỦA BẠN?</h2>
      </div>
      <div className="pt-4 grid grid-cols-4 gap-6 mx-80">
        <div className="">
          <div className="text-center">
            <VpnKeyOutlined className="bg-blue-500  px-2 rounded-full" primary style={ { fontSize: 80 } }  url="" />
          </div>
          <h3 className="font-bold pt-4 text-lg text-center" >UY TÍN - CHUYÊN NGHIỆP</h3>
          <p className="text-justify">Với gần 10 năm kinh nghiệm hoạt động trong lĩnh vực Cho thuê văn phòng, Hanoi Office tự tin là một trong những đơn vị hàng đầu cung cấp các dịch vụ văn phòng thông minh</p>
        </div>
        <div>
          <div className="">
            <div className="text-center">
              <Business className="bg-blue-500  px-2 rounded-full" primary style={ { fontSize: 80 } }  url="" />
            </div>
            <h3 className="font-bold pt-4 text-lg text-center" >VĂN PHÒNG SANG TRỌNG</h3>
            <p className="text-justify">Hanoi Office sở hữu văn phòng với thiết kế không gian tối giản nhưng tinh tế, sang trọng và hiện đại với đầy đủ tiện ích - Xu hướng văn phòng phù hợp với nhiều đối tượng khách hàng</p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <Language className="bg-blue-500  px-2 rounded-full" primary style={ { fontSize: 80 } }  url="" />
          </div>
          <h3 className="font-bold pt-4 text-lg text-center" >HỖ TRỢ QUẢNG BÁ</h3>
          <p className="text-justify">Hanoi Office sở hữu đội ngũ Marketing mạnh, có chuyên môn tốt, có kinh nghiệm dày dặn, có thể giúp bạn quảng bá, tìm kiếm và thu hút khách hàng tiềm năng</p>
        </div>
        <div>
          <div className="text-center">
            <DoneOutline className="bg-blue-500  px-2 rounded-full" primary style={ { fontSize: 80 } }  url="" />
          </div>
          <h3 className="font-bold pt-4 text-lg text-center" >HỖ TRỢ QUẢNG BÁ</h3>
          <p className="text-justify">Hanoi Office sở hữu đội ngũ nhân viên chăm sóc khách hàng chuyên nghiệp, khéo léo và tận tình,…tạo nên chất lượng dịch vụ tốt, gây ấn tượng tới khách hàng</p>
        </div>
      </div>
      <div className="pt-4 grid grid-cols-2 gap-4 mx-80">
        <div>
          <div className="text-center">
            <DoneOutline className="bg-blue-500  px-2 rounded-full" primary style={ { fontSize: 80 } }  url="" />
          </div>
          <h3 className="font-bold pt-4 text-lg text-center" >QUY TRÌNH HIỆU QUẢ</h3>
          <p className="text-justify">
                        Trở thành đối tác của Hanoi Office, bạn sẽ được cung cấp một hệ thống đo lường các chỉ số cụ thể như khách hàng mới, khách hàng hiện tại, tỉ lệ chuyển đổi của các phương thức quảng cáo trên mạng xã hội,...và hệ thống CRM để quản lý khách hàng, tăng hiệu quả bán hàng, giúp quy trình hoạt động trở nên gọn gàng, dễ kiểm soát và đơn giản hơn</p>
        </div>
        <div>
          <div className="text-center">
            <DoneOutline className="bg-blue-500  px-2 rounded-full" primary style={ { fontSize: 80 } }  url="" />
          </div>
          <h3 className="font-bold pt-4 text-lg text-center" >HỖ TRỢ 100%</h3>
          <p className="text-justify">Hanoi Office sở hữu một đội ngũ nhân viên chuyên thiết kế, thi công và setup văn phòng chuyên nghiệp. Chính vì vậy, chúng tôi có thể nhanh chóng hỗ trợ bạn đưa văn phòng vào hoạt động trong thời gian sớm nhất và sẵn sàng có mặt để sửa chữa, bảo dưỡng,.... ngay khi có vấn đề xảy ra trong quá trình hoạt động, giúp bạn tiết kiệm tối ưu thời gian và chi phí</p>
        </div>
      </div>
      <div className="pt-16 text-center">
        <h3 className="font-bold text-3xl">CƠ HỘI THỊ TRƯỜNG KHI TRỞ THÀNH ĐỐI TÁC NHƯỢNG QUYỀN THƯƠNG HIỆU CỦA HANOI OFFICE</h3>
        <p className="pt-2">Lựa chọn Hanoi Office, lựa chọn kinh doanh lĩnh vực cho thuê văn phòng, chúng tôi cam kết sẽ mang đến cho bạn những cơ hội rộng mở với nguồn thu nhập tốt!</p>
      </div>
      <div className="pt-8">
        <div className="grid grid-cols-2 gap-10 mx-80">
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/1-2.png" alt="" />
          </div>
          <div className="text-center pt-24">
            <p>Là một trong đơn vị đầu tiên mang các mô hình văn phòng thông minh đến gần hơn với các doanh nghiệp Việt Nam, Hanoi Office tự tin là đơn vị hàng đầu trong lĩnh vực cho thuê văn phòng. Uy tín, thương hiệu của Hanoi Office đã được chứng minh bởi sự tin tưởng của hàng nghìn doanh nghiệp và Freelancer cả nước. Vì vậy, lựa chọn Hanoi Office, bạn sẽ không phải lo lắng về vấn đề xây dựng thương hiệu và không khó khăn để tỉm kiếm khách hàng!</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mx-80">
          <div className="text-center pt-24">
            <p>Trong một thời đại mà sáng tạo, công nghệ và dám nghĩ dám làm là những điều mà hàng nghìn bạn trẻ đang hướng tới như hiện nay, mong muốn làm chủ, được khẳng định của thế hệ trẻ ngày càng tăng cao. Vì vậy, các doanh nghiệp Startup đang ngày càng nhiều. Tuy nhiên, đặc điểm chung của những doanh nghiệp này là số vốn khá hạn hẹp. Do đó, mô hình Văn phòng ảo, Văn phòng trọn gói giúp tiết kiệm đến 90% chi phí so với Văn phòng truyền thống chính là lựa chọn mà nhiều Startup đã, đang và sẽ ngày càng ưu tiên lựa chọn</p>
          </div>
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/2-2.png" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mx-80">
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/3-2.png" alt="" />
          </div>
          <div className="text-center pt-24">
            <p>Không chỉ nằm trong khuôn khổ các doanh nghiệp trong nước. Sự mở cửa của Việt Nam với các doanh nghiệp nước ngoài đang ngày càng nhận được những tín hiệu tích cực. Các doanh nghiệp với sự đầu tư của nước ngoài hay các doanh nghiệp nước ngoài mở chi nhánh tại Việt Nam cũng chính là một trong những đối tượng khách hàng tiềm năng của các mô hình văn phòng thông minh.</p>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <h3 className="font-bold text-3xl text-center">TRÁCH NHIỆM CỦA HANOI OFFICE ĐỐI VỚI ĐỐI TÁC NHƯỢNG QUYỀN</h3>
      </div>
      <div className="pt-8 grid grid-cols-2 gap-6 mx-80">
        <div className="">
          <p>1. Tư vấn chọn địa điểm kinh doanh phù hợp</p>
          <p>2. Triển khai nhân sự và trả lương cho nhân sự triển khai sale phòng</p>
          <p>3. Lên phương án thiết kế Văn Phòng với chi phí tiết kiệm nhất</p>
          <p>4. Cung cấp thông tin các nhà cung cấp phụ trợ cho việc điều hành văn phòng.</p>
          <p>5. Hỗ trợ đăng ký kinh doanh, thuế và cơ quan nhà nước</p>
          <p>6. Hỗ trợ đào tạo vận hành hệ thống marketing online, tăng lượng khách</p>
        </div>
        <div>
          <p>7. Chuyển giao quyền sử dụng thương hiệu HANOI OFFICE </p>
          <p>8. Tiếp thị bởi HANOI OFFICE bằng một hợp đồng nhượng quyền thương hiệu</p>
          <p>9. Cung cấp tài liệu, công cụ quản lý văn phòng, sử dụng hệ thống</p>
          <p>10. Hỗ trợ hoặc hướng dẫn, thực hiện các chiến dịch tiếp thị</p>
          <p>11. Hỗ trợ chính sách khuyến mãi chung, hỗ trợ đào tạo và tư vấn bán hàng</p>
          <p>12. Hỗ trợ kênh truyền thông riêng</p>
        </div>
      </div>
      <div className="pt-16">
        <h3 className="font-bold text-3xl text-center">QUYỀN LỢI CỦA BẠN KHI TRỞ THÀNH ĐỐI TÁC NHƯỢNG QUYỀN THƯƠNG HIỆU CỦA HANOI OFFICE</h3>
      </div>
      <div className="pt-8 grid grid-cols-2 gap-10 mx-80">
        <div className="">
          <p>1. Được hỗ trợ từ Hanoi Office trong hoạt đồng kinh doanh từ A-Z</p>
          <p>2. Được tư vấn, thiết kế thi công Văn phòng miễn phí</p>
          <p>3. Được hướng dẫn CRM quản lý Văn phòng, nhân sự, phân tích tài chính</p>
          <p>4. Không nhượng quyền hoặc mở văn phòng trong phạm vi 5km tính từ địa chỉ mở văn phòng của bạn</p>
        </div>
        <div>
          <p>5. Được cung cấp Các gói dịch vụ phù hợp với mặt bằng và vị trí văn phòng </p>
          <p>6. Được hỗ trợ Marketing, push sale (quảng cáo) miễn phí</p>
          <p>7. Được quyền sử dụng thương hiệu “HANOI OFFICE” vĩnh viễn</p>
          <p>8. Hỗ trợ sang nhượng hoặc mua lại khi quý khách không còn nhu cầu kinh doanh</p>
        </div>
      </div>
      <div className="text-center pt-8">
        <h3 className="font-bold text-3xl">KINH PHÍ NHƯỢNG QUYỀN THƯƠNG HIỆU TẠI HANOI OFFICE</h3>
      </div>
      <div className="pt-8 text-center">
        <NavLink to="" className="shadow px-6 py-4 rounded text-white bg-blue-600" >LIÊN HỆ NHẬN TƯ VẤN CHI TIẾT</NavLink>
      </div>
      <div className="text-center pt-16">
        <h3 className="font-bold text-3xl">CÁC GÓI DỊCH VỤ VĂN PHÒNG CHO THUÊ TẠI HANOI OFFICE</h3>
      </div>
      <div className="pt-8 grid grid-cols-3 gap-10 mx-60">
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/t4.png" alt="" />
          <p className="pt-2 text-center font-bold">CHO THUÊ KHÔNG GIAN QUAY PHIM, CHỤP ẢNH</p>
          <p className="pt-4 text-center ">HIỆN ĐẠI - CHỈ TỪ 500.000 VNĐ/ GIỜ</p>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/t6.png" alt="" />
          <p className="pt-2 text-center font-bold">CHO THUÊ PHÒNG HỌP, PHÒNG GIÁM ĐỐC</p>
          <p className="pt-4 text-center ">SANG TRỌNG - CHỈ TỪ 200.000 VNĐ/ GIỜ</p>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/t5.png" alt="" />
          <p className="pt-2 text-center font-bold">CHO THUÊ TRỤ SỞ VĂN PHÒNG/ VĂN PHÒNG ẢO</p>
          <p className="pt-4 text-center ">CHUYÊN NGHIỆP - CHỈ TỪ 650.000 VNĐ/ THÁNG</p>
        </div>
      </div>
      <div className="pt-8 grid grid-cols-3 gap-10 mx-60">
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/t1.png" alt="" />
          <p className="pt-2 text-center font-bold">CHO THUÊ PHÒNG LÀM VIỆC RIÊNG</p>
          <p className="pt-4 text-center ">ĐA DIỆN TÍCH - GIÁ TỪ 5.000.000VNĐ/ tháng</p>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/t2.png" alt="" />
          <p className="pt-2 text-center font-bold">CHO THUÊ CHỖ NGỒI LÀM VIỆC</p>
          <p className="pt-4 text-center ">SÁNG TẠO - GIÁ CHỈ TỪ 800.000 VNĐ/ tháng</p>
        </div>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/t3.png" alt="" />
          <p className="pt-2 text-center font-bold">CHO THUÊ CHỖ NGỒI LINH HOẠT</p>
          <p className="pt-4 text-center ">TIỆN LỢI - GIÁ TỪ 7.000 VNĐ/ GIỜ</p>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-blue-500 py-8">
        <div className="ml-52">
          <p className="font-bold text-white">Bạn muốn đăng ký trở thành đối tác nhượng quyền thương hiệu của Hanoi Office và cần được</p>
          <p className="font-bold text-white">tư vấn? Hãy để Hanoi Office giúp bạn!</p>
        </div>
        <div className="ml-48 mt-2">
          <NavLink to=""
            className="ml-24 bg-white font-bold text-black border hover:border-blue-400 hover:bg-blue-500 py-2 px-16 rounded text-sm">
                        GỌI CHO HANOI OFFICE
          </NavLink>
        </div>
      </div>
      <div className="pt-16 pb-10">
        <div className="grid grid-cols-2 gap-10 mx-60">
          <div>
            <img src="https://hanoioffice.vn/wp-content/uploads/2021/06/chinh-sach.png" alt="" />
          </div>
          <div className="pt-8">
            <h3 className="font-bold text-xl">NHẬN TƯ VẤN NHƯỢNG QUYỀN THƯƠNG HIỆU TỪ HANOI OFFICE</h3>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div>
                <label className="text-gray-600">Họ và Tên:*</label>
                <div>
                  <input className="py-2 w-72 pl-2 border border-gray-300 rounded" id="username" type="text" />
                </div>
              </div>
              <div>
                <label className="text-gray-600">Email:*</label>
                <div>
                  <input className="py-2 w-full pl-2 border border-gray-300 rounded" id="username" type="text" /></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div>
                <label className="text-gray-600">Số điện thoại:*</label>
                <div>
                  <input className="py-2 w-72 pl-2 border border-gray-300 rounded" id="username" type="text" />
                </div>
              </div>
              <div>
                <label className="text-gray-600">Ngày hẹn:</label>
                <div>
                  <input className="py-2 w-full border border-gray-300 rounded" id="username" type="date" /></div>
              </div>
            </div>
            <div>
              <label className="text-gray-600">Yêu cầu chi tiết:</label>
              <div>
                <input className="py-2 w-full pl-2 border border-gray-300 rounded" id="username" type="text" />
              </div>
            </div>
            <div className="pt-4">
              <input className="bg-blue-500 rounded py-3 px-12 font-bold text-white text-sm hover:bg-white hover:text-black border hover:border-blue-500" value="GỬI" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CSNQ;