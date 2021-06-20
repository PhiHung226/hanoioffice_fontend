import React, { useCallback, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import { useRecoilValue, useRecoilState } from 'recoil';

import { LIST_ORDER_PLACEHOLDER_DATA } from '../../../../fixedData/dataEmployee';
import { getListBranchs } from '../../../../service/branch/listBranch/branchList';
import {
  listBranchColumnTableState,
  listBranchFilterParamsState,
  listBranchPageState,
  listBranchPageLimitState
} from '../../../../store/atoms/branch/branchList';
import TableV7 from '../../../common/table/TableV7';
import DetailInfo from '../listBranch/Dialog/DetailInfo';
import DialogDetail from '../listBranch/Dialog/DialogDetail';

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

const BranchList = () => {
  const classes = useStyles();
  const columnTable = useRecoilValue(listBranchColumnTableState);
  const pageLimit = useRecoilValue(listBranchPageLimitState);
  const filterParams = useRecoilValue(listBranchFilterParamsState);
  const [ pagination,
    // setPagination 
  ] = useRecoilState(listBranchPageState);
  // console.log(columnTable);
  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch
    } = filterParams;
    return await getListBranchs().getList({
      page, pageLimit, strSearch
    });
  }, [ pageLimit, filterParams, pagination.skip ]);

  const { data, refetch } = useQuery(
    [ 'PRODUCT_LIST_KEY_BRANCH', pagination.skip, JSON.stringify(filterParams) ],
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
        keyId="id_employee" detailFunction={ getListBranchs().getDetail }
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
export default BranchList;