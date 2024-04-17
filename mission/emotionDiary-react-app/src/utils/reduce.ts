import { ActionType, DiaryItemType, nullDiaryItem } from '../types';

export const reduce = (
  state: DiaryItemType[],
  action: ActionType
): DiaryItemType[] => {
  switch (action.type) {
    case 'CREATE': {
      return [action.date ?? nullDiaryItem, ...state];
    }
    case 'UPDATE': {
      return state.filter((item) => item.id !== action.id);
    }
    case 'DELETE': {
      return state.filter((item) =>
        item.id === action.id ? action.date : item
      );
    }
    default:
      return state;
  }
};