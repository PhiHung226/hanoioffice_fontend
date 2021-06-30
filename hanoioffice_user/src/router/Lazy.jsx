import { lazy } from 'react';

//home
export const Home = lazy(() => import('../page/home/home'));
//service
export const VirtualOffice = lazy(() => import('../page/service/VirtualOffice'));
export const AllInclusiveOffice = lazy(() => import('../page/service/AllInclusiveOffice'));
export const WorkingSeat = lazy(() => import('../page/service/WorkingSeat'));
export const ExchangeOffice = lazy(() => import('../page/service/ExchangeOffice'));
export const MeetingRoom = lazy(() => import('../page/service/MeetingRoom'));
export const OnlineMeetingRoom = lazy(() => import('../page/service/OnlineMeetingRoom'));
// service Orther
export const CreativeContent = lazy(() => import('../page/serviceOrther/CreativeContent'));
export const DigitalSignatures = lazy(() => import('../page/serviceOrther/DigitalSignatures'));
export const ElectronicBill = lazy(() => import('../page/serviceOrther/ElectronicBill'));
export const ElectronicSocialInsurance = lazy(() => import('../page/serviceOrther/ElectronicSocialInsurance'));
export const SetUpABusiness = lazy(() => import('../page/serviceOrther/SetUpABusiness'));
export const Telecommunication = lazy(() => import('../page/serviceOrther/Telecommunication'));
export const Translate = lazy(() => import('../page/serviceOrther/Translate'));
export const ZoomConference = lazy(() => import('../page/serviceOrther/ZoomConference'));
// news
export const EconomicNews = lazy(() => import('../page/news/EconomicNews'));
export const LegalNews = lazy(() => import('../page/news/LegalNews'));
export const Document = lazy(() => import('../page/news/Document'));
export const Recruitment = lazy(() => import('../page/news/Recruitment'));
// place
export const DuyTan = lazy(() => import('../page/place/DuyTan'));
export const KhuatDuyTien = lazy(() => import('../page/place/KhuatDuyTien'));
export const LeDucTho = lazy(() => import('../page/place/LeDucTho'));
export const LeVanLuong = lazy(() => import('../page/place/LeVanLuong'));
export const NguyenThaiHoc = lazy(() => import('../page/place/NguyenThaiHoc'));
export const TamChinh = lazy(() => import('../page/place/TamChinh'));
export const ToHieu = lazy(() => import('../page/place/ToHieu'));
export const TranPhu = lazy(() => import('../page/place/TranPhu'));
// Introduce
export const Introduce = lazy(() => import('../page/introduces/introduce'));
// Contact
export const Contact = lazy(() => import('../page/contacts/contact'));
// Quotation
export const Quotation = lazy(() => import('../page/quotations/Quotation'));
