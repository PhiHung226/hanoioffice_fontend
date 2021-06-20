import React, { useCallback, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { useRecoilValue, useRecoilState } from 'recoil';

import { LIST_ORDER_PLACEHOLDER_DATA } from '../../../../fixedData/dataEmployee';
import { getListContract } from '../../../../service/contract/contractList/listContract';
import {
  listContractColumnTableState,
  listContractFilterParamsState,
  listContractPageState,
  listContractPageLimitState
} from '../../../../store/atoms/contract/contractList/listContract';
import TableV7 from '../../../common/table/TableV7';
import DetailInfo from '../listContract/Dialog/DetailInfo';
import DialogDetail from '../listContract/Dialog/DialogDetail';

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

const ListContract = () => {
  const classes = useStyles();
  const columnTable = useRecoilValue(listContractColumnTableState);
  const pageLimit = useRecoilValue(listContractPageLimitState);
  const filterParams = useRecoilValue(listContractFilterParamsState);
  const [ pagination,
    // setPagination 
  ] = useRecoilState(listContractPageState);
  // console.log(columnTable);
  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch
    } = filterParams;
    return await getListContract().getList({
      page, pageLimit, strSearch
    });
  }, [ pageLimit, filterParams, pagination.skip ]);

  const { data, refetch } = useQuery(
    [ 'PRODUCT_LIST_KEY', pagination.skip, JSON.stringify(filterParams) ],
    () => getData(pagination.skip, pageLimit),
    {
      keepPreviousData: true, staleTime: 5000,
      placeholderData: LIST_ORDER_PLACEHOLDER_DATA
    }
  );
  useEffect(() => {
    refetch();
  }, [ pageLimit, filterParams, pagination ]);
  const [ openDialog, setOpenDialog ] = useState({ open: false, id: null });

  return (
    <>
      <TableV7 columns={ columnTable } datas={ data }
        queryKey='queryKey' idDetai='detail'
        keyId="id_employee" detailFunction={ getListContract().getDetail }
        openDialog={ openDialog }
        setOpenDialog={ setOpenDialog } />

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
export default ListContract;