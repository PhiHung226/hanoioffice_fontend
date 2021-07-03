import React from 'react';

import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';

import DateSingle from '../../../../base/dateTime/DateSingle';
import SelectedInput from '../../../../common/SelectedInput';
import TextFieldInput from '../../../../common/TextFieldInput';

const typeRoom = [
  { id: '1', text: 'Phòng họp' },
  { id: '2', text: 'Chỗ ngồi làm việc' },
  { id: '3', text: 'Văn phòng ảo' }
];
const branchList = [
  { id: '1', text: 'Chi nhánh Thanh Xuân' },
  { id: '2', text: 'Chi nhánh Hà Đông' },
  { id: '3', text: 'Chi nhánh Đống Đa' }
];
const DetailInfo = ({ form, setForm }) => {
  const methods = useFormContext();
  const { formState: { errors }, control } = methods;
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <Controller
            name={ 'code_room' }
            control={ control }
            rules={ { required: true } }
            render={ ({ field: { onChange, value } }) =>
              <TextFieldInput label="Mã phòng" className="w-full"
                onChange={ e => {
                  onChange(e.target.value);
                } }
                value={ value }
                error={ errors?.code_room?.type === 'required' ? 'Mã không được bỏ trống!' : null } /> } />
          <Controller
            name={ 'name_room' }
            control={ control }
            rules={ { required: true } }
            render={ ({ field: { onChange, value } }) =>
              <TextFieldInput label="Mã phòng" className="w-full"
                onChange={ e => {
                  onChange(e.target.value);
                } }
                value={ value }
                error={ errors?.name_room?.type === 'required' ? 'Mã không được bỏ trống!' : null } /> } />
          <Controller
            name={ 'position' }
            control={ control }
            rules={ {} }
            render={ ({ field: { onChange, value } }) =>
              <SelectedInput
                dataArr={ typeRoom }
                title='Loại phòng'
                value={ value }
                onChange={ e => {
                  onChange(e.target.value);
                } }
              /> }
          />
          <Controller
            name={ 'branch' }
            control={ control }
            rules={ {} }
            render={ ({ field: { onChange, value } }) =>
              <SelectedInput
                dataArr={ branchList }
                title='Chi nhánh'
                value={ value }
                onChange={ e => {
                  onChange(e.target.value);
                } }
              /> }
          />
          <Controller
            name={ 'location_room' }
            control={ control }
            rules={ { required: true } }
            render={ ({ field: { onChange, value } }) =>
              <TextFieldInput label="Vị trí phòng" className="w-full"
                onChange={ e => {
                  onChange(e.target.value);
                } }
                value={ value }
                error={ errors?.location_room?.type === 'required' ? 'Vị trí phòng không được bỏ trống!' : null } /> } />
          <Controller
            name={ 'number_customer' }
            control={ control }
            rules={ { required: true } }
            render={ ({ field: { onChange, value } }) =>
              <TextFieldInput label="Phòng chứa tối đa" className="w-full"
                onChange={ e => {
                  onChange(e.target.value);
                } }
                value={ value }
                error={ errors?.number_customer?.type === 'required' ? 'Phòng chứa tối đa không được bỏ trống!' : null } /> } />
          <div className="pt-4 pb-2">
            <DateSingle title="Ngày tạo" classNameTitle="w-1/4"
              onChange={ setForm }
              value={ form } keySearch="date_created"
            />
          </div>
        </div>
        <div>
          <Controller
            name={ 'note' }
            control={ control }
            rules={ {} }
            render={ ({ field: { onChange, value } }) =>
              <TextFieldInput label="Ghi chú" className="w-full"
                onChange={ e => {
                  onChange(e.target.value);
                } }
                value={ value }
                error={ null } /> } />
        </div>
      </div>
    </>
  );
};
DetailInfo.propTypes = {
  setForm: PropTypes.func,
  form: PropTypes.object
};
export default DetailInfo;