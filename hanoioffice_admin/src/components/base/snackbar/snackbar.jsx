import React from 'react';

// import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const Alert = (props) => {
  return <MuiAlert elevation={ 6 } variant="filled" { ...props } />;
};
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
// const TransitionUp = (props) => {
//   return <Slide { ...props } direction="up" />;
// };
const Snackbars = ({ title, severity, time }) => {

  const classes = useStyles();
  const [ open, setOpen ] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={ classes.root }>
      <Snackbar open={ open } autoHideDuration={ time } onClose={ handleClose }>
        <Alert onClose={ handleClose } severity={ severity }>
          { title }
        </Alert>
      </Snackbar>
    </div>
  );
};
Snackbars.propTypes = {
  title: PropTypes.string,
  severity: PropTypes.string,
  time: PropTypes.number
};
Snackbars.defaultProps = {
  severity: 'success',
  time: 3000
};
export default Snackbars;