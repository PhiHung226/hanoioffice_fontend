import { lazy } from 'react';

export const Error404 = lazy(() => import('../pages/error/error404'));
export const Login = lazy(() => import('../pages/auth/login'));
export const Overview = lazy(() => import('../pages/overview/overview'));
export const Employee = lazy(() => import('../pages/employee/employee'));
export const Users = lazy(() => import('../pages/users/users'));
export const Room = lazy(() => import('../pages/room/room'));

export const Contract = lazy(() => import('../pages/contract/contractlist'));