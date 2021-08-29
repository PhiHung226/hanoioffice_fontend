import React, {useCallback, useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {useQuery} from 'react-query';
import {useRecoilValue} from 'recoil';

import {LIST_ORDER_PLACEHOLDER_DATA} from '../../../../fixedData/dataEmployee';
import {getListAppointment} from '../../../../service/book/listBook/appointment';
import {
  listBookColumnTableState,
  listBookFilterParamsState,
  listBookPageLimitState,
  listBookPageState
} from '../../../../store/atoms/book/appointment';
import TableV7 from '../../../common/table/TableV7';
import DialogDetail from './Dialog/DialogDetail';

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

const ListBook = () => {
  const classes = useStyles();
  const columnTable = useRecoilValue(listBookColumnTableState);
  const filterParams = useRecoilValue(listBookFilterParamsState);

  const pageLimit = useRecoilValue(listBookPageLimitState);
  const page = useRecoilValue(listBookPageState);
  const getData = useCallback(async (page, pageLimit) => {
    const {
      strSearch
    } = filterParams;
    return await getListAppointment().getList({
      page, pageLimit, strSearch
    });
  }, [pageLimit, filterParams, page.skip]);

  const {data, refetch} = useQuery(
    ['PRODUCT_LIST_KEY_LIST_BOOK', page.skip, JSON.stringify(filterParams)],
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
        queryKey='PRODUCT_LIST_KEY_LIST_BOOK_DETAIL' idDetail='detail'
        keyId="id" detailFunction={ getListAppointment().getDetail }
        // openDialog={ openDialog }
        setOpenDialog={ setOpenDialog }
        pageState={ listBookPageState }
        setId={ setId }
        pageLimitState={ listBookPageLimitState }/>
      {openDialog &&
            <DialogDetail
              classes={ {
                paper: classes.paper,
              } }
              id={ id }
              openDialog={ openDialog }
              setOpenDialog={ setOpenDialog }
              queryKey='PRODUCT_LIST_KEY_LIST_BOOK_DETAIL'
              detailFunction={ getListAppointment().getDetail }
            />
      }
    </>
  );
};
export default ListBook;