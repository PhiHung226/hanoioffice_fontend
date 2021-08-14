import React, {useState} from 'react';

import {ArrowDropDown, ArrowDropUp} from '@material-ui/icons';
import PropTypes from 'prop-types';
import {useRecoilValue} from 'recoil';

import {getYearMonthDay, formatCurrency, toThousandFilter} from '../../../../helpers/helper';
import {orderBookFilterParamsContinuous} from '../../../../store/actom/orderBook/orderBook';

const PaymentDetail = ({dataItem, data}) => {
  // const [filterState, setFilterState] = useRecoilState(orderBookFilterParamsContinuous);
  console.log(data);
  const valueType = useRecoilValue(orderBookFilterParamsContinuous).valueType[0];
  const [opentDetail, setOpentDetail] = useState(false);
  const onChageOpent = () => {
    setOpentDetail(!opentDetail);
  };
  const numberShift = () => {
    return dataItem.listShift.filter(i => i.checked).length;
  };
  const dataItemNew = dataItem.listService.filter(i => i.checked);
  // var x = 1000;
  // x = x.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
  // console.log(x);
  
  const totalItem = () => {
    return (dataItemNew.reduce((total, i) => {
      return total += i.priceService;
    }, 0) + (valueType ? valueType.priceTypeRoom * numberShift() : 0));
  };
  // useEffect(() => {
  //   setFilterState({
  //     ...filterState,
  //     // totalItem: totalItem()
  //     schdules: filterState.schdules.map((item) => {
  //       return {
  //         ...item,
  //         // totalItem: index === ind ? totalItem() : '0 VND'
  //       };
  //     })
  //   });
  // }, [filterState.schdules]);
  return (
    <>
      <div className={ `mx-4 test-xs mt-2 ${opentDetail ? 'border-b-2' : ''}` }>
        <div className='font-medium flex justify-between cursor-pointer' onClick={ onChageOpent }>
          <h3>{getYearMonthDay(dataItem.startDate, 'dd-MM-yyyy')}</h3>
          <p>-</p>
          <p>{formatCurrency(totalItem())}</p>
          <p><span>...</span>{opentDetail ? <ArrowDropUp/> : <ArrowDropDown/>}</p>
        </div>
        {
          opentDetail && <div className='mx-3 mt-3'>
            <div>
              <p>Giá phòng:</p>
              <div className='ml-5'>
                <div className='flex justify-between my-1'>
                  <p>{valueType.name}</p>
                  <p>{toThousandFilter(valueType ? valueType.priceTypeRoom : 0)}</p>
                </div>
                <div className='flex justify-between my-1'>
                  <p>Số ca</p>
                  <p>x <span>{numberShift()}</span></p>
                </div>
                <p className='border-b-1 mt-4 ml-36'></p>
                <div className='flex justify-between mt-1'>
                  <p></p>
                  <p>=<span
                    className='pl-6 font-medium'>{formatCurrency(valueType ? valueType.priceTypeRoom * numberShift() : 0)}</span>
                  </p>
                </div>
              </div>
            </div>
            <p className='border-b-1 my-2 mx-9'></p>
            <div>
              <p>Giá dịch vụ:</p>
              <div className='ml-5'>
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
                  <p>=<span className='pl-6 font-medium'>
                    {
                      formatCurrency(dataItemNew.reduce((total, i) => {
                        return total += i.priceService;
                      }, 0))
                    }
                  </span></p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
  ;
};
PaymentDetail.propTypes = {
  dataItem: PropTypes.object,
  index: PropTypes.number,
  data: PropTypes.array
};
export default PaymentDetail;