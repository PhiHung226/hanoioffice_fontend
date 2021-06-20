import React, { useState } from 'react';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton
} from '@material-ui/data-grid';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useQueryClient } from 'react-query';

import SelectInput from '../../base/input/SelectInput';
import InputLabel from '../InputLabel';
import CustomNoRowsOverlay from './tableDetail/CustomNoRowsOverlay';


const pageDemo = (prams) => {
  if (prams.name === 'detail') {
    console.log();
  }
};
const listPageLimit = [ { id: 15, name: '15' }, { id: 30, name: '30' }, { id: 60, name: '60' } ];
const CustomPagination = () => {
  return (
    <div className="mx-20 flex items-center py-0">
      <ReactPaginate
        containerClassName='flex'
        pageCount={ 10 }
        pageRangeDisplayed={ 3 }
        marginPagesDisplayed={ 1 }
        previousLabel={ <ArrowBackIos /> }
        nextLabel={ <ArrowForwardIos /> }
        initialPage={ 1 }
        pageClassName="px-2 hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium "
        activeLinkClassName="px-3 bg-blue-700 text-white h-7 w-10 rounded-full flex items-center justify-center font-semibold"
        previousClassName="pl-2 hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium"
        nextClassName='hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium ml-2 '
        onPageChange={ pageDemo }
      />
      <InputLabel label={ 'Giới hạn' } className="pl-24">
        <SelectInput value={ { id: 15, name: '15' } }
          dataArr={ listPageLimit } className="mr-2 -ml-10 w-1" classNameItem="w-full m-0 table-selectInput-MuiInput-formControl" />
      </InputLabel>
      <div className="flex items-center justify-center font-medium ml-10 text-base pl-48">
        <p>{ `${1} - ${15} trên ${100}` }</p>
      </div>
    </div>
  );
};
const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <div className="px-4" />
    </GridToolbarContainer>
  );
};
const DataGridDemo = ({ columns, datas, queryKey, keyId, detailFunction, openDialog, setOpenDialog, idDetai }) => {
  const [ dataTable, setDataTable ] = useState(datas.data);

  React.useEffect(() => {
    setDataTable(datas.data);
  }, [ datas ]);
  const queryClient = useQueryClient();
  // eslint-disable-next-line no-unused-vars
  const expandChange = async (event) => {
    await queryClient.prefetchQuery(
      [ queryKey, event.dataItem[ keyId ] ],
      () => detailFunction(event.dataItem[ keyId ]),
      { staleTime: 5000 }
    );
  };

  const getDemo = async (event) => {
    console.log(event.id);
    if (event.field === idDetai) {
      // let is_expanded = dataTable.findIndex(item => item[ keyId ] === event.id);
      await queryClient.prefetchQuery(
        [ queryKey, event.id ],
        () => detailFunction(event.id),
        { staleTime: 5000 }
      );
      setOpenDialog({
        open: !openDialog.open,
        id: event.id
      });
    }
  };

  return (
    <div style={ { height: 690, width: '100%' } }>
      <DataGrid
        checkboxSelection={ true }// hộp kiểm thử
        disableSelectionOnClick={ true }// click trên cả thanh
        components={ {
          NoRowsOverlay: CustomNoRowsOverlay,
          Toolbar: CustomToolbar,
          Pagination: CustomPagination,
        } }
        disableColumnMenu={ true }// menu từng cột (dấu 3 chấm)
        disableColumnFilter={ true }//  bộ lọc tổng
        rows={ dataTable }
        columns={ columns }
        pageSize={ 30 }// số lượng hàng trong bảng
        onCellClick={ getDemo }
      />
    </div>
  );
};
DataGridDemo.propTypes = {
  columns: PropTypes.array,
  datas: PropTypes.object,
  queryKey: PropTypes.string,
  keyId: PropTypes.string,
  detailFunction: PropTypes.func,
  openDialog: PropTypes.object,
  setOpenDialog: PropTypes.func,
  idDetai: PropTypes.string
};
export default DataGridDemo;
