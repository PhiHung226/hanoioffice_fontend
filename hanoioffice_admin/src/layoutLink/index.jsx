import React, { useEffect } from 'react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const LayoutNoFilter = ({ title,
  listLink = [],
  children }) => {
  useEffect(() => {
    document.title = title ? 'HaNoiOffice - ' + title : 'HaNoiOffice';
  }, [ children ]);
  const indexLink = listLink.length - 1;
  const arrNew = [];
  for (let i = 0; i < indexLink; i++) {
    arrNew.push(listLink[ i ]);
  }
  return (
    <div className="w-full responsive-p-4 main-container">
      <div className="md:mx-4 w-full flex md:pr-8">
        <div className="w-full">
          <div className="w-full mb-2 ">
            <Breadcrumbs aria-label="breadcrumb">
              { indexLink > 0 &&
                arrNew.map((item, index) => {
                  return (
                    <NavLink color="inherit" to="/" className="cursor-pointer hover:text-black" key={ index }>
                      { item }
                    </NavLink>
                  );
                })
              }
              <Typography color="textPrimary">{ listLink[ indexLink ] }</Typography>
            </Breadcrumbs>
          </div>
          { children }
        </div>
      </div>
    </div>
  );
};

LayoutNoFilter.propTypes = {
  title: PropTypes.string,
  listLink: PropTypes.array
};
export default LayoutNoFilter;
