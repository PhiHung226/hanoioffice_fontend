import React, {useState} from 'react';

import {DataGrid, GridToolbarColumnsButton, GridToolbarContainer} from '@material-ui/data-grid';
import PropTypes from 'prop-types';
import {useQueryClient} from 'react-query';

import CustomNoRowsOverlay from './tableDetail/CustomNoRowsOverlay';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton/>
      <div className="px-4"/>
    </GridToolbarContainer>
  );
};
const DataGridDemo = ({
  columns, datas, queryKey,
  keyId, detailFunction, setId,
  setOpenDialog, idDetail,
  heightTable = 690,
  pageLimit
}) => {


  const [dataTable, setDataTable] = useState(datas);

  React.useEffect(() => {
    setDataTable(datas.data);
  }, [datas]);
  const queryClient = useQueryClient();
  // eslint-disable-next-line no-unused-vars
  const expandChange = async (event) => {
    await queryClient.prefetchQuery(
      [queryKey, event.dataItem[keyId]],
      () => detailFunction(event.dataItem[keyId]),
      {staleTime: 5000}
    );
  };

  const getDemo = async (event) => {
    if (event.field === idDetail) {
      // let is_expanded = dataTable.findIndex(item => item[ keyId ] === event.id);
      await queryClient.prefetchQuery(
        [queryKey, event.id],
        () => detailFunction(event.id),
        {staleTime: 5000}
      );
      setId(event.id);
      setOpenDialog(true);
    }
  };
  return (
    <div style={ {height: heightTable, width: '100%'} }>
      <DataGrid
        checkboxSelection={ true }// hộp kiểm thử
        disableSelectionOnClick={ true }// click trên cả thanh
        components={ {
          NoRowsOverlay: CustomNoRowsOverlay,
          Toolbar: CustomToolbar,
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
  datas: PropTypes.object,//object dữ liệu
  queryKey: PropTypes.string,// key nạp trước dữ liệu
  keyId: PropTypes.string, // key lọc
  detailFunction: PropTypes.func,//hàm nạp trước dữ liệu
  openDialog: PropTypes.bool,
  setOpenDialog: PropTypes.func,
  idDetail: PropTypes.string,// khóa được chọn khi click vào bảng
  heightTable: PropTypes.number,
  setId: PropTypes.func,
  pageLimit: PropTypes.number
};
export default DataGridDemo;
