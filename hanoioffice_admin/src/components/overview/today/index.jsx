import React from 'react';

import RealMoneyChart from './chart/RealMoneyChart';
import RevenueChart from './chart/RevenueChart';
import RoomChart from './chart/RoomChart.';
import { data, data1, data2 } from './data';
import TotalCustomer from './totalChart/TotalCustomer';
import TotalPrice from './totalChart/TotalPrice';
import TotalRoom from './totalChart/TotalRoom';


const Overview = () => {
  return (
    <>
      <div>
        <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
          <TotalPrice title={ 'Doanh thu' } value={ '800,000,000,000' } />
          <TotalPrice title={ 'Công nợ' } value={ '400,000,000,000' } />
          <TotalCustomer title={ 'Tổng số khách hàng' } value={ '1,500' } />
          <TotalRoom title={ 'Tổng số phòng' } value={ '96' } totalRoom={ '100' } />
        </div>
        <div className="grid md:grid-cols-3 gap-4 grid-cols-1 mt-4">
          <div className="col-span-2">
            <RevenueChart data={ data } title={ 'Báo cáo doanh thu' } />
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            <RealMoneyChart title={ 'Doanh thu thực so với dự kiến' } data={ data1 } />
            <RoomChart title={ 'Tỉ lệ doanh thu theo loại phòng' } data={ data2 } />
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;