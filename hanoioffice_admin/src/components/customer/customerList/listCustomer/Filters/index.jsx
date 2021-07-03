import React, { useState } from 'react';

import {
  listCustomerFilterParamsState
} from '../../../../../store/atoms/customer/customerList/listCustomer';
import ButtonBase from '../../../../base/button/ButtonBase';
import DateSelection from '../../../../base/dateTime/DateSelection';
import CardBranch from '../../../../common/filter/CardBranch';
import CardSex from '../../../../common/filter/CardSex';
import DialogAdd from '../Dialog/DialogAdd';
import CardIngredient from '../Filters/CardIngredient';
import CardStatus from '../Filters/CardStatus';
import SearchBar from '../Filters/SearchBar';

const Filters = () => {
  const [ openAdd, setOpenAdd ] = useState(false);
  return (
    <>
      <div className="rounded w-full bg-gray-100 my-2">
        <div className="m-2">
          <div className='flex grid grid-cols-3 gap-4'>
            <SearchBar />
            <CardBranch filterParams={ listCustomerFilterParamsState } />
            <CardIngredient filterParams={ listCustomerFilterParamsState } />
          </div>
          <div className='flex gap-4'>
            <CardSex filterParams={ listCustomerFilterParamsState } />
            <DateSelection title="Ngày tạo" />
            <CardStatus filterParams={ listCustomerFilterParamsState } />
          </div>
          <div className="flex justify-end ">
            <ButtonBase title={ 'Thêm khách hàng' } color={ 'primary' } className='m-3' onClick={ () => setOpenAdd(!openAdd) } />
            {
              <DialogAdd setOpenDialog={ setOpenAdd } openDialog={ openAdd } />
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default Filters;