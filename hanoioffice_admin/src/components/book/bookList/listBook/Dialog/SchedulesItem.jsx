import React, {useCallback, useEffect, useState} from 'react';

import {ArrowDropDown, ArrowDropUp, HighlightOff} from '@material-ui/icons';
// import Button from '@material-ui/core/Button';
// import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {useQuery} from 'react-query';

import {getListAppointment} from '../../../../../service/book/listBook/appointment';
import {listBookFilterParamsState} from '../../../../../store/atoms/book/appointment';
import CheckboxGroup_V2 from '../../../../base/checkbox/CheckboxGroup_V2';
import DateFromTo_V2 from '../../../../base/dateTime/DateFromTo_V2';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   button1: {
//     margin: theme.spacing(0),
//     marginRight: '6px'
//   },
// }));

const SchedulesItem = ({datas, onDelete}) => {
  // const classes = useStyles();
  // console.log(data);
  // const {listShift, datePresent, listService} = data;
  // const [data, setData] = useState(datas);
  // useEffect(() => {
  //   setData(datas);
  // }, [datas]);
  // Ngày đặt lịch
  const [valueFrom, setValueFrom] = useState(new Date(datas.datePresent));
  useEffect(() => {
    setValueFrom(new Date(datas.datePresent));
  }, [datas]);
  const [opentDetail, setOpentDetail] = useState(false);

  //Danh sách ca đã đặt
  const {data: dataTime} = useQuery(
    ['LIST_TIME_SALE'],
    () => getListAppointment().getListTime(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );

  const dataTimeNew = useCallback(() => {
    if (dataTime.filter(i => i.startTime.indexOf('C') !== -1)[0].id === datas.listShift[0].id) {
      return dataTime.map(item => {
        return {
          ...item,
          checked: true
        };
      });
    } else {
      return dataTime.map(item => {
        return {
          ...item,
          checked: datas.listShift.filter(i => i.id === item.id).length === 0 ? false : true,
        };
      });
    }
  }, [datas]);
  const timeSelect = dataTimeNew().filter(i => i.startTime.indexOf('C') === -1);
  const timeSelectAll = dataTimeNew().filter(i => i.startTime.indexOf('C') !== -1);

  // Danh sách dịch vụ
  const {data: dataService} = useQuery(
    ['LIST_SERVICE'],
    () => getListAppointment().getListService(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const dataServiceNew = () => {
    return dataService.map(item => {
      return {
        ...item,
        checked: datas.listService.filter(i => i.id === item.id).length === 0 ? false : true,
      };
    });
  };

  return (
    <>
      <div className='shadow-lg bg-gray-100 mb-3'>
        <div className='w-fulll flex items-center px  -3 grid grid-cols-5 gap-x-2'>
          <div className='mr-6'>
            <DateFromTo_V2 title={ '' } value={ valueFrom }
              onChange={ setValueFrom } classNameTitle='w-64'/>
          </div>
          <div className='col-span-4 ml-4 flex items-center'>
            <CheckboxGroup_V2 dataCheckbox={ timeSelect } title={ '' } filterParams={ listBookFilterParamsState }
              name={ 'listTime' } dataAll={ timeSelectAll } className='w-full'
              lableAll={ 'Cả ngày' } color={ 'primary' } column={ '5' }/>
            <div onClick={ () => setOpentDetail(!opentDetail) } className='cursor-pointer' title={ 'Chi tiết' }>
              {opentDetail ? <ArrowDropUp className='hover:text-blue-800'/> :
                <ArrowDropDown className='hover:text-blue-800'/>}
            </div>
            <div className='ml-2 cursor-pointer' title={ 'Xóa ngày' }>
              <HighlightOff className='hover:text-blue-800' onClick={ onDelete }/>
            </div>
          </div>
        </div>
        {
          opentDetail && <div className='mx-5 my-2'>
            <CheckboxGroup_V2 dataCheckbox={ dataServiceNew() } title={ 'Dịch vụ yêu cầu' }
              filterParams={ listBookFilterParamsState }
              name={ 'listService' } className='w-full text-xs' dataAll={ [] } column={ '5' }/>
          </div>
        }
      </div>
    </>
  );
};
SchedulesItem.propTypes = {
  datas: PropTypes.object,
  onDelete: PropTypes.func,
};
export default SchedulesItem;