import React, {useState} from 'react';

// import {orderBookFilterParamsState} from '../../../../store/actom/orderBook/orderBook';
import SelectInput from '../../../base/input/SelectInput';
// import CardBranch from './CardBranch';
// import CardTypeRoom from './CardTypeRoom';

const data1 = [
  { id: 1, name: 'Chi nhánh Thanh Xuân' },
  { id: 2, name: 'Chi nhánh Thanh Hà' },
  { id: 3, name: 'Chi nhánh Hà Đông' },
  { id: 4, name: 'Chi nhanh Từ Liêm' }
];
const listType = [
  { id: 1, name: 'Phòng họp' },
  { id: 2, name: 'Phòng làm việc' },
  { id: 3, name: 'Chỗ ngồi làm việc' }
];
const maxPeople = [
  { id: 1, name: '1-10' },
  { id: 2, name: '11-20' },
  { id: 3, name: '21-30' }
];

const Filter = () => {
  const [value, setValue] = useState(maxPeople[0].id);
  const onChangeMaxPeople =(e)=> {
    setValue(e.target.value);
  };
  
  const [valueBranch, setValueBranch] = useState(data1[0].id);
  const onChageBranch = (e) => {
    setValueBranch(e.target.value);
  };
  
  const [valueType, setValueType] = useState(listType[0].id);
  const onChageType = (e) => {
    setValueType(e.target.value);
  };
  return (
    <>
      <div className='flex items-center'>
        {/*<CardBranch filterParams={ orderBookFilterParamsState } />*/}
        {/*<CardTypeRoom title={ 'Loại phòng' } dataArr={ listType } filterParams={ orderBookFilterParamsState }/>*/}
        <SelectInput title='Chi nhánh' dataArr={ data1 } className='w-full' value={ valueBranch } onChange={ e => onChageBranch(e) }/>
        <SelectInput title='Loại phòng' dataArr={ listType } className='w-full' value={ valueType } onChange={ e => onChageType(e) }/>
      </div>
      <div className='pb-4'>
        <SelectInput title='Số người sử dụng' dataArr={ maxPeople } className='w-full' value={ value } onChange={ e => onChangeMaxPeople(e) }/>
      </div>
    </>
  );
};
export default Filter;