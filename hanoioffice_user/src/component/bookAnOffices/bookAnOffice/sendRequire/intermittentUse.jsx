import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import {useRecoilState} from 'recoil';

import {getYearMonthDay} from '../../../../helpers/helper';
import {orderBookFilterParamsContinuous} from '../../../../store/actom/orderBook/orderBook';
import DateFromTo from '../../../base/dateTime/DateFromTo';
import CheckboxGroupTime from './CheckboxGroupTime';
import DialogService from './DialogService';

// const timeSelect = [
//   {id: 200, value: '8h-10', checked: false},
// ];
// const timeSelect = [
//   {id: 200, value: '8h-10', checked: false}
// ];
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  button1: {
    margin: theme.spacing(0),
    marginRight: '6px'
  },
}));
const IntermittentUse = ({data}) => {
  const classes = useStyles();
  const timeSelect = data.filter(i => i.startTime.indexOf('C') === -1);
  const timeSelectAll = data.filter(i => i.startTime.indexOf('C') !== -1);
  const [filterState, setFilterState] = useRecoilState(orderBookFilterParamsContinuous);
  console.log(filterState);
  const [newDate, setNewDate] = useState(new Date());
  const addDate = {startDate: newDate, listShift: [], listService: []};
  const [listDate, setListDate] = useState([addDate]);

  const onClickAdd = () => {
    setListDate([...listDate, addDate]);
  };

  const onDelete = (index, listDate) => {
    listDate.length > 1 ? listDate.splice(index, 1) : listDate.splice(index, 0);
    setListDate([...listDate]);
  };
  const [openDialog, setOpenDialog] = useState(false);
  const [indexNumber, setIndexNumber] = useState(0);
  const listService = (index) => {
    setOpenDialog(!openDialog);
    setIndexNumber(index);
  };
  const [selectedDay, setSelectedDay] = useState([]);

  useEffect(() => {
    setSelectedDay(
      listDate.map(i => {
        return new Date(i.startDate);
      })
    );
    setNewDate(maxDate(listDate.map(i => {
      return new Date(i.startDate);
    })));
  }, [listDate]);

  useEffect(() => {
    setFilterState({
      ...filterState,
      idAll: timeSelectAll[0].id.toString(),
      schdules: listDate.map(item => {
        return {
          ...item,
          startDate: getYearMonthDay(item.startDate),
          // listService: item.listService.filter(i => i.checked).map(j => j.id.toString()),
          // // listShift: item.listShift.filter(k => k.checked).map(h => h.id.toString())
          // listShift: (item.listShift.filter(k => k.checked).length === timeSelect.length ?
          //   [timeSelectAll[0].id.toString()] : item.listShift.filter(h => h.checked).map(t => t.id.toString()))
        };
      })
    });
  }, [listDate]);
  const maxDate = (day) => {
    if (day.length <= 0) {
      return new Date();
    }
    let maxDay = new Date();
    for (let i = 0; i < day.length; i++) {
      if (day[i] - maxDay > 0) {
        maxDay = day[i];
      }
    }
    maxDay.setDate(maxDay.getDate() + 1);
    return maxDay;
  };
  return (
    <>
      {
        listDate.map((item, index) => {
          return (
            <div className='border-dashed pl-3 pt-2 ml-10 mb-1' key={ index }>
              <div>
                <div className='flex justify-between items-start'>
                  <div className='w-1/2'>
                    <DateFromTo title={ `Ngày (${index + 1})` } keySearch={ 'oneDate' }
                      valueItem={ item.startDate }
                      classNameTitle='w-64' selectedDay={ selectedDay }
                      setListDate={ setListDate } index={ index } listDate={ listDate }
                      newDate={ newDate }/>
                  </div>
                  <div>
                    <Button variant="outlined" color="primary" className={ classes.button1 }
                      size="small"
                      onClick={ () => listService(index) }>Dịch vụ</Button>
                    <Button variant="outlined" color="primary" className={ classes.button1 }
                      size="small"
                      onClick={ () => onDelete(index, listDate) }>Xóa</Button>
                  </div>
                </div>
                <div className='pl-16 pt-1'>
                  <CheckboxGroupTime listDate={ listDate } setListDate={ setListDate }
                    timeSelectAll={ timeSelectAll } timeSelect={ timeSelect }
                    dataItem={ item.listShift }
                    indexs={ index } className='w-full'/>
                </div>
              </div>
            </div>
          );
        })
      }
      {
        openDialog &&
                    <DialogService openDialog={ openDialog } setOpenDialog={ setOpenDialog } indexs={ indexNumber }
                      listDate={ listDate }
                      setListDate={ setListDate } dataItem={ listDate[indexNumber].listService }/>
      }
      <div className='flex justify-center mb-5'>
        <Button variant="outlined" color="primary" className={ classes.button } startIcon={ <AddIcon/> }
          onClick={ onClickAdd }>
                        Thêm ngày
        </Button>
      </div>
    </>
  );
}
;
IntermittentUse.propTypes = {
  data: PropTypes.array
};
export default IntermittentUse;