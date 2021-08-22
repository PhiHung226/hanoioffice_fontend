import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {useQuery} from 'react-query';

import {getListAppointment} from '../../../../../service/book/listBook/appointment';
import {listBookFilterParamsState} from '../../../../../store/atoms/book/appointment';
import CheckboxGroup_V2 from '../../../../base/checkbox/CheckboxGroup_V2';
import DateFromTo_V2 from '../../../../base/dateTime/DateFromTo_V2';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  button1: {
    margin: theme.spacing(0),
    marginRight: '6px'
  },
}));

const SchedulesItem = () => {
  const classes = useStyles();
  const [valueFrom, setValueFrom] = useState(new Date());
  const {data} = useQuery(
    ['LIST_TIME_SALE'],
    () => getListAppointment().getListTime(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const timeSelect = data.filter(i => i.startTime.indexOf('C') === -1);
  const timeSelectAll = data.filter(i => i.startTime.indexOf('C') !== -1);
  console.log(data);
  const listService = () => {

  };
  return (
    <>
      <div className='w-fulll flex items-center shadow-lg bg-gray-100 p-3 grid grid-cols-6 gap-x-2'>
        <div className='mr-6'>
          <DateFromTo_V2 title={ '' } value={ valueFrom }
            onChange={ setValueFrom } classNameTitle='w-64'/>
        </div>
        <div className='col-span-4 ml-4'>
          <CheckboxGroup_V2 dataCheckbox={ timeSelect } title={ '' } filterParams={ listBookFilterParamsState }
            name={ 'listTime' } dataAll={ timeSelectAll } className='w-full'
            lableAll={ 'Cả ngày' } color={ 'primary' } column={ '5' }/>
        </div>
        <div>
          <Button variant="outlined" color="primary" className={ classes.button1 }
            size="small" onClick={ listService }>Dịch vụ</Button>
        </div>
      </div>
    </>
  );
};
export default SchedulesItem;