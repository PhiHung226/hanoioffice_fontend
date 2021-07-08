import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),

  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));
const TextPassword = ({ onChange, value, error }) => {

  const classes = useStyles();
  const [ values, setValues ] = React.useState({
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="-ml-2">
        <FormControl className={ clsx(classes.margin, classes.textField) }>
          <InputLabel htmlFor="standard-adornment-password" ><span className={ error === null ? '' : 'text-red-500' }>Mật khẩu</span></InputLabel>
          <Input
            id="standard-adornment-password"
            type={ values.showPassword ? 'text' : 'password' }
            value={ value }
            onChange={ onChange }
            className="mt-0"
            error={ error !== null }
            endAdornment={ <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={ handleClickShowPassword }
                onMouseDown={ handleMouseDownPassword }
              >
                { values.showPassword ? <Visibility /> : <VisibilityOff /> }
              </IconButton>
            </InputAdornment> }
          />
          <FormHelperText id="standard-weight-helper-text"><span className={ error === null ? '' : 'text-red-500' }>{ error }</span></FormHelperText>
        </FormControl>
      </div>
    </>
  );
};
TextPassword.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
export default TextPassword;