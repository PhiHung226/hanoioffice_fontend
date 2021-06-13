import {
  CalendarToday, HomeWork,
  // Person,
  FaceRounded, TrackChanges,
  PeopleAlt, DonutSmallRounded,
  PersonAdd, ClassRounded,
  Group, Apps, LocalLaundryService,
  EmojiTransportation,
  AccountTree, CallToActionRounded,
  AccountBalanceWallet,
  Assessment,
  AssignmentLate
} from '@material-ui/icons';

export const router = [
  {
    id: 1,
    icon: <CalendarToday color="primary" />,
    title: 'Tổng quan',
    path: '/',
    type: 'overview',
    subMenu: [
      { id: 100, subIcon: <Apps color="primary" />, subTitle: 'Tổng quan', subPath: '/' }
    ]
  },
  {
    id: 2,
    icon: <FaceRounded color="primary" />,
    title: 'Nhân viên',
    path: '/admin/employee',
    type: '',
    subMenu: [
      { id: 200, subIcon: <Group color="primary" />, subTitle: 'Danh sách nhân viên', subPath: '/admin/employee/employee' },
    ]
  },
  {
    id: 8,
    icon: <FaceRounded color="primary" />,
    title: 'Công việc',
    path: '/work/work',
    type: '',
    subMenu: [
      { id: 800, subIcon: <Group color="primary" />, subTitle: 'Danh sách công việc', subPath: '/work/work/worklist' },
    ]
  },
  {
    id: 3,
    icon: <PeopleAlt color="primary" />,
    title: 'Khách hàng',
    path: '/user/member',
    type: 'user',
    subMenu: [
      { id: 300, subIcon: <PersonAdd color="primary" />, subTitle: 'Đăng ký thành viên', subPath: '/user/member/registration' },
      { id: 301, subIcon: <Group color="primary" />, subTitle: 'Danh sách khách hàng', subPath: '/user/member/member' },
      { id: 302, subIcon: <Group color="primary" />, subTitle: 'Hợp đồng', subPath: '/user/member/contract' }
    ]
  },
  {
    id: 4,
    icon: < AccountTree color="primary" />,
    title: 'Chi nhánh',
    path: '/branch/branch',
    type: 'branch',
    subMenu: [
      { id: 400, subIcon: <EmojiTransportation color="primary" />, subTitle: 'Danh sách chi nhánh', subPath: '/branch/branch/listbranch' }
    ]
  },
  {
    id: 5,
    icon: <ClassRounded color="primary" />,
    title: 'Loại phòng',
    path: '/room/room',
    type: '',
    subMenu: [
      { id: 500, subIcon: <CallToActionRounded color="primary" />, subTitle: 'Danh sách phòng', subPath: '/room/room/listroom' },
      { id: 501, subIcon: <DonutSmallRounded color="primary" />, subTitle: 'Chuyển đổi phòng', subPath: '/room/room/roomswitch' },
    ]
  },
  {
    id: 6,
    icon: <LocalLaundryService color="primary" />,
    title: 'Dịch vụ',
    path: '/service/service',
    type: '',
    subMenu: [
      { id: 600, subIcon: <TrackChanges color="primary" />, subTitle: 'Danh sách dịch vụ', subPath: '/service/service/listservice' },
      { id: 601, subIcon: <HomeWork color="primary" />, subTitle: 'Dịch vụ chi nhánh', subPath: '/service/service/servicebranch' }
    ]
  },
  {
    id: 7,
    icon: <AccountBalanceWallet color="primary" />,
    title: 'Doanh thu',
    path: '/revenue/revenue',
    type: '',
    subMenu: [
      { id: 700, subIcon: <Assessment color="primary" />, subTitle: 'Doanh thu', subPath: '/revenue/revenue/listrevenue' },
      { id: 701, subIcon: <AssignmentLate color="primary" />, subTitle: 'Công nợ', subPath: '/revenue/revenue/revenuadebt' }
    ]
  }
];