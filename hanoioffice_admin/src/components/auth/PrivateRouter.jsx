import React from 'react';

import PropTypes from 'prop-types';
// import { useQueryClient } from 'react-query';
import {Route} from 'react-router';
import {Redirect} from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';

// import { AUTH_USER_INFO_KEY } from '../../constants/queryKey';
// import { openDialogLogin } from '../../store/atoms/auth/user';
// import { getAccount } from '../../service/auth/login';

const PrivateRoute = ({component: Component, is_view = true, ...rest}) => {
  
  // const data = {
  //   data: {
  //     user: ''
  //   }
  // };
  // const queryClient = useQueryClient();
  // const data = queryClient.getQueryData(AUTH_USER_INFO_KEY);
  
  // 1 Admin, 2 Quản lý, 3 Sale, 4 Lễ tân
  const data = {
    data: {
      user: 'admin',
      pass: '1',
      branch: 1,
      role: 1
    }
  };
  // const localUser = localStorage.setItem('user', data.data.user);
  // const localRole = localStorage.setItem('role', data.data.role);
  
  // const setDialogLogin = useSetRecoilState(openDialogLogin);
  // React.useEffect(() => {
  //   if (data !== undefined) {
  //     setDialogLogin(false);
  //   }
  // }, [ data ]);
  return (
    <>
      <Route
        { ...rest }
        render={ (props) => data && data.data.user ? (is_view ? <Component { ...props } />
          :
          <Redirect to={ {pathname: '/error/not-permission', state: {from: props.location}} }/>) :
          <Redirect to={ {pathname: '/auth/login', state: {from: props.location}} }/> }
      />
    </>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.object,
  location: PropTypes.any,
  is_view: PropTypes.bool
};
export default PrivateRoute;