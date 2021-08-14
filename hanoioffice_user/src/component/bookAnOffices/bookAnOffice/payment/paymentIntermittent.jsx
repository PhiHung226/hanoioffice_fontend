import React from 'react';

import {useRecoilValue} from 'recoil';

import {orderBookFilterParamsContinuous} from '../../../../store/actom/orderBook/orderBook';
import PaymentDetail from './paymentDetail';

const PaymentIntermittent = () => {
  const filterData = useRecoilValue(orderBookFilterParamsContinuous);
  const data = filterData.schdules;
  
  return (
    <>
      <div className='mb-8 mt-4'>
        {
          data.map((item, index) => {
            return (
              <PaymentDetail key={ index } dataItem={ item } index={ index } data={ data }/>
            );
          })
        }
      </div>
    </>
  );
};
export default PaymentIntermittent;