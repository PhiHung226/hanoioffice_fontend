import React, {useCallback, useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useQuery} from 'react-query';
import {useRecoilValue,} from 'recoil';

import {LIST_ORDER_PLACEHOLDER_DATA} from '../../../../fixedData/dataEmployee';
// import {getListService} from '../../../../service/serviceList/listService/ListService';
import {getListEmployees} from '../../../../service/employess/employeeList/listEmployee';
import {
  equiqmentListColumnTableState,
  equiqmentListFilterParamsState,
  equiqmentListPageLimitState,
  equiqmentListPageState
} from '../../../../store/atoms/service/equiqment/equiqmentList';
import TableV7 from '../../../common/table/TableV7';
import DetailInfo from '../equiqments/Dialog/DetailInfo';
import DialogDetail from '../equiqments/Dialog/DialogDetail';

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

const Equiqments = () => {
  const classes = useStyles();
  const columnTable = useRecoilValue(equiqmentListColumnTableState);
  const filterParams = useRecoilValue(equiqmentListFilterParamsState);
  
  const pageLimit = useRecoilValue(equiqmentListPageLimitState);
  const page = useRecoilValue(equiqmentListPageState);
  
  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch, codeSearch
    } = filterParams;
    return await getListEmployees().getList({
      page, pageLimit, strSearch, codeSearch
    });
  }, [pageLimit, filterParams, page.skip]);
  
  const {data, refetch} = useQuery(
    ['PRODUCT_LIST_KEY_SERVICE_EQUIQMENT', page.skip, JSON.stringify(filterParams)],
    () => getData(page.skip, pageLimit),
    {
      keepPreviousData: true, staleTime: 5000,
      placeholderData: LIST_ORDER_PLACEHOLDER_DATA
    }
  );
  useEffect(() => {
    refetch();
  }, [pageLimit, filterParams, page]);
  const [openDialog, setOpenDialog] = useState({open: false, id: null});
  
  return (
    <>
      <TableV7 columns={ columnTable } datas={ data }
        queryKey='queryKey1' idDetai='detail'
        keyId="id_service" detailFunction={ getListEmployees().getDetail }
        openDialog={ openDialog }
        setOpenDialog={ setOpenDialog }
        pageState={ equiqmentListPageState }
        pageLimitState={ equiqmentListPageLimitState }/>
      {openDialog.open &&
      <DialogDetail
        classes={ {
          paper: classes.paper,
        } }
        id="ringtone-menu"
        openDialog={ openDialog }
        
        setOpenDialog={ setOpenDialog }
        detail={ DetailInfo }/>
      }
    </>
  );
};
export default Equiqments;