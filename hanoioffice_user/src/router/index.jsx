import {
  // CalendarToday, 
  AttachMoney
} from '@material-ui/icons';

// const color = 'primary';

export const router = [
  {
    id: 1,
    icon: null,
    title: 'Trang chủ',
    path: '/',
    type: 'home',
    subMenu: [
      { id: 101, subTitle: 'Trang chủ', subPath: '/', subItem: [] },
    ]
  },
  {
    id: 2,
    icon: null,
    title: 'Dịch vụ',
    path: '/service',
    type: 'service',
    subMenu: [
      { id: 201, subTitle: 'Văn phòng ảo', subPath: '/van-phong-ao', subItem: [] },
      { id: 202, subTitle: 'Văn phòng trọn gói', subPath: '/van-phong-tron-goi', subItem: [] },
      { id: 203, subTitle: 'Chỗ ngồi làm việc', subPath: '/cho-ngoi-lam-viec', subItem: [] },
      { id: 204, subTitle: 'Văn phòng lưu động', subPath: '/van-phong-luu-dong', subItem: [] },
      { id: 205, subTitle: 'Phòng họp', subPath: '/phong-hop', subItem: [] },
      { id: 206, subTitle: 'Phòng họp trực tuyến', subPath: '/phong-hop-truc-tuyen', subItem: [] },
      // {
      //   id: 207, subTitle: 'Dịch vụ khác', subPath: '#', subIcon: <CalendarToday />, subItem: [
      //     { id: 2071, itemTitle: 'Zoom conference', itemPath: '/zoom-conference' },
      //     { id: 2072, itemTitle: 'Chữ ký số', itemPath: '/chu-ky-so' },
      //     { id: 2073, itemTitle: 'Hóa đơn điện tử', itemPath: '/hoa-don-dien-tu' },
      //     { id: 2074, itemTitle: 'BHXH điện tử', itemPath: '/bhxh-dien-tu' },
      //     { id: 2075, itemTitle: 'Các dịch vụ viễn thông', itemPath: '/cac-dich-vu-vien-thong' },
      //     { id: 2076, itemTitle: 'Thành lập doanh nghiệp', itemPath: '/thanh-lap-doanh-nghiep' },
      //     { id: 2077, itemTitle: 'Biên - Phiên dịch', itemPath: '/bien-phien-dich' },
      //     { id: 2078, itemTitle: 'Creative Content', itemPath: '/creative-content' },
      //   ]
      // },
    ]
  },
  {
    id: 9,
    icon: null,
    title: 'Dịch vụ khác',
    path: '/service_orther',
    type: 'service_orther',
    subMenu: [
      { id: 901, subTitle: 'Zoom conference', subPath: '/zoom-conference' },
      { id: 902, subTitle: 'Chữ ký số', subPath: '/chu-ky-so' },
      { id: 903, subTitle: 'Hóa đơn điện tử', subPath: '/hoa-don-dien-tu' },
      { id: 904, subTitle: 'BHXH điện tử', subPath: '/bhxh-dien-tu' },
      { id: 905, subTitle: 'Các dịch vụ viễn thông', subPath: '/cac-dich-vu-vien-thong' },
      { id: 906, subTitle: 'Thành lập doanh nghiệp', subPath: '/thanh-lap-doanh-nghiep' },
      { id: 907, subTitle: 'Biên - Phiên dịch', subPath: '/bien-phien-dich' },
      { id: 908, subTitle: 'Creative Content', subPath: '/creative-content' },
    ]
  },
  {
    id: 3,
    icon: null,
    title: 'Địa điểm',
    path: '/place',
    type: 'place',
    subMenu: [
      { id: 301, subTitle: 'Lê văn Lương - Thanh Xuân', subPath: '/le-van-luong-thanh-xuan' },
      { id: 302, subTitle: 'Khuất Duy tiến - Thanh xuân', subPath: '/khuat-duy-tien-thanh-xuan' },
      { id: 303, subTitle: 'Tam chinh - Hoàng Mai', subPath: '/tam-chinh-hoang-mai' },
      { id: 304, subTitle: 'Trần phú - Hà Đông', subPath: '/tran-phu-ha-dong' },
      { id: 305, subTitle: 'Nguyễn Thái Học - Ba Đình', subPath: '/nguyen-thai-hoc-ba-dinh' },
      { id: 306, subTitle: 'Duy Tân - Cầu Giấy', subPath: '/duy-tan-cau-giay' },
      { id: 306, subTitle: 'Tô Hiệu - Hà Đông', subPath: '/to-hieu-ha-dong' },
      { id: 306, subTitle: 'Lê ĐỨc Thọ - Nam Từ Liêm', subPath: '/le-duc-tho-nam-tu-liem' },
    ]
  },
  {
    id: 4,
    icon: null,
    title: 'Tin tức',
    path: '/news',
    type: 'news',
    subMenu: [
      { id: 401, subTitle: 'Bản tin kinh tế', subPath: '/ban-tin-kinh-te' },
      { id: 402, subTitle: 'Bản tin pháp luật', subPath: '/ban-tin-phap-luat' },
      { id: 403, subTitle: 'Tài liệu', subPath: '/tai-lieu' },
      { id: 404, subTitle: 'Tuyển dụng', subPath: '/tuyen-dung' },
    ]
  },
  {
    id: 5,
    icon: null,
    title: 'Giới thiệu',
    path: '/gioi-thieu',
    type: 'introduce',
    subMenu: [
      { id: 501, subTitle: 'Giới thiệu', subPath: '/gioi-thieu', subItem: [] },
    ]
  },
  {
    id: 6,
    icon: null,
    title: 'Liên hệ',
    path: '/lien-he',
    type: 'contact',
    subMenu: [
      { id: 601, subTitle: 'Liên hệ', subPath: '/lien-he', subItem: [] }, ]
  },
  {
    id: 7,
    icon: <AttachMoney />,
    title: 'Bảng báo giá',
    path: '/bang-bao-gia',
    type: 'quotation',
    subMenu: [
      { id: 701, subTitle: 'Bảng báo giá', subPath: '/bang-bao-gia', subItem: [] }, ]
  },
  {
    id: 8,
    icon: null,
    title: 'Đăng ký phòng',
    path: '/dat-van-phong',
    type: 'book_an_office',
    subMenu: [
      { id: 801, subTitle: 'Đăng ký phòng', subPath: '/dang-ky-phong', subItem: [] }, ]
  },
];