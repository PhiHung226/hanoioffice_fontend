const getYearMonthDay = (date, type = 'yyyy-MM-dd') => {
// type = yyyy-MM-dd // type = dd-MM-yyyy
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

const totalNumberDate = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const offset = end.getTime() - start.getTime();
  return Math.round(offset / 1000 / 60 / 60 / 24) + 1;
};
const formatCurrency = (number) => {
  return number.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
};
const toThousandFilter = (num, precision) => {
  precision = [undefined, null].includes(precision) ? 3 : precision;
  let roundLevel = 1;
  while (precision > 0) {
    precision--;
    roundLevel *= 10;
  }
  const temp = (Math.round((+num || 0) * roundLevel) / roundLevel).toString().replace('.', ',');
  return temp.replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, '.'));
};
export {
  getYearMonthDay, totalNumberDate, formatCurrency, toThousandFilter
};