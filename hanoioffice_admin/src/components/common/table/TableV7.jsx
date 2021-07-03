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
import { useRecoilState } from 'recoil';

import SelectInput from '../../base/input/SelectInput';
import InputLabel from '../InputLabel';
import CustomNoRowsOverlay from './tableDetail/CustomNoRowsOverlay';

const listPageLimit = [ { id: 15, name: '15' }, { id: 30, name: '30' }, { id: 60, name: '60' }, { id: 90, name: '90' } ];
const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <div className="px-4" />
    </GridToolbarContainer>
  );
};
const DataGridDemo = ({ columns, datas, queryKey,
  keyId, detailFunction, openDialog,
  setOpenDialog, idDetai, pageState, pageLimitState,
  heightTable = 690
  //  page, setPage, pageLimit, setPageLimit 
}) => {
  // console.log(pageState);

  const [ page, setPage ] = useRecoilState(pageState);
  const [ pageLimit, setPageLimit ] = useRecoilState(pageLimitState);

  const pageDetial = (prams) => {
    setPage(prams.selected + 1);
  };//hàm nhận về giá trị trang khi click và từng trang

  const handleChange = (event) => {
    setPageLimit(event.target.value);
  };// hàm nhận về giá trị số lượng bản ghi
  const totalPage = Math.ceil(datas.meta.total_data / pageLimit);

  const fromPage = page * pageLimit - pageLimit + 1;
  const toPage = page * pageLimit <= datas.meta.total_data ? page * pageLimit : datas.meta.total_data;
  React.useEffect(() => {
    setPage(1);
  }, [ pageLimit ]);
  const CustomPagination = () => {
    return (
      <div className="mx-20 flex items-center py-0">
        <ReactPaginate
          containerClassName='flex'
          forcePage={ page - 1 }// trang được lựa chọn
          pageCount={ totalPage }// tổng số trang
          pageRangeDisplayed={ 3 }// số lượng trang cần hiển thị cho lề
          marginPagesDisplayed={ 1 }// Số trang cần thiết để hiện thị cho  lề
          previousLabel={ <ArrowBackIos /> }
          nextLabel={ <ArrowForwardIos /> }
          // initialPage={ 0 }// Chọn trang đầu tiên khi được mở
          pageClassName="px-2 hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium "
          activeLinkClassName="px-3 bg-blue-700 text-white h-7 w-10 rounded-full flex items-center justify-center font-semibold"
          previousClassName="pl-2 hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium"
          nextClassName='hover:bg-blue-700 hover:text-white h-7 w-7 mx-1 text-blue-900 rounded-full flex items-center justify-center font-medium ml-2 '
          onPageChange={ pageDetial }
        />
        <InputLabel label={ 'Giới hạn' } className="pl-24">
          <SelectInput value={ pageLimit } onChange={ handleChange }
            dataArr={ listPageLimit } className="mr-2 -ml-10 w-1" classNameItem="w-full m-0 table-selectInput-MuiInput-formControl" />
        </InputLabel>
        <div className="flex items-center justify-center font-medium ml-10 text-base pl-48">
          <p>{ `${fromPage} - ${toPage} trên ${datas.meta.total_data}` }</p>
        </div>
      </div>
    );
  };
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
    <div style={ { height: heightTable, width: '100%' } }>
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
        pageSize={ pageLimit }// số lượng hàng trong bảng
        onCellClick={ getDemo }
      />
    </div>
  );
};
DataGridDemo.propTypes = {
  columns: PropTypes.array,// mảng cột
  datas: PropTypes.object,//mảng dữ liệu
  queryKey: PropTypes.string,// key nạp trước dữ liệu
  keyId: PropTypes.string, // key lọc
  detailFunction: PropTypes.func,//hàm nạp trước dữ liệu
  openDialog: PropTypes.object,
  setOpenDialog: PropTypes.func,
  idDetai: PropTypes.string,// khóa được chọn khi click vào bảng
  pageState: PropTypes.object,
  pageLimitState: PropTypes.object,
  heightTable: PropTypes.number
};
export default DataGridDemo;
