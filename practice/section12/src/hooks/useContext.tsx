import { useContext } from 'react';

import { DiaryDispatchContext } from '../App';

export function useDiaryDispatchContext() {
  const dispatch = useContext(DiaryDispatchContext);

  if (!dispatch) {
    throw new Error('cannot find useTodoDispatch');
  }

  return dispatch;
}
