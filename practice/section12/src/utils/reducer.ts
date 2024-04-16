import { ActionType, TodoItemType } from '../types';

export function reducer(state: TodoItemType[], action: ActionType): TodoItemType[] {
  switch (action.type) {
    case 'CREATE': {
      return action.data ? [action.data, ...state] : state;
    }
    case 'UPDATE': {
      return state.map((item) =>
        String(item.id) === String(action.data ? action.data.id : item.id)
          ? action.data
            ? action.data
            : item
          : item
      );
    }
    case 'DELETE': {
      return state.filter((item) => String(item.id) !== String(action.id));
    }
    default:
      return state;
  }
}