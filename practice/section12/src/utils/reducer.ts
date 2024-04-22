import { ActionType, TodoItemType } from '../types';

export function reducer(state: TodoItemType[], action: ActionType): TodoItemType[] {
  let nextState; 
  switch (action.type) {
    case 'INIT': {
      return  action.initData ?? []
    }
    case 'CREATE': {
      nextState =  action.data ? [action.data, ...state] : state;
      break;
    }
    case 'UPDATE': {
      nextState =  state.map((item) =>
        String(item.id) === String(action.data ? action.data.id : item.id)
          ? action.data
            ? action.data
            : item
          : item
      );
      break;
    }
    case 'DELETE': {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break
    }
    default:
      return state;
  }
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}