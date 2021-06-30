import React, { Suspense } from 'react';

import {
  Switch,
  Route,
  // Redirect,
  // useLocation
} from 'react-router-dom';

import LoadingSpinner from '../component/common/LoadingSpinner';
import Footer from '../component/footers';
import Header from '../component/headers';
import {
  VirtualOffice, Home,
  AllInclusiveOffice,
  WorkingSeat, ExchangeOffice,
  MeetingRoom, OnlineMeetingRoom,
  CreativeContent, ZoomConference,
  DigitalSignatures, ElectronicBill,
  ElectronicSocialInsurance, SetUpABusiness,
  Telecommunication, Translate,
  EconomicNews, LegalNews,
  Document, Recruitment,
  DuyTan, KhuatDuyTien, LeDucTho,
  LeVanLuong, NguyenThaiHoc, TamChinh,
  ToHieu, TranPhu, Contact, Quotation
} from './Lazy';

const Body = () => {
  return (
    <>
      <Suspense fallback={ <LoadingSpinner /> }>
        <Switch>
          {/* home */ }
          <Route exact path="/" component={ Home } />
          {/* service */ }
          <Route exact path="/van-phong-ao" component={ VirtualOffice } />
          <Route exact path="/van-phong-tron-goi" component={ AllInclusiveOffice } />
          <Route exact path="/cho-ngoi-lam-viec" component={ WorkingSeat } />
          <Route exact path="/van-phong-luu-dong" component={ ExchangeOffice } />
          <Route exact path="/phong-hop" component={ MeetingRoom } />
          <Route exact path="/phong-hop-truc-tuyen" component={ OnlineMeetingRoom } />
          {/* serviceOrther */ }
          <Route exact path="/zoom-conference" component={ ZoomConference } />
          <Route exact path="/chu-ky-so" component={ DigitalSignatures } />
          <Route exact path="/hoa-don-dien-tu" component={ ElectronicBill } />
          <Route exact path="/bhxh-dien-tu" component={ ElectronicSocialInsurance } />
          <Route exact path="/cac-dich-vu-vien-thong" component={ Telecommunication } />
          <Route exact path="/thanh-lap-doanh-nghiep" component={ SetUpABusiness } />
          <Route exact path="/bien-phien-dich" component={ Translate } />
          <Route exact path="/creative-content" component={ CreativeContent } />
          {/* place: Địa điểm */ }
          <Route exact path="/le-van-luong-thanh-xuan" component={ LeVanLuong } />
          <Route exact path="/khuat-duy-tien-thanh-xuan" component={ KhuatDuyTien } />
          <Route exact path="/tam-chinh-hoang-mai" component={ TamChinh } />
          <Route exact path="/tran-phu-ha-dong" component={ TranPhu } />
          <Route exact path="/nguyen-thai-hoc-ba-dinh" component={ NguyenThaiHoc } />
          <Route exact path="/duy-tan-cau-giay" component={ DuyTan } />
          <Route exact path="/to-hieu-ha-dong" component={ ToHieu } />
          <Route exact path="/le-duc-tho-nam-tu-liem" component={ LeDucTho } />
          {/* news */ }
          <Route exact path="/ban-tin-kinh-te" component={ EconomicNews } />
          <Route exact path="/ban-tin-phap-luat" component={ LegalNews } />
          <Route exact path="/tai-lieu" component={ Document } />
          <Route exact path="/tuyen-dung" component={ Recruitment } />
          {/* introduce: Giới thiệu */ }
          <Route exact path="/gioi-thieu" component={ OnlineMeetingRoom } />
          {/* contact: Liên hệ */ }
          <Route exact path="/lien-he" component={ Contact } />
          {/* quotation: Bảng báo giá */ }
          <Route exact path="/bang-bao-gia" component={ Quotation } />
          {/* book_an_office: Đăng ký phòng */ }
          <Route exact path="/dang-ky-phong" component={ OnlineMeetingRoom } />
        </Switch>
      </Suspense>
    </>
  );
};


const Router = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
export default Router;