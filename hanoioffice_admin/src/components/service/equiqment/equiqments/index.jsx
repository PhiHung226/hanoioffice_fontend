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
  listCustomerColumnTableState,
  listCustomerFilterParamsState,
  listCustomerPageState,
  listCustomerPageLimitState
} from '../../../../store/atoms/customer/customerList/listCustomer';
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
  const columnTable = useRecoilValue(listCustomerColumnTableState);
  const filterParams = useRecoilValue(listCustomerFilterParamsState);

  const pageLimit = useRecoilValue(listCustomerPageLimitState);
  const page = useRecoilValue(listCustomerPageState);

  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch
    } = filterParams;
    return await getListCustomer().getList({
      page, pageLimit, strSearch
    });
  }, [ pageLimit, filterParams, page.skip ]);

  const { data, refetch } = useQuery(
    [ 'PRODUCT_LIST_KEY_SERVICE_EQUIQMENT', page.skip, JSON.stringify(filterParams) ],
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
        pageState={ listCustomerPageState }
        pageLimitState={ listCustomerPageLimitState } />

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