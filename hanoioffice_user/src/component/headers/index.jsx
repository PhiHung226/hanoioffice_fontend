import React,{Fragment} from 'react';

import {Menu, Transition} from '@headlessui/react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  ArrowRightAlt, Add, MailOutline,
  Phone, YouTube, Twitter, Facebook,
  Instagram, Pinterest, AccountCircleOutlined
} from '@material-ui/icons';
// import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

import { router } from '../../router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function classNames (...classes) {
  return classes.filter(Boolean).join(' ');
}
const Hearder = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={ classes.root }>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <Typography variant="h6" className={ classes.title }>
                <div className="flex">
                  <div className="cursor-pointer">
                    <img className="w-64 h-10 mx-auto " src="https://hanoioffice.vn/wp-content/uploads/2021/02/logo-black.png" alt="" />
                  </div>
                  <div className="cursor-pointer">
                    <span ><Phone className="mb-1 mr-3" /></span>
                    <span className="text-base">085 339 4567 - 0904 388 909</span>
                  </div>
                  <div className="px-4 cursor-pointer">
                    <span ><MailOutline className="mb-1 mr-3" /></span>
                    <span className="text-base">contact@hanoioffice.vn</span>
                  </div>
                  <span className="text-red-500 cursor-pointer">Hanoi Office ứng phó với Covid-19</span>
                </div>
              </Typography>
              <Typography variant="h6" >
                <div className="pr-8">
                  <span className="text-base mx-2 cursor-pointer text-gray-500 hover:text-blue-500 mx-2">English</span>
                  <YouTube className="text-gray-500 hover:text-blue-500 mx-2" />
                  <Twitter className="text-gray-500 hover:text-blue-500 mx-2" />
                  <Pinterest className="text-gray-500 hover:text-blue-500 mx-2" />
                  <Facebook className="text-gray-500 hover:text-blue-500 mx-2" />
                  <Instagram className="text-gray-500 hover:text-blue-500 mx-2" />
                  <Menu as="div" className="relative inline-block text-left ml-16">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className=" justify-center w-full rounded-md border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            <AccountCircleOutlined className="text-gray-500 hover:text-blue-500 ml-24 mr-4" />
                          </Menu.Button>
                        </div>

                        <Transition
                          show={ open }
                          as={ Fragment }
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                    to="/login"
                                    className={ classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    ) }
                                  >
                                        Đăng nhập
                                  </NavLink>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                    to="/register"
                                    className={ classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    ) }
                                  >
                                        Đăng ký
                                  </NavLink>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                    to="/changepassword"
                                    className={ classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    ) }
                                  >
                                        Đổi mật khẩu
                                  </NavLink>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <NavLink
                                    to="/profile"
                                    className={ classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                    ) }
                                  >
                                        Thông tin cá nhân
                                  </NavLink>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className={ classes.root }>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={ classes.title } >
                <ul className="flex pl-8">
                  {
                    router.map((item, index) => {
                      return (
                        <li key={ index } className="cursor-pointer hover:text-yellow-500 px-4 text-sm dropdown uppercase">
                          { item.title }
                          {
                            item.subMenu.length > 0 &&
                            <ul className="dropdown-content">
                              {
                                item.subMenu.map((i, x) => {
                                  return (
                                    <NavLink key={ x } to={ i.subItem?.length > 0 ? '#' : i.subPath || '#' } >
                                      <li className="py-2 text-white hover:text-yellow-500 text-sm hover-item dropdown-item w-full block">
                                        <span className="hover-Icon"><ArrowRightAlt /></span>
                                        <span>{ i.subTitle }</span>
                                        {/* {
                                          i.subItem?.length > 0 &&
                                          <ul className="dropdown-content-item">
                                            {
                                              i.subItem.map((d, y) => {
                                                return (
                                                  // <NavLink key={ y } to={ i.subPath || '#' } >
                                                  <li key={ y } className="py-2 text-white hover:text-yellow-500 text-sm hover-item-item">
                                                    <span className="hover-Icon-item"><ArrowRightAlt /></span>
                                                    <span>{ d.itemTitle }</span>
                                                  </li>
                                                  // </NavLink>
                                                );
                                              })
                                            }
                                          </ul>
                                        } */}
                                      </li>
                                    </NavLink>
                                  );
                                })
                              }
                            </ul>
                          }
                        </li>
                      );
                    })
                  }
                </ul>
              </Typography>
              <Button variant="outlined" color="inherit" startIcon={ <Add /> }>Nhân tư vấn</Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </>
  );
};
export default Hearder;