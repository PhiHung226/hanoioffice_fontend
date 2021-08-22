import React from 'react';

import BookList from '../../components/book/bookList';
import LayoutLink from '../../layoutLink';

const listLink = ['Danh sách lịch đặt'];
const Appointment = () => {
  return (
    <>
      <LayoutLink title='Danh sách lịch đặt' listLink={ listLink }>
        <BookList/>
      </LayoutLink>
    </>
  );
};
export default Appointment;