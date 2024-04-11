/* eslint-disable @typescript-eslint/no-unused-vars */
import { useReducer, useRef, useCallback } from 'react';

import './App.css';

import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';

import { ContactItemType } from './types';

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

type ActionType = {
  type: string;
  data?: ContactItemType;
  targetId?: number;
};

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

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contactList={contactList} OnDelete={OnDelete} />
      </section>
    </div>
  );
}

export default App;
