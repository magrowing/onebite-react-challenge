import { fireEvent, render, screen } from '@testing-library/react';

import { TodoItemType } from '../types';

import ListItem from './ListItem';

const mockData: TodoItemType[] = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
];

describe('ListItem', () => {
  const onDelete = jest.fn();
  const onUpdate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderListItem() {
    render(
      <ul>
        <ListItem todo={mockData[0]} onDelete={onDelete} onUpdate={onUpdate} />
      </ul>
    );
  }

  it('render ListItem', () => {
    renderListItem();

    screen.getByText(/React/);
    screen.getByText(/삭제/);
  });

  // it('calls onUpdateFn is checked', () => {
  //   renderListItem();

  //   const checkbox = screen.getByRole('checkbox', { name: 'checkbox' });
  //   expect(checkbox).not.toBeChecked();
  //   fireEvent.change(checkbox);
  //   expect(checkbox).toBeChecked();
  // });

  it('calls onDeleteFn', () => {
    renderListItem();

    fireEvent.click(screen.getByText(/삭제/));
    expect(onDelete).toHaveBeenCalledWith(0);
  });
});
