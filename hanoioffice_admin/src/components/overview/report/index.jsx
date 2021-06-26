import React from 'react';

import BranchRevenueChart from './chart/BranchRevenueChart';
import CompareRevenueChart from './chart/CompareRevenueChart';
import DebtPriceChart from './chart/DebtPriceChart';
import RatioBranchRevenueChart from './chart/RatioBranchRevenueChart';
import RoomRevenueChart from './chart/RoomRevenueChart';
import { data, data1, data2, data3 } from './data';

const Overview = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
        <div className="col-span-2 grid grid-rows-5 grid-flow-col gap-4">
          <div className="row-span-2">
            <CompareRevenueChart title={ 'Doanh thu so với cùng kỳ các năm trước' } data={ data } />
          </div>
          <div className="row-span-3">
            <BranchRevenueChart title={ 'Doanh thu theo từng chi nhánh' } data={ data1 } />
          </div>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <RatioBranchRevenueChart title={ 'Tỉ lệ doanh thu theo chi nhánh' } data={ data2 } />
          <RoomRevenueChart title={ 'Doanh thu theo loại phòng' } data={ data3 } />
          <DebtPriceChart title={ 'Doanh thu / Công nợ' } data={ data3 } />
        </div>
      </div>
    </>
  );
};
export default Overview;