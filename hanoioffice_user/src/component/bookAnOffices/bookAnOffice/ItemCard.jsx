import React from 'react';

import PropTypes from 'prop-types';

const ItemCard = ({ setState }) => {
  // const [ data, setData ] = React.useState(dataItem);
  // console.log(data);

  // React.useEffect(() => {
  //   setData(dataItem);
  // }, [ dataItem ]);

  return (
    <>
      <div className="border cursor-pointer shadow-md hover:text-blue-500 hover:shadow-2xl transition delay-150" onClick={ () => setState('pay') }>
        <div>
          <img src="https://hanoioffice.vn/wp-content/uploads/2020/09/cho-ngoi-lam-viec-n2.jpg" width="100%" alt="" />
        </div>
        <h4 className="text-center font-bold">Phòng 404</h4>
        <p className="text-center text-sm">Phòng làm việc</p>
        <p className="text-center text-sm">Chi nhánh Thanh Xuân</p>
        <p className="text-center text-sm mb-3">Tối đa: 10 người</p>
      </div>
    </>
  );
};
ItemCard.propTypes = {
  dataItem: PropTypes.object,
  setState: PropTypes.func
};
export default ItemCard;