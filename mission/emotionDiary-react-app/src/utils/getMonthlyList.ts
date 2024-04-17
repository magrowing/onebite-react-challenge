import { DiaryItemType } from '../types';

function getMonthlyList (diaryList :DiaryItemType[], pivotDate : Date){
  const beginTime = new Date(
    pivotDate.getFullYear(), 
    pivotDate.getMonth(), 
    1, 
    0,
    0,
    0).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(), 
    pivotDate.getMonth() + 1, 
    0, 
    23,
    59,
    59).getTime();
  
  return diaryList.filter((item) => 
    beginTime <=item.createdDate && item.createdDate <= endTime
  );
}

export default getMonthlyList;