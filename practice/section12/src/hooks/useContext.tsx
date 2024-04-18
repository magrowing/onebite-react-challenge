import { useContext } from 'react';

import { DiaryDispatchContext, DiaryStateContext } from '../App';

export function useDiaryStateContext() {
  const value = useContext(DiaryStateContext);

  if (!value) {
    throw new Error('cannot find useTodoDispatch');
  }

  return value;
}

export function useDiaryDispatchContext() {
  const dispatch = useContext(DiaryDispatchContext);

  if (!dispatch) {
    throw new Error('cannot find useTodoDispatch');
  }

  return dispatch;
}
