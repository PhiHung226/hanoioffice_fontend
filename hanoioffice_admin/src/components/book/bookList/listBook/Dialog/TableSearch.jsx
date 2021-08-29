import React from 'react';

import TableDetail from './tableDetail';

const data = [
  {id: 1, name: '304', numberRoom: 14, time: 'Ca 1', branch: 'Chi nhánh thanh xuân'},
  {id: 2, name: '305', numberRoom: 11, time: 'Ca 3', branch: 'Chi nhánh thanh xuân'},
  {id: 3, name: '404', numberRoom: 10, time: 'Ca 4', branch: 'Chi nhánh thanh xuân'}
];
const TableSearch = () => {

  return (
    <>
      <div className='mt-3'>
        <TableDetail text_center={ 'text-center' }/>
        {
          data.map((item, index) => {
            return (
              <TableDetail data={ item } key={ index } buttonDelete={ true }/>
            );
          })
        }
      </div>
    </>
  );
};
export default TableSearch;