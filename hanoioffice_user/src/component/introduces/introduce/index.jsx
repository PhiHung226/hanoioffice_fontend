import React from 'react';

import {FiberManualRecord} from '@material-ui/icons';

const Introduce = () => {
  return (
    <>
      <div className="bg-black py-36">
        <h1 className="text-white text-center text-3xl font-bold">GIỚI THIỆU</h1>
        <h3  className="text-white text-center text-2xl">Home  /  GIỚI THIỆU</h3>
      </div>
      <div className="pt-16">
        <div className="grid grid-cols-2 ml-96 mr-80 pr-6 gap-4">
          <div>
            <img
              src="https://hanoioffice.vn/wp-content/uploads/2020/09/văn-phòng-ảo.jpg"
              alt="" />
          </div>
          <div>
            <h2 className="font-bold text-3xl pb-2">CHÀO MỪNG ĐẾN HANOI OFFICE</h2>
            <h4 className="font-bold text-xl">Giải pháp cho thuê văn phòng mới</h4>
            <div className="pt-4">
              <span>Ghi nhận những tiện ích và hiệu quả của hình thức kinh doanh văn phòng thông minh, </span>
              <span className="font-bold text-xl">Hanoi Office </span>
              <span>chuyên cung cấp các loại hình dịch vụ văn phòng chuyên nghiệp và hiện đại phù hợp với mọi hoạt động kinh doanh của các doanh nghiệp.</span>
            </div>
            <div className="pt-4">
              <span>Nhằm đáp ứng các nhu cầu khác nhau về địa điểm văn phòng, Hanoi Office hiện diện tại các tòa nhà văn phòng hiện đại và đẹp hàng đầu Hà Nội:</span>
            </div>
            <div className="pt-3 italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Thanh Xuân: </span>
              <a href="https://www.google.com/maps/place/Hanoi+Office/@21.0077001,105.8045824,14z/data=!4m8!1m2!2m1!1zSGFub2kgT2ZmaWNlIDIxIGzDqiB2xINuIGzGsMahbmc!3m4!1s0x3135ad90bdc697ef:0xaa9308cc6fc91083!8m2!3d21.0080607!4d105.8080925?hl=vi-VN" className="text-blue-500">Golden Palm, 21 Lê Văn Lương</a>
            </div>
            <div className="italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Thanh Xuân: </span>
              <a href="https://goo.gl/maps/o8WdBamt5qzvcqpx6" className="text-blue-500">ZenTower, 12 Khuất Duy Tiến</a>
            </div>
            <div className="italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Ba Đình: </span>
              <a href="https://goo.gl/maps/V62k6M78Gdx5KFXj7" className="text-blue-500">VMQBuilding, 87 Nguyễn Thái Học</a>
            </div>
            <div className="italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Cầu Giấy: </span>
              <a href="https://g.page/vanphonggiarehanoi?share" className="text-blue-500">Sannam Building, 78 Duy Tân</a>
            </div>
            <div className="italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Hà Đông: </span>
              <a href="https://g.page/vanphongchiasehanoi?share" className="text-blue-500">HUD3 Tower, 121-123 Tô Hiệu</a>
            </div>
            <div className="italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Hà Đông: </span>
              <a href="https://www.google.com/maps/place/Hanoi+Office/@20.9797843,105.7838498,16z/data=!4m8!1m2!2m1!1zaGFub2kgb2ZmaWNlIHRy4bqnbiBwaMO6IGjDoCDEkcO0bmc!3m4!1s0x3135ad030eb29561:0x7cd86f4a31fcabad!8m2!3d20.9800411!4d105.7886249" className="text-blue-500">Tòa nhà Sông Đà, 131 Trần Phú</a>
            </div>
            <div className="italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Nam Từ Liêm: </span>
              <a href="https://g.page/vanphongdichvu?share" className="text-blue-500">ATBuilding, ngõ 7, Lê Đức Thọ</a>
            </div>
            <div className="italic">
              <FiberManualRecord className="w-6 pr-3 pb-0.5" />
              <span>Quận Hoàng Mai: </span>
              <a href="https://www.google.com/maps/place/Hanoi+Office/@20.9954965,105.860627,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ad9d478d64df:0xb427f74de50783fd!8m2!3d20.9954965!4d105.8628157" className="text-blue-500">Helios Tower, 75 Tam Trinh</a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mx-96 gap-4 pt-4 justify-center">
          <div>
            <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-growth-icon.png" alt="" />
            <h4 className="font-bold text-xl text-center pt-4">CHÚNG TÔI LÀ AI?</h4>
            <span className="pt-2">Hanoi Office trực thuộc Công ty Cổ phần INC Việt Nam với gần 10 năm kinh nghiệm hoạt động trong lĩnh vực cho thuê Văn phòng ảo, Phòng làm việc riêng, Chỗ ngồi làm việc và Phòng họp.</span>
          </div>
          <div>
            <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-growth-icon.png" alt="" />
            <h4 className="font-bold text-xl text-center pt-4">SỨ MỆNH</h4>
            <span className="pt-2">Trở thành biểu tượng niềm tin và lựa chọn hàng đầu Việt Nam về các loại hình dịch vụ văn phòng thông minh. Đem đến cho các doanh nghiệp một giải pháp văn phòng hiệu quả hơn.</span>
          </div>
          <div>
            <img className="mx-auto" src="https://hanoioffice.vn/wp-content/uploads/2020/07/hanoioffice-growth-icon.png" alt="" />
            <h4 className="font-bold text-xl text-center pt-4">TẦM NHÌN</h4>
            <span className="pt-2">Hanoi Office cam kết mang đến cho cộng đồng doanh nghiệp dịch vụ văn phòng chuyên nghiệp - hiện đại. Giúp các doanh nghiệp tập trung vào giá trị kinh doanh cốt lõi.</span>
          </div>
        </div>
        <div className="pt-16">
          <h3 className="text-center font-bold text-3xl">VỊ TRÍ ĐẮC ĐỊA</h3>
          <p className="pt-2 text-center text-xl">Văn phòng Hanoi Office tọa lạc tại những vị trí đắc địa - giao thông thuận lợi - tận dụng được tối đa cơ hội kinh doanh</p>
        </div>
        <div className="pt-24">
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3724.302500323029!2d105.77097599345107!3d21.02057888722425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1626539506938!5m2!1svi!2s" width={ 600 } height={ 450 } style={ { border: 0 } } allowFullScreen loading="lazy" />
        </div>
      </div>
    </>
  );
};
export default Introduce;