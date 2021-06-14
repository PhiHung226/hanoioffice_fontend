import { lazy } from 'react';

export const Error404 = lazy(() => import('../pages/error/error404'));
export const Login = lazy(() => import('../pages/auth/login'));
export const Overview = lazy(() => import('../pages/overview/overview'));
export const Employee = lazy(() => import('../pages/employee/employee'));
export const Users = lazy(() => import('../pages/users/users'));
export const Room = lazy(() => import('../pages/room/room'));
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