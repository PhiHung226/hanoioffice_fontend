import React, {useCallback, useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {useQuery} from 'react-query';

import {tableSearch} from '../../../../../service/book/listBook/tableSearch';
import {getListBranchs} from '../../../../../service/branch/listBranch/branchList';
import SelectInput from '../../../../base/input/SelectInput';
import SchedulesItem from './SchedulesItem';
import TableFilter from './TableFilter';
import TableSearch from './TableSearch';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  button1: {
    margin: theme.spacing(0),
    marginRight: '6px'
  },
}));

const DialogInfo = ({data}) => {
  const {listScheduleCustomer, typeRoom, room, branch} = data;
  const classes = useStyles();
  //Danh sách chi nhánh
  const {data: dataBranch} = useQuery(
    ['PRODUCT_LIST_KEY_LIST_BRANCH'],
    () => getListBranchs().getListArray(),
    {
      keepPreviousData: true, staleTime: 5000,
    }
  );
  const [valueBranch, setValueBranch] = useState(branch[0].id);
  const onChageBranch = (e) => {
    setValueBranch(e.target.value);
  };
  //Danh sách loại phòng
  const [valueType, setValueType] = useState(typeRoom.id);
  const onChageType = (e) => {
    setValueType(e.target.value);
  };
  //Danh sách số chỗ ngồi
  const [valueNumber, setValueNumber] = useState(room.id);
  const onChageNumber = (e) => {
    setValueNumber(e.target.value);
  };
  const [valueNameRoom, setValueNameRoom] = useState(room.id);
  const onChageNameRoom = (e) => {
    setValueNameRoom(e.target.value);
  };
  const getData = useCallback(async () => {
    return await tableSearch().getListNumberPeoPle({valueBranch, valueType});
  }, [valueType, valueBranch]);

  const {data: dataNumber, refetch: refetchNumber} = useQuery(
    ['LIST_PEOPLE_TYPEROOM_BRANCH'],
    () => getData(),
    {
      keepPreviousData: true, staleTime: 5000
    }
  );
  useEffect(() => {
    refetchNumber();
  }, [valueType, valueBranch]);


  // Thêm ngày

  const addDate = {datePresent: new Date(), listShift: [{}], listService: [{}]};
  const [listDate, setListDate] = useState(listScheduleCustomer);
  const onClickAddDate = () => {
    setListDate([...listDate, addDate]);
  };
  //Xóa ngày
  const onDelete = (index, listDate) => {
    listDate.length > 1 ? listDate.splice(index, 1) : listDate.splice(index, 0);
    setListDate([...listDate]);
  };

  // console.log(listDate);
  return (
    <>
      <div className='grid grid-cols-5'>
        <div className='border-br-1 col-span-3 pr-5'>
          <h2>Yêu cầu khách hàng</h2>
          <div className='grid grid-cols-2 gap-x-4'>
            <SelectInput title='Chi nhánh' dataArr={ dataBranch } className='w-full' value={ valueBranch }
              classNameItem='w-full' disabled={ false } onChange={ e => onChageBranch(e) }/>
            <SelectInput title='Loại phòng' dataArr={ [typeRoom] } className='w-full' value={ valueType }
              classNameItem='w-full' disabled={ true } onChange={ e => onChageType(e) }/>
            <SelectInput title='Số người tối đa' dataArr={ dataNumber.numberPeople } className='w-full'
              value={ valueNumber } classNameItem='w-full' disabled={ false }
              onChange={ e => onChageNumber(e) }/>
            <SelectInput title='Tên phòng' dataArr={ dataNumber.nameRoom } className='w-full'
              value={ valueNameRoom }
              classNameItem='w-full' disabled={ false } onChange={ e => onChageNameRoom(e) }/>
          </div>
          <div className='flex justify-between'>
            <h2 className='mt-2'>Danh sách lịch đặt yêu cầu</h2>
            <Button variant="outlined" color="primary" className={ classes.button1 }
              size="small" onClick={ onClickAddDate }>Thêm ngày</Button>
          </div>
          <div className='mt-3 '>
            {
              listDate.map((item, index) => {
                return (
                  <SchedulesItem key={ index } datas={ item } onDelete={ () => onDelete(index, listDate) }/>
                );
              })
            }
          </div>
        </div>
        <div className='col-span-2 ml-5'>
          <h2>Tìm kiếm theo yêu cầu</h2>
          <TableFilter/>
          <TableSearch/>
        </div>
      </div>
    </>
  );
};
DialogInfo.propTypes = {
  data: PropTypes.object
};
export default DialogInfo;