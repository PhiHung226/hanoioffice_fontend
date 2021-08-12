import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

// import {orderBookFilterParamsState} from '../../../../store/actom/orderBook/orderBook';
// import CheckboxGroup from '../../../base/checkbox/CheckboxGroup';
// import DateSelection from '../../../base/dateTime/DateSelection';
import DateFromTo from '../../../base/dateTime/DateFromTo';
import CheckboxGroupTime from './CheckboxGroupTime';

const timeSelect = [
  { id: 200, value: '8h-10', checked: false },
  { id: 201, value: '10h-12h', checked: false },
  { id: 202, value: '12h-14h', checked: false },
  { id: 203, value: '14h-16h', checked: false },
  { id: 1, value: '16h-18h', checked: false },
];
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  button1: {
    margin: theme.spacing(0),
    marginRight: '6px'
  },
}));
const IntermittentUse = () => {
  const classes = useStyles();
  // const [valueDate, setValueDate] = useState(new Date());

  const addDate = { dates: new Date(), times: timeSelect };
  const [listDate, setListDate] = useState([addDate]);
  console.log(listDate);
  // const [stateAll, setStateAll] = useState(false);
  
  const onClickAdd = () => {
    setListDate([...listDate, addDate]);
  };
  // const onDelete = React.useCallback((index) => {
  //   listDate.splice(index, 1);
  //   setListDate([...listDate]);
  // },[listDate]);
  
  const onDelete = (index) => {
    listDate.length > 1 ? listDate.splice(index,1) : listDate.splice(index,0);
    // console.log(listDate);
    setListDate([...listDate]);
  };
  
  const listService = () => {
  
  };
  
  const onChange = (numbers, e) => {
    setListDate(
      listDate.map((item,index)=> {
        return {
          ...item,
          dates: index === numbers ? e : item.dates
        };
      })
    );
  };
  
  // React.useEffect(() => {
  //   setStateAll(
  //     state.filter(item => item.checked).length === state.length
  //   );
  // }, [state]);
  return (
    <>
      {
        listDate.map((item, index) => {
          // console.log();
          return (
            <div className='border-dashed pl-3 pt-2 ml-10 mb-1' key={ index }>
              <div>
                <div className='flex justify-between items-start'>
                  <div className='w-1/2'>
                    <DateFromTo title={ `Ngày (${index + 1})` } keySearch={ 'oneDate' } value={ item.dates } onChange={ (e) => onChange(index, e) } classNameTitle='w-64'/>
                  </div>
                  <div>
                    <Button variant="outlined" color="primary" className={ classes.button1 } size="small" onClick={ () => listService(index) }>Dịch vụ</Button>
                    <Button variant="outlined" color="primary" className={ classes.button1 } size="small" onClick={ () => onDelete(index) }>Xóa</Button>
                  </div>
                </div>
                <div className='pl-16 pt-1'>
                  <CheckboxGroupTime dataCheckbox={ item.times } listDate={ listDate } setListDate={ setListDate } indexs={ index } className='w-full'/>
                </div>
              </div>
            </div>
          );
        })
      }
      <div className='flex justify-end mb-5'>
        <Button variant="outlined" color="primary" className={ classes.button } startIcon={ <AddIcon /> } onClick={ onClickAdd } >
          Thêm ngày
        </Button>
      </div>
    </>
  );
};

export default IntermittentUse;