import React from 'react';

import RoomList from '../../components/room/RoomList';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Danh sách phòng' ];
const Room = () => {
  return (
    <>
      <LayoutLink title="Danh sách phòng" listLink={ listLink }>
        <RoomList />
      </LayoutLink>
    </>
  );
};
export default Room;
