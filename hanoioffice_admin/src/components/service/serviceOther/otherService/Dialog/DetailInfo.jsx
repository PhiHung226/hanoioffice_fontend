import React from 'react';

import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';

import DateSingle from '../../../../base/dateTime/DateSingle';
import TextFieldInput from '../../../../common/TextFieldInput';

const DetailInfo = ({ setForm, form }) => {
  const methods = useFormContext();
  const { formState: { errors }, control } = methods;

  return (
    <>
      <div>
        <Controller
          name={ 'code_utilities' }
          control={ control }
          rules={ { required: true } }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Mã dịch vụ" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ errors?.code_utilities?.type === 'required' ? 'Mã tiện ích không được bỏ trống!' : null } /> } />
        <Controller
          name={ 'name_utilities' }
          control={ control }
          rules={ { required: true } }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Tên dịch vụ" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ errors?.name_utilities?.type === 'required' ? 'Tên tiện ích không được bỏ trống!' : null } /> } />
        <Controller
          name={ 'number_utilities' }
          control={ control }
          rules={ {} }
          render={ ({ field: { onChange, value } }) =>
            <TextFieldInput label="Giá dịch vụ/giờ" className="w-full"
              onChange={ e => {
                onChange(e.target.value);
              } }
              value={ value }
              error={ null } /> } />
        <div className="pt-4 pb-2">
          <DateSingle title="Ngày tạo" classNameTitle="w-1/4"
            onChange={ setForm }
            value={ form } keySearch="date_created"
          />
        </div>
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
    </>
  );
};
DetailInfo.propTypes = {
  setForm: PropTypes.func,
  form: PropTypes.object
};
export default DetailInfo;