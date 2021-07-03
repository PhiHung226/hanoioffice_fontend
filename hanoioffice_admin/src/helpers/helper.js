
const getYearMonthDay = (date, type = 'yyyy-MM-dd') => {
  // type = yyyy-MM-dd
  // type = dd-MM-yyyy
  const d = new Date(date);
  const day = `0${d.getDate()}`.slice(-2);
  const month = `0${d.getMonth() + 1}`.slice(-2);
  const year = d.getFullYear();
  if (type === 'dd-MM-yyyy') {
    return day + '-' + month + '-' + year;
  } else {
    return year + '-' + month + '-' + day;
  }
};

export {
  getYearMonthDay
};