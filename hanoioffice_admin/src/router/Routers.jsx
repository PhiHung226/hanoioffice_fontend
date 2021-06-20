import React, { Suspense } from 'react';

import { useQueryClient } from 'react-query';
import {
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';

import PrivateRoute from '../components/auth/PrivateRouter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Header from '../components/header';
import { AUTH_USER_INFO_KEY } from '../constants/queryKey';
import Login from '../pages/auth/login';
// import { openDialogLogin } from '../store/atoms/auth/user';
import {
  Employee, OverviewToDay,
  OverviewReport,
  OverviewRevenue,
  Users, Room,
  Error404,
  Contractlist,
  AboutToExpire,
  ContractReserve,
  ContractTransfer,
  ContractPay,
  RoomList,
  Species,
  RoomEmpty,
  Maintenance,
  EmployeeList,
  Permission,
  NoLongerWorking,
  CustomerList, Unregistered, CustomerBad,
  BranchList, BranchHistory,
  Equipment, ServiceOther,
  ReportRevenue, ReportRevenuadebt,
  ReportContract, ReportSpecies
} from './Lazy';

const RouterMain = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const user = queryClient.getQueryData(AUTH_USER_INFO_KEY);

  // const setDialogLogin = useSetRecoilState(openDialogLogin);

  // React.useEffect(() => {
  //   if (user === undefined) {
  //     setDialogLogin(true);
  //   }
  // }, []);

  return (
    <>
      <Suspense fallback={ <LoadingSpinner /> }>
        <Switch>
          <Route exact path="/error/404" component={ Error404 } />
          <Route exact path="/auth/login">
            { user ? <Redirect to={ { pathname: '/', state: { from: location } } } /> : <Login /> }
          </Route>

          <PrivateRoute exact path="/admin/employee/employee" component={ Employee } />
          <PrivateRoute exact path="/branch/branch/listbranch" component={ Employee } />
          <PrivateRoute exact path="/user/member/member" component={ Users } />
          <PrivateRoute exact path="/room/room/listroom" component={ Room } />
          {/* overview */ }
          <PrivateRoute exact path="/" component={ OverviewToDay } />
          <PrivateRoute exact path="/admin/overview/report" component={ OverviewReport } />
          <PrivateRoute exact path="/admin/overview/revenue" component={ OverviewRevenue } />
          {/* contract */ }
          <PrivateRoute exact path="/admin/contract/contract-list" component={ Contractlist } />
          <PrivateRoute exact path="/admin/contract/about-to-expire" component={ AboutToExpire } />
          <PrivateRoute exact path="/admin/contract/reserve" component={ ContractReserve } />
          <PrivateRoute exact path="/admin/contract/transfer" component={ ContractTransfer } />
          <PrivateRoute exact path="/admin/contract/pay" component={ ContractPay } />
          {/* room */ }
          <PrivateRoute exact path="/admin/room/room-list" component={ RoomList } />
          <PrivateRoute exact path="/admin/room/species" component={ Species } />
          <PrivateRoute exact path="/admin/room/empty" component={ RoomEmpty } />
          <PrivateRoute exact path="/admin/room/maintenance" component={ Maintenance } />
          {/* employee */ }
          <PrivateRoute exact path="/admin/employee/employee-list" component={ EmployeeList } />
          <PrivateRoute exact path="/admin/employee/permission" component={ Permission } />
          <PrivateRoute exact path="/admin/employee/no-longer-working" component={ NoLongerWorking } />
          {/* customer */ }
          <PrivateRoute exact path="/admin/customer/customer-list" component={ CustomerList } />
          <PrivateRoute exact path="/admin/customer/unregistered" component={ Unregistered } />
          <PrivateRoute exact path="/admin/customer/customer-bad" component={ CustomerBad } />
          {/* branch */ }
          <PrivateRoute exact path="/admin/branch/branch-list" component={ BranchList } />
          <PrivateRoute exact path="/admin/branch/history" component={ BranchHistory } />
          {/* service */ }
          <PrivateRoute exact path="/admin/service/equipment" component={ Equipment } />
          <PrivateRoute exact path="/admin/service/service-other" component={ ServiceOther } />
          {/* report */ }
          <PrivateRoute exact path="/admin/report/revenue" component={ ReportRevenue } />
          <PrivateRoute exact path="/admin/report/revenuadebt" component={ ReportRevenuadebt } />
          <PrivateRoute exact path="/admin/report/contract" component={ ReportContract } />
          <PrivateRoute exact path="/admin/report/species" component={ ReportSpecies } />
          <Redirect to="/error/404" />
        </Switch>
      </Suspense>
    </>
  );
};

const Router = () => {
  return (
    <>
      { <Header mainContent={ <RouterMain /> } /> }
    </>
  );
};
export default Router;