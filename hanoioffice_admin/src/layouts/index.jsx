import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import useWindowDimensions from '../hooks/useWindowDimensions';
import { showLeftSideState } from '../store/atoms/header/header';

const Layout = (props) => {
  const { screenWidth } = useWindowDimensions();
  const showLeft = useRecoilValue(showLeftSideState);

  useEffect(() => {
    document.title = props.title ? 'HaNoiOffice - ' + props.title : 'HaNoiOffice';
  }, [ props.children ]);

  return (
    <div className="w-full responsive-p-4 main-container bg-white">
      <div className="md:mr-4 w-full flex">
        {
          props.nav ?
            <div className={ `w-main-left mr-4 ${screenWidth < 960 ? 'hidden' : showLeft ? 'block' : 'hidden'}` }>
              { props.nav }
            </div> :
            null
        }
        <div className={ `w-full w-main-right border-l-2 ${showLeft ? 'md:w-main-right' : 'pr-7'}` }>{ props.children }</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  nav: PropTypes.node,
  title: PropTypes.string
};

export default Layout;