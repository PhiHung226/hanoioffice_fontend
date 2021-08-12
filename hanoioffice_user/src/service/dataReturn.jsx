// import React from 'react';
//
// import {useQuery} from 'react-query';
//
// import {getListBook} from './bookAnOffices/bookAnOffices';
//
// const DataBranch =() => {
//   const {data} = useQuery(
//     ['DATA_BRANCH'],
//     () => getListBook().getList(),
//     {
//       keepPreviousData: true, staleTime: 5000,
//     }
//   );
//   return data;
// };
// export default DataBranch;