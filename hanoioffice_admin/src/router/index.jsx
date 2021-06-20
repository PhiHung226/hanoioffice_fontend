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

const color = 'primary';

export const router = [
  {
    id: 1,
    icon: <CalendarToday color={ color } />,
    title: 'Tổng quan',
    path: '/',
    type: 'overview',
    subMenu: [
      { id: 100, subIcon: <Apps color={ color } />, subTitle: 'Hàng ngày', subPath: '/' },
      { id: 101, subIcon: <Apps color={ color } />, subTitle: 'Báo cáo', subPath: '/admin/overview/report' },
      { id: 102, subIcon: <Apps color={ color } />, subTitle: 'Doanh thu', subPath: '/admin/overview/revenue' }
    ]
  },
  {
    id: 2,
    icon: <FaceRounded color={ color } />,
    title: 'Hợp đồng',
    path: '/admin/contract',
    type: 'contract',
    subMenu: [
      { id: 200, subIcon: <Group color={ color } />, subTitle: 'Danh sách', subPath: '/admin/contract/contract-list' },
      { id: 201, subIcon: <Group color={ color } />, subTitle: 'Sắp hết hạn', subPath: '/admin/contract/about-to-expire' },
      { id: 202, subIcon: <Group color={ color } />, subTitle: 'Bảo lưu', subPath: '/admin/contract/reserve' },
      { id: 203, subIcon: <Group color={ color } />, subTitle: 'Chuyển nhượng', subPath: '/admin/contract/transfer' },
      { id: 204, subIcon: <Group color={ color } />, subTitle: 'Thanh toán', subPath: '/admin/contract/pay' },
    ]
  },
  {
    id: 3,
    icon: <FaceRounded color={ color } />,
    title: 'Phòng',
    path: '/admin/room',
    type: 'room',
    subMenu: [
      { id: 300, subIcon: <Group color={ color } />, subTitle: 'Danh sách', subPath: '/admin/room/room-list' },
      { id: 301, subIcon: <Group color={ color } />, subTitle: 'Loại phòng', subPath: '/admin/room/species' },
      { id: 302, subIcon: <Group color={ color } />, subTitle: 'Phòng trống', subPath: '/admin/room/empty' },
      { id: 303, subIcon: <Group color={ color } />, subTitle: 'Bảo trì', subPath: '/admin/room/maintenance' },
    ]
  },
  {
    id: 4,
    icon: <FaceRounded color={ color } />,
    title: 'Nhân viên',
    path: '/admin/employee',
    type: 'employee',
    subMenu: [
      { id: 400, subIcon: <Group color={ color } />, subTitle: 'Danh sách', subPath: '/admin/employee/employee-list' },
      { id: 401, subIcon: <Group color={ color } />, subTitle: 'Phân quyền', subPath: '/admin/employee/permission' },
      { id: 402, subIcon: <Group color={ color } />, subTitle: 'Đã nghỉ', subPath: '/admin/employee/no-longer-working' },
    ]
  },
  {
    id: 5,
    icon: <PeopleAlt color={ color } />,
    title: 'Khách hàng',
    path: '/admin/customer',
    type: 'customer',
    subMenu: [
      { id: 500, subIcon: <PersonAdd color={ color } />, subTitle: 'Danh sách', subPath: '/admin/customer/customer-list' },
      { id: 501, subIcon: <Group color={ color } />, subTitle: 'Chưa đăng ký phòng', subPath: '/admin/customer/unregistered' },
      { id: 502, subIcon: <Group color={ color } />, subTitle: 'Báo xấu', subPath: '/admin/customer/customer-bad' }
    ]
  },
  {
    id: 6,
    icon: < AccountTree color={ color } />,
    title: 'Chi nhánh',
    path: '/admin/branch',
    type: 'branch',
    subMenu: [
      { id: 600, subIcon: <EmojiTransportation color={ color } />, subTitle: 'Danh sách', subPath: '/admin/branch/branch-list' },
      { id: 601, subIcon: <EmojiTransportation color={ color } />, subTitle: 'Lịch sử', subPath: '/admin/branch/history' },
    ]
  },
  {
    id: 7,
    icon: <ClassRounded color={ color } />,
    title: 'Dịch vụ',
    path: '/admin/service',
    type: 'service',
    subMenu: [
      { id: 700, subIcon: <CallToActionRounded color={ color } />, subTitle: 'Trang thiết bị', subPath: '/admin/service/equipment' },
      { id: 701, subIcon: <DonutSmallRounded color={ color } />, subTitle: 'Dịch vụ thêm', subPath: '/admin/service/service-other' },
    ]
  },
  {
    id: 8,
    icon: <LocalLaundryService color={ color } />,
    title: 'Báo cáo',
    path: '/admin/report',
    type: 'report',
    subMenu: [
      { id: 800, subIcon: <TrackChanges color={ color } />, subTitle: 'Doanh thu', subPath: '/admin/report/revenue' },
      { id: 801, subIcon: <TrackChanges color={ color } />, subTitle: 'Công nợ', subPath: '/admin/report/revenuadebt' },
      { id: 802, subIcon: <TrackChanges color={ color } />, subTitle: 'Hợp đồng', subPath: '/admin/report/contract' },
      { id: 803, subIcon: <TrackChanges color={ color } />, subTitle: 'Loại phòng', subPath: '/admin/report/species' },
    ]
  }
];