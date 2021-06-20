import React from 'react';

import RoomEmpty from '../../components/room/roomEmpty';
import Breadcrumbs from '../../components/room/roomEmpty/Breadcrumbs';
import LayoutLink from '../../layoutLink';

const Room = () => {
  return (
    <>
      <LayoutLink title="Phòng trống" titleLink={ Breadcrumbs }>
        <RoomEmpty />
      </LayoutLink>
    </>
  );
};
export default Room;
