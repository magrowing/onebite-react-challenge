import { DiaryItemType } from '../types';

function getSortedDate(data :DiaryItemType[], sortType :string){

  return data.toSorted((a, b) => {
    if(sortType === 'latest'){
      return b.createdDate - a.createdDate
    }else {
      return a.createdDate - b.createdDate
    }
  })

}

export default getSortedDate;