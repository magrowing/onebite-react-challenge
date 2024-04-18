import { createContext, useContext } from 'react';

import { DiaryItemType, DispatchType } from '../types';

export const DiaryStateContext = createContext<DiaryItemType[] | null>(null);
export const DiaryDispatchContext = createContext<DispatchType | null>(null);


export function useDiaryStateContext(){
  const value = useContext(DiaryStateContext);

  if(!value) {
    throw new Error('cannot find state');
  }

  return value;
}

export function useDiaryDispatchContext(){
  const dispatch = useContext(DiaryDispatchContext);

  if(!dispatch) {
    throw new Error("cannot find dispatch");
  }

  return dispatch;
}


