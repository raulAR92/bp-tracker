const getOnlyDate = (date) => {
  let newDate = new Date(date.getTime());
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

const areFromSameDay = (day, date) => {
  const dateDay = getOnlyDate(day);
  const newDate = getOnlyDate(date);
  return dateDay.valueOf() === newDate.valueOf();
};

const formatDate = (datetime) => {
  if (datetime) {
    const dd = datetime.getDate();
    const mm = datetime.getMonth();
    const yyyy = datetime.getFullYear();
    return `${dd}/${mm + 1}/${yyyy}`;
  }
  return "NA";
};

const formatDateTime = (datetime) => {
  if (datetime) {
    const dd = datetime.getDate();
    const mm = datetime.getMonth();
    const yyyy = datetime.getFullYear();
    const hours = datetime.getHours();
    const minutes = datetime.getMinutes();
    const yy = yyyy - 2000;
    return `${dd}/${mm + 1}/${yy} ${hours}:${minutes}`;
  }
  return "NA";
};

export { getOnlyDate, areFromSameDay, formatDate, formatDateTime };
