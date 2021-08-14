import React from 'react';

import {useRecoilValue} from 'recoil';

import {totalNumberDate, toThousandFilter, formatCurrency} from '../../../../helpers/helper';
import {orderBookFilterParams} from '../../../../store/actom/orderBook/orderBook';

const PaymentContinuous = () => {
  const filterData = useRecoilValue(orderBookFilterParams);
  const dataItemNew = filterData.listService.filter(i => i.checked);
  console.log(filterData);
  // const totalPaymentRoom = () => {
  //   if (filterData.startDate && filterData.endDate && filterData.listTime.length > 0) {
  //     return (filterData.valueType[0] ? filterData.valueType[0].priceTypeRoom : 0) * totalNumberDate(filterData.startDate, filterData.endDate) * filterData.listTime.length;
  //   }
  //   return 0;
  // };
  const total = () => {
    if (filterData.startDate && filterData.endDate && filterData.listTime.length > 0) {
      return (filterData.valueType.length > 0 ? filterData.valueType[0].priceTypeRoom : 0) * totalNumberDate(filterData.startDate, filterData.endDate) * filterData.listTime.length;
    }
    return 0;
  };
  const totalSetvice = () => {
    if (filterData.startDate && filterData.endDate) {
      return totalNumberDate(filterData.startDate, filterData.endDate) * (filterData.listService.filter(i => i.checked).length > 0 ? (filterData.listService.reduce((total, i) => {
        return total += i.priceService;
      }, 0)) : 0);
    }
    return 0;
  };
  return (
    <>
      <div className='mx-2 test-xs border-b-1 pb-8 mt-5'>
        <h3 className='font-medium'>Giá phòng: </h3>
        <div className='mx-6 mt-3'>
          <div className='flex justify-between my-1'>
            <p>{filterData.valueType.length > 0 ? filterData.valueType[0].name : ''}</p>
            <p>{toThousandFilter(filterData.valueType[0] ? filterData.valueType[0].priceTypeRoom : 0)}</p>
          </div>
          <div className='flex justify-between my-1'>
            <p>Số ca</p>
            <p>x <span>{filterData.listTime.length}</span></p>
          </div>
          <div className='flex justify-between my-1'>
            <p>Số ngày</p>
            <p>x <span>{filterData.startDate && filterData.endDate ? totalNumberDate(filterData.startDate, filterData.endDate) : 0}</span>
            </p>
          </div>
          <p className='border-b-1 mt-4 ml-36'></p>
          <div className='flex justify-between mt-1'>
            <p></p>
            <p>=<span className='pl-6 font-medium'>{formatCurrency(total())}</span></p>
          </div>
        </div>
      </div>
      <div className='mx-2 test-xs pb-8 mt-8'>
        <h3 className='font-medium'>Giá dịch vụ: </h3>
        <div className='mx-6 mt-3'>
          {
            dataItemNew.map((item, index) => {
              return (
                <div className='flex justify-between my-1' key={ index }>
                  <p>{item.name}</p>
                  <p>{toThousandFilter(item.priceService)}</p>
                </div>
              );
            })
          }
          <p className='border-b-1 mt-4 ml-36'></p>
          <div className='flex justify-between mt-1'>
            <p></p>
            <p>x <span
              className='pl-2 pr-4'>{filterData.startDate && filterData.endDate ? totalNumberDate(filterData.startDate, filterData.endDate) : 0} (ngày)</span> =<span
              className='pl-2 font-medium'> {formatCurrency(totalSetvice())}</span></p>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentContinuous;