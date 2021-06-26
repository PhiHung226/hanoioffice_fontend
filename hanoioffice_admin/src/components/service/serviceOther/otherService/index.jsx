import React, { useCallback, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import {
  useRecoilValue,
  //  useRecoilState 
} from 'recoil';

import { LIST_ORDER_PLACEHOLDER_DATA } from '../../../../fixedData/dataEmployee';
import { getListCustomer } from '../../../../service/customer/customerList/listCustomer';
import {
  serviceOtherListColumnTableState,
  serviceOtherListFilterParamsState,
  serviceOtherListPageState,
  serviceOtherListPageLimitState
} from '../../../../store/atoms/service/serviceOther/serviceOtherList';
import TableV7 from '../../../common/table/TableV7';
import DetailInfo from '../otherService/Dialog/DetailInfo';
import DialogDetail from '../otherService/Dialog/DialogDetail';

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
  const columnTable = useRecoilValue(serviceOtherListColumnTableState);
  const filterParams = useRecoilValue(serviceOtherListFilterParamsState);

  const pageLimit = useRecoilValue(serviceOtherListPageLimitState);
  const page = useRecoilValue(serviceOtherListPageState);

  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch
    } = filterParams;
    return await getListCustomer().getList({
      page, pageLimit, strSearch
    });
  }, [ pageLimit, filterParams, page.skip ]);

  const { data, refetch } = useQuery(
    [ 'PRODUCT_LIST_KEY_SERVICE_OTHER', page.skip, JSON.stringify(filterParams) ],
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
        keyId="id_employee" detailFunction={ getListCustomer().getDetail }
        openDialog={ openDialog }
        setOpenDialog={ setOpenDialog }
        pageState={ serviceOtherListPageState }
        pageLimitState={ serviceOtherListPageLimitState } />

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
export default Equiqments;