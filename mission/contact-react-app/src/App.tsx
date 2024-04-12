/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useReducer, useRef, useCallback, useMemo } from 'react';

import './App.css';

import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';

import { ActionType, ContactItemType } from './types';
import {
  ContactDispatchContext,
  ContactStateContext,
} from './context/ContextStore';

const mockContactList = [
  {
    id: 0,
    name: '홍길동',
    contact: 'hong123@gmail.com',
  },
  {
    id: 1,
    name: '김철수',
    contact: 'soo123@gmail.com',
  },
  {
    id: 2,
    name: '김영희',
    contact: 'hee123@gmail.com',
  },
];

function reducer(
  state: ContactItemType[],
  action: ActionType
): ContactItemType[] {
  switch (action.type) {
    case 'CREATE':
      return action.data ? [action.data, ...state] : state;
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contactList, dispatch] = useReducer(reducer, mockContactList);
  const idRef = useRef(3);

  const onCreate = useCallback(
    ({ name, contact }: { name: string; contact: string }) => {
      dispatch({
        type: 'CREATE',
        data: {
          id: idRef.current++,
          name,
          contact,
        },
      });
    },
    []
  );

  const OnDelete = useCallback((targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, OnDelete };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contactList}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
