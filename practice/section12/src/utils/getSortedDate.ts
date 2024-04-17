import { TodoItemType } from '../types';

const getSortedDate = (data: TodoItemType[], sortType: string) : TodoItemType[] => {
  return data.toSorted((a,b) => {
    if (sortType == 'latest') {
      return Number(b.createdDate) - Number(a.createdDate);
    } else {
      return Number(a.createdDate) - Number(b.createdDate);
    }
  });
};

export default getSortedDate;