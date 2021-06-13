import React, { useEffect } from 'react';

// import NewLogo from '../../assets/images/new_logo_2.png';
import LayoutError from '../../layouts/error';

const Error404 = () => {
  useEffect(() => {
    document.title = 'Trang không tồn tại';
  }, []);
  return (
    <>
      <LayoutError
        logo={ null }
        title='Lỗi! Trang không tồn tại.'
        subTitle={ 'Quay lại' }
        nameError={ '404' }
      >
        <h1 style={ { fontSize: 160 } }>404</h1>
      </LayoutError>
    </>
  );
};
export default Error404;