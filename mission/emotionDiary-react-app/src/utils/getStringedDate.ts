/* eslint-disable prefer-const */
function getStringedDate(targetDate : Date){
  const year = targetDate.getFullYear(); 
  let month = String(targetDate.getMonth() + 1); 
  let date = String(targetDate.getDate()); 

  if(Number(month) < 10 ){
    month = `0${month}`; 
  }

  if(Number(date) < 10 ){
    date = `0${date}`; 
  }

  return `${year}-${month}-${date}`
}

export default getStringedDate;