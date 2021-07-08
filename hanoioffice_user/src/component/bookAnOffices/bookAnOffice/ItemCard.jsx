import React from 'react';

import PropTypes from 'prop-types';

const ItemCard = () => {
  // const [ data, setData ] = React.useState(dataItem);
  // console.log(data);

  // React.useEffect(() => {
  //   setData(dataItem);
  // }, [ dataItem ]);

  return (
    <>
      <div className="border cursor-pointer shadow-md hover:text-blue-500 hover:shadow-2xl transition delay-150">
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/09/cho-ngoi-lam-viec-n2.jpg" width="100%" height="120" alt="" />
        </div>
        <h4 className="text-center font-bold mt-1">Phòng 404</h4>
        <p className="text-center text-sm font-medium mb-3">Chi nhánh Thanh Xuân</p>
      </div>
    </>
  );
};
ItemCard.propTypes = {
  dataItem: PropTypes.object
};
export default ItemCard;