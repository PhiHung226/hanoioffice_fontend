import React, {useState} from 'react';

// import Button from '@material-ui/core/Button';
// import {makeStyles} from '@material-ui/core/styles';
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

const SchedulesItem2 = () => {
  // const classes = useStyles();
  const [valueTo, setValueTo] = useState(new Date());
  const [valueFrom, setValueFrom] = useState(new Date());

  // const [opentDetail, setOpentDetail] = useState(false);
  const {data} = useQuery(
    ['LIST_TIME_SALE'],
    () => getListAppointment().getListTime(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const timeSelect = data.filter(i => i.startTime.indexOf('C') === -1);
  const timeSelectAll = data.filter(i => i.startTime.indexOf('C') !== -1);

  const {data: dataService} = useQuery(
    ['LIST_SERVICE'],
    () => getListAppointment().getListService(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
    // const listService = () => {
    //
    // };

  return (
    <>
      <div className='shadow-lg bg-gray-100'>
        <div className='w-fulll items-center px-3 gap-x-2'>
          <div className='grid grid-cols-2 gap-6 mb-1'>
            <DateFromTo_V2 title={ 'Ngày bắt đầu' } value={ valueFrom }
              onChange={ setValueFrom } classNameTitle='w-64'/>
            <DateFromTo_V2 title={ 'Ngày kết thúc' } value={ valueTo } onChange={ setValueTo }
              classNameTitle='w-64'
              disabledDays={ valueFrom }/>
          </div>
          <div className='m-2 pt-3 flex items-center'>
            <CheckboxGroup_V2 dataCheckbox={ timeSelect } title={ '' } filterParams={ listBookFilterParamsState }
              name={ 'listTime' } dataAll={ timeSelectAll } className='w-full'
              lableAll={ 'Cả ngày' } color={ 'primary' } column={ '5' }/>
          </div>
        </div>
        {
          <div className='mx-5 my-2'>
            <CheckboxGroup_V2 dataCheckbox={ dataService } title={ 'Dịch vụ yêu cầu' }
              filterParams={ listBookFilterParamsState }
              name={ 'listService' } className='w-full text-xs' dataAll={ [] } column={ '5' }/>
          </div>
        }
      </div>
    </>
  );
};
export default SchedulesItem2;