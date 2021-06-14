import {
  CalendarToday,
  // HomeWork,
  // Person,
  FaceRounded, TrackChanges,
  PeopleAlt, DonutSmallRounded,
  PersonAdd, ClassRounded,
  Group, Apps, LocalLaundryService,
  EmojiTransportation,
  AccountTree, CallToActionRounded,
  // AccountBalanceWallet,
  // Assessment,
  // AssignmentLate
} from '@material-ui/icons';

export const router = [
  {
    id: 1,
    icon: <CalendarToday color="primary" />,
    title: 'Tổng quan',
    path: '/',
    type: 'overview',
    subMenu: [
      { id: 100, subIcon: <Apps color="primary" />, subTitle: 'Báo cáo', subPath: '/' },
      { id: 101, subIcon: <Apps color="primary" />, subTitle: 'Doanh thu', subPath: '/admin/overview/revenue' }
    ]
  },
  {
    id: 2,
    icon: <FaceRounded color="primary" />,
    title: 'Hợp đồng',
    path: '/admin/contract',
    type: 'contract',
    subMenu: [
      { id: 200, subIcon: <Group color="primary" />, subTitle: 'Danh sách', subPath: '/admin/contract/contract-list' },
      { id: 201, subIcon: <Group color="primary" />, subTitle: 'Sắp hết hạn', subPath: '/admin/contract/about-to-expire' },
      { id: 202, subIcon: <Group color="primary" />, subTitle: 'Bảo lưu', subPath: '/admin/contract/reserve' },
      { id: 203, subIcon: <Group color="primary" />, subTitle: 'Chuyển nhượng', subPath: '/admin/contract/transfer' },
      { id: 204, subIcon: <Group color="primary" />, subTitle: 'Thanh toán', subPath: '/admin/contract/pay' },
    ]
  },
  {
    id: 3,
    icon: <FaceRounded color="primary" />,
    title: 'Phòng',
    path: '/admin/room',
    type: 'room',
    subMenu: [
      { id: 300, subIcon: <Group color="primary" />, subTitle: 'Danh sách', subPath: '/admin/room/room-list' },
      { id: 301, subIcon: <Group color="primary" />, subTitle: 'Loại phòng', subPath: '/admin/room/species' },
      { id: 302, subIcon: <Group color="primary" />, subTitle: 'Phòng trống', subPath: '/admin/room/empty' },
      { id: 303, subIcon: <Group color="primary" />, subTitle: 'Bảo trì', subPath: '/admin/room/maintenance' },
    ]
  },
  {
    id: 4,
    icon: <FaceRounded color="primary" />,
    title: 'Nhân viên',
    path: '/admin/employee',
    type: 'employee',
    subMenu: [
      { id: 400, subIcon: <Group color="primary" />, subTitle: 'Danh sách', subPath: '/admin/employee/employee-list' },
      { id: 401, subIcon: <Group color="primary" />, subTitle: 'Phân quyền', subPath: '/admin/employee/permission' },
      { id: 402, subIcon: <Group color="primary" />, subTitle: 'Đã nghỉ', subPath: '/admin/employee/no-longer-working' },
    ]
  },
  {
    id: 5,
    icon: <PeopleAlt color="primary" />,
    title: 'Khách hàng',
    path: '/admin/customer',
    type: 'customer',
    subMenu: [
      { id: 500, subIcon: <PersonAdd color="primary" />, subTitle: 'Danh sách', subPath: '/admin/customer/customer-list' },
      { id: 501, subIcon: <Group color="primary" />, subTitle: 'Chưa đăng ký phòng', subPath: '/admin/customer/unregistered' },
      { id: 502, subIcon: <Group color="primary" />, subTitle: 'Báo xấu', subPath: '/admin/customer/customer-bad' }
    ]
  },
  {
    id: 6,
    icon: < AccountTree color="primary" />,
    title: 'Chi nhánh',
    path: '/admin/branch',
    type: 'branch',
    subMenu: [
      { id: 600, subIcon: <EmojiTransportation color="primary" />, subTitle: 'Danh sách', subPath: '/admin/branch/branch-list' },
      { id: 601, subIcon: <EmojiTransportation color="primary" />, subTitle: 'Lịch sử', subPath: '/admin/branch/history' },
    ]
  },
  {
    id: 7,
    icon: <ClassRounded color="primary" />,
    title: 'Dịch vụ',
    path: '/admin/service',
    type: 'service',
    subMenu: [
      { id: 700, subIcon: <CallToActionRounded color="primary" />, subTitle: 'Trang thiết bị', subPath: '/admin/service/service-list' },
      { id: 701, subIcon: <DonutSmallRounded color="primary" />, subTitle: 'Dịch vụ thêm', subPath: '/admin/service/roomswitch' },
    ]
  },
  {
    id: 8,
    icon: <LocalLaundryService color="primary" />,
    title: 'Báo cáo',
    path: '/admin/report',
    type: 'report',
    subMenu: [
      { id: 800, subIcon: <TrackChanges color="primary" />, subTitle: 'Doanh thu', subPath: '/admin/report/revenue' },
      { id: 801, subIcon: <TrackChanges color="primary" />, subTitle: 'Công nợ', subPath: '/admin/report/revenuadebt' },
      { id: 802, subIcon: <TrackChanges color="primary" />, subTitle: 'Hợp đồng', subPath: '/admin/report/contract' },
      { id: 803, subIcon: <TrackChanges color="primary" />, subTitle: 'Loại phòng', subPath: '/admin/report/species' },
    ]
  }
];