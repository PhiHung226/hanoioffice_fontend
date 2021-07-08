import React from 'react';

// import { branchFilterParamsState } from '../../../store/actom/branch/branch';
// import CardBranch from '../../common/filters/CardBranch';
import SelectedInput from '../../common/SelectedInput';
import ItemCard from './ItemCard';

const arrBranch = [
  { id: '1', text: 'Chi nhánh Thanh Xuân' },
  { id: '2', text: 'Chi nhánh Nam Từ Liêm' },
  { id: '3', text: 'Chi nhánh Hà Đông' },
  { id: '4', text: 'Chinh nhánh Đống Đa' }
];

const pyteRoom = [
  { id: '1', text: 'Phòng họp' },
  { id: '2', text: 'Văn phòng làm việc' },
  { id: '3', text: 'Văn phòng ảo' },
  { id: '4', text: 'Chỗ ngồi làm việc' }
];

const people_max = [
  { id: '1', text: '5 người' },
  { id: '2', text: '10 người' },
  { id: '3', text: '20 người' },
  { id: '4', text: '20 người' }
];

const dataArr = [
  {},
  {},
  {},
  {},
  {}
];
const SelectedBranch = () => {

  const [ value, setValue ] = React.useState('');
  const onChange = (value) => {
    setValue(value);
  };

  const [ room, setRoom ] = React.useState('');
  const onChangeRoom = (value) => {
    setRoom(value);
  };

  const [ people, setPeople ] = React.useState('');
  const onChangePeople = (value) => {
    setPeople(value);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="border">
          <div className="p-4">
            <p className="mb-4 font-bold">Tìm kiếm theo yêu cầu</p>
            {/* <CardBranch filterParams={ branchFilterParamsState } widthTitle='w-1/4' /> */ }
            <SelectedInput title={ 'Chi nhánh' } dataArr={ arrBranch } value={ value } onChange={ e => onChange(e.target.value) } />
            <SelectedInput title={ 'Loại phòng' } dataArr={ pyteRoom } value={ room } onChange={ e => onChangeRoom(e.target.value) } />
            <SelectedInput title={ 'Số người tối đa' } dataArr={ people_max } value={ people } onChange={ e => onChangePeople(e.target.value) } />
            <h1>Thời gian bắt đầu</h1>
          </div>
        </div>
        <div className="col-span-3 border">
          <h4 className="pb-2 p-4 font-bold">Danh sách kết quả tìm kiếm theo yêu cầu (<span className="text-blue-600">{ ' 5/40 ' }</span>)</h4>
          <div className="border-t-2 mx-8">
            <div className="my-4 grid grid-cols-4 gap-8">
              {
                dataArr.map((item, index) => {
                  return (
                    <ItemCard key={ index } dataItem={ item } />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectedBranch;