import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

const LayoutNoFilter = (props) => {
  // const tenant = localStorage.getItem('tenant');
  useEffect(() => {
    document.title = props.title ? 'CS_Office - ' + props.title : 'CS_Office';
  }, [ props.children ]);
  return (
    <div className="w-full responsive-p-4 main-container">
      <div className="md:mx-4 w-full flex md:pr-8">
        <div className="w-full custom-layoutNotFilter">
          <div className="w-full">
            {
              props.titleLink ?
                <div className="w-full">
                  { props.titleLink }
                </div> :
                null
            }
          </div>
          { props.children }
        </div>
      </div>
    </div>
  );
};

LayoutNoFilter.propTypes = {
  title: PropTypes.string,
  titleLink: PropTypes.node
};
export default LayoutNoFilter;
