import React, { Suspense } from 'react';

import {
  Switch,
  Route,
  // Redirect,
  // useLocation
} from 'react-router-dom';

import LoadingSpinner from '../component/common/LoadingSpinner';
import Footer from '../component/footers';
import Header from '../component/headers';
import {
  VirtualOffice, Home,
  AllInclusiveOffice,
  WorkingSeat, ExchangeOffice,
  MeetingRoom, OnlineMeetingRoom
} from './Lazy';

const Body = () => {
  return (
    <>
      <Suspense fallback={ <LoadingSpinner /> }>
        <Switch>
          {/* home */ }
          <Route exact path="/" component={ Home } />
          {/* service */ }
          <Route exact path="/van-phong-ao" component={ VirtualOffice } />
          <Route exact path="/van-phong-tron-goi" component={ AllInclusiveOffice } />
          <Route exact path="/cho-ngoi-lam-viec" component={ WorkingSeat } />
          <Route exact path="/van-phong-luu-dong" component={ ExchangeOffice } />
          <Route exact path="/phong-hop" component={ MeetingRoom } />
          <Route exact path="/phong-hop-truc-tuyen" component={ OnlineMeetingRoom } />

        </Switch>
      </Suspense>
    </>
  );
};


const Router = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
export default Router;