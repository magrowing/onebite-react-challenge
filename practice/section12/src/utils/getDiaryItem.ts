import { TodoItemType } from '../types';

export default function getDiaryItem(date : TodoItemType[], id?: string) : TodoItemType | null  {
  if(!id){
    return null;
  }

  // find 메소드를 사용하면 배열의 요소를 찾아 반환해준다!
  //return  date.filter((item) => item.id === Number(id))[0]; 
  return  date.find((item) => item.id === Number(id)); 
}