// import React, { useEffect, useState } from 'react';
//
// import PropTypes from 'prop-types';
// // import { useQueryClient } from 'react-query';
// import { useSetRecoilState } from 'recoil';
//
// // import { AUTH_USER_INFO_KEY } from '../../../constants/queryKey';
// import MultipleSelect from '../../../base/input/MultipleSelect';
//
// const CardType = ({ filterParams, dataArr, title }) => {
//   // const queryClient = useQueryClient();
//   // const { data } = queryClient.getQueryData(AUTH_USER_INFO_KEY);
//   const [ branch, setBranch ] = useState([]);
//   const branchSearch = useSetRecoilState(filterParams);
//   // console.log(data);
//
//   useEffect(() => {
//     branchSearch(search => {
//       return {
//         ...search,
//         kindOfRoom: branch
//       };
//     });
//   }, [ branch ]);
//   return (
//     <>
//       <div className="flex w-full">
//         <span className="w-2/5 pt-8">{ title }</span>
//         <MultipleSelect data={ dataArr } personName={ branch } setPersonName={ setBranch } minWidth='90%' oneChip={ true } />
//       </div>
//     </>
//   );
// };
// CardType.propTypes = {
//   filterParams: PropTypes.object,
//   dataArr: PropTypes.array,
//   title: PropTypes.string
// };
// export default CardType;