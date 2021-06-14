import React from 'react';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const handleClick = (event) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const ActiveLastBreadcrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={ handleClick }>
        HaNoiOffice
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={ handleClick }>
        Nhân viên
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={ handleClick }
        aria-current="page"
      >
        Danh sách nhân viên
      </Link>
    </Breadcrumbs>
  );
};
export default ActiveLastBreadcrumb;