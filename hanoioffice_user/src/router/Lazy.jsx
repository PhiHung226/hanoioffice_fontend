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