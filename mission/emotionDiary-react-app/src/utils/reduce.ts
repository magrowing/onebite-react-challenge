import { ActionType, DiaryItemType, nullDiaryItem } from '../types';

export const reduce = (
  state: DiaryItemType[],
  action: ActionType
): DiaryItemType[] => {
  switch (action.type) {
    case 'CREATE': {
      return [action.date ?? nullDiaryItem, ...state];
    }
    case 'DELETE': {
      return state.filter((item) => item.id !== action.id);
    }
    case 'UPDATE': {
      return state.map((item) => {
        if(action.date){
          return item.id === action.date.id ? action.date : item
        }else{
          return item;
        }
      }
      );
    }
    default:
      return state;
  }
};