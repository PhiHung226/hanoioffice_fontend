import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
// import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import EmojiTransportation from '@material-ui/icons/EmojiTransportation';
import clsx from 'clsx';
import { useIsFetching } from 'react-query';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  // buttonSuccess: {
  //   backgroundColor: green[ 500 ],
  //   '&:hover': {
  //     backgroundColor: green[ 700 ]
  //   }
  // },
  fabProgress: {
    // color: green[ 500 ],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  // buttonProgress: {
  //   color: green[ 500 ],
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   marginTop: -12,
  //   marginLeft: -12
  // }
}));

const LoadingSpinner = () => {

  const isFetching = useIsFetching();

  const classes = useStyles();
  const [ loading, setLoading ] = React.useState(false);
  const [ success, setSuccess ] = React.useState(false);
  const timer = React.useRef();


  const buttonClassname = clsx({
    [ classes.buttonSuccess ]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  return isFetching ? (
    <div className="fixed h-full w-full top-0 left-0">
      <div className="h-full w-full flex items-center justify-center">
        <div className={ classes.root }>
          <div className={ classes.wrapper }>
            <Fab
              aria-label="save"
              color="primary"
              className={ buttonClassname }
              onClick={ handleButtonClick }
            >
              { <EmojiTransportation /> }
            </Fab>
            { <CircularProgress size={ 68 } className={ classes.fabProgress } /> }
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default LoadingSpinner;
