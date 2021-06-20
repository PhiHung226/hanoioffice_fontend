import React from 'react';

import RoomList from '../../components/room/RoomList';
import Breadcrumbs from '../../components/room/RoomList/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Room = () => {
  return (
    <>
      <LayoutLink title="Danh sách phòng" titleLink={ Breadcrumbs }>
        <RoomList />
      </LayoutLink>
    </>
  );
};
export default Room;
