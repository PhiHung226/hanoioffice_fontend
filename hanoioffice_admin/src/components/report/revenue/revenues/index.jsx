import React, { useCallback, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import {
  useRecoilValue,
  //  useRecoilState 
} from 'recoil';

import { LIST_ORDER_PLACEHOLDER_DATA } from '../../../../fixedData/dataEmployee';
import { getListEmployees } from '../../../../service/employess/employeeList/listEmployee';
import {
  listEmployeesColumnTableState,
  listEmployeesFilterParamsState,
  listEmployeesPageState,
  listEmployeesPageLimitState
} from '../../../../store/atoms/employee/employeeList/listEmployee';
import TableV7 from '../../../common/table/TableV7';
import DetailInfo from '../revenues/Dialog/DetailInfo';
import DialogDetail from '../revenues/Dialog/DialogDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 1835,
  },
}));

const ListEmployees = () => {
  const classes = useStyles();
  const columnTable = useRecoilValue(listEmployeesColumnTableState);
  const filterParams = useRecoilValue(listEmployeesFilterParamsState);

  const pageLimit = useRecoilValue(listEmployeesPageLimitState);
  const page = useRecoilValue(listEmployeesPageState);
  // console.log(columnTable);
  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch
    } = filterParams;
    return await getListEmployees().getList({
      page, pageLimit, strSearch
    });
  }, [ pageLimit, filterParams, page.skip ]);

  const { data, refetch } = useQuery(
    [ 'PRODUCT_LIST_KEY', page.skip, JSON.stringify(filterParams) ],
    () => getData(page.skip, pageLimit),
    {
      keepPreviousData: true, staleTime: 5000,
      placeholderData: LIST_ORDER_PLACEHOLDER_DATA
    }
  );
  useEffect(() => {
    refetch();
  }, [ pageLimit, filterParams, page ]);
  const [ openDialog, setOpenDialog ] = useState({ open: false, id: null });

  return (
    <>
      <TableV7 columns={ columnTable } datas={ data }
        queryKey='queryKey' idDetai='detail'
        keyId="id_employee" detailFunction={ getListEmployees().getDetail }
        openDialog={ openDialog }
        setOpenDialog={ setOpenDialog }
        pageState={ listEmployeesPageState }
        pageLimitState={ listEmployeesPageLimitState }
      />

      { openDialog.open &&
        <DialogDetail
          classes={ {
            paper: classes.paper,
          } }
          id="ringtone-menu"
          openDialog={ openDialog }
          setOpenDialog={ setOpenDialog }
          detail={ DetailInfo } />
      }
    </>
  );
};
export default ListEmployees;