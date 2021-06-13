import React from 'react';

import MuiAccordion from '@material-ui/core/Accordion';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
import Paper from '@material-ui/core/Paper';
import {
  withStyles,
  makeStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: '#4466ca',
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//       // minWidth: '100%'
//     },
//   },
// }))(TableRow);

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData(1, 'Bùi Văn Hiệp', 6.0, 24, 4.0),
  createData(2, 'Tạ Phi Hùng', 9.0, 37, 4.3),
  createData(3, 'Nguyễn Trọng Mạnh', 16.0, 24, 6.0),
  createData(4, 'Trần Quốc Bảo', 3.7, 67, 4.3),
  createData(5, 'Nguyễn Hữu Vân', 16.0, 49, 3.9),
  createData(6, 'Bùi Văn Hiệp', 6.0, 24, 4.0),
  createData(7, 'Bùi Quang Trung', 9.0, 37, 4.3),
  createData(8, 262, 16.0, 24, 6.0),
  createData(9, 305, 3.7, 67, 4.3),
  createData(10, 356, 16.0, 49, 3.9),
  createData(11, 'Bùi Văn Hiệp', 6.0, 24, 4.0),
  createData(12, 237, 9.0, 37, 4.3),
  createData(13, 262, 16.0, 24, 6.0),
  createData(14, 305, 3.7, 67, 4.3),
  createData(15, 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
  details: {
    alignItems: 'center',
  },
  root: {
    maxWidth: '100%'
  },
  container: {
    maxHeight: 440,
  },
});
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);
const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const TableV1 = () => {

  const [ page, setPage ] = React.useState(0);
  const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const classes = useStyles();

  const [ expanded, setExpanded ] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const Detail = () => {
    return (
      <div>
        <h1>Không có dữ liệu</h1>
      </div>
    );
  };
  return (
    <>

      <Paper className={ classes.root }>
        <TableContainer component={ classes.container }>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              {/* <TableRow> */ }
              <AccordionSummary>
                <TableRow className='flex'>
                  <th className="w-20">Mã NV</th>
                  <th align="center" className="w-56">Họ tên</th>
                  <th align="center" className="w-36">Ảnh</th>
                  <th align="center" className="w-36">Giới tính</th>
                  <th align="center" className="w-36">Ngày sinh</th>
                  <th align="center" className="w-36">Chức vụ</th>
                  <th align="center" className="w-36">Số điện thoại</th>
                  <th align="center" className="w-36">Email</th>
                  <th align="center" className="w-36">Quê quán</th>
                  <th align="center" className="w-36">HKTT</th>
                  <th align="center" className="w-36">Ghi chú</th>
                </TableRow>
              </AccordionSummary>
              {/* </TableRow> */ }
            </TableHead>
            <TableBody>
              { rows.map((row, index) => (
                // <StyledTableRow key={ index }>
                // <li key={ index }>
                <Accordion square expanded={ expanded === 'panel' + index } onChange={ handleChange('panel' + index) } key={ index }>
                  <AccordionSummary
                    expandIcon={ <ExpandMoreIcon /> }
                    aria-controls="panel1c-content" id="panel1c-header"
                  >
                    <TableRow>
                      <TableCell className='w-20'>{ row.name }</TableCell>
                      <TableCell align="" className="w-36" size={ '400px' } >{ row.calories }</TableCell>
                      <TableCell align="center" className="w-36">{ }</TableCell>
                      <TableCell align="center" className="w-36">{ row.fat }</TableCell>
                      <TableCell align="center" className="w-36">{ row.carbs }</TableCell>
                      <TableCell align="center" className="w-36">{ row.protein }</TableCell>
                      <TableCell align="center" className="w-36">{ row.carbs }</TableCell>
                      <TableCell align="center" className="w-36">{ row.protein }</TableCell>
                      <TableCell align="center" className="w-36">{ row.fat }</TableCell>
                      <TableCell align="center" className="w-36">{ row.fat }</TableCell>
                    </TableRow>
                  </AccordionSummary>
                  <AccordionDetails className={ classes.details }>
                    <Detail />
                  </AccordionDetails>
                </Accordion>
                // </li>
                // </StyledTableRow>
              )) }
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={ [ 10, 25, 100 ] }
            component="div"
            count={ rows.length }
            rowsPerPage={ rowsPerPage }
            page={ page }
            onChangePage={ handleChangePage }
            onChangeRowsPerPage={ handleChangeRowsPerPage }
          />
        </TableContainer>
      </Paper>
    </>
  );
};
export default TableV1;