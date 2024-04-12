import { createContext, useContext } from 'react';

import { DispatchContextType, TodoItemType } from '../types';


export const TodoStateContext = createContext<TodoItemType[] | null>(null);
export const TodoDispatchContext =
  createContext<DispatchContextType | null>(null);



export const useTodoState = () => {
  const value = useContext(TodoStateContext)

  if (!value) {
    throw new Error('cannot find useTodoState');
  }

  return value
}


export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext)

  if (!value) {
    throw new Error('cannot find useTodoDispatch');
  }

  return value
}