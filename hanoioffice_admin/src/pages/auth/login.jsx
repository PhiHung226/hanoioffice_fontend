import React, { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { useForm } from 'react-hook-form';
import {
  useMutation,
  useQuery
} from 'react-query';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

import ButtonBase from '../../components/base/button/ButtonBase';
import BaseInput from '../../components/base/input/BaseInput';
import SelectInput from '../../components/base/input/SelectInput';
import InputLabel from '../../components/common/InputLabel';
// import ToastMessage from '../../components/common/toast/ToastMessage';
import { setCookie } from '../../config/cookies';
import {
  ACCESS_TOKEN,
  AUTH_USER_INFO_KEY,
  CURRENT_BRANCH,
  USER_INFO
} from '../../constants/queryKey';
import { getAccount, getUserInfo } from '../../service/auth/login';
import { authUserInfoState } from '../../store/atoms/auth/user';
// import RoleLogin from './branch';
const Transitions = (props, ref) => {
  return <Slide direction="up" ref={ ref } { ...props } />;
};
const Transition = React.forwardRef(Transitions);

const Login = () => {
  useEffect(() => {
    document.title = 'Đăng nhập';
    localStorage.removeItem(CURRENT_BRANCH);
  }, []);
  const methods = useForm();
  const { handleSubmit, register, formState: { errors }, } = methods;
  const [ open, setOpen ] = useState('branch');
  const [ role, setRole ] = useState(2);
  console.log(role);

  const setUserInfo = useSetRecoilState(authUserInfoState);
  const [ dialogLogin, setDialogLogin ] = useState(true);
  const location = useLocation();
  const history = useHistory();
  const loginMutation = useMutation(param => getAccount(param));
  const [ isFetchUser, setIsFetchUser ] = React.useState(false);
  const { data } = useQuery(AUTH_USER_INFO_KEY, () => getUserInfo(), { suspense: true, enabled: isFetchUser });

  const { from } = location.state || { from: { pathname: '/' } };
  const handleClose = () => {
  };
  const onSubmit = (value) => {
    const makeValue = {
      ...value,
    };
    loginMutation.mutate(makeValue, {
      onSuccess: async ({ meta: { message, status_code }, data }) => {
        if (status_code === 1) {
          return toast.error(message);
        } else {
          await setCookie(ACCESS_TOKEN, data?.token, data?.expires_in);// lưu trữ token trên cookie
          await setCookie(USER_INFO, data ? data.user.id : null, data?.expires_in);// lưu trữ thông tin người dùng trên cookie
          // await setCookie(CURRENT_BRANCH, data ? data.user.branch : null, data?.expires_in);// lưu trữ chi nhánh người dùng trên cookie
          await setUserInfo(data?.user); // lưu trữ thông tin người dùng
          await setIsFetchUser(true);
          setDialogLogin(false);

          toast.success(message);
        }
        // setOpen(false);
      },
      onError: (error) => {
        toast.error('Đã xảy ra lỗi khi đăng nhập! ' + error);
      }
    });
  };
  useEffect(() => {
    if (data !== undefined) {
      // if (!dialogLogin) {
      history.replace(from);// quay lại component Routers.jsx
      // }
    }
  }, [ data ]);

  const onHandleClick = (roles) => {
    setRole(roles);
    setOpen('login');
  };
  const dataArr = [ { id: 1, name: 'Chi nhánh Hà Đông' }, { id: 2, name: 'Chi nhánh Thanh Xuân' } ];

  return (
    <div>
      <Dialog fullScreen open={ dialogLogin } onClose={ handleClose } TransitionComponent={ Transition }>
        {/* <div className="bg-blue-200"> */ }
        { open === 'branch' &&
          <div className="flex px-28 py-5 text-xl font-extrabold bg-blue-200">
            <div>
              <img src="" alt="" />
            </div>
            <div onClick={ () => onHandleClick(0) } className="cursor-pointer hover:text-gray-600 transition delay-100">Admin</div>
            <div onClick={ () => onHandleClick(1) } className="cursor-pointer px-12 hover:text-gray-600 transition delay-100">Sale</div>
            <div onClick={ () => onHandleClick(2) } className="cursor-pointer hover:text-gray-600 transition delay-100">Lễ tân</div>
          </div>
        }
        { open === 'login' &&
          <div className="h-full flex justify-center flex-wrap content-center">
            <div className="min-h-72 w-96 flex-wrap content-center shadow-2xl">
              <div className="font-bold text-sm mt-4 flex justify-center">CS_OFFICE</div>
              <div className="flex justify-center font-bold text-xl text-blue-800">ĐĂNG NHẬP</div>
              <form onSubmit={ handleSubmit(onSubmit) } className="p-5 ">
                <InputLabel label={ 'Chi nhánh :' }>
                  <SelectInput title="Chi nhánh"
                    dataArr={ dataArr } className="mr-2 -ml-2" classNameItem="w-full" />
                </InputLabel>
                <InputLabel label={ 'Tài khoản :' }>
                  <BaseInput
                    placeholder={ 'Nhập tài khoản' }
                    { ...register('user', { required: true }) }
                  />
                  <p className='text-red-500 mt-1'>{ errors.user && 'Tài khoản không được bỏ trống!' }</p>
                </InputLabel>
                <InputLabel label={ 'Mật khẩu :' } >
                  <BaseInput
                    name="pass"
                    type="password"
                    placeholder={ 'Nhập mật khẩu' }
                    { ...register('pass', { required: true }) }
                  />
                  <p className='text-red-500 mt-1'>{ errors.pass && 'Mật khẩu không được bỏ trống!' }</p>
                </InputLabel>
                <ButtonBase title="Đăng nhập" type="submit" className="flex justify-center" />
              </form>
            </div>
          </div>
        }
        {/* </div> */ }
      </Dialog>
    </div>
  );
};
export default Login;