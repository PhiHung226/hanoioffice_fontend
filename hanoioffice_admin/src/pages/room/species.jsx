import React from 'react';

import Species from '../../components/room/species';
import LayoutLink from '../../layoutLink';

const listLink = [ 'Loại phòng' ];
const Room = () => {
  return (
    <>
      <LayoutLink title="Loại phòng" listLink={ listLink }>
        <Species />
      </LayoutLink>
    </>
  );
};
export default Room;
