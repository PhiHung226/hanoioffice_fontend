import React from 'react';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {useRecoilValue} from 'recoil';

import {formatCurrency, totalNumberDate} from '../../../../helpers/helper';
import {orderBookFilterParams, orderBookFilterParamsContinuous} from '../../../../store/actom/orderBook/orderBook';
import PaymentContinuous from './paymentContinuous';
import PaymentIntermittent from './paymentIntermittent';

const Payment = ({value}) => {
  const filterData = useRecoilValue(orderBookFilterParamsContinuous);
  const valueType = filterData.valueType ? filterData.valueType[0] : {};
  const schdules = filterData.schdules;
  const totalAll = () => {
    let totalItem = 0;
    for (let i = 0; i < schdules.length; i++) {
      totalItem += (Number(schdules[i].listShift.filter(i => i.checked).length * (valueType ? valueType.priceTypeRoom : 0))) +
        (schdules[i].listShift.filter(i => i.checked).length > 0 ? (schdules[i].listService.reduce((total, i) => {
          return total += i.priceService;
        }, 0)) : 0);
    }
    return totalItem;
  };
  
  // tổng giá đặt lịch liên tục
  const filter = useRecoilValue(orderBookFilterParams);
  console.log(filter);
  const listService = filter.listService;
  const total = () => {
    if (filter.startDate && filter.endDate && filter.listTime.length > 0) {
      
      return (valueType ? valueType.priceTypeRoom : 0) * totalNumberDate(filter.startDate, filter.endDate) * filter.listTime.length +
        totalNumberDate(filter.startDate, filter.endDate) * (listService.filter(i => i.checked).length > 0 ? (listService.reduce((total, i) => {
          return total += i.priceService;
        }, 0)) : 0);
    }
    return 0;
  };
  return (
    <>
      <h2 className='text-center font-bold my-2'>ĐƠN GIÁ</h2>
      <div className='mx-2 test-xs flex justify-between font-medium mt-6'>
        <h3 className=''>Tổng cộng:</h3>
        <p className='text-xl'>{value === 'ngat_quang' ? formatCurrency(totalAll()) : formatCurrency(total())}</p>
      </div>
      <div className='flex justify-center mt-5 mx-6 border-b-1 pb-5'>
        <Button color="primary" variant="contained">
          Tiến hành đặt lịch
        </Button>
      </div>
      {value === 'lien_tuc' && <PaymentContinuous/>}
      {value === 'ngat_quang' && <PaymentIntermittent/>}
    </>
  );
};
Payment.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
export default Payment;