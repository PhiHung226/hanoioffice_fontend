import React from 'react';

import SearchBar from '../Filters/SearchBar';

const Filters = () => {
  return (
    <>
      <div className="rounded w-full bg-gray-100 my-2">
        <div className="m-2">
          <SearchBar />
        </div>
      </div>
    </>
  );
};
export default Filters;