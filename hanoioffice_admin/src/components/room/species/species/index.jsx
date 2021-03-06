import React, {useCallback, useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useQuery} from 'react-query';
import {useRecoilValue,} from 'recoil';

import {LIST_ORDER_PLACEHOLDER_DATA} from '../../../../fixedData/dataEmployee';
import {getListTypeRoom} from '../../../../service/room/typeRoom/listTypeRoom';
import {
  typeRoomColumnTableState,
  typeRoomFilterParamsState,
  typeRoomPageLimitState,
  typeRoomPageState
} from '../../../../store/atoms/room/typeRoom/typeRoom';
import TableV7 from '../../../common/table/TableV7';
import DialogDetail from '../species/Dialog/DialogDetail';

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
  const columnTable = useRecoilValue(typeRoomColumnTableState);
  const filterParams = useRecoilValue(typeRoomFilterParamsState);
  
  const pageLimit = useRecoilValue(typeRoomPageLimitState);
  const page = useRecoilValue(typeRoomPageState);
  
  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch
    } = filterParams;
    return await getListTypeRoom().getList({
      page, pageLimit, strSearch
    });
  }, [pageLimit, filterParams, page.skip]);
  
  const {data, refetch} = useQuery(
    ['PRODUCT_LIST_KEY_TYPE_ROOM_SPECIES_1', page.skip, JSON.stringify(filterParams)],
    () => getData(page.skip, pageLimit),
    {
      keepPreviousData: true, staleTime: 5000,
      placeholderData: LIST_ORDER_PLACEHOLDER_DATA
    }
  );
  useEffect(() => {
    refetch();
  }, [pageLimit, filterParams, page]);
  const [openDialog, setOpenDialog] = useState(false);
  const [id, setId] = useState(0);
  
  return (
    <>
      <TableV7 columns={ columnTable } datas={ data }
        queryKey='PRODUCT_DETAIL_KEY_TYPE_ROOM_SPECIES' idDetail='detail'
        keyId="id" detailFunction={ getListTypeRoom().getDetail }
        // openDialog={ openDialog }
        setOpenDialog={ setOpenDialog }
        pageState={ typeRoomPageState }
        setId={ setId }
        pageLimitState={ typeRoomPageLimitState }/>
      {openDialog &&
      <DialogDetail
        classes={ {
          paper: classes.paper,
        } }
        id={ id }
        openDialog={ openDialog }
        setOpenDialog={ setOpenDialog }
        queryKey='PRODUCT_DETAIL_KEY_TYPE_ROOM_SPECIES'
        detailFunction={ getListTypeRoom().getDetail }
      />
      }
    </>
  );
};
export default BadCustomer;