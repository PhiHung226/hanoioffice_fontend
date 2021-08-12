import React, { useCallback, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import {
  useRecoilValue,
  //  useRecoilState
} from 'recoil';

import { LIST_ORDER_PLACEHOLDER_DATA } from '../../../../fixedData/dataEmployee';
import { getListRoom } from '../../../../service/room/listRoom/listRoom';
import {
  listRoomColumnTableState,
  listRoomFilterParamsState,
  listRoomPageState,
  listRoomPageLimitState
} from '../../../../store/atoms/room/listRoom/listRoom';
import TableV7 from '../../../common/table/TableV7';
import DetailInfo from '../listRoom/Dialog/DetailInfo';
import DialogDetail from '../listRoom/Dialog/DialogDetail';

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

const BadCustomer = () => {
  const classes = useStyles();
  const columnTable = useRecoilValue(listRoomColumnTableState);
  const filterParams = useRecoilValue(listRoomFilterParamsState);

  const pageLimit = useRecoilValue(listRoomPageLimitState);
  const page = useRecoilValue(listRoomPageState);

  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch,
      nameRoom, numberPeople, branchRoom, kindOfRoom
    } = filterParams;
    return await getListRoom().getList1({
      page, pageLimit, strSearch, nameRoom, numberPeople, branchRoom, kindOfRoom
    });
  }, [ pageLimit, filterParams, page ]);

  const { data, refetch } = useQuery(
    [ 'PRODUCT_LIST_KEY_ROOM', page, JSON.stringify(filterParams) ],
    () => getData(page, pageLimit),
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
        keyId="id_employee" detailFunction={ getListRoom().getDetail }
        openDialog={ openDialog }
        setOpenDialog={ setOpenDialog }
        pageState={ listRoomPageState }
        pageLimitState={ listRoomPageLimitState } />
      { openDialog.open &&
        <DialogDetail
          classes={ {
            paper: classes.paper,
          } }
          id="ringtone-menu"
          data={ data }
          openDialog={ openDialog }
          setOpenDialog={ setOpenDialog }
          detail={ DetailInfo } />
      }
    </>
  );
};
export default BadCustomer;