import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// import NewLogo from '../../assets/images/new_logo.jpg';

const LayoutError = ({ title, subTitle, children }) => {
  const [ header, setHeader ] = useState(0);
  useEffect(() => {
    setHeader(window.innerHeight - document.getElementById('header').offsetHeight);
  }, []);
  useEffect(() => {
    document.title = 'Lỗi!';
  }, []);
  return (
    <div className=" w-full flex items-center justify-center bg-white" style={ { height: `${header}px` } }>
      <div className="px-10 py-20 flex flex-col items-center">
        <img
          src={ null }
          alt=""
          style={ { height: 60, width: 187 } }
        />
        { children }
        <h2 className="uppercase text-2xl my-4 font-thin">{ title }</h2>
        <p className="text-xl font-thin">
          { subTitle }
          <NavLink to="/">
            <span className="text-cyan hover:text-blue-400"> Trang chủ</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

LayoutError.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default LayoutError;