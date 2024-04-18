/* eslint-disable prefer-const */
const getStringedDate = (targetDate: Date) => {
  // 날짜  -> yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = String(targetDate.getMonth() + 1);
  let date = String(targetDate.getDate());

  if (Number(month) < 10) {
    month = `0${month}`;
  }

  if (Number(date) < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

export default getStringedDate;