import React, {useState} from 'react';

import DateFromTo_V2 from '../../../../base/dateTime/DateFromTo_V2';
import SelectInput from '../../../../base/input/SelectInput';

const dataBranch = [{id: 1, name: 'Chi nhánh Thanh Xuân'}, {id: 2, name: 'Chi nhánh Hà Đông'}];
const TableFilter = () => {
  const [valueBranch, setValueBranch] = useState(dataBranch[0].id);
  const onChageBranch = (e) => {
    setValueBranch(e.target.value);
  };

  const [valueTo, setValueTo] = useState(new Date());
  const [valueFrom, setValueFrom] = useState(new Date());
  return (
    <>
      <div className=' border-dashed my-4'>
        <div className='grid grid-cols-2 gap-x-4 mx-3 mt-3 mb-2'>
          <DateFromTo_V2 title={ 'Từ ngày' } value={ valueFrom }
            onChange={ setValueFrom } classNameTitle='w-96'/>
          <DateFromTo_V2 title={ 'Đến ngày' } value={ valueTo } onChange={ setValueTo }
            classNameTitle='w-64' disabledDays={ valueFrom }/>
          <SelectInput title='Chi nhánh' dataArr={ dataBranch } className='w-full' value={ valueBranch }
            classNameItem='w-full' disabled={ false } onChange={ e => onChageBranch(e) }/>
        </div>
      </div>
    </>
  );
};
export default TableFilter;