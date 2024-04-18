import { TodoItemType } from '../types';

export default function getDiaryItem(date : TodoItemType[], id?: string) : TodoItemType | null  {
  if(!id){
    return null;
  }
  return  date.filter((item) => item.id === Number(id))[0]; 
}