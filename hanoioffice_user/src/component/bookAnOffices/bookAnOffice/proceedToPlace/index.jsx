// import React from 'react';

// const ProceedToPlace = () => {
//   return (
//     <>

//     </>
//   );
// };
// export default ProceedToPlace;
import React from 'react';

import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
// import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import {
  makeStyles,
  //  withStyles 
} from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Check from '@material-ui/icons/Check';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import CustomerInfo from './CustomerInfo';
import RoomInfo from './RoomInfo';
import Rules from './Rules';
// const QontoConnector = withStyles({
//   alternativeLabel: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   active: {
//     '& $line': {
//       borderColor: '#784af4',
//     },
//   },
//   completed: {
//     '& $line': {
//       borderColor: '#784af4',
//     },
//   },
//   line: {
//     borderColor: '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// })(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

const QontoStepIcon = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={ clsx(classes.root, {
        [ classes.active ]: active,
      }) }
    >
      { completed ? <Check className={ classes.completed } /> : <div className={ classes.circle } /> }
    </div>
  );
};

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

// const ColorlibConnector = withStyles({
//   alternativeLabel: {
//     top: 22,
//   },
//   active: {
//     '& $line': {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   completed: {
//     '& $line': {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   line: {
//     height: 3,
//     border: 0,
//     backgroundColor: '#eaeaf0',
//     borderRadius: 1,
//   },
// })(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

const ColorlibStepIcon = (props) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed, handleNext } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={ clsx(classes.root, {
        [ classes.active ]: active,
        [ classes.completed ]: completed,
      }) }
      onClick={ handleNext }
    >
      { icons[ String(props.icon) ] }
    </div>
  );
};

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,

  handleNext: PropTypes.func
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // textAlign: 'center'
    margin: '10px 0 140px',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const getSteps = () => {
  return [ 'Điều khoản và chính sách đặt phòng', 'Kiển tra thông tin khách hàng', 'Kiểm tra thông tin phòng đặt' ];
};

const CustomizedSteppers = () => {

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (<Rules />);
      case 1:
        return (<CustomerInfo />);
      case 2:
        return (<RoomInfo />);
      default:
        return 'Unknown step';
    }
  };
  const classes = useStyles();
  const [ activeStep, setActiveStep ] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleClick = (index) => {
    setActiveStep(index);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={ classes.root }>
      <div className="flex justify-center">
        <Stepper alternativeLabel activeStep={ activeStep }>
          { steps.map((label, index) => (
            <Step key={ index }>
              <StepLabel onClick={ () => handleClick(index) } className='cursor-pointer'>{ label }</StepLabel>
            </Step>
          )) }
        </Stepper>
      </div>
      {/* <Stepper alternativeLabel activeStep={ activeStep } connector={ <QontoConnector /> }>
        { steps.map((label) => (
          <Step key={ label }>
            <StepLabel StepIconComponent={ QontoStepIcon } onClick={ handleNext }>{ label }</StepLabel>
          </Step>
        )) }
      </Stepper> */}
      {/* <Stepper alternativeLabel activeStep={ activeStep } connector={ <ColorlibConnector /> }>
        { steps.map((label) => (
          <Step key={ label }>
            <StepLabel StepIconComponent={ ColorlibStepIcon } onClick={ handleNext } className="cursor-pointer">{ label }</StepLabel>
          </Step>
        )) }
      </Stepper> */}
      <div className="flex justify-end">
        { activeStep === steps.length ?
          (<div>
            <div>
              {
                'Tiến hành đăng ký'
              }
            </div>
            <Button onClick={ handleReset } className={ classes.button }>
              Đặt lại
            </Button>
          </div>
          ) : (<div className="flex justify-end">
            <div>
              { getStepContent(activeStep) }
              <div>
                <Button disabled={ activeStep === 0 } onClick={ handleBack } className={ classes.button }>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={ handleNext }
                  className={ classes.button }
                >
                  { activeStep === steps.length - 1 ? 'Hoàn thành thông tin' : 'Tiếp' }
                </Button>
              </div>
            </div>
          </div>) }
      </div>
    </div>
  );
};
export default CustomizedSteppers;
