import { lazy } from 'react';

export const Error404 = lazy(() => import('../pages/error/error404'));
export const Login = lazy(() => import('../pages/auth/login'));
export const Employee = lazy(() => import('../pages/employee/employee'));
export const Users = lazy(() => import('../pages/users/users'));
export const Room = lazy(() => import('../pages/room/room'));
//overview
export const OverviewToDay = lazy(() => import('../pages/overview/today'));
export const OverviewReport = lazy(() => import('../pages/overview/report'));
export const OverviewRevenue = lazy(() => import('../pages/overview/revenue'));
// contract
export const Contractlist = lazy(() => import('../pages/contract/contractlist'));
export const AboutToExpire = lazy(() => import('../pages/contract/aboutToExpire'));
export const ContractReserve = lazy(() => import('../pages/contract/reserve'));
export const ContractTransfer = lazy(() => import('../pages/contract/transfer'));
export const ContractPay = lazy(() => import('../pages/contract/pay'));
// room
export const RoomList = lazy(() => import('../pages/room/roomList'));
export const Species = lazy(() => import('../pages/room/species'));
export const RoomEmpty = lazy(() => import('../pages/room/roomEmpty'));
export const Maintenance = lazy(() => import('../pages/room/maintenance'));
// employee
export const EmployeeList = lazy(() => import('../pages/employee/employeeList'));
export const Permission = lazy(() => import('../pages/employee/permission'));
export const NoLongerWorking = lazy(() => import('../pages/employee/noLongerWorking'));
//customer
export const CustomerList = lazy(() => import('../pages/customer/customerList'));
export const Unregistered = lazy(() => import('../pages/customer/unregistered'));
export const CustomerBad = lazy(() => import('../pages/customer/customerBad'));
//branch
export const BranchList = lazy(() => import('../pages/branch/branchList'));
export const BranchHistory = lazy(() => import('../pages/branch/history'));
// service
export const Equipment = lazy(() => import('../pages/service/equipment'));
export const ServiceOther = lazy(() => import('../pages/service/serviceOther'));
// report
export const ReportRevenue = lazy(() => import('../pages/report/revenue'));
export const ReportRevenuadebt = lazy(() => import('../pages/report/revenuadebt'));
export const ReportContract = lazy(() => import('../pages/report/contract'));
export const ReportSpecies = lazy(() => import('../pages/report/species'));