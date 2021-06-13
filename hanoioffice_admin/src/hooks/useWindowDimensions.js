import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  return {
    screenWidth,
    screenHeight
  };
};

const useWindowDimensions = () => {
  const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
export default useWindowDimensions;
