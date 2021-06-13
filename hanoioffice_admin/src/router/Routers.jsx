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
  Employee, Overview, Users, Room,
  Error404
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

          <PrivateRoute exact path="/" component={ Overview } />
          <PrivateRoute exact path="/admin/employee/employee" component={ Employee } />
          <PrivateRoute exact path="/branch/branch/listbranch" component={ Employee } />
          <PrivateRoute exact path="/user/member/member" component={ Users } />
          <PrivateRoute exact path="/room/room/listroom" component={ Room } />
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