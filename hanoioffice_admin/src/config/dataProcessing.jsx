
const dataProcesing = (data, page, limit, filter, filterArray) => {
  const returnFilter = data.filter((item)=> {
    return data.id === filter[0].value && data.type === filter[1].value;
  });
  const returnArray = [];
  for(let i = 0; i < returnFilter.length; i++ ) {
    for (let j = 0; j < filterArray.value.length; j++ ) {
      if(returnFilter[i].branch === filterArray.value[j]) {
        returnArray.push(returnFilter[i])
      }
    }
  }
  const startLimit = (page - 1)*limit;
  const endLimit = page*limit
  return returnArray.slice(startLimit, endLimit);
};

export { dataProcesing };