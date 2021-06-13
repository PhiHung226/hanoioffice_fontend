import React from 'react';

import ReactDOM from 'react-dom';
import './assets/css/main.css';
import './assets/csscustom/custom.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import LoadingSpinner from './components/common/LoadingSpinner';
// import ToastAppContainer from './components/common/ToastAppContainer';
import reportWebVitals from './reportWebVitals';

const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      retry: 2
    }
  }
});

ReactDOM.render(
  <RecoilRoot>
    <QueryClientProvider client={ queryCache }>
      {/* <React.StrictMode> */ }
      <Router basename={ '/' }>
        <App />
      </Router>
      <LoadingSpinner />
      {/* <ToastAppContainer/> */ }
      {/* </React.StrictMode> */ }
    </QueryClientProvider>
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
