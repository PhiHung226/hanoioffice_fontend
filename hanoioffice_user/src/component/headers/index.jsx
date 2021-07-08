import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  ArrowRightAlt, Add, MailOutline,
  Phone, YouTube, Twitter, Facebook,
  Instagram, Pinterest, AccountCircle
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
                  <AccountCircle className="text-gray-500 hover:text-blue-500 ml-16 mr-4" />
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