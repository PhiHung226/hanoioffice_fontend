import React from 'react';

import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import IconCamera from '../../assets/image/iconCamera.png';

const ImageUpdate = ({ src = null, alt }) => {
  return (
    <>
      <div>
        <div className="border-dashed mt-4 mx-24 h-3/4">
          <img src={ src !== null ? src : IconCamera } alt={ alt } height="100%" align="center"
            className={ src !== null ? '' : 'opacity-25' } />
        </div>
        {
          src !== null ?
            <div className="mx-24 mt-2">
              <Button color="primary" variant="outlined" className="w-full">Sửa hình ảnh</Button>
            </div> :
            <div className="mx-24 mt-2">
              <Button color="primary" variant="outlined" className="w-full">Thêm hình ảnh</Button>
            </div>
        }
      </div>
    </>
  );
};
ImageUpdate.propTypes = {
  filterParams: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string
};
export default ImageUpdate;