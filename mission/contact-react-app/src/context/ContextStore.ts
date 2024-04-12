import { createContext, useContext } from 'react';

import { ContactItemType, DispatchType } from '../types';


/** Context 생성*/
export const contactStateContext = createContext<ContactItemType[] | null>(null);
export const contactDispatchContext = createContext<DispatchType | null>(null);


/** null 타입지정과 초기값으로 인해 별도로 hooks 생성 및 value 조건처리 후 사용 */
export const useContactState = () => {
  const value = useContext(contactStateContext); 
  if(!value){
    throw new Error('cannot find useContactState');
  }
  return value;
}

export const useContactDispatch = () => {
  const value = useContext(contactDispatchContext); 
  if(!value){
    throw new Error('cannot find useContactDispatch');
  }
  return value;
}