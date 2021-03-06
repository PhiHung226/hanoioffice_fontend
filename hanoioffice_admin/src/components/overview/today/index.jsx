import React from 'react';

import RealMoneyChart from './chart/RealMoneyChart';
import RevenueChart from './chart/RevenueChart';
import RoomChart from './chart/RoomChart.';
import { data, data1, data2 } from './data';
import TotalCustomer from './totalChart/TotalCustomer';
import TotalDebtPrice from './totalChart/TotalDebtPrice';
import TotalPriceRevenue from './totalChart/TotalPriceRevenue';
import TotalRoom from './totalChart/TotalRoom';


const Overview = () => {
  return (
    <>
      <div>
        <div className="grid md:grid-cols-4 gap-4 grid-cols-1">
          <TotalPriceRevenue />
          <TotalDebtPrice />
          <TotalCustomer />
          <TotalRoom />
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